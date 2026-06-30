import PortfolioImage from "../assets/img-projects/portfolio.png";
import FlixCartImage from "../assets/img-projects/flixcart.jpg";
import MovieImage from "../assets/img-projects/movie.png";
import ChatbotImage from "../assets/img-projects/chatbot.jpg";

export const proyectos = [
  {
    titulo: "Personal Portfolio Website",
    imagen: PortfolioImage.src,
    tecnologias: ["Astro", "React", "Tailwind CSS", "CSS3"],
    demo: "https://vishallrawal.github.io/portfolio/",
    codigo: "https://github.com/vishallrawal/portfolio",
    categoria: "frontend",
  },
  {
    titulo: "FlixCart - Online Shopping Website",
    imagen: FlixCartImage.src,
    tecnologias: ["TypeScript", "React", "Tailwind CSS", "Vite"],
    demo: "https://github.com/vishallrawal/FlixCart-Website",
    codigo: "https://github.com/vishallrawal/FlixCart-Website",
    categoria: "frontend",
  },
  {
    titulo: "Movie Ticket Booking System",
    imagen: MovieImage.src,
    tecnologias: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    demo: "https://github.com/vishallrawal/movie-website",
    codigo: "https://github.com/vishallrawal/movie-website",
    categoria: "frontend",
  },
  {
    titulo: "Chatbot Conversational Agent",
    imagen: ChatbotImage.src,
    tecnologias: ["HTML5", "CSS3", "JavaScript", "Node.js"],
    demo: "https://github.com/vishallrawal/chatbot",
    codigo: "https://github.com/vishallrawal/chatbot",
    categoria: "fullstack",
  }
];