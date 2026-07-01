import PortfolioImage from "../assets/img-projects/portfolio.png";
import VidyaEnrollImage from "../assets/img-projects/vidyaenroll.jpg";
import FlixCartImage from "../assets/img-projects/flixcart.jpg";
import MovieImage from "../assets/img-projects/movie.png";
import ChatbotImage from "../assets/img-projects/chatbot.jpg";
import GuessingGameImage from "../assets/img-projects/guessing-game.jpg";

export const proyectos = [
  {
    titulo: "Personal Portfolio Website",
    descripcion:
      "A premium, state-of-the-art developer showcase with a dynamic dark theme, glassmorphic layout, glowing gradients, interactive skills marquee, and custom blog system.",
    imagen: PortfolioImage.src,
    tecnologias: ["Astro", "React", "Tailwind CSS", "JavaScript", "CSS3"],
    demo: "https://vishallrawal.github.io/portfolio/",
    codigo: "https://github.com/vishallrawal/portfolio",
    categoria: "frontend",
  },
  {
    titulo: "VidyaEnroll - AI Admission Portal",
    descripcion:
      "An advanced, AI-powered academic admission council portal featuring stream eligibility calculations, multi-step forms, digital document upload, mock UPI/card payment checkout, and a student/admin dashboard.",
    imagen: VidyaEnrollImage.src,
    tecnologias: ["React", "TypeScript", "Vite", "Bootstrap 5", "Gemini AI", "CSS3"],
    demo: "https://vishallrawal.github.io/vidhyaenroll-admission-system/",
    codigo: "https://github.com/vishallrawal/vidhyaenroll-admission-system",
    categoria: "frontend",
  },
  {
    titulo: "FlixCart - Online Shopping Website",
    descripcion:
      "A full-fledged responsive e-commerce application featuring product catalogs, state-managed shopping cart, user checkout simulation, search/filter, and premium styling.",
    imagen: FlixCartImage.src,
    tecnologias: ["TypeScript", "React", "Tailwind CSS", "Vite", "JSON"],
    demo: "https://vishallrawal.github.io/FlixCart-Website",
    codigo: "https://github.com/vishallrawal/FlixCart-Website",
    categoria: "frontend",
  },
  {
    titulo: "Movie Ticket Booking System",
    descripcion:
      "A rich cinematic booking application with a customizable theatre seat matrix, movie scheduling grid, real-time total calculations, and ticket summary receipts.",
    imagen: MovieImage.src,
    tecnologias: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "DOM Manipulation"],
    demo: "https://github.com/vishallrawal/movie-website",
    codigo: "https://github.com/vishallrawal/movie-website",
    categoria: "frontend",
  },
  {
    titulo: "Chatbot Conversational Agent",
    descripcion:
      "An interactive conversational chatbot interface built for rapid, real-time message handling, featuring mock automated AI responses, typing indicators, and message history logs.",
    imagen: ChatbotImage.src,
    tecnologias: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express"],
    demo: "https://github.com/vishallrawal/chatbot",
    codigo: "https://github.com/vishallrawal/chatbot",
    categoria: "fullstack",
  },
  {
    titulo: "Number Guessing CLI Game",
    descripcion:
      "A classic algorithmic CLI terminal game developed in C, featuring dynamic difficulty levels, randomized target generators, guess counters, and high score tracking.",
    imagen: GuessingGameImage.src,
    tecnologias: ["C Programming", "CLI", "Algorithms", "Randomization"],
    demo: "https://github.com/vishallrawal/number-guessing-game",
    codigo: "https://github.com/vishallrawal/number-guessing-game",
    categoria: "backend",
  }
];