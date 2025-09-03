import { FaBalanceScale, FaBuilding, FaSearch,FaFileContract } from "react-icons/fa";
export  const services = [
    {
        title: "Création d'Entreprise",
        description: "Accompagnement pour la constitution et le lancement de votre société.",
        color: "bg-info-subtle",
        icon: <FaBuilding className="text-primary" size={48} />,
        to: "/ServicesScreens/Creation-Entreprises"
    },
    {
        title: "Audit Juridique",
        description: "Diagnostic complet pour sécuriser vos opérations et prévenir les risques.",
        color: "bg-success-subtle",
        icon: <FaSearch className="text-success" size={48} />,
        to: "/ServicesScreens/Audit-Juridique"
    },
    {
        title: "Rédaction & Négociation de Contrats",
        description: "Rédaction sur-mesure et sécurisation juridique de vos accords.",
        color: "bg-warning-subtle",
        icon: <FaFileContract className="text-warning" size={48} />,
        to: "/ServicesScreens/Redactions-Negociations"
    },
    {
        title: "Gestion des Litiges",
        description: "Représentation devant les juridictions et solutions amiables.",
        color: "bg-danger-subtle",
        icon: <FaBalanceScale className="text-danger" size={48} />,
        to: "/ServicesScreens/Gestions-Litiges"
    }
];