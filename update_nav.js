const fs = require('fs');

const files = ['index.html', 'about.html', 'vehicles.html', 'tours.html', 'gallery.html', 'contact.html'];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    // We only want to remove it from the nav block, but removing any 'nav-link active' is fine for the HTML.
    content = content.replace(/class="nav-link active"/g, 'class="nav-link"');
    fs.writeFileSync(file, content);
    console.log(`Cleaned active class from ${file}`);
});
