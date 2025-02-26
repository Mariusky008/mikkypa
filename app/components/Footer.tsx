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
    description?: string;
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
    response?: string;
    certification?: string;
  };
  emergency?: string;
  commitment?: string;
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
            "💡 Innover constamment pour votre réussite",
            "🌱 Promouvoir une croissance éthique et responsable",
            "🔄 Favoriser les échanges authentiques",
            "🚀 Accélérer le développement des créateurs",
            "💪 Renforcer l'impact des contenus de qualité"
          ],
          impact: "Déjà plus de 10 000 créateurs ont boosté leur visibilité grâce à Mikky, avec une moyenne de +450% de croissance d'audience en 3 mois",
          vision: "Notre vision est de devenir la référence mondiale de l'entraide digitale, où chaque créateur peut s'épanouir et grandir sans contrainte financière. Nous aspirons à créer un écosystème où la qualité du contenu prime sur les algorithmes, et où chaque voix peut être entendue."
        }
      },
      { 
        name: "L'équipe", 
        href: "#",
        content: {
          main: "Une équipe passionnée de développeurs, designers et experts en marketing digital, unis par la volonté de rendre le growth hacking accessible à tous.",
          team: [
            "👨‍💻 15 développeurs passionnés par l'innovation",
            "🎨 8 designers créatifs experts en UX/UI",
            "📊 12 experts en marketing digital et growth hacking",
            "👥 6 community managers dévoués",
            "🔧 4 DevOps spécialistes en scalabilité",
            "🎯 3 product managers visionnaires",
            "📱 5 spécialistes en réseaux sociaux",
            "🤝 7 experts en relations utilisateurs"
          ],
          values: [
            "Innovation constante et créativité",
            "Éthique et transparence absolue",
            "Satisfaction utilisateur prioritaire",
            "Excellence technique et performance",
            "Collaboration et entraide",
            "Accessibilité et inclusivité",
            "Développement durable",
            "Impact social positif"
          ],
          culture: "Nous cultivons un environnement de travail dynamique et inclusif, où chaque membre peut s'épanouir et contribuer à sa façon. Notre culture d'entreprise est basée sur l'innovation, la bienveillance et l'excellence."
        }
      },
      { 
        name: "Carrières", 
        href: "#",
        content: {
          main: "Rejoignez une startup en pleine croissance ! Nous recherchons des talents passionnés par l'innovation et le digital qui souhaitent avoir un impact réel sur la démocratisation du growth hacking.",
          openPositions: [
            "Senior Full-Stack Developer (React/Node.js)",
            "UI/UX Designer Lead",
            "Growth Marketing Manager",
            "Community Manager Senior",
            "DevOps Engineer",
            "Product Manager",
            "Data Scientist",
            "Content Strategist",
            "Social Media Expert",
            "Customer Success Manager"
          ],
          benefits: [
            "🌟 Environnement startup dynamique et innovant",
            "💻 Télétravail flexible et horaires adaptables",
            "📚 Budget formation illimité et coaching personnalisé",
            "🏥 Mutuelle premium famille prise en charge à 100%",
            "🎯 Plan d'intéressement attractif et stock options",
            "🎨 Budget setup home office",
            "🏃‍♂️ Activités team building régulières",
            "🍎 Paniers bio hebdomadaires",
            "🎭 Événements culturels et sportifs",
            "�� Possibilité de travailler à l'international"
          ],
          process: "Processus de recrutement en 3 étapes : entretien découverte, test technique ou cas pratique, rencontre avec l'équipe. Nous privilégions les soft skills et la passion plutôt que les diplômes."
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
              a: "Mikky utilise un système d'engagement réciproque intelligent : vous interagissez avec le contenu d'autres créateurs, et en retour, ils interagissent avec le vôtre. Notre algorithme assure des interactions pertinentes et qualitatives."
            },
            {
              q: "Est-ce vraiment gratuit ?",
              a: "Oui ! Mikky est et restera 100% gratuit. Notre modèle est basé sur les dons volontaires de la communauté et des fonctionnalités premium optionnelles qui n'impactent pas l'expérience de base."
            },
            {
              q: "Combien de temps pour voir des résultats ?",
              a: "Les premiers résultats sont visibles dès la première semaine, avec une croissance exponentielle sur 3 mois. En moyenne, nos utilisateurs voient leur engagement augmenter de 450% dans les 90 premiers jours."
            },
            {
              q: "Est-ce légal et conforme aux réseaux sociaux ?",
              a: "Absolument ! Nous respectons toutes les règles des plateformes car nous encourageons uniquement des interactions authentiques et naturelles. Mikky est certifié conforme aux conditions d'utilisation de LinkedIn, Instagram et Facebook."
            },
            {
              q: "Comment garantissez-vous des interactions de qualité ?",
              a: "Notre algorithme analyse le contenu et les profils pour créer des connexions pertinentes. Nous surveillons et filtrons toute activité suspecte pour maintenir un écosystème sain."
            },
            {
              q: "Puis-je choisir ma niche ou mon secteur ?",
              a: "Oui, vous pouvez personnaliser vos préférences d'interaction par secteur, langue, localisation et type de contenu pour des échanges plus pertinents."
            }
          ],
          tips: "Consultez notre guide complet pour optimiser votre expérience Mikky et maximiser vos résultats."
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
              response: "< 5 minutes",
              description: "Support instantané pour toutes vos questions"
            },
            {
              type: "Email",
              address: "support@mikky.com",
              response: "< 2 heures",
              description: "Pour les questions détaillées et le suivi"
            },
            {
              type: "Téléphone",
              hours: "Lun-Ven 9h-18h",
              number: "+33 1 23 45 67 89",
              description: "Support personnalisé pour les cas complexes"
            },
            {
              type: "Support Prioritaire",
              availability: "24/7",
              response: "< 15 minutes",
              description: "Pour les situations urgentes"
            },
            {
              type: "Visioconférence",
              availability: "Sur rendez-vous",
              description: "Pour les formations et accompagnements personnalisés"
            }
          ],
          emergency: "Support prioritaire disponible 24/7 pour les cas urgents avec prise en charge immédiate",
          commitment: "Nous nous engageons à résoudre votre problème en moins de 24h ou nous vous offrons un mois d'abonnement premium"
        }
      },
      { 
        name: "Guide d'utilisation", 
        href: "#",
        content: {
          main: "Découvrez comment tirer le meilleur parti de Mikky avec notre guide détaillé et nos conseils d'experts.",
          quickStart: [
            "1. Créez votre profil Mikky personnalisé",
            "2. Connectez vos réseaux sociaux principaux",
            "3. Rejoignez des communautés pertinentes",
            "4. Définissez vos objectifs de croissance",
            "5. Commencez à interagir de manière ciblée",
            "6. Analysez vos performances",
            "7. Ajustez votre stratégie",
            "8. Développez votre réseau"
          ],
          bestPractices: [
            "✨ Interagissez régulièrement et authentiquement",
            "🎯 Ciblez votre niche avec précision",
            "💬 Commentez de manière pertinente et constructive",
            "🤝 Construisez des relations durables",
            "📊 Suivez vos métriques de croissance",
            "🎨 Optimisez votre contenu",
            "⏰ Choisissez les meilleurs moments",
            "🌟 Restez cohérent dans vos interactions"
          ],
          tools: [
            "Analytics avancés avec IA",
            "Planificateur de contenu intelligent",
            "Gestionnaire de communauté automatisé",
            "Tableau de bord personnalisé",
            "Générateur de rapports détaillés",
            "Assistant de rédaction IA",
            "Analyseur de performances",
            "Optimiseur de hashtags"
          ],
          resources: "Accédez à notre bibliothèque complète de ressources, templates, études de cas et formations vidéo pour maximiser votre succès sur Mikky."
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
          main: "Les conditions d'utilisation définissent les règles et responsabilités liées à l'utilisation de notre plateforme Mikky. Nous nous engageons à maintenir un environnement sûr et éthique pour tous nos utilisateurs.",
          sections: [
            {
              title: "🔒 Règles Fondamentales",
              items: [
                "✓ Utilisation éthique et responsable de la plateforme",
                "✓ Respect des droits d'auteur et propriété intellectuelle",
                "✓ Protection des données personnelles",
                "✓ Règles de la communauté et code de conduite",
                "✓ Engagement de qualité et d'authenticité",
                "✓ Respect des directives des réseaux sociaux",
                "✓ Protection de la vie privée",
                "✓ Sécurité des données"
              ]
            },
            {
              title: "📋 Obligations des Utilisateurs",
              items: [
                "📝 Fournir des informations exactes lors de l'inscription",
                "🔒 Protéger ses identifiants de connexion",
                "🤝 Respecter les autres utilisateurs",
                "📢 Ne pas diffuser de contenu illégal ou inapproprié",
                "📊 Maintenir des métriques d'engagement authentiques",
                "🔍 Signaler les comportements suspects",
                "📱 Respecter les limites d'utilisation",
                "⚖️ Se conformer aux lois en vigueur"
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
                "❌ Pas de collecte non autorisée de données",
                "❌ Pas de manipulation des métriques",
                "❌ Pas de création de faux comptes"
              ]
            }
          ],
          legalInfo: {
            title: "📜 Informations Légales",
            items: [
              "⚖️ Dernière mise à jour : Janvier 2024",
              "🔰 En conformité avec le RGPD et les lois internationales",
              "📋 Conformité avec les directives européennes",
              "⚖️ Juridiction : Tribunaux de Paris",
              "📜 Cadre légal : Droit français",
              "🔏 Protection des données : CNIL",
              "📊 Audits réguliers",
              "⚡ Mises à jour régulières"
            ]
          }
        }
      },
      { 
        name: "Politique de confidentialité", 
        href: "#",
        content: {
          main: "Nous prenons la protection de vos données personnelles très au sérieux. Découvrez comment nous collectons, utilisons et protégeons vos informations conformément au RGPD et aux meilleures pratiques de l'industrie.",
          sections: [
            {
              title: "🔐 Données Collectées",
              subsections: [
                {
                  subtitle: "👤 Données Personnelles",
                  items: [
                    "Nom et prénom",
                    "Adresse email professionnelle",
                    "Numéro de téléphone (optionnel)",
                    "Identifiants de connexion",
                    "Photo de profil",
                    "Informations professionnelles",
                    "Préférences de communication",
                    "Historique des interactions"
                  ]
                },
                {
                  subtitle: "📊 Données d'Utilisation",
                  items: [
                    "Statistiques d'engagement",
                    "Données de localisation",
                    "Type d'appareil utilisé",
                    "Navigateur et système d'exploitation",
                    "Temps passé sur la plateforme",
                    "Patterns d'interaction",
                    "Préférences de contenu",
                    "Historique des activités"
                  ]
                }
              ]
            },
            {
              title: "🛡️ Protection des Données",
              items: [
                "🔒 Chiffrement de bout en bout (AES-256)",
                "🛡️ Protection contre les intrusions (Firewall)",
                "🔍 Surveillance 24/7 par IA",
                "📝 Audits de sécurité trimestriels",
                "🚫 Détection des fraudes en temps réel",
                "🔐 Authentification à deux facteurs",
                "📊 Anonymisation des données",
                "🔄 Sauvegardes automatiques"
              ]
            },
            {
              title: "⏳ Conservation des Données",
              items: [
                "📌 Données actives : durée d'utilisation du compte",
                "📂 Archives : 3 ans après dernière utilisation",
                "📜 Données légales : 5 ans (obligation légale)",
                "🗑️ Suppression sur demande",
                "📊 Anonymisation après inactivité",
                "🔄 Mise à jour régulière",
                "📱 Portabilité des données",
                "⚡ Accès instantané"
              ]
            }
          ],
          contact: {
            title: "📞 Contact DPO",
            name: "Marie Dupont",
            email: "dpo@mikky.com",
            availability: "Lun-Ven 9h-18h",
            response: "Réponse sous 24h maximum",
            certification: "Certifiée CNIL"
          }
        }
      },
      { 
        name: "Mentions légales", 
        href: "#",
        content: {
          main: "Informations légales détaillées sur notre société et nos responsabilités conformément à la législation en vigueur.",
          sections: [
            {
              title: "🏢 Informations Société",
              items: [
                "Mikky SAS au capital de 100 000 €",
                "RCS Paris B 123 456 789",
                "TVA : FR 12 345 678 901",
                "Siège social : 123 Avenue de l'Innovation, 75001 Paris",
                "SIRET : 123 456 789 00001",
                "Code NAF : 6201Z",
                "Assurance professionnelle : AXA n°1234567",
                "Agrément CNIL : 1234567"
              ]
            },
            {
              title: "👥 Direction",
              items: [
                "Président : Jean Martin",
                "Directeur Général : Sophie Bernard",
                "Directeur Technique : Thomas Dubois",
                "Directrice Marketing : Marie Lambert",
                "Directeur Financier : Pierre Durand",
                "DPO : Claire Martin",
                "Directeur Juridique : Marc Robert",
                "Directeur des Opérations : Luc Petit"
              ]
            },
            {
              title: "🌐 Hébergement",
              items: [
                "Provider : Amazon Web Services (AWS)",
                "Localisation : Europe (Paris, France)",
                "Certifications : ISO 27001, SOC 2, HDS",
                "Disponibilité : 99.99%",
                "Backup : Multi-région",
                "Protection DDoS : AWS Shield",
                "CDN : CloudFront",
                "Support : 24/7"
              ]
            }
          ],
          contact: {
            title: "📧 Contacts Importants",
            items: [
              "Direction : direction@mikky.com",
              "Service juridique : legal@mikky.com",
              "Relations presse : presse@mikky.com",
              "Partenariats : business@mikky.com",
              "Investisseurs : invest@mikky.com",
              "Réclamations : reclamation@mikky.com",
              "Support technique : tech@mikky.com",
              "Urgences : urgence@mikky.com"
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
                  {channel.number && ` • ${channel.number}`}
                </p>
                {channel.description && (
                  <p className="text-gray-500 mt-2 text-sm italic">{channel.description}</p>
                )}
              </div>
            ))}
            {content.emergency && (
              <div className="bg-yellow-50 rounded-lg p-4 mt-2">
                <p className="text-yellow-800 font-medium">{content.emergency}</p>
              </div>
            )}
            {content.commitment && (
              <div className="bg-green-50 rounded-lg p-4 mt-2">
                <p className="text-green-800 font-medium">{content.commitment}</p>
              </div>
            )}
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
                {content.contact.response && (
                  <p>Délai de réponse : {content.contact.response}</p>
                )}
                {content.contact.certification && (
                  <p>Certification : {content.contact.certification}</p>
                )}
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
              className="bg-white rounded-xl p-6 md:p-8 relative z-10 max-w-4xl w-full shadow-2xl max-h-[85vh] overflow-y-auto"
              layoutId={`popup-${activePopup.sectionIndex}-${activePopup.linkIndex}`}
            >
              <button
                onClick={() => setActivePopup(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
              >
                ✕
              </button>
              <h3 className="text-3xl font-bold text-gray-800 mb-8 pr-8">
                {footerLinks[activePopup.sectionIndex].links[activePopup.linkIndex].name}
              </h3>
              <div className="prose prose-lg max-w-none">
                {renderPopupContent(footerLinks[activePopup.sectionIndex].links[activePopup.linkIndex].content)}
              </div>
              <motion.button
                className="mt-8 bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-semibold w-full hover:shadow-lg transition-shadow text-lg"
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