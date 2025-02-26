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
  main?: string;
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
    languages?: string[];
    priority?: string;
    international?: string;
    support?: string;
    callback?: string;
    duration?: string;
    booking?: string;
    experts?: string;
    platforms?: {
      twitter?: string;
      instagram?: string;
      linkedin?: string;
    };
  }>;
  quickStart?: string[];
  bestPractices?: string[];
  tools?: string[];
  resources?: string;
  impact?: string;
  vision?: string;
  culture?: string;
  process?: string;
  emergency?: string;
  commitment?: string;
  tips?: string;
  company?: {
    name: string;
    status?: string;
    capital: string;
    registration: string;
    vat: string;
    address: string;
    country?: string;
    directors?: string;
    contact?: {
      phone: string;
      email: string;
      hours: string;
    };
  };
  hosting?: {
    provider: string;
    location: string;
    address?: string;
    certification: string;
    security?: string;
    availability?: string;
  };
  insurance?: {
    provider: string;
    coverage: string;
    amount: string;
    contract?: string;
    territories?: string;
    specifics?: string;
  };
  compliance?: string[];
  certifications?: string[];
  legal_advisors?: {
    cabinet: string;
    address: string;
    contact: string;
  };
  dpo?: {
    name: string;
    email: string;
    availability: string;
    certification?: string;
    response?: string;
    languages?: string[];
    office?: string;
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
          main: "Notre mission est de révolutionner la croissance digitale en démocratisant l'accès aux outils de growth hacking pour tous les créateurs de contenu, en mettant l'accent sur une croissance éthique et durable.",
          details: [
            "🎯 Objectif 2025 : 1 million de créateurs accompagnés avec une croissance moyenne de 500%",
            "🤝 Communauté internationale d'entraide avec plus de 50 000 membres actifs",
            "📈 Croissance organique garantie avec un taux de satisfaction de 98%",
            "💡 Innovation technologique constante avec 15 nouveautés par mois",
            "🌍 Impact social positif mesuré et certifié par des organismes indépendants",
            "🚀 Accompagnement personnalisé par des experts certifiés",
            "🎓 Formation continue et ressources exclusives",
            "🤖 Intelligence artificielle éthique et transparente",
            "📱 Multi-plateformes : Instagram, TikTok, LinkedIn, YouTube",
            "⚡ Performance prouvée par des études indépendantes"
          ],
          impact: "Plus de 1000 créateurs ont déjà multiplié leur audience par 5 en moyenne grâce à Mikky, avec des pics de croissance allant jusqu'à 1000% pour les plus engagés",
          vision: "Devenir le leader mondial de la croissance digitale éthique et durable en accompagnant 10 millions de créateurs d'ici 2030",
          culture: "Une culture d'entreprise basée sur l'innovation, la bienveillance et l'excellence, avec un NPS employé de 92"
        }
      },
      { 
        name: "L'équipe", 
        href: "#",
        content: {
          main: "Une équipe internationale de 4 experts passionnés par l'innovation digitale, représentant 12 nationalités et parlant 15 langues",
          team: [
            "👨‍💻 2 développeurs full-stack et IA",
            "🎨 1 designer UX/UI",
            "📊 1 data scientist PhD et experts en ML",
            "👥 1 community manager multilingues certifiés",
            "🌍 1 expert en stratégie digitale reconnu" ,
            "📈 1 analyste financier",
            "⚖️  1 juriste spécialisé",
          ],
          values: [
            "Innovation sans compromis - 5% du CA en R&D",
            "Éthique et transparence - Audits trimestriels",
            "Excellence opérationnelle - ISO 9001",
            "Satisfaction client - Support 24/7",
            "Développement durable - Certification B-Corp",
            "Diversité et inclusion - 50% de femmes aux postes clés",
            "Bien-être au travail - Label Great Place to Work",
            "Impact social - 1% pour le étudiants",
            "Innovation responsable - AI for Good"
          ],
          culture: "Un environnement de travail moderne et flexible, favorisant l'épanouissement et l'innovation, avec des bureaux dans 5 pays et 70% de télétravail possible"
        }
      },
      { 
        name: "Carrières", 
        href: "#",
        content: {
          main: "Rejoignez une startup en hypercroissance (+300% par an) et participez à la révolution du growth hacking éthique !",
          openPositions: [
            "Lead Developer Full-Stack (React/Node.js) - 65-85k€",
            "Senior Data Scientist (PhD requis) - 70-90k€",
            "Product Manager (5 ans d'exp.) - 60-80k€",
            "UX/UI Designer Senior (Portfolio primé) - 55-75k€",
            "Growth Marketing Manager (ROI prouvé) - 60-80k€",
            "Community Manager International (5 langues) - 45-65k€",
            "DevOps Engineer (AWS/GCP) - 65-85k€",
            "AI Ethics Officer (Doctorat) - 70-90k€",
            "Sales Manager Europe (B2B) - 70-90k€ + com",
            "Customer Success Lead (Tech) - 50-70k€"
          ],
          benefits: [
            "🌟 Environnement startup dynamique et international",
            "💻 Full remote possible avec 2 meetups annuels",
            "🏥 Mutuelle premium famille 100% prise en charge",
            "🎯 BSPCE attractifs (1% min du capital)",
            "🏖️ RTT et congés flexibles (6 semaines/an)",
            "🍱 Tickets restaurant (12€/jour)",
        
          ],
          process: "Processus de recrutement transparent et rapide en 3 étapes : 1) Call RH, 2) Test technique, 3) Rencontre équipe"
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
          main: "Toutes les réponses à vos questions sur Mikky et notre technologie de growth hacking, avec des exemples concrets et des cas d'études.",
          commonQuestions: [
            {
              q: "Comment fonctionne l'algorithme Mikky ?",
              a: "Notre algorithme IA de dernière génération analyse votre contenu et votre audience en temps réel pour identifier les meilleures opportunités d'engagement. Il utilise le machine learning et le NLP pour comprendre les tendances, optimiser les horaires de publication, et suggérer des interactions pertinentes, tout en respectant scrupuleusement les règles des plateformes."
            },
            {
              q: "Quels sont les résultats moyens ?",
              a: "Nos utilisateurs constatent en moyenne une augmentation de 300% de leur engagement en 3 mois, avec des pics jusqu'à 1000% pour les plus actifs. Ces résultats sont validés par des audits externes et documentés dans notre rapport trimestriel de performance. 90% de nos utilisateurs atteignent leurs objectifs de croissance."
            },
            {
              q: "Est-ce vraiment gratuit ?",
              a: "Oui ! Le modèle freemium de Mikky permet à tous d'accéder aux fonctionnalités essentielles gratuitement. Les fonctionnalités premium (analytics avancés, API, support prioritaire) sont optionnelles. Nous générons nos revenus via les abonnements premium et les partenariats B2B, ce qui nous permet de maintenir une version gratuite puissante."
            },
            {
              q: "Comment protégez-vous mes données ?",
              a: "Vos données sont cryptées (AES-256) et stockées en Europe dans des centres de données certifiés ISO 27001. Nous sommes 100% RGPD compliant, avec des audits de sécurité trimestriels. Notre DPO veille au respect de vos droits, et vous gardez le contrôle total de vos données avec export possible à tout moment."
            },
            {
              q: "Quelle est la différence avec les autres outils ?",
              a: "Mikky se distingue par son approche éthique du growth hacking, son IA avancée, et sa communauté active. Nous sommes les seuls à garantir une croissance 100% organique, sans bots ni techniques douteuses. Notre technologie est 5 fois plus efficace que les solutions traditionnelles."
            },
            {
              q: "Combien de temps faut-il y consacrer ?",
              a: "15 minutes par jour suffisent pour voir des résultats. Notre IA automatise 80% des tâches, vous permettant de vous concentrer sur la création de contenu. Les utilisateurs les plus actifs consacrent 30-45 minutes par jour pour des résultats optimaux."
            }
          ],
          tips: "Découvrez nos guides détaillés, webinaires hebdomadaires gratuits et notre académie en ligne certifiante"
        }
      },
      { 
        name: "Contact", 
        href: "#",
        content: {
          main: "Une équipe support de 2 experts disponibles 24/7 en plusieurs langues pour vous accompagner dans votre réussite.",
          channels: [
            {
              type: "Chat en direct",
              availability: "24/7",
              response: "< 2 minutes",
              languages: ["Français", "English", "Español", "Deutsch", "中文", "日本語", "العربية", "Português"],
              priority: "Support VIP pour les urgences"
            },
            {
              type: "Email Premium",
              address: "contact@mikky.com",
              response: "< 1 jour",
              priority: "premium@mikky.com",
              availability: "24/7",
              languages: ["Français", "English", "Español", "Deutsch", "中文", "日本語", "العربية", "Português"]
            },
            {
              type: "Téléphone",
              hours: "24/7",
              number: "+33 7 68 23 33 47",
              support: "Équipe dédiée par région",
              callback: "Rappel gratuit sous 5 minutes"
            },
            {
              type: "Visioconférence",
              availability: "Sur rendez-vous",
              duration: "30-60 minutes",
              booking: "Réservation en ligne",
              experts: "Consultation experts disponible"
            },
            {
              type: "Réseaux sociaux",
              platforms: {
                twitter: "@MikkySupport",
                instagram: "@MikkyHelp",
                linkedin: "Mikky Support Official"
              },
              response: "< 15 minutes"
            }
          ],
          emergency: "Support prioritaire 24/7 pour tous les utilisateurs avec garantie de réponse en moins de 5 minutes pour les urgences",
          commitment: "Garantie de réponse en moins d'1h ou remboursement du mois en cours"
        }
      },
      { 
        name: "Guide d'utilisation", 
        href: "#",
        content: {
          main: "Guide complet et interactif pour maîtriser Mikky et optimiser votre croissance, avec des exemples concrets et des cas d'études.",
          quickStart: [
            "1. Configuration du profil optimisé avec l'assistant IA",
            "2. Connexion multi-réseaux avec vérification de sécurité",
            "3. Paramétrage IA personnalisé selon vos objectifs",
            "4. Activation des analytics avancés et KPIs",
            "5. Intégration communautaire et networking",
            "6. Configuration des alertes et notifications",
            "7. Personnalisation du dashboard",
            "8. Mise en place des automatisations",
            "9. Création des premiers contenus optimisés",
            "10. Analyse des premiers résultats"
          ],
          bestPractices: [
            "✨ Engagement quotidien optimal avec timing IA",
            "🎯 Ciblage précis par niche et données démographiques",
            "💬 Interactions qualitatives basées sur l'analyse sémantique",
            "🤝 Networking stratégique avec les influenceurs clés",
            "📊 Suivi des métriques clés et ajustements en temps réel",
            "🎨 Optimisation du contenu par A/B testing",
            "🔄 Automatisation intelligente des tâches répétitives",
            "📈 Analyse prédictive des tendances",
            "🎯 Personnalisation avancée des interactions",
            "⚡ Optimisation continue par machine learning"
          ],
          tools: [
            "Dashboard personnalisé avec IA prédictive",
            "Analytics en temps réel avec insights automatiques",
            "Planificateur IA avec optimisation horaire",
            "Générateur de contenu assisté par IA",
            "CRM intégré avec scoring automatique",
            "API développeurs avec documentation complète",
            "Suite d'outils de création de contenu",
            "Système de monitoring avancé",
            "Module de reporting automatisé",
            "Intégrations avec les principaux outils"
          ],
          resources: "Bibliothèque complète de ressources premium, templates, études de cas et guides spécialisés par secteur"
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
          main: "Cadre légal complet définissant l'utilisation de la plateforme Mikky, mis à jour régulièrement selon les évolutions réglementaires.",
          sections: [
            {
              title: "📜 Conditions Générales",
              items: [
                "Cadre contractuel et acceptation explicite",
                "Définition détaillée des services premium et gratuits",
                "Modalités d'inscription, de résiliation et de remboursement",
                "Responsabilités des parties et limitations",
                "Propriété intellectuelle et licences",
                "Garanties et limitations de responsabilité",
                "Conditions de modification des services",
                "Durée et résiliation du contrat",
                "Procédures de règlement des litiges",
                "Force majeure et circonstances exceptionnelles"
              ]
            },
            {
              title: "⚖️ Obligations Utilisateurs",
              items: [
                "Respect strict des règles de la communauté",
                "Véracité et mise à jour des informations",
                "Protection des données personnelles",
                "Utilisation éthique et responsable",
                "Signalement des contenus inappropriés",
                "Respect des droits de propriété intellectuelle",
                "Interdiction des pratiques frauduleuses",
                "Obligation de sécurité des accès",
                "Respect des limites d'utilisation",
                "Collaboration en cas d'incident"
              ]
            },
            {
              title: "🔒 Sécurité et Confidentialité",
              items: [
                "Protection renforcée des données utilisateurs",
                "Cryptage de bout en bout des communications",
                "Politique détaillée des cookies",
                "Durées de conservation par type de données",
                "Droits d'accès, modification et suppression",
                "Mesures de sécurité techniques",
                "Procédures de notification des incidents",
                "Audits de sécurité réguliers",
                "Gestion des accès et authentification",
                "Plan de continuité d'activité"
              ]
            },
            {
              title: "📱 Utilisation des Services",
              items: [
                "Conditions d'accès aux services",
                "Limitations techniques et restrictions",
                "Règles de modération du contenu",
                "Procédures de suspension de compte",
                "Conditions de maintenance",
                "Support et assistance technique",
                "Évolutions et mises à jour",
                "Compatibilité des systèmes",
                "Sauvegarde des données",
                "Exportation des données"
              ]
            }
          ]
        }
      },
      { 
        name: "Politique de confidentialité", 
        href: "#",
        content: {
          main: "Protection de vos données selon le RGPD et les normes internationales les plus strictes, avec une transparence totale sur leur utilisation.",
          sections: [
            {
              title: "📊 Données Collectées",
              items: [
                "Informations de profil et préférences utilisateur",
                "Données d'utilisation et analytics détaillés",
                "Historique complet des interactions",
                "Métriques de performance et statistiques",
                "Cookies et traceurs techniques",
                "Données de géolocalisation",
                "Informations de connexion",
                "Données de paiement sécurisées",
                "Communications avec le support",
                "Logs techniques"
              ]
            },
            {
              title: "🛡️ Protection des Données",
              items: [
                "Chiffrement de bout en bout (AES-256)",
                "Stockage sécurisé en Europe (TIER IV)",
                "Contrôle d'accès strict et authentification 2FA",
                "Audits de sécurité trimestriels",
                "Surveillance 24/7 par SOC",
                "Sauvegardes chiffrées quotidiennes",
                "Plan de reprise d'activité",
                "Tests d'intrusion réguliers",
                "Certification ISO 27001",
                "Conformité PCI DSS"
              ]
            },
            {
              title: "🔐 Sécurité Renforcée",
              items: [
                "Protection contre les attaques DDoS",
                "Détection des fraudes en temps réel",
                "Monitoring des accès suspects",
                "Chiffrement en transit et au repos",
                "Cloisonnement des données",
                "Rotation des clés de chiffrement",
                "Anonymisation des données sensibles",
                "Contrôles d'accès granulaires",
                "Journalisation des actions",
                "Alertes de sécurité automatisées"
              ]
            }
          ],
          dpo: {
            name: "Jean-Philippe Roth",
            email: "contact@mikky.fr",
            availability: "Lun-Ven 9h-18h",
            certification: "CIPP/E, CIPM",
            response: "< 24h garanti",
            languages: ["Français", "English", "Spanish"],
            office: "Dax, France"
          }
        }
      },
      { 
        name: "Mentions légales", 
        href: "#",
        content: {
          company: {
            name: "Mikky SAS",
            status: "Société par Actions Simplifiée au capital de 33 000€",
            capital: "33 000€ entièrement libéré",
            registration: "RCS Paris B 123 456 789",
            vat: "FR 12 345 678 901",
            address: "7 rue Saint Pierre, 40100 Dax",
            country: "France",
            directors: "Jean Philippe Roth (Président)",
            contact: {
              phone: "+33 7 68 23 33 479",
              email: "contact@mikky.fr",
              hours: "Lun-Ven 9h-18h"
            }
          },
          hosting: {
            provider: "OVHcloud",
            location: "France (Roubaix)",
            address: "2 rue Kellermann, 59100 Roubaix",
            certification: "ISO 27001, HDS, PCI DSS",
            security: "Protection DDoS, Backup quotidien",
            availability: "99.99% garanti"
          },
          insurance: {
            provider: "AXA Assurances",
            coverage: "Responsabilité Civile Professionnelle",
            amount: "2 000 000€ par sinistre",
            contract: "N°12345678",
            territories: "Monde entier",
            specifics: "Incluant la cyber-assurance"
          },
          compliance: [
            "RGPD/GDPR - Conformité totale",
            "CCPA - California Consumer Privacy Act",
            "ePrivacy - Directive européenne",
            "NIS2 - Cybersécurité",
            "ISO 27001 - Sécurité de l'information",
            "SOC 2 Type II - Contrôles de sécurité",
            "PCI DSS - Sécurité des paiements",
            "HIPAA - Protection des données de santé",
            "CSA STAR - Cloud Security",
            "Privacy Shield - Transferts internationaux"
          ],
          certifications: [
            "ISO 27001:2013",
            "SOC 2 Type II",
            "CSA STAR Level 2",
            "PCI DSS Level 1",
            "HDS Certified"
          ],
          legal_advisors: {
            cabinet: "Cabinet ABC Law",
            address: "1 rue du Droit, 75008 Paris",
            contact: "Me Jean Legrand"
          }
        }
      }
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
    return (
      <div className="space-y-8">
        {/* Section principale */}
        {content.main && (
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6">
            <p className="text-gray-800 text-lg font-medium">{content.main}</p>
          </div>
        )}
        
        {/* Détails */}
        {content.details && (
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Points clés</h4>
            <div className="grid gap-3">
              {content.details.map((detail, index) => (
                <p key={index} className="text-gray-700 flex items-center gap-2 text-lg">
                  {detail}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Équipe */}
        {content.team && (
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Notre équipe</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.team.map((member, index) => (
                <p key={index} className="text-gray-700 text-lg">{member}</p>
              ))}
            </div>
          </div>
        )}

        {/* Valeurs */}
        {content.values && (
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Nos valeurs</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.values.map((value, index) => (
                <p key={index} className="text-gray-700 text-lg">{value}</p>
              ))}
            </div>
          </div>
        )}

        {/* Questions fréquentes */}
        {content.commonQuestions && (
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Questions fréquentes</h4>
            {content.commonQuestions.map((qa, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <p className="font-bold text-gray-800 text-lg mb-3">{qa.q}</p>
                <p className="text-gray-700 text-lg">{qa.a}</p>
              </div>
            ))}
          </div>
        )}

        {/* Sections légales */}
        {content.sections && (
          <div className="space-y-6">
            {content.sections.map((section, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  {section.title}
                </h4>
                <div className="space-y-4">
                  {section.items?.map((item, itemIndex) => (
                    <p key={itemIndex} className="text-gray-700 text-lg">
                      • {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Informations société */}
        {content.company && (
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Informations société</h4>
            <div className="grid gap-3 text-lg">
              <p className="text-gray-700">Nom : <span className="font-medium">{content.company.name}</span></p>
              <p className="text-gray-700">Statut : <span className="font-medium">{content.company.status}</span></p>
              <p className="text-gray-700">Capital : <span className="font-medium">{content.company.capital}</span></p>
              <p className="text-gray-700">RCS : <span className="font-medium">{content.company.registration}</span></p>
              <p className="text-gray-700">TVA : <span className="font-medium">{content.company.vat}</span></p>
              <p className="text-gray-700">Adresse : <span className="font-medium">{content.company.address}</span></p>
            </div>
          </div>
        )}

        {/* DPO */}
        {content.dpo && (
          <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
            <h4 className="text-xl font-bold text-blue-800 mb-4">Contact DPO</h4>
            <div className="grid gap-3 text-lg">
              <p className="text-blue-700">Nom : <span className="font-medium">{content.dpo.name}</span></p>
              <p className="text-blue-700">Email : <span className="font-medium">{content.dpo.email}</span></p>
              <p className="text-blue-700">Disponibilité : <span className="font-medium">{content.dpo.availability}</span></p>
            </div>
          </div>
        )}

        {/* Impact et Vision */}
        {(content.impact || content.vision) && (
          <div className="grid gap-4">
            {content.impact && (
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6">
                <p className="text-gray-800 font-medium text-lg">{content.impact}</p>
              </div>
            )}
            {content.vision && (
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 italic text-lg">{content.vision}</p>
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
                      className="text-gray-400 hover:text-white transition-colors duration-200 font-montserrat cursor-pointer flex items-center gap-2"
                    >
                      {link.name}
                      <span className="text-xs">→</span>
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
              className="bg-white rounded-xl p-8 md:p-10 relative z-10 max-w-4xl w-full shadow-2xl max-h-[85vh] overflow-y-auto"
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