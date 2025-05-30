import React, { useEffect, useState, useRef } from 'react';
import Typed from 'typed.js';
import { Link } from 'react-scroll';

const collageImages = [
  // Left big image
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/674703037.jpg?k=dff7292a379a06d572386ca23e0ce0ecbd58d4f4b03ddc0a003a64b85177ef1c&o=",
  // Top right
  "https://cf.bstatic.com/xdata/images/hotel/max500/674703064.jpg?k=a7c9c77e811eaf5a79beed0585f1286de428900671a52e65d07c99090ae89b1a&o=",
  // Middle right
  "https://cf.bstatic.com/xdata/images/hotel/max500/674703070.jpg?k=2595b35bede2bb77de076e1b90bc0d880d3d5817e42566afaac633002187c84e&o=",
  // Bottom right
  "https://cf.bstatic.com/xdata/images/hotel/max500/674703075.jpg?k=a900cd48f58d99423a25a56313e767b1e0056ec53d94044b80784b80e0e15965&o=",
];

const backgroundImages = [
  collageImages, // index 0: collage
  "https://images.pexels.com/photos/3752402/pexels-photo-3752402.jpeg?auto=compress&cs=tinysrgb&w=1200", // index 1: normal background
];

export default function Hero() {
  const el = useRef(null);
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTypewriter(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showTypewriter) {
      const typed = new Typed(el.current, {
        strings: [
          'Welcome to 3cs Golf View Resort',
          '🏌️‍♂️ Golf. 🌿 Nature. 🍷 Comfort.',
          'Relax, Reconnect and Rediscover',
        ],
        typeSpeed: 70,
        backSpeed: 70,
        loop: true,
      });
      return () => {
        typed.destroy();
      };
    }
  }, [showTypewriter]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % backgroundImages.length
      );
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="relative h-screen w-full overflow-hidden">
      {/* Collage background for the first image */}
      {currentImageIndex === 0 ? (
        <div className="absolute inset-0 flex transition-opacity duration-1000 opacity-100 z-0">
          {/* Left big image */}
          <div className="w-2/3 h-full">
            <img
              src={collageImages[0]}
              alt="Main"
              className="w-full h-full object-cover rounded-l-lg"
              style={{ filter: 'brightness(0.7)' }}
            />
          </div>
          {/* Right 3 stacked images */}
          <div className="w-1/3 h-full flex flex-col gap-2 p-2">
            <img
              src={collageImages[1]}
              alt="Food"
              className="w-full h-1/3 object-cover rounded-tr-lg"
              style={{ filter: 'brightness(0.8)', marginBottom: '8px' }}
            />
            <img
              src={collageImages[2]}
              alt="Conference"
              className="w-full h-1/3 object-cover"
              style={{ filter: 'brightness(0.8)', marginBottom: '8px' }}
            />
            <img
              src={collageImages[3]}
              alt="Building"
              className="w-full h-1/3 object-cover rounded-br-lg"
              style={{ filter: 'brightness(0.8)' }}
            />
          </div>
        </div>
      ) : (
        // Other backgrounds (normal full image)
        backgroundImages.map((image, index) =>
          index === currentImageIndex ? (
            <div
              key={index}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 opacity-100 z-0"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "opacity 1s, transform 8s",
              }}
            ></div>
          ) : null
        )
      )}

      {/* Overlay for darkening */}
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4 z-10">
        <div>
          <h1 className="text-4xl font-semibold md:text-6xl text-white mb-6">
            {showTypewriter && <span ref={el}></span>}
          </h1>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
            style={{
              fontFamily: 'Saas Serif, sans-serif',
              background: 'linear-gradient(90deg,rgb(250, 199, 31), #FEB47B)',
              boxShadow: '0px 4px 15px rgba(255, 126, 95, 0.3)',
            }}
          >
            view our services
          </Link>
        </div>
      </div>
    </div>
  );
}