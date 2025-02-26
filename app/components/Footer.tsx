'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Section {
  title: string;
  items?: string[];
  subsections?: {
    subtitle: string;
    items: string[];
  }[];
}

interface FooterContent {
  main: string;
  sections?: Section[];
  details?: string[];
  team?: string[];
  values?: string[];
  openPositions?: string[];
  benefits?: string[];
  commonQuestions?: Array<{
    q: string;
    a: string;
  }>;
  channels?: Array<{
    type: string;
    availability?: string;
    response?: string;
    address?: string;
    hours?: string;
    number?: string;
  }>;
  quickStart?: string[];
  bestPractices?: string[];
  tools?: string[];
  resources?: string;
  impact?: string;
  vision?: string;
  culture?: string;
  process?: string;
  company?: {
    name: string;
    status?: string;
    capital: string;
    registration: string;
    vat: string;
    address: string;
    country?: string;
  };
  hosting?: {
    provider: string;
    location: string;
    address?: string;
    certification: string;
  };
  legalInfo?: {
    title: string;
    items: string[];
  };
  contact?: {
    title: string;
    items?: string[];
    name?: string;
    email?: string;
    availability?: string;
  };
}

const footerLinks = [
  {
    title: "À propos",
    links: [
      { 
        name: "Notre mission", 
        href: "#",
        content: {
          main: "Notre mission est de démocratiser la croissance digitale en permettant à chaque créateur de contenu de développer son audience de manière organique et authentique.",
          details: [
            "🎯 Objectif principal : Rendre le growth hacking accessible à tous",
            "🤝 Créer une communauté d'entraide bienveillante",
            "📈 Garantir une croissance organique et durable",
            "💡 Innover constamment pour votre réussite"
          ],
          impact: "Déjà plus de 10 000 créateurs ont boosté leur visibilité grâce à Mikky",
          vision: "Notre vision est de devenir la référence mondiale de l'entraide digitale, où chaque créateur peut s'épanouir et grandir sans contrainte financière."
        }
      },
      { 
        name: "L'équipe", 
        href: "#",
        content: {
          main: "Une équipe passionnée de développeurs, designers et experts en marketing digital, unis par la volonté de rendre le growth hacking accessible à tous.",
          team: [
            "👨‍💻 15 développeurs passionnés",
            "🎨 8 designers créatifs",
            "📊 12 experts en marketing digital",
            "👥 6 community managers dévoués"
          ],
          values: [
            "Innovation constante",
            "Éthique et transparence",
            "Satisfaction utilisateur",
            "Excellence technique"
          ],
          culture: "Nous cultivons un environnement de travail dynamique et inclusif, où chaque membre peut s'épanouir et contribuer à sa façon."
        }
      },
      { 
        name: "Carrières", 
        href: "#",
        content: {
          main: "Rejoignez une startup en pleine croissance ! Nous recherchons des talents passionnés par l'innovation et le digital.",
          openPositions: [
            "Senior Full-Stack Developer",
            "UI/UX Designer",
            "Growth Marketing Manager",
            "Community Manager"
          ],
          benefits: [
            "🌟 Environnement startup dynamique",
            "💻 Télétravail flexible",
            "📚 Budget formation illimité",
            "🏥 Mutuelle premium",
            "🎯 Plan d'intéressement attractif"
          ],
          process: "Processus de recrutement en 3 étapes : entretien découverte, test technique, rencontre équipe"
        }
      },
    ]
  },
  {
    title: "Support",
    links: [
      { 
        name: "FAQ", 
        href: "#",
        content: {
          main: "Retrouvez toutes les réponses à vos questions sur l'utilisation de Mikky, nos services et notre modèle communautaire.",
          commonQuestions: [
            {
              q: "Comment fonctionne Mikky ?",
              a: "Mikky utilise un système d'engagement réciproque : vous interagissez avec le contenu d'autres créateurs, et en retour, ils interagissent avec le vôtre."
            },
            {
              q: "Est-ce vraiment gratuit ?",
              a: "Oui ! Mikky est et restera 100% gratuit. Notre modèle est basé sur les dons volontaires de la communauté."
            },
            {
              q: "Combien de temps pour voir des résultats ?",
              a: "Les premiers résultats sont visibles dès la première semaine, avec une croissance exponentielle sur 3 mois."
            },
            {
              q: "Est-ce légal et conforme aux réseaux sociaux ?",
              a: "Absolument ! Nous respectons toutes les règles des plateformes car nous encourageons uniquement des interactions authentiques."
            }
          ],
          tips: "Consultez notre guide complet pour optimiser votre expérience Mikky"
        }
      },
      { 
        name: "Contact", 
        href: "#",
        content: {
          main: "Une question ? Un problème ? Notre équipe support est disponible 7j/7 pour vous accompagner dans votre réussite.",
          channels: [
            {
              type: "Chat en direct",
              availability: "24/7",
              response: "< 5 minutes"
            },
            {
              type: "Email",
              address: "support@mikky.com",
              response: "< 2 heures"
            },
            {
              type: "Téléphone",
              hours: "Lun-Ven 9h-18h",
              number: "+33 1 23 45 67 89"
            }
          ],
          emergency: "Support prioritaire disponible 24/7 pour les cas urgents",
          commitment: "Nous nous engageons à résoudre votre problème en moins de 24h"
        }
      },
      { 
        name: "Guide d'utilisation", 
        href: "#",
        content: {
          main: "Découvrez comment tirer le meilleur parti de Mikky avec notre guide détaillé et nos conseils d'experts.",
          quickStart: [
            "1. Créez votre profil Mikky",
            "2. Connectez vos réseaux sociaux",
            "3. Rejoignez des communautés",
            "4. Commencez à interagir"
          ],
          bestPractices: [
            "✨ Interagissez régulièrement",
            "🎯 Ciblez votre niche",
            "💬 Commentez de manière pertinente",
            "🤝 Construisez des relations durables"
          ],
          tools: [
            "Analytics avancés",
            "Planificateur de contenu",
            "Gestionnaire de communauté",
            "Tableau de bord personnalisé"
          ],
          resources: "Accédez à notre bibliothèque de ressources, templates et études de cas"
        }
      },
    ]
  },
  {
    title: "Légal",
    links: [
      { 
        name: "Conditions d'utilisation", 
        href: "#",
        content: {
          main: "Les conditions d'utilisation définissent les règles et responsabilités liées à l'utilisation de notre plateforme Mikky.",
          sections: [
            {
              title: "🔒 Règles Fondamentales",
              items: [
                "✓ Utilisation éthique et responsable de la plateforme",
                "✓ Respect des droits d'auteur et propriété intellectuelle",
                "✓ Protection des données personnelles",
                "✓ Règles de la communauté et code de conduite"
              ]
            },
            {
              title: "📋 Obligations des Utilisateurs",
              items: [
                "📝 Fournir des informations exactes lors de l'inscription",
                "🔒 Protéger ses identifiants de connexion",
                "🤝 Respecter les autres utilisateurs",
                "📢 Ne pas diffuser de contenu illégal ou inapproprié"
              ]
            },
            {
              title: "⛔ Restrictions Importantes",
              items: [
                "❌ Pas de spam ou contenu inapproprié",
                "❌ Pas d'automatisation non autorisée",
                "❌ Pas de vente de compte ou de services",
                "❌ Pas de harcèlement ou discrimination",
                "❌ Pas d'utilisation commerciale non autorisée",
                "❌ Pas de collecte non autorisée de données"
              ]
            }
          ],
          legalInfo: {
            title: "📜 Informations Légales",
            items: [
              "⚖️ Dernière mise à jour : Janvier 2024",
              "🔰 En conformité avec le RGPD et les lois internationales",
              "📋 Conformité avec les directives européennes",
              "⚖️ Juridiction : Tribunaux de Paris"
            ]
          }
        }
      },
      { 
        name: "Politique de confidentialité", 
        href: "#",
        content: {
          main: "Nous prenons la protection de vos données personnelles très au sérieux. Découvrez comment nous les utilisons et les protégeons.",
          sections: [
            {
              title: "🔐 Données Collectées",
              subsections: [
                {
                  subtitle: "👤 Données Personnelles",
                  items: [
                    "Nom et prénom",
                    "Adresse email",
                    "Numéro de téléphone (optionnel)",
                    "Identifiants de connexion"
                  ]
                },
                {
                  subtitle: "📊 Données d'Utilisation",
                  items: [
                    "Statistiques d'utilisation",
                    "Données de localisation",
                    "Type d'appareil utilisé",
                    "Navigateur et système d'exploitation"
                  ]
                }
              ]
            },
            {
              title: "🛡️ Protection des Données",
              items: [
                "🔒 Chiffrement de bout en bout",
                "🛡️ Protection contre les intrusions",
                "🔍 Surveillance 24/7",
                "📝 Audits réguliers",
                "🚫 Détection des fraudes"
              ]
            },
            {
              title: "⏳ Conservation des Données",
              items: [
                "📌 Données actives : durée d'utilisation du compte",
                "📂 Archives : 3 ans après dernière utilisation",
                "📜 Données légales : 5 ans (obligation légale)"
              ]
            }
          ],
          contact: {
            title: "📞 Contact DPO",
            name: "Marie Dupont",
            email: "dpo@mikky.com",
            availability: "Lun-Ven 9h-18h"
          }
        }
      },
      { 
        name: "Mentions légales", 
        href: "#",
        content: {
          main: "Informations légales détaillées sur notre société et nos responsabilités.",
          sections: [
            {
              title: "🏢 Informations Société",
              items: [
                "Mikky SAS",
                "Capital : 100 000 €",
                "RCS Paris B 123 456 789",
                "TVA : FR 12 345 678 901",
                "Siège : 123 Avenue de l'Innovation, 75001 Paris"
              ]
            },
            {
              title: "👥 Direction",
              items: [
                "Président : Jean Martin",
                "Directeur Général : Sophie Bernard",
                "Directeur Technique : Thomas Dubois"
              ]
            },
            {
              title: "🌐 Hébergement",
              items: [
                "Provider : Amazon Web Services",
                "Localisation : Europe (Paris)",
                "Certifications : ISO 27001, SOC 2, HDS"
              ]
            }
          ],
          contact: {
            title: "📧 Contacts Importants",
            items: [
              "Legal : legal@mikky.com",
              "Presse : presse@mikky.com",
              "Partenariats : business@mikky.com"
            ]
          }
        }
      },
    ]
  }
];

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activePopup, setActivePopup] = useState<{
    sectionIndex: number;
    linkIndex: number;
  } | null>(null);

  const renderPopupContent = (content: FooterContent) => {
    if (typeof content.main === 'string') return <p className="text-gray-600 leading-relaxed">{content.main}</p>;

    return (
      <div className="space-y-6">
        <p className="text-gray-600 leading-relaxed font-medium">{content.main}</p>
        
        {content.details && (
          <div className="space-y-2">
            {content.details.map((detail: string, index: number) => (
              <p key={index} className="text-gray-600 flex items-center gap-2">
                {detail}
              </p>
            ))}
          </div>
        )}

        {content.team && (
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Notre équipe</h4>
            <div className="grid grid-cols-2 gap-2">
              {content.team.map((member: string, index: number) => (
                <p key={index} className="text-gray-600">{member}</p>
              ))}
            </div>
          </div>
        )}

        {content.values && (
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Nos valeurs</h4>
            <div className="grid grid-cols-2 gap-2">
              {content.values.map((value: string, index: number) => (
                <p key={index} className="text-gray-600">{value}</p>
              ))}
            </div>
          </div>
        )}

        {content.openPositions && (
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Postes ouverts</h4>
            <div className="space-y-1">
              {content.openPositions.map((position: string, index: number) => (
                <p key={index} className="text-gray-600">• {position}</p>
              ))}
            </div>
          </div>
        )}

        {content.benefits && (
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Avantages</h4>
            <div className="grid grid-cols-2 gap-2">
              {content.benefits.map((benefit: string, index: number) => (
                <p key={index} className="text-gray-600">{benefit}</p>
              ))}
            </div>
          </div>
        )}

        {content.commonQuestions && (
          <div className="space-y-4">
            {content.commonQuestions.map((qa: any, index: number) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-800 mb-2">{qa.q}</p>
                <p className="text-gray-600">{qa.a}</p>
              </div>
            ))}
          </div>
        )}

        {content.channels && (
          <div className="space-y-4">
            {content.channels.map((channel: any, index: number) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-800">{channel.type}</p>
                <p className="text-gray-600">
                  {channel.availability && `Disponibilité : ${channel.availability}`}
                  {channel.response && ` • Réponse : ${channel.response}`}
                  {channel.address && ` • ${channel.address}`}
                  {channel.hours && ` • ${channel.hours}`}
                </p>
              </div>
            ))}
          </div>
        )}

        {content.quickStart && (
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Démarrage rapide</h4>
            <div className="space-y-2">
              {content.quickStart.map((step: string, index: number) => (
                <p key={index} className="text-gray-600">{step}</p>
              ))}
            </div>
          </div>
        )}

        {content.bestPractices && (
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Meilleures pratiques</h4>
            <div className="grid grid-cols-2 gap-2">
              {content.bestPractices.map((practice: string, index: number) => (
                <p key={index} className="text-gray-600">{practice}</p>
              ))}
            </div>
          </div>
        )}

        {content.company && (
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Informations société</h4>
              <div className="space-y-1">
                <p className="text-gray-600">Nom : {content.company.name}</p>
                <p className="text-gray-600">Capital : {content.company.capital}</p>
                <p className="text-gray-600">RCS : {content.company.registration}</p>
                <p className="text-gray-600">Adresse : {content.company.address}</p>
              </div>
            </div>
            {content.hosting && (
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Hébergement</h4>
                <div className="space-y-1">
                  <p className="text-gray-600">Provider : {content.hosting.provider}</p>
                  <p className="text-gray-600">Location : {content.hosting.location}</p>
                  <p className="text-gray-600">Certification : {content.hosting.certification}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {content.impact && (
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-4 mt-4">
            <p className="text-gray-800 font-medium">{content.impact}</p>
          </div>
        )}

        {content.vision && (
          <div className="bg-gray-50 rounded-lg p-4 mt-4">
            <p className="text-gray-700 italic">{content.vision}</p>
          </div>
        )}

        {content.sections && (
          <div className="space-y-6">
            {content.sections.map((section: Section, index: number) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  {section.title}
                </h4>
                {section.subsections ? (
                  <div className="space-y-4">
                    {section.subsections.map((subsection: { subtitle: string; items: string[] }, subIndex: number) => (
                      <div key={subIndex} className="ml-4">
                        <h5 className="text-lg font-semibold text-gray-700 mb-2">
                          {subsection.subtitle}
                        </h5>
                        <ul className="space-y-2">
                          {subsection.items.map((item: string, itemIndex: number) => (
                            <li key={itemIndex} className="text-gray-600 flex items-center gap-2">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-2">
                    {section.items?.map((item: string, itemIndex: number) => (
                      <li key={itemIndex} className="text-gray-600 flex items-center gap-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {content.legalInfo && (
          <div className="mt-6 bg-blue-50 rounded-lg p-6 shadow-sm">
            <h4 className="text-xl font-bold text-blue-800 mb-4">
              {content.legalInfo.title}
            </h4>
            <ul className="space-y-2">
              {content.legalInfo.items.map((item, index) => (
                <li key={index} className="text-blue-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {content.contact && (
          <div className="mt-6 bg-green-50 rounded-lg p-6 shadow-sm">
            <h4 className="text-xl font-bold text-green-800 mb-4">
              {content.contact.title}
            </h4>
            {content.contact.items ? (
              <ul className="space-y-2">
                {content.contact.items.map((item, index) => (
                  <li key={index} className="text-green-700">
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="space-y-2 text-green-700">
                <p>Nom : {content.contact.name}</p>
                <p>Email : {content.contact.email}</p>
                <p>Disponibilité : {content.contact.availability}</p>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <footer ref={ref} className="bg-gray-900 text-white py-16 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div>
            <motion.h2
              className="text-3xl font-poppins font-bold mb-6 text-center md:text-left"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              Mikky
            </motion.h2>
            <p className="text-gray-400 font-montserrat text-center md:text-left">
              Développez votre audience gratuitement et efficacement en rejoignant une communauté engagée.
            </p>
          </div>

          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + sectionIndex * 0.1 }}
              className="text-center md:text-left relative"
            >
              <h3 className="text-xl font-poppins font-semibold mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={link.name} className="flex justify-center md:justify-start">
                    <button
                      onClick={() => setActivePopup({ sectionIndex, linkIndex })}
                      className="text-gray-400 hover:text-white transition-colors duration-200 font-montserrat cursor-pointer"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400 font-montserrat"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p>© 2025 Mikky. Tous droits réservés.</p>
        </motion.div>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {activePopup !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 flex items-center justify-center z-50 px-4"
          >
            <div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setActivePopup(null)}
            />
            <motion.div
              className="bg-white rounded-xl p-6 md:p-8 relative z-10 max-w-2xl w-full shadow-2xl max-h-[80vh] overflow-y-auto"
              layoutId={`popup-${activePopup.sectionIndex}-${activePopup.linkIndex}`}
            >
              <button
                onClick={() => setActivePopup(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                {footerLinks[activePopup.sectionIndex].links[activePopup.linkIndex].name}
              </h3>
              {renderPopupContent(footerLinks[activePopup.sectionIndex].links[activePopup.linkIndex].content)}
              <motion.button
                className="mt-6 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full font-semibold w-full hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActivePopup(null)}
              >
                Fermer
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
} 