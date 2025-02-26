'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <section className="relative min-h-[50vh] pt-48 md:pt-40 pb-16 md:pb-20 bg-gradient-to-b from-black/80 to-black/95 overflow-hidden">
        {/* Fusée qui se balade dans tout le header */}
        <motion.div
          className="absolute z-10 left-0 top-0"
          style={{
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            willChange: "transform"
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute transform-gpu"
            style={{ willChange: "transform" }}
            initial={{ left: "0%", top: "100%" }}
            animate={{
              left: ["0%", "30%", "70%", "90%", "60%", "20%"],
              top: ["100%", "30%", "70%", "20%", "80%", "50%"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          >
            {/* Effet de trainée */}
            <motion.div
              className="absolute w-8 h-32 bg-gradient-to-t from-primary/40 to-transparent -bottom-32 left-1/2 -translate-x-1/2"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                height: ["80px", "120px", "80px"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              animate={{
                rotate: [-20, 0, 20],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <div className="text-7xl transform -rotate-45 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">🚀</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Étoiles en arrière-plan */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Lune */}
          <motion.div
            className="absolute right-[10%] top-[15%] w-32 h-32 rounded-full bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.8, 1, 0.8],
              scale: [1, 1.02, 1],
              boxShadow: [
                "0 0 60px rgba(255,255,255,0.4)",
                "0 0 80px rgba(255,255,255,0.6)",
                "0 0 60px rgba(255,255,255,0.4)"
              ]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            {/* Cratères de la lune */}
            <div className="absolute w-4 h-4 rounded-full bg-white/30 top-[20%] left-[30%]" />
            <div className="absolute w-3 h-3 rounded-full bg-white/30 bottom-[30%] right-[20%]" />
            <div className="absolute w-5 h-5 rounded-full bg-white/30 top-[40%] right-[30%]" />
          </motion.div>

          {/* Étoiles avec positions fixes */}
          {[
            { left: "10%", top: "20%" },
            { left: "20%", top: "40%" },
            { left: "30%", top: "15%" },
            { left: "40%", top: "60%" },
            { left: "50%", top: "25%" },
            { left: "60%", top: "45%" },
            { left: "70%", top: "30%" },
            { left: "80%", top: "55%" },
            { left: "90%", top: "35%" },
            { left: "15%", top: "70%" },
            { left: "25%", top: "85%" },
            { left: "35%", top: "65%" },
            { left: "45%", top: "75%" },
            { left: "55%", top: "80%" },
            { left: "65%", top: "90%" },
            { left: "75%", top: "60%" },
            { left: "85%", top: "70%" },
            { left: "95%", top: "85%" },
            { left: "5%", top: "45%" },
            { left: "12%", top: "55%" },
            { left: "22%", top: "25%" },
            { left: "32%", top: "35%" },
            { left: "42%", top: "15%" },
            { left: "52%", top: "45%" },
            { left: "62%", top: "65%" },
            { left: "72%", top: "75%" },
            { left: "82%", top: "25%" },
            { left: "92%", top: "15%" },
            { left: "17%", top: "95%" },
            { left: "27%", top: "5%" }
          ].map((position, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full transform-gpu"
              style={{ ...position, willChange: "transform, opacity" }}
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
        <br/><br/><br/><br/><br/>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Contenu principal */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Compteur d'utilisateurs */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <motion.div
                    className="text-5xl font-bold bg-gradient-to-r from-primary via-white to-secondary bg-clip-text text-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    +450
                  </motion.div>
                  <div className="space-y-1">
                    <div className="text-xl text-white font-medium">nouveaux utilisateurs</div>
                    <motion.div 
                      className="text-white/60"
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      chaque mois sur vos réseaux sociaux
                    </motion.div>
                  </div>
                  <motion.div
                    className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-4"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.3 }}
                  />
                  <div className="text-white/80 font-medium">
                  450 personnes qui vont tous particper à vous faire connaitre en likant , 
                  commentant, partageant vos publications, s'abonnant...{" "}
                  
                    
                  </div>
                </div>
              </motion.div>

              {/* Badge 100% Gratuit */}
              <div className="w-full flex justify-center">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full px-6 py-2 border border-white/10 backdrop-blur-sm"
                >
                  <span className="text-white font-semibold">✨ Mikky c'est 100% Gratuit - Aucun frais caché</span>
                </motion.div>
              </div>

              {/* Simple spacer */}
              <div className="my-8" />
<br/><br/><br/><br/><br/><br/><br/><br/>
              {/* Les 3 étapes */}
              <h3 className="text-4xl font-bold text-white font-poppins text-center mb-7">
                Développez votre audience en
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> 3 étapes</span>
              </h3>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/10">
                <ul className="space-y-4">
                  <motion.li 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="text-primary text-xl">1.</span>
                    <div>
                      <p className="text-white font-semibold">Sélectionnez votre réseau</p>
                      <p className="text-white/80 text-sm mt-1">LinkedIn, Instagram ou Facebook - choisissez votre plateforme préférée sur Mikky</p>
                    </div>
                  </motion.li>
                  <motion.li 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="text-primary text-xl">2.</span>
                    <div>
                      <p className="text-white font-semibold">Interagissez naturellement</p>
                      <p className="text-white/80 text-sm mt-1">Likez, commentez ou partagez les contenus qui vous inspirent sur Mikky</p>
                    </div>
                  </motion.li>
                  <motion.li 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <span className="text-primary text-xl">3.</span>
                    <div>
                      <p className="text-white font-semibold">Récoltez les fruits</p>
                      <p className="text-white/80 text-sm mt-1">En retour de vos likes, commentaires, partages
                     vous recevez vous aussi des likes, des commentaires et des partages de la part des personnes sur qui vous avez interagis (c'est la collaboration Mikky)</p>
                    </div>
                  </motion.li>
                </ul>
              </div>

              {/* Résultats et Exemple */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8">
                {/* Stats */}
                <motion.div
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-4 md:p-6 text-center border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">10x à 100x</h4>
                  <p className="text-sm md:text-base text-white/90 font-medium leading-tight md:leading-normal">plus de visibilité sur vos réseaux sociaux</p>
                </motion.div>

                {/* Bonus */}
                <motion.div
                  className="bg-gradient-to-br from-secondary/20 to-primary/10 backdrop-blur-lg rounded-xl p-4 md:p-6 border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl md:text-3xl">🎯</span>
                    <div className="space-y-2">
                      <p className="text-base md:text-lg text-white font-semibold leading-tight">Créez du contenu depuis Mikky</p>
                      <p className="text-xs md:text-sm text-white/90 leading-relaxed">Publication automatique + personal branding pour être enfin reconnu - Tout est gratuit !</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
              <br/><br/>  <br/><br/>
          </div>
        </div>
      </section>
    
      {/* Section "Prêt à vous faire connaître" */}
      <section className="relative py-10 bg-gradient-to-b from-black/95 to-black/90 overflow-hidden">
        {/* Soleil lumineux */}
        <motion.div
          className="absolute left-[5%] top-[15%] w-48 h-48"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 2 }}
        >
          {/* Cercle principal du soleil */}
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-200/60 via-orange-300/50 to-red-400/40"
            style={{
              boxShadow: "0 0 30px 15px rgba(255, 200, 0, 0.3)"
            }}
          />
          {/* Halo lumineux */}
          <div
            className="absolute -inset-2 rounded-full bg-gradient-to-br from-yellow-100/40 to-orange-300/30"
            style={{
              opacity: 0.6,
              filter: "blur(8px)"
            }}
          />
        </motion.div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-4xl font-bold text-white font-poppins text-center mb-7">
              Prêt à vous faire
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> connaître</span> ?
            </h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-white/20 via-white/10 to-transparent backdrop-blur-xl rounded-xl p-8 border border-white/30 shadow-xl relative overflow-hidden"
            >
              {/* Effet de brillance */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 via-orange-400/20 to-transparent"
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              
              <div className="flex items-start gap-4 relative z-10">
                
                <div className="space-y-4">
                  <motion.p 
                    className="text-white font-semibold text-2xl"
                    animate={{
                      textShadow: [
                        "0 0 12px rgba(255,255,255,0.5)",
                        "0 0 20px rgba(255,255,255,0.7)",
                        "0 0 12px rgba(255,255,255,0.5)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    Résultats concrêts
                  </motion.p>
                  <p className="text-white text-lg drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">Une croissance organique et durable de votre communauté.</p>
                  <div className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-white/30 shadow-2xl">
                    <div className="text-white text-lg leading-relaxed font-semibold">
                      <p className="mb-4">
                        <span className="text-yellow-300 font-bold drop-shadow-[0_0_8px_rgba(255,255,0,0.5)]">Exemple : </span> 
                        <span className="text-white">15 interactions par jour sur Mikky c'est 5 minutes de votre temps pour obtenir </span>
                        <span className="text-yellow-300 font-bold drop-shadow-[0_0_8px_rgba(255,255,0,0.5)]">500 interactions</span> 
                        <span className="text-white"> chaque mois sur plusieurs de vos parutions : </span>
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-4">
                        <motion.div 
                          className="flex items-center gap-2 bg-gradient-to-r from-primary/20 to-primary/5 px-4 py-2 rounded-full border border-primary/20"
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 107, 107, 0.2)" }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <motion.span
                            className="text-primary font-bold"
                            animate={{
                              scale: [1, 1.1, 1],
                              textShadow: [
                                "0 0 8px rgba(255,107,107,0.5)",
                                "0 0 12px rgba(255,107,107,0.8)",
                                "0 0 8px rgba(255,107,107,0.5)"
                              ]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            likes
                          </motion.span>
                          <motion.div
                            className="w-6 h-6 flex items-center justify-center"
                            animate={{
                              scale: [1, 1.2, 1]
                            }}
                            transition={{
                              duration: 0.6,
                              repeat: Infinity,
                              repeatType: "reverse",
                              ease: "easeOut"
                            }}
                          >
                            <span className="text-lg">♥️</span>
                          </motion.div>
                        </motion.div>

                        <motion.div 
                          className="flex items-center gap-2 bg-gradient-to-r from-secondary/20 to-secondary/5 px-4 py-2 rounded-full border border-secondary/20"
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(78, 205, 196, 0.2)" }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <motion.span
                            className="text-secondary font-bold"
                            animate={{
                              scale: [1, 1.1, 1],
                              textShadow: [
                                "0 0 8px rgba(78,205,196,0.5)",
                                "0 0 12px rgba(78,205,196,0.8)",
                                "0 0 8px rgba(78,205,196,0.5)"
                              ]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 0.3
                            }}
                          >
                            partages
                          </motion.span>
                          <motion.div
                            className="w-6 h-6 flex items-center justify-center"
                            animate={{
                              rotate: [0, 360]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear",
                              repeatDelay: 1
                            }}
                          >
                            <span className="text-lg">↗️</span>
                          </motion.div>
                        </motion.div>

                        <motion.div 
                          className="flex items-center gap-2 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 px-4 py-2 rounded-full border border-white/20"
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <motion.span
                            className="font-bold"
                            style={{
                              background: "linear-gradient(to right, #FF6B6B, #4ECDC4)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent"
                            }}
                            animate={{
                              scale: [1, 1.1, 1],
                              textShadow: [
                                "0 0 8px rgba(255,255,255,0.5)",
                                "0 0 12px rgba(255,255,255,0.8)",
                                "0 0 8px rgba(255,255,255,0.5)"
                              ]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 0.6
                            }}
                          >
                            commentaires
                          </motion.span>
                          <motion.div
                            className="w-6 h-6 flex items-center justify-center"
                            animate={{
                              y: [0, -3, 0],
                              scale: [1, 1.1, 1]
                            }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <span className="text-lg">💭</span>
                          </motion.div>
                        </motion.div>

                        <motion.div 
                          className="flex items-center gap-2 bg-gradient-to-r from-red-400/20 via-purple-400/20 to-red-400/20 px-4 py-2 rounded-full border border-red-400/20"
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <motion.span
                            className="font-bold"
                            style={{
                              background: "linear-gradient(to right, #f87171, #c084fc)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent"
                            }}
                            animate={{
                              scale: [1, 1.1, 1],
                              textShadow: [
                                "0 0 8px rgba(248,113,113,0.5)",
                                "0 0 12px rgba(192,132,252,0.8)",
                                "0 0 8px rgba(248,113,113,0.5)"
                              ]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 0.9
                            }}
                          >
                            participer à un live
                          </motion.span>
                          <motion.div
                            className="w-6 h-6 flex items-center justify-center"
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [1, 0.6, 1]
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <span className="text-lg">🎥</span>
                          </motion.div>
                        </motion.div>

                        <motion.div 
                          className="flex items-center gap-2 bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-blue-400/20 px-4 py-2 rounded-full border border-blue-400/20"
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <motion.span
                            className="font-bold"
                            style={{
                              background: "linear-gradient(to right, #60a5fa, #818cf8)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent"
                            }}
                            animate={{
                              scale: [1, 1.1, 1],
                              textShadow: [
                                "0 0 8px rgba(96,165,250,0.5)",
                                "0 0 12px rgba(129,140,248,0.8)",
                                "0 0 8px rgba(96,165,250,0.5)"
                              ]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 1.2
                            }}
                          >
                            abonnement
                          </motion.span>
                          <motion.div
                            className="w-6 h-6 flex items-center justify-center"
                            animate={{
                              scale: [1, 1.2, 1],
                              rotate: [0, 10, -10, 0]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <span className="text-lg">⭐️</span>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bouton d'action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-center"
            >
              <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Commencer maintenant
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
} 