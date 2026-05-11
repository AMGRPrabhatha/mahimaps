import { motion } from 'framer-motion';

const AnimatedSection = ({ children, className, id, delay = 0 }) => {
  return (
    <motion.section
      className={className}
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
