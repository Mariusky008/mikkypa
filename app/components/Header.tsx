'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Header() {
  const { scrollY } = useScroll();
  const headerHeight = useTransform(scrollY, [0, 100], ["90px", "70px"]);
  const headerPadding = useTransform(scrollY, [0, 100], ["1rem", "0.5rem"]);
  const logoSize = useTransform(scrollY, [0, 100], ["2.5rem", "2rem"]);
  const textOpacity = useTransform(scrollY, [0, 50], [1, 0]);
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0.95)", "rgba(0, 0, 0, 0.98)"]
  );

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
          <motion.h1 
            style={{ fontSize: logoSize }}
            className="font-poppins font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Mikky
          </motion.h1>

          {/* Message version desktop uniquement */}
          <motion.div 
            style={{ opacity: textOpacity }}
            className="hidden md:block flex-1 max-w-xl mx-4 text-center"
          >
            <h2 className="text-base text-white/90 font-medium">
              <span className="inline-flex items-center gap-2">
                <span>Développez votre audience</span>
                <span className="text-sm text-primary/90">👥</span>
              </span>
              <span className="mx-3">—</span>
              <span>
                Échangez des{" "}
                <span className="text-primary font-semibold">likes</span>,{" "}
                <span className="text-secondary font-semibold">partages</span>,{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">commentaires</span>{" "}
                <span>avec d'autres créateurs de contenus</span>
              </span>
            </h2>
          </motion.div>

          {/* Bouton */}
          <motion.button
            className="bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold px-4 md:px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.02, filter: "brightness(1.1)" }}
            whileTap={{ scale: 0.98 }}
          >
            Se connecter
          </motion.button>
        </div>
      </div>

      {/* Message version mobile - Maintenant en dehors de la navbar */}
      <motion.div 
        style={{ opacity: textOpacity }}
        className="md:hidden w-full bg-gradient-to-r from-black/80 to-black/60 backdrop-blur-sm mt-2 py-3"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-xs text-white/90 font-medium leading-tight text-center flex flex-col items-center gap-2">
            <span className="inline-flex items-center gap-1">
              <span className="relative">
                <span className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-primary to-secondary"></span>
                <span className="relative font-semibold">Développez votre audience</span>
              </span>
              <span className="text-sm text-primary/90">👥</span>
            </span>
            <span className="text-[11px] opacity-90">
              Échangez des{" "}
              <span className="text-primary font-semibold">likes</span>,{" "}
              <span className="text-secondary font-semibold">partages</span>,{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">commentaires</span>
              {" "}<br/><span>avec d'autres créateurs de contenus</span>
            </span>
          </h2>
        </div>
      </motion.div>
    </motion.header>
  );
} 