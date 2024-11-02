import { motion } from "framer-motion";
import babyPhoto2 from "../assets/babyPhoto2.png";
import { FadeRight } from "../utility/animation";


const Hero = () => {
  return (
    <section
      className="relative min-h-[800px] bg-cover bg-center"
      style={{
        backgroundImage: `url('src/assets/bgImg1.jpg')`,
      }}
      id="home"
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-full relative">
        {/* Text on the left */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
          <div className="text-center md:text-left space-y-6 lg:max-w-[400px]">
            <motion.h1 
            variants={FadeRight(0.6)}
            initial="hidden"
            animate="visible"
            className="text-3xl md:text-4xl lg:text-5xl font-happy font-extrabold text-white mt-9">Hi Friends!🙋‍♂️</motion.h1>
            <motion.p 
                        variants={FadeRight(0.9)}
                        initial="hidden"
                        animate="visible"
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-happy font-semibold text-white">
              I’m Natalia! Welcome to my fun educational website that daddy made! Click explore to discover exciting learning activities! Have a blast!
            </motion.p>
          </div>
        </div>
        {/* Image on the right */}
        <div className="flex justify-center items-center mt-14">
          <motion.img
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            src={babyPhoto2}
            alt="Baby"
            className="w-[350px] md:w-[550px] drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero
