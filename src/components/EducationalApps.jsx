import { motion } from "framer-motion";
import NataliaPhoto2 from '../assets/NataliaPhoto2.png';
import NataliaColorApp from '../assets/NataliaColorApp.png';
import NataliaQuizApp from '../assets/NataliaQuizApp.png';
import NataliaMemoryGame from '../assets/MemoryGameApp.png';
import NataliaCountryExplorer from '../assets/NataliaCountryExplorer.png';
import webthumbnail from '../assets/webthumbnail.png';
import { FadeLeft, FadeUp } from "../utility/animation";

// Array of website data with images, titles, and links
const websites = [
  { img: NataliaColorApp, title: 'Natalia Color Webapp', link: 'https://joseomolon.github.io/NataliaColorChangerApp/' },
  { img: NataliaQuizApp, title: 'Natalia Quiz Webapp', link: 'https://joseomolon.github.io/NataliaFunQuizAdventure/' },
  { img: NataliaMemoryGame, title: 'Natalia Memory Game App', link: 'https://joseomolon.github.io/Natalia-Memory-App/' },
  { img: NataliaCountryExplorer, title: 'Natalia Country Explorer App', link: 'https://joseomolon.github.io/NataliaCountryExplorer/' },
  
];

// Floating Clouds Component
const Clouds = () => {
  return (
    <>
      {/* Clouds Animation */}
      <motion.div
        className="cloud"
        style={{ top: '20%', left: '10%', zIndex: 0 }}
        animate={{ x: 200 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="cloud"
        style={{ top: '10%', right: '10%', zIndex: 0 }}
        animate={{ x: -200 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="cloud"
        style={{ top: '30%', left: '30%', zIndex: 0 }}
        animate={{ x: 150 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
    </>
  );
};

const EducationalApps = () => {
  return (
    <section className="bg-primary relative overflow-hidden" id="educational-web-apps">
      <Clouds /> {/* Add floating clouds here */}
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 relative z-10">
        <div className="relative">
          {/* Natalia's Image */}
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            viewport={{ once: true }} 
            src={NataliaPhoto2} 
            alt="" 
            className="w-[350px] md:w-[550px] h-full object-cover drop-shadow"
          />

          {/* Speech Bubble */}
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg z-20">
            <motion.p 
            variants={FadeLeft(0.6)}
            initial="hidden"
            animate="visible"
            className="text-gray-800 text-base sm:text-lg md:text-xl lg:text-2xl font-happy font-semibold">
              "My dad created these educational websites for me. You can try it, I hope you enjoy!"
              -Natalia😀
            </motion.p>
          </div>
        </div>
        
        <div>
          {/* Educational Websites Title */}
          <motion.h1 
                variants={FadeUp(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} 
                className="text-3xl md:text-4xl lg:text-5xl font-happy font-extrabold text-white mt-9">
                Educational Websites
          </motion.h1>
          <br />
          <hr />
          <br />
          {/* Educational Website Cards */}
          <div className="grid grid-cols-2 gap-4">
              {websites.map((website, index) => (
                <div className="card" key={index}>
                  <a href={website.link} target="_blank" rel="noopener noreferrer">
                    <motion.img 
                      src={website.img} 
                      alt={`Website ${index + 1}`} 
                      variants={FadeUp(0.7)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="card-image" 
                    />
                    <motion.h2 
                      variants={FadeUp(1.1)}
                      initial="hidden"
                      animate="visible"
                      className="text-center text-purple-800 text-lg sm:text-xl md:text-2xl font-bold p-2">
                      {website.title}
                    </motion.h2>
                  </a>
                </div>
              ))}
          </div>
          <Clouds />
        </div>
      </div>
      <Clouds />
    </section>
    
  );
};

export default EducationalApps;
