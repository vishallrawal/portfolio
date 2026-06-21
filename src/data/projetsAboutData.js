import PortfolioImage from "../assets/img-projects/portfolio.png";
import ShopZoneImage from "../assets/img-projects/shopzone.jpg";
import MovieImage from "../assets/img-projects/movie.png";
import AdmissionImage from "../assets/img-projects/admission.png";

export const proyectos = [
  {
    titulo: "Personal Portfolio Website",
    imagen: PortfolioImage.src,
    tecnologias: ["Astro", "JavaScript", "Tailwind CSS"],
    demo: "#",
    codigo: "#",
    categoria: "frontend",
  },

  {
    titulo: "ShopZone - Online Grocery Store",
    imagen: ShopZoneImage.src,
    tecnologias: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "jQuery",
      "AJAX",
      "JSON",
    ],
    demo: "#",
    codigo: "#",
    categoria: "frontend",
  },

  {
    titulo: "Movie Ticket Booking System",
    imagen: MovieImage.src,
    tecnologias: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    demo: "#",
    codigo: "#",
    categoria: "frontend",
  },

  {
    titulo: "Online Admission System",
    imagen: AdmissionImage.src,
    tecnologias: ["HTML", "CSS", "JavaScript", "jQuery", "JSON"],
    demo: "#",
    codigo: "#",
    categoria: "frontend",
  },
];