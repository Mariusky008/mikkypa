'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function CommunityImpact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const dataPoints = [
    { day: 'Jour 1', value: 10, delay: 0, label: '50 interactions' },
    { day: 'Jour 7', value: 30, delay: 0.2, label: '200 interactions' },
    { day: 'Jour 15', value: 50, delay: 0.4, label: '500 interactions' },
    { day: 'Jour 21', value: 75, delay: 0.6, label: '1000 interactions' },
    { day: 'Jour 30', value: 95, delay: 0.8, label: '2000+ interactions' },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-poppins font-bold text-gray-800 mb-8">
            L'Impact de la Communauté
          </h2>
          <p className="text-xl font-montserrat text-gray-600 leading-relaxed">
            Imaginez votre contenu découvert par des milliers de nouvelles personnes chaque mois.
            Avec Mikky, votre visibilité grandit de manière exponentielle.
          </p>
        </motion.div>

        <motion.div
          className="relative bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm rounded-2xl" />
          
          <div className="relative">
            <h3 className="text-3xl font-poppins font-semibold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Plus vous interagissez, plus vous recevez !
            </h3>
            
            <div className="relative h-64 mb-8">
              {/* Grille de fond */}
              <div className="absolute inset-0 grid grid-cols-4 gap-x-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="border-l border-primary/10" />
                ))}
              </div>
              
              {/* Lignes horizontales */}
              <div className="absolute inset-0 flex flex-col justify-between">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="border-b border-secondary/10" />
                ))}
              </div>

              {/* Zone de progression */}
              <div className="absolute inset-0">
                <div className="h-full bg-gradient-to-t from-primary/5 to-secondary/5 rounded-lg" />
              </div>

              {/* Courbe de progression */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.path
                  d={`M 0,${100 - dataPoints[0].value} ${dataPoints.map((point, index) => 
                    `L ${index * 25},${100 - point.value}`).join(' ')}`}
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--gradient-start)" />
                    <stop offset="100%" stopColor="var(--gradient-end)" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Points de données */}
              {dataPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="absolute flex flex-col items-center"
                  style={{
                    left: `${index * 25}%`,
                    bottom: `${point.value}%`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + point.delay }}
                >
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary shadow-lg ring-2 ring-white/50 ring-offset-2 ring-offset-transparent" />
                  <motion.div
                    className="absolute -top-8 bg-gradient-to-r from-primary/90 to-secondary/90 px-2 sm:px-3 py-1 rounded-lg shadow-lg backdrop-blur-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: 1 + point.delay }}
                  >
                    <span className="text-xs sm:text-sm font-semibold text-white">+{point.label}</span>
                  </motion.div>
                </motion.div>
              ))}

              {/* Fusée animée */}
              <motion.div
                className="absolute"
                initial={{ left: "0%", bottom: "10%" }}
                animate={{
                  left: ["0%", "25%", "50%", "75%", "100%"],
                  bottom: ["10%", "30%", "50%", "75%", "95%"],
                }}
                transition={{
                  duration: 15,
                  ease: "linear",
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-3xl transform -rotate-45 filter drop-shadow-lg"
                >
                  🚀
                </motion.div>
              </motion.div>
            </div>

            {/* Légende */}
            <div className="flex justify-between mt-4 px-4">
              {dataPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                >
                  <span className="text-xs sm:text-sm font-semibold bg-white/80 px-2 py-1 rounded-md text-gray-800">
                    {point.day}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Statistiques */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <div className="text-center bg-gradient-to-br from-primary/5 to-transparent p-4 md:p-6 rounded-xl backdrop-blur-sm border border-primary/10">
                <h4 className="text-xl md:text-2xl font-bold text-primary mb-2">2000 interactions</h4>
                <p className="text-sm md:text-base text-gray-600 font-medium">nouvelles personnes avec qui j'interagis par mois</p>
              </div>
              <div className="text-center bg-gradient-to-br from-secondary/5 to-transparent p-4 md:p-6 rounded-xl backdrop-blur-sm border border-secondary/10">
                <h4 className="text-xl md:text-2xl font-bold text-secondary mb-2">100%</h4>
                <p className="text-sm md:text-base text-gray-600 font-medium">automatisé et gratuit</p>
              </div>
              <div className="text-center bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent p-4 md:p-6 rounded-xl backdrop-blur-sm border border-white/10">
                <h4 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  3 réseaux
                </h4>
                <p className="text-sm md:text-base text-gray-600 font-medium">LinkedIn, Instagram, Facebook</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Nouvelle section Philosophie */}
        <motion.div
          className="mt-24 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Notre Philosophie
          </h2>

          <div className="bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <motion.p 
              className="text-xl font-montserrat text-gray-700 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Nous croyons fermement que le talent ne devrait pas être limité par les moyens financiers. C'est pourquoi Mikky est et restera totalement gratuit pour createurs dont le budget est limité, cette partie est financé uniquement par les dons de notre communauté bienveillante.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <motion.div
                className="bg-gradient-to-br from-primary/20 to-transparent p-6 rounded-xl border border-primary/30 shadow-lg backdrop-blur-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <h3 className="text-2xl font-poppins font-semibold text-gray-800 mb-4 drop-shadow-sm">
                  Pour Qui ?
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3 bg-white/40 rounded-lg px-3 py-2">
                    <span className="text-primary font-bold">✦</span>
                    Créateurs de contenu
                  </li>
                  <li className="flex items-center gap-3 bg-white/40 rounded-lg px-3 py-2">
                    <span className="text-primary font-bold">✦</span>
                    Infopreneurs
                  </li>
                  <li className="flex items-center gap-3 bg-white/40 rounded-lg px-3 py-2">
                    <span className="text-primary font-bold">✦</span>
                    Freelancers
                  </li>
                  <li className="flex items-center gap-3 bg-white/40 rounded-lg px-3 py-2">
                    <span className="text-primary font-bold">✦</span>
                    Entrepreneurs digitaux
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-secondary/20 to-transparent p-6 rounded-xl border border-secondary/30 shadow-lg backdrop-blur-sm"
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <h3 className="text-2xl font-poppins font-semibold text-gray-800 mb-4 drop-shadow-sm">
                  Notre Engagement
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3 bg-white/40 rounded-lg px-3 py-2">
                    <span className="text-secondary font-bold">✦</span>
                    100% Gratuit, sans frais cachés
                  </li>
                  <li className="flex items-center gap-3 bg-white/40 rounded-lg px-3 py-2">
                    <span className="text-secondary font-bold">✦</span>
                    Pas besoin d'expertise marketing
                  </li>
                  <li className="flex items-center gap-3 bg-white/40 rounded-lg px-3 py-2">
                    <span className="text-secondary font-bold">✦</span>
                    Croissance organique garantie
                  </li>
                  <li className="flex items-center gap-3 bg-white/40 rounded-lg px-3 py-2">
                    <span className="text-secondary font-bold">✦</span>
                    Support communautaire actif
                  </li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8 bg-white/50 rounded-xl p-6 shadow-md backdrop-blur-sm">
                Fini les budgets marketing astronomiques et les stratégies complexes. 
                Avec Mikky, concentrez-vous sur ce que vous faites le mieux : créer du contenu de qualité.
                Notre communauté s'occupe du reste.
              </p>

              <motion.div
                className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 p-8 rounded-xl max-w-2xl mx-auto border border-primary/20 shadow-xl backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.3 }}
              >
                <h4 className="text-xl font-poppins font-semibold text-gray-800 mb-3">
                  💝 Financé par la Communauté
                </h4>
                <div className="space-y-6">
                  {/* Profils des donateurs */}
                  <div className="flex flex-wrap justify-center -space-x-3 mb-4">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="relative"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div 
                          className={`w-10 h-10 rounded-full border-2 border-white overflow-hidden ${
                            i % 2 === 0 ? 'bg-primary/5' : 'bg-secondary/5'
                          } flex items-center justify-center`}
                        >
                          <img 
                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}&backgroundColor=ffffff`}
                            alt={`Donateur ${i + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <motion.div
                          className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [1, 0.8, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                        />
                      </motion.div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                      <span className="text-sm font-semibold text-gray-700">+42</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 bg-white/60 rounded-lg p-4">
                    Notre plateforme est maintenue et développée grâce aux dons de notre communauté. 
                    Cette approche nous permet de rester indépendants et fidèles à notre mission : 
                    rendre la croissance digitale accessible à tous.
                  </p>
                  
                  {/* Indicateur de don actif */}
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                    <motion.div
                      className="w-2 h-2 bg-green-400 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.7, 1]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity
                      }}
                    />
                  
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bouton d'action */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <button className="bg-gradient-to-r from-primary to-secondary text-white text-lg font-semibold px-12 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              Commencer maintenant
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 