import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import NataliaLogo from "../assets/NataliaLogo.png";

const Footer = () => {
  return (
    <section>
      <footer className="bg-primary py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="container flex justify-between items-center"
        >
          {/* Logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
          <a href="#" target=""><img 
              src={NataliaLogo}
              alt="Natalia Logo" 
              className="w-27 h-20" // Adjust these classes as needed for size
            /></a>
          </div>
         
          {/* Social icons section */}
          <div className="text-3xl flex items-center gap-4 mt-6 text-gray-700">
            <a href="https://www.instagram.com/jm_omolon/" target="new"><FaInstagram /></a>
            <a href="https://www.facebook.com/bobchopgaming565" target="new" ><FaFacebookF /></a>
            <a href="https://www.twitter.com/bobchopgaming565" target="new"><FaTwitter /></a>
          </div>
        </motion.div>
        
        {/* Additional content */}
        <div className="text-center text-gray-600 mt-4">
          <p>© Natalia's Fun World. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
