'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundType: 'image' | 'video' | 'gradient';
  backgroundSrc?: string;
}

const HeroSection = ({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  backgroundType,
  backgroundSrc,
}: HeroSectionProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      {backgroundType === 'video' && backgroundSrc && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={backgroundSrc} type="video/mp4" />
        </video>
      )}

      {backgroundType === 'image' && backgroundSrc && (
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundSrc})` }}
        />
      )}

      {backgroundType === 'gradient' && (
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-navy-900 via-blue-900 to-purple-900" />
      )}

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight ">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={primaryCTA.href}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg  hover:shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              {primaryCTA.text}
            </motion.a>
            
            {secondaryCTA && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={secondaryCTA.href}
                className="px-8 py-4 rounded-full bg-transparent border-2 border-white text-white font-semibold text-lg hover:border-2 hover:border-blue-600 hover:text-blue-600 not-first: hover:bg-white hover:text-navy-900 transition-all duration-300"
              >
                {secondaryCTA.text}
              </motion.a>
            )} 
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white text-sm mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1"
        >
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-3 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;