import { FaBalanceScale, FaBuilding, FaHandshake, FaGavel } from "react-icons/fa";
export const expertises = [
  {
    title: "Droit des Sociétés",
    excerpt: "Structuration juridique des entreprises et optimisation de la gouvernance.",
    imageUrl: "/assets/img/services-expertises/Reunion.jpg",
    to: "/Expertises/Droits-Societes",
    icon: <FaBuilding className="text-primary" size={35} />,
    alt: "Signature de documents juridiques pour la création d'une société"
  },
  {
    title: "Contrats & Négociations",
    excerpt: "Sécurisation juridique des relations contractuelles et stratégie de négociation.",
    imageUrl: "/assets/img/services-expertises/Signature.jpg",
    to: "/Expertises/Contrats-Negociations",
    icon: <FaHandshake className="text-primary" size={35} />,
    alt: "Négociation et signature de contrats commerciaux entre deux parties"
  },
  {
    title: "Contentieux & Arbitrage",
    excerpt: "Gestion proactive des litiges et arbitrage national ou international.",
    imageUrl: "/assets/img/services-expertises/Juge.jpg",
    to: "/Expertises/Contentieux-Arbitrages",
    icon: <FaBalanceScale className="text-primary" size={35} />,
    alt: "Représentation devant les juridictions lors d'un contentieux"
  },
  {
    title: "Fusions & Acquisitions",
    excerpt: "Accompagnement stratégique dans les opérations de croissance externe.",
    imageUrl: "/assets/img/services-expertises/Signature2.jpg",
    to: "/Expertises/Fusions-Acquisitions",
    icon: <FaGavel className="text-primary" size={35} />,
    alt: "Réunion d'experts pour une opération de fusion-acquisition d'entreprise"
  }
];