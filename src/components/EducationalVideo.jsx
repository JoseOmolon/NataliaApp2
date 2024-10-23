import { useState } from "react";
import { motion } from "framer-motion";
import { FadeRight, FadeUp } from "../utility/animation";

// Modal component
const VideoModal = ({ isOpen, videoId, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="relative bg-white p-6 rounded-lg max-w-3xl mx-auto">
        <button
          className="absolute top-2 right-2 text-2xl text-black"
          onClick={onClose}
        >
          &times; {/* Close button (X) */}
        </button>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

// Export EducationalVideo as default
const EducationalVideo = () => {
  // State to control modal visibility and selected video
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);  
  const videoData = [
    { title: 'Baby Learning With Ms Rachel', videoId: 'hTqtGJwsJVE' },
    { title: 'Baby Songs, Speech, Sign Language for Babies', videoId: 'zmEv7vTOQGE' },
    { title: 'Baby’s First Words with Ms Rachel', videoId: 'zwL2o4jZxbc' },
    { title: 'Baby Sign Language Basics', videoId: 'glDJI7UKfbw' }
  ];

  const handleCardClick = (videoId) => {
    setSelectedVideo(videoId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <section
      className="relative min-h-[855px] bg-cover bg-center"
      style={{ backgroundImage: `url('/src/assets/bgImg2.jpg')` }}
      id="educational-videos"
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-full relative">
        {/* Text on the left */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
          <div className="text-center md:text-left space-y-6 lg:max-w-[450px] mt-20 bg-secondary p-4 rounded-lg shadow-lg z-20">
            <motion.h1
              variants={FadeRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-4xl font-happy font-extrabold text-white mt-9"
            >
              Natalia's Learning Video
            </motion.h1>
            <motion.p
              variants={FadeRight(0.9)}
              initial="hidden"
              animate="visible"
              className="text-xl font-happy font-semibold text-white"
            >
              I highly recommend Ms. Rachel's videos because they are
              specifically designed to support early childhood development,
              focusing on language, speech, and cognitive skills. Her engaging,
              interactive approach keeps babies and toddlers entertained while
              helping them learn new words and concepts. Watch them here to give
              your child a fun learning experience!
            </motion.p>
          </div>
        </div>

        {/* Image and cards on the right */}
        <div className="flex justify-center items-center mt-14">
          <div className="grid grid-cols-2 gap-4">
            {videoData.map((video, index) => (
              <div
                className="card cursor-pointer"
                key={index}
                onClick={() => handleCardClick(video.videoId)}
              >
                <motion.img
                  src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                  alt={video.title}
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
                  className="card-title"
                >
                  {video.title}
                </motion.h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal isOpen={isModalOpen} videoId={selectedVideo} onClose={closeModal} />
    </section>
  );
};

// Make sure to export it as default
export default EducationalVideo;
