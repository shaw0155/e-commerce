import { motion } from "framer-motion";

export default function Transition({ className: classname, children }) {
  return (
    <motion.div
      className={`box ${classname}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      variants={{
        hidden: { y: "50%", opacity: 0, scale: 1 },
        visible: { y: 0, opacity: 1, scale: 1 },
      }}
    >
      {children}
    </motion.div>
  );
}
