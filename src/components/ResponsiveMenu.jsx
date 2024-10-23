import { motion, AnimatePresence } from "framer-motion";

const ResponsiveMenu = ({ open, onClose, openModal }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div 
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl">
            <ul className="flex flex-col items-center gap-10">
              <li>
                <a href="#home" onClick={onClose}>Home</a>
              </li>
              <li>
                <a href="#educational-web-apps" onClick={onClose}>Educational Web Apps</a>
              </li>
              <li>
                <a href="#educational-videos" onClick={onClose}>Educational Videos</a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={() => {
                    onClose();  // Close the menu
                    openModal(); // Open the contact modal
                  }}
                >
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
