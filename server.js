const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const SMTP_PORT = Number(process.env.SMTP_PORT || 465);
const SMTP_SECURE = String(process.env.SMTP_SECURE || 'true').toLowerCase() === 'true';
const SMTP_FALLBACK_PORT = Number(process.env.SMTP_FALLBACK_PORT || 587);
const SMTP_FALLBACK_SECURE = String(process.env.SMTP_FALLBACK_SECURE || 'false').toLowerCase() === 'true';
const SMTP_REQUIRE_TLS = String(process.env.SMTP_REQUIRE_TLS || 'true').toLowerCase() === 'true';

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS) from the current directory
app.use(express.static(__dirname));

const SMTP_HOST = process.env.SMTP_HOST || 'mail.spacemail.com';
const SMTP_TIMEOUTS = {
    connectionTimeout: Number(process.env.SMTP_CONNECTION_TIMEOUT || 15000),
    greetingTimeout: Number(process.env.SMTP_GREETING_TIMEOUT || 15000),
    socketTimeout: Number(process.env.SMTP_SOCKET_TIMEOUT || 20000)
};

const createTransporter = ({ port, secure, requireTLS }) =>
    nodemailer.createTransport({
        host: SMTP_HOST,
        port,
        secure,
        requireTLS,
        tls: { servername: SMTP_HOST },
        ...SMTP_TIMEOUTS,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

// Primary: SSL 465, Fallback: STARTTLS 587
const primaryTransporter = createTransporter({
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    requireTLS: false
});

const fallbackTransporter = createTransporter({
    port: SMTP_FALLBACK_PORT,
    secure: SMTP_FALLBACK_SECURE,
    requireTLS: SMTP_REQUIRE_TLS
});

const isMailerConfigured = () => !!(process.env.EMAIL_USER && process.env.EMAIL_PASS);

const getMissingMailerConfig = () => {
    const missing = [];
    if (!process.env.EMAIL_USER) missing.push('EMAIL_USER');
    if (!process.env.EMAIL_PASS) missing.push('EMAIL_PASS');
    return missing;
};

const escapeHtml = (value = '') =>
    String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');

const shouldRetryWithFallback = (error) => {
    const message = String(error?.message || '').toLowerCase();
    const code = String(error?.code || '').toUpperCase();
    return (
        code === 'ETIMEDOUT' ||
        code === 'ESOCKET' ||
        code === 'ECONNECTION' ||
        message.includes('timed out') ||
        message.includes('timeout') ||
        message.includes('connection') ||
        message.includes('network')
    );
};

const sendMailWithFallback = async (mailOptions) => {
    try {
        return await primaryTransporter.sendMail(mailOptions);
    } catch (error) {
        if (!shouldRetryWithFallback(error)) {
            throw error;
        }
        console.log('⚠️ Primary SMTP failed. Retrying with fallback SMTP...');
        return await fallbackTransporter.sendMail(mailOptions);
    }
};

// Verify SMTP configuration
if (isMailerConfigured()) {
    primaryTransporter.verify((error) => {
        if (error) {
            console.log('❌ Primary email configuration error:', error.message);
            console.log(`ℹ️ Primary SMTP: ${SMTP_HOST}:${SMTP_PORT} secure=${SMTP_SECURE}`);
            console.log(`ℹ️ Fallback SMTP: ${SMTP_HOST}:${SMTP_FALLBACK_PORT} secure=${SMTP_FALLBACK_SECURE} requireTLS=${SMTP_REQUIRE_TLS}`);
        } else {
            console.log('✅ Primary email server is ready to send messages');
        }
    });
} else {
    console.log(`⚠️ Mailer is not configured. Missing: ${getMissingMailerConfig().join(', ')}`);
}

// POST endpoint for taxi booking
app.post('/api/book-taxi', async (req, res) => {
    try {
        if (!isMailerConfigured()) {
            return res.status(500).json({
                success: false,
                message: `Email service is not configured. Missing: ${getMissingMailerConfig().join(', ')}`
            });
        }

        const {
            name,
            email,
            flight,
            pickupDate,
            pickupTime,
            adults,
            children,
            vehicleType,
            pickupLocation,
            dropoffLocation,
            message
        } = req.body;

        // Validate required fields
        if (!name || !email || !pickupDate || !pickupTime || !adults || !vehicleType || !pickupLocation || !dropoffLocation) {
            return res.status(400).json({
                success: false,
                message: 'Please fill in all required fields'
            });
        }

        // Create email HTML template
        const safe = {
            name: escapeHtml(name),
            email: escapeHtml(email),
            flight: escapeHtml(flight || ''),
            pickupDate: escapeHtml(pickupDate),
            pickupTime: escapeHtml(pickupTime),
            adults: escapeHtml(adults),
            children: escapeHtml(children || '0'),
            vehicleType: escapeHtml(vehicleType),
            pickupLocation: escapeHtml(pickupLocation),
            dropoffLocation: escapeHtml(dropoffLocation),
            message: escapeHtml(message || '')
        };

        const emailHTML = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        line-height: 1.6;
                        color: #333;
                    }
                    .container {
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                        background-color: #f9f9f9;
                    }
                    .header {
                        background: linear-gradient(135deg, #000000 0%, #434343 100%);
                        color: white;
                        padding: 30px;
                        text-align: left;
                        border-radius: 10px 10px 0 0;
                        display: flex;
                        align-items: center;
                    }
                    .content {
                        background: white;
                        padding: 30px;
                        border-radius: 0 0 10px 10px;
                    }
                    .field {
                        margin-bottom: 15px;
                        padding: 10px;
                        background: #f5f7fa;
                        border-radius: 5px;
                    }
                    .label {
                        font-weight: bold;
                        color: #0891b2;
                        display: block;
                        margin-bottom: 5px;
                    }
                    .value {
                        color: #333;
                    }
                    .footer {
                        text-align: center;
                        margin-top: 20px;
                        padding-top: 20px;
                        border-top: 2px solid #e5e7eb;
                        color: #6b7280;
                        font-size: 14px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <img src="cid:mahiLogo" alt="Mahi Maps" style="height: 50px; margin-right: 15px;">
                        <h1 style="margin: 0; font-size: 24px;">New Taxi Booking Request</h1>
                    </div>
                    <div class="content">
                        <h2>Customer Information</h2>
                        <div class="field">
                            <span class="label">Name:</span>
                            <span class="value">${safe.name}</span>
                        </div>
                        <div class="field">
                            <span class="label">Email:</span>
                            <span class="value">${safe.email}</span>
                        </div>
                        ${flight ? `
                        <div class="field">
                            <span class="label">Flight Number:</span>
                            <span class="value">${safe.flight}</span>
                        </div>
                        ` : ''}

                        <h2>Trip Details</h2>
                        <div class="field">
                            <span class="label">Pickup Date:</span>
                            <span class="value">${safe.pickupDate}</span>
                        </div>
                        <div class="field">
                            <span class="label">Pickup Time:</span>
                            <span class="value">${safe.pickupTime}</span>
                        </div>
                        <div class="field">
                            <span class="label">Number of Adults:</span>
                            <span class="value">${safe.adults}</span>
                        </div>
                        <div class="field">
                            <span class="label">Number of Children:</span>
                            <span class="value">${safe.children}</span>
                        </div>
                        <div class="field">
                            <span class="label">Vehicle Type:</span>
                            <span class="value">${safe.vehicleType}</span>
                        </div>

                        <h2>Location Details</h2>
                        <div class="field">
                            <span class="label">Pickup Location:</span>
                            <span class="value">${safe.pickupLocation}</span>
                        </div>
                        <div class="field">
                            <span class="label">Drop-off Location:</span>
                            <span class="value">${safe.dropoffLocation}</span>
                        </div>

                        ${message ? `
                        <h2>Special Requests</h2>
                        <div class="field">
                            <span class="value">${safe.message}</span>
                        </div>
                        ` : ''}

                        <div class="footer">
                            <p>This booking request was submitted via Mahi Maps website</p>
                            <p>Please respond to the customer at: ${safe.email}</p>
                        </div>
                    </div>
                </div>
            </body>
            </html>
        `;

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_FROM || `Mahi Maps <${process.env.EMAIL_USER}>`,
            to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER,
            replyTo: email,
            subject: `New Taxi Booking - ${name} (${pickupDate})`,
            html: emailHTML,
            text: `
New Taxi Booking Request

Customer Information:
- Name: ${name}
- Email: ${email}
${flight ? `- Flight Number: ${flight}` : ''}

Trip Details:
- Pickup Date: ${pickupDate}
- Pickup Time: ${pickupTime}
- Adults: ${adults}
- Children: ${children || '0'}
- Vehicle Type: ${vehicleType}

Locations:
- Pickup: ${pickupLocation}
- Drop-off: ${dropoffLocation}

            ${message ? `Special Requests:\n${message}` : ''}
            `,
            attachments: [
                {
                    filename: 'mahi-logo.png',
                    path: path.join(__dirname, 'assets/images/mahi-logo.png'),
                    cid: 'mahiLogo'
                }
            ]
        };

        // Send email (Must await in Serverless environments like Vercel)
        const info = await sendMailWithFallback(mailOptions);
        console.log('✅ Email sent successfully:', info.messageId);

        // Return success to client
        res.status(200).json({
            success: true,
            message: 'Booking request sent successfully! We will contact you soon.',
            messageId: info.messageId
        });

    } catch (error) {
        console.error('❌ Error sending email:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send booking request. Please try again or contact us directly.',
            error: error.message
        });
    }
});

// POST endpoint for contact form
app.post('/api/contact-request', async (req, res) => {
    try {
        if (!isMailerConfigured()) {
            return res.status(500).json({
                success: false,
                message: `Email service is not configured. Missing: ${getMissingMailerConfig().join(', ')}`
            });
        }

        const { name, phone, email, message } = req.body;

        if (!name || !phone || !email || !message) {
            return res.status(400).json({
                success: false,
                message: 'Please fill in all required fields'
            });
        }

        const safe = {
            name: escapeHtml(name),
            phone: escapeHtml(phone),
            email: escapeHtml(email),
            message: escapeHtml(message)
        };

        const emailHTML = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; }
                    .header { background: linear-gradient(135deg, #000000 0%, #434343 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
                    .content { background: white; padding: 30px; border-radius: 0 0 10px 10px; }
                    .field { margin-bottom: 15px; padding: 10px; background: #f5f7fa; border-radius: 5px; }
                    .label { font-weight: bold; color: #0891b2; display: block; margin-bottom: 5px; }
                    .footer { text-align: center; margin-top: 20px; padding-top: 20px; border-top: 2px solid #e5e7eb; color: #6b7280; font-size: 14px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1 style="margin: 0; font-size: 24px;">New Contact Request</h1>
                    </div>
                    <div class="content">
                        <div class="field"><span class="label">Name:</span> ${safe.name}</div>
                        <div class="field"><span class="label">Phone:</span> ${safe.phone}</div>
                        <div class="field"><span class="label">Email:</span> ${safe.email}</div>
                        <div class="field"><span class="label">Trip Details:</span> ${safe.message}</div>
                        <div class="footer">
                            <p>This contact request was submitted via Mahi Maps website</p>
                            <p>Please reply to: ${safe.email}</p>
                        </div>
                    </div>
                </div>
            </body>
            </html>
        `;

        const mailOptions = {
            from: process.env.EMAIL_FROM || `Mahi Maps <${process.env.EMAIL_USER}>`,
            to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER,
            replyTo: email,
            subject: `New Contact Request - ${name}`,
            html: emailHTML,
            text: `
New Contact Request
- Name: ${name}
- Phone: ${phone}
- Email: ${email}

Trip Details:
${message}
            `
        };

        const info = await sendMailWithFallback(mailOptions);
        console.log('✅ Contact email sent successfully:', info.messageId);

        return res.status(200).json({
            success: true,
            message: 'Message sent successfully! We will contact you soon.',
            messageId: info.messageId
        });
    } catch (error) {
        console.error('❌ Error sending contact email:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to send your message. Please try again or contact us directly.',
            error: error.message
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running' });
});

// Start server (Only if not running in Vercel Serverless environment)
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`🚀 Server is running on http://localhost:${PORT}`);
        console.log(`📧 Email service configured for: ${process.env.EMAIL_USER || 'Not configured'}`);
    });
}

// Export the app for Vercel Serverless Functions
module.exports = app;
