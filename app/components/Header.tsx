'use client';

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Header() {
  const { scrollY } = useScroll();
  const headerHeight = useTransform(scrollY, [0, 100], ["90px", "70px"]);
  const headerPadding = useTransform(scrollY, [0, 100], ["1.5rem", "0.75rem"]);
  const logoSize = useTransform(scrollY, [0, 100], ["2.5rem", "2rem"]);
  const textOpacity = useTransform(scrollY, [0, 50], [1, 0]);
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0.95)", "rgba(0, 0, 0, 0.98)"]
  );

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.header 
      style={{ 
        height: headerHeight,
        backgroundColor: headerBg,
        paddingTop: headerPadding,
        paddingBottom: headerPadding,
        willChange: "transform"
      }}
      className="fixed w-full z-50 backdrop-blur-xl transition-all duration-300 border-b border-white/10 bg-gradient-to-b from-black/95 to-black/80 transform-gpu"
    >
      <div className="container mx-auto px-4">
        {/* Navbar principale */}
        <div className="flex items-center justify-between">
          {/* Logo et titre */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.h1 
              style={{ fontSize: logoSize }}
              className="font-poppins font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              Mikky
            </motion.h1>
            <motion.div 
              className="hidden lg:flex items-center gap-2 border-l border-white/10 pl-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-white/70 text-sm font-medium">
                Développez votre audience
              </span>
              <motion.span 
                className="text-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                👥
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Message central */}
          <motion.div 
            style={{ opacity: textOpacity }}
            className="hidden md:flex flex-1 max-w-xl mx-8 bg-white/5 rounded-full px-6 py-2 items-center justify-center"
          >
            <motion.div
              className="text-sm text-white/90 font-medium flex items-center gap-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.span
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-primary font-semibold">Échangez des likes</span>
                <motion.span
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  ❤️
                </motion.span>
              </motion.span>
              <span className="text-white/40">|</span>
              <motion.span
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-secondary font-semibold">partages</span>
                <motion.span
                  animate={{
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  ↗️
                </motion.span>
              </motion.span>
              <span className="text-white/40">|</span>
              <motion.span
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">commentaires</span>
                <motion.span
                  animate={{
                    y: [0, -5, 0]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  💭
                </motion.span>
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Bouton de connexion */}
          <motion.button
            className="relative group"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-md transition-opacity"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 0.5 : 0 }}
            />
            <motion.div
              className="relative bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <span>Se connecter</span>
              <motion.span
                animate={{
                  x: [0, 3, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                →
              </motion.span>
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Message version mobile */}
      <motion.div 
        style={{ opacity: textOpacity }}
        className="md:hidden w-full bg-gradient-to-r from-black/80 to-black/60 backdrop-blur-sm mt-2 py-3"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-xs text-white/90 font-medium leading-tight text-center flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-1.5"
              whileHover={{ scale: 1.02 }}
            >
              <span className="relative">
                <span className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-primary to-secondary"></span>
                <span className="relative font-semibold">Échangez avec d'autres créateurs de contenus</span>
              </span>
              <motion.span 
                className="text-sm text-primary/90"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                👥
              </motion.span>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-2 text-[11px] opacity-90">
              <motion.span
                className="flex items-center gap-1 bg-white/5 rounded-full px-3 py-1"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-primary font-semibold">likes</span>
                <span>❤️</span>
              </motion.span>
              <motion.span
                className="flex items-center gap-1 bg-white/5 rounded-full px-3 py-1"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-secondary font-semibold">partages</span>
                <span>↗️</span>
              </motion.span>
              <motion.span
                className="flex items-center gap-1 bg-white/5 rounded-full px-3 py-1"
                whileHover={{ scale: 1.05 }}
              >
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">commentaires</span>
                <span>💭</span>
              </motion.span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
} 