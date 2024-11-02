import { useState, useEffect } from "react";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import ContactModal from "./Contactmodal"; // Import the ContactModal component
import FloatingEnvelope from "./FloatingEvenlope"; // Import the FloatingEnvelope component
import { motion } from "framer-motion";
import NataliaLogo from "../assets/NataliaLogo.png";

const NavbarMenu = [
  { id: 1, title: "Home", link: "#home" }, // Adjusted to use hash links
  { id: 2, title: "Educational Web Apps", link: "#educational-web-apps" },
  { id: 3, title: "Educational Videos", link: "#educational-videos" },
  { id: 4, title: "Contacts", link: "#contacts" }, // Will trigger the modal
];


const Navbar = () => {
  const [open, setOpen] = useState(false); // State for the responsive menu
  const [isModalOpen, setIsModalOpen] = useState(false); // State for the modal
  const [showEnvelope, setShowEnvelope] = useState(false); // State to control the floating envelope

  const toggleMenu = () => setOpen(!open); // Toggle menu state
  const openModal = () => {
    setIsModalOpen(true);
    setOpen(false); // Close the responsive menu when opening the modal
  };
  const closeModal = () => setIsModalOpen(false);

  // Handle scroll to show/hide the envelope icon
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Show the envelope when scrolling past 200 pixels
      setShowEnvelope(scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="bg-primary">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="container flex justify-between items-center py-4 md:pt-4"
        >
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <img 
              src={NataliaLogo}
              alt="Logo" 
              className="w-27 h-20"
            />
          </div>

          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-white font-bold text-xl font-poppins">
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="inline-block py-1 px-3 hover:text-white hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold"
                    onClick={menu.id === 4 ? openModal : undefined} // Open modal for Contacts
                  >
                    {menu.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:hidden" onClick={toggleMenu}>
            <MdMenu className="text-4xl" />
          </div>
        </motion.div>
      </nav>

      <ResponsiveMenu open={open} onClose={toggleMenu} openModal={openModal} />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Floating Envelope */}
      {showEnvelope && (
        <FloatingEnvelope onClick={openModal} /> // Trigger the modal on click
      )}
    </>
  );
};

export default Navbar;
