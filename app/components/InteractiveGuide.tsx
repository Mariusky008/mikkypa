'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const networks = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: '💼',
    color: '#0077B5',
    stats: {
      avgGrowth: '250%',
      timeFrame: '3 mois',
      engagement: '38%',
      topMetric: '2,800+',
      metricLabel: 'connexions professionnelles'
    }
  },
  {
    id: 'instagram',
    name: 'Instagram',
    icon: '📸',
    color: '#E4405F',
    stats: {
      avgGrowth: '450%',
      timeFrame: '2 mois',
      engagement: '52%',
      topMetric: '5,000+',
      metricLabel: 'followers actifs'
    }
  },
  {
    id: 'facebook',
    name: 'Facebook',
    icon: '👥',
    color: '#1877F2',
    stats: {
      avgGrowth: '320%',
      timeFrame: '3 mois',
      engagement: '45%',
      topMetric: '3,500+',
      metricLabel: 'fans engagés'
    }
  }
];

const steps = [
  {
    title: "Choisissez votre réseau",
    description: "Sélectionnez la plateforme où vous souhaitez développer votre présence",
    icon: "🎯"
  },
  {
    title: "Connectez votre compte",
    description: "Liez votre profil en toute sécurité pour commencer à interagir",
    icon: "🔗"
  },
  {
    title: "Interagissez naturellement",
    description: "Likez, commentez, partagez du contenu qui vous inspire",
    icon: "👋"
  },
  {
    title: "Suivez vos progrès",
    description: "Visualisez votre croissance et ajustez votre stratégie",
    icon: "📈"
  }
];

export default function InteractiveGuide() {
  const [selectedNetwork, setSelectedNetwork] = useState(networks[0]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalSteps = steps.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  // Fonction pour passer à l'étape suivante
  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsModalOpen(false);
      setCurrentStep(0);
    }
  };

  // Fonction pour revenir à l'étape précédente
  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Fonction pour fermer le modal en cliquant en dehors
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
      setCurrentStep(0);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black/95 to-black/90 relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Sélecteur de réseaux sociaux */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
            Choisissez votre réseau et commencez à grandir
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {networks.map((network) => (
              <motion.button
                key={network.id}
                className={`flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-sm border transition-all ${
                  selectedNetwork.id === network.id
                    ? `scale-110 bg-opacity-20 border-opacity-50`
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
                style={{
                  backgroundColor: selectedNetwork.id === network.id ? `${network.color}33` : '',
                  borderColor: selectedNetwork.id === network.id ? network.color : '',
                  transform: selectedNetwork.id === network.id ? 'scale(1.1)' : 'scale(1)'
                }}
                onClick={() => setSelectedNetwork(network)}
                whileHover={{ 
                  scale: selectedNetwork.id === network.id ? 1.15 : 1.05,
                  backgroundColor: `${network.color}33`
                }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
              >
                <span className="text-2xl">{network.icon}</span>
                <span className={`font-semibold ${
                  selectedNetwork.id === network.id 
                    ? 'text-white text-lg' 
                    : 'text-white/90 text-base'
                }`}>
                  {network.name}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Statistiques du réseau sélectionné */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedNetwork.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-2xl font-bold text-white mb-2">
                  {selectedNetwork.stats.avgGrowth}
                </div>
                <div className="text-white/80">
                  Croissance moyenne en {selectedNetwork.stats.timeFrame}
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-2xl font-bold text-white mb-2">
                  +{selectedNetwork.stats.engagement}
                </div>
                <div className="text-white/80">
                  Taux d'engagement
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-2xl font-bold text-white mb-2">
                  {selectedNetwork.stats.topMetric}
                </div>
                <div className="text-white/80">
                  {selectedNetwork.stats.metricLabel}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bouton Comment ça marche */}
          <motion.div className="text-center mt-12">
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full border border-white/20 transition-all duration-300 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-semibold">Comment ça marche ?</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={handleBackdropClick}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gray-900 rounded-2xl p-6 md:p-8 max-w-2xl w-full border border-white/10 shadow-2xl max-h-[90vh] flex flex-col"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">Comment ça marche ?</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-white/60 text-sm">Étape {currentStep + 1} sur {totalSteps}</span>
                      <div className="h-1 w-32 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-secondary"
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setIsModalOpen(false);
                      setCurrentStep(0);
                    }}
                    className="text-white/60 hover:text-white transition-colors text-xl"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-6 overflow-y-auto flex-grow pr-2" style={{ scrollbarWidth: 'thin' }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10"
                    >
                      <div className="flex items-start gap-4">
                        <motion.div 
                          className="text-3xl"
                          initial={{ scale: 0.5, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.5, type: "spring" }}
                        >
                          {steps[currentStep].icon}
                        </motion.div>
                        <div>
                          <motion.h4 
                            className="text-lg font-semibold text-white mb-2"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            {steps[currentStep].title}
                          </motion.h4>
                          <motion.p 
                            className="text-white/80 text-sm leading-relaxed"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            {steps[currentStep].description}
                          </motion.p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Points de progression */}
                  <div className="flex justify-center items-center gap-2 mt-4">
                    {steps.map((_, index) => (
                      <motion.button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentStep 
                            ? 'bg-primary w-4' 
                            : index < currentStep 
                              ? 'bg-white/40' 
                              : 'bg-white/20'
                        }`}
                        onClick={() => setCurrentStep(index)}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      />
                    ))}
                  </div>
                </div>

                <motion.div
                  className="mt-8 flex justify-between items-center sticky bottom-0 pt-4 bg-gray-900"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.button
                    onClick={previousStep}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                      currentStep === 0 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:bg-white/5'
                    }`}
                    disabled={currentStep === 0}
                    whileHover={{ x: currentStep === 0 ? 0 : -3 }}
                  >
                    <span className="text-white/60">←</span>
                    <span className="text-white/60">Précédent</span>
                  </motion.button>

                  <motion.button
                    onClick={nextStep}
                    className="bg-primary text-white font-semibold px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05, x: 3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {currentStep === steps.length - 1 ? "Terminer" : "Suivant"}
                    <span className="ml-2">→</span>
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
} 