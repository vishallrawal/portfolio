import PortfolioImage from "../assets/img-projects/portfolio.png";
import ShopZoneImage from "../assets/img-projects/shopzone.jpg";
import MovieImage from "../assets/img-projects/movie.png";
import AdmissionImage from "../assets/img-projects/admission.png";

export const proyectos = [
  {
    titulo: "Personal Portfolio Website",
    descripcion:
      "A modern and responsive portfolio website built to showcase my skills, projects, resume, and professional profile.",
    imagen: PortfolioImage.src,
    tecnologias: ["HTML", "CSS", "JavaScript", "Astro", "Tailwind CSS"],
    demo: "#",
    codigo: "#",
    categoria: "frontend",
  },

  {
    titulo: "ShopZone - Online Grocery Store",
    descripcion:
      "An online grocery shopping website featuring dynamic product loading, JSON integration, AJAX functionality, responsive design, and interactive user experience.",
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
    descripcion:
      "A responsive movie ticket booking website with movie listings, seat selection, booking interface, and user-friendly design.",
    imagen: MovieImage.src,
    tecnologias: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    demo: "#",
    codigo: "#",
    categoria: "frontend",
  },

  {
    titulo: "Online Admission System",
    descripcion:
      "A web-based admission management system with course information, admission forms, validation, and interactive user experience.",
    imagen: AdmissionImage.src,
    tecnologias: ["HTML", "CSS", "JavaScript", "jQuery", "JSON"],
    demo: "#",
    codigo: "#",
    categoria: "frontend",
  },
];