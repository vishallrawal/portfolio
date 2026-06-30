export const blogPosts = [
  {
    id: "tailwindcss-v4-guide",
    title: "Mastering Tailwind CSS v4: What's New & How to Upgrade",
    excerpt: "Explore the new compiler engine, native CSS variable configuration, and redesigned developer experience in Tailwind CSS v4.",
    category: "CSS & Design",
    publishedAt: "2026-06-25",
    readTime: "5 min read",
    author: {
      name: "Vishal Rawal",
      avatar: "/portfolio/images/vishal-avatar.png"
    },
    tags: ["CSS", "Tailwind", "Frontend"],
    content: `Tailwind CSS v4 introduces a ground-up redesign of the compiler, shifting to Rust-based performance optimizations and a streamlined configuration system that runs entirely inside your stylesheet. In this post, we'll dive deep into the new features and explore how you can leverage them to build gorgeous, hyper-fast user interfaces.

### What's New in Tailwind v4?

1. **Rust-Powered Engine**: The compile times are up to 10x faster, making hot-reloads instantaneous even on massive codebases.
2. **CSS-First Configuration**: Instead of maintaining a \`tailwind.config.js\` file, configuration now happens directly in your CSS using the \`@theme\` directive:
\`\`\`css
@import "tailwindcss";

@theme {
  --color-primary: #7836cf;
  --color-secondary: #512092;
  --font-display: "Space Grotesk", sans-serif;
}
\`\`\`
3. **Automatic Content Detection**: You no longer need to write a list of globs for content detection. The parser automatically scans project files for utilized utility classes.
4. **First-Class CSS Variables**: Every color, font, spacing unit, and utility class maps directly to standard CSS Custom Variables, enabling seamless runtime adjustments.

### How to Upgrade

Upgrading to Tailwind v4 is simpler than ever before. Simply replace your old configuration file, import the new Tailwind package via Vite or PostCSS, and migrate key configs to standard CSS variables inside your global stylesheet.

It marks a major step forward for modern web design workflows, making stylesheets cleaner, smaller, and vastly more performant.`
  },
  {
    id: "astro-islands-architecture",
    title: "Why Astro is My Go-To Framework for Content Sites & Portfolios",
    excerpt: "An in-depth look at Astro's Islands Architecture, zero-JavaScript overhead, and integration of multi-framework components.",
    category: "Frameworks",
    publishedAt: "2026-06-18",
    readTime: "6 min read",
    author: {
      name: "Vishal Rawal",
      avatar: "/portfolio/images/vishal-avatar.png"
    },
    tags: ["Astro", "React", "Web Perf"],
    content: `When building web applications, developers frequently face a choice between the high interactivity of modern Single Page Applications (SPAs) and the fast load times of Static Site Generators (SSGs). Astro bridges this gap perfectly with its innovative **Islands Architecture**.

### The Problem with Heavy JS Frameworks

Standard frameworks ship massive amounts of JavaScript to the browser just to render static text and images. This hurts mobile page speeds, SEO metrics, and overall accessibility.

### Enter Astro Islands

Astro renders your pages to clean, zero-JS HTML on the server. If a page requires interactive elements (such as a dropdown, a search bar, or an animated modal), you can place them as standalone "islands" of interactivity using React, Vue, Svelte, or solid JS:

\`\`\`astro
---
import Header from '../components/Header.astro'; // Renders to static HTML
import InteractiveSearch from '../components/Search.jsx'; // React component
---
<Header />
<InteractiveSearch client:visible />
\`\`\`

The \`client:visible\` modifier tells Astro to load the JavaScript for this component *only* when it enters the viewport. Until then, it is completely static HTML.

### Key Benefits

* **Performance First**: Zero-JavaScript by default translates to perfect Lighthouse scores.
* **Framework Agnostic**: Mix and match React, Vue, and Angular components on the same page.
* **Unparalleled DX**: A file-based routing system, intuitive template language, and excellent integration ecosystems (Tailwind, MDX, etc.) make building websites a joy.`
  },
  {
    id: "building-mern-chatbots",
    title: "Building Real-Time Chatbots with Node.js and Socket.io",
    excerpt: "Learn how to build, optimize, and deploy highly responsive, real-time conversational agents using MERN and WebSockets.",
    category: "Backend",
    publishedAt: "2026-06-10",
    readTime: "8 min read",
    author: {
      name: "Vishal Rawal",
      avatar: "/portfolio/images/vishal-avatar.png"
    },
    tags: ["NodeJS", "WebSockets", "Chatbot"],
    content: `WebSockets represent a fundamental shift in how client-server communications are designed. Unlike HTTP, which requires client polling, WebSockets open a persistent, bi-directional connection that allows updates to stream instantly. In this article, we'll review the architecture of building real-time chatbot agents.

### Why WebSockets for Chat?

Using REST APIs for chat requires continuous polling or long-polling. This creates massive overhead and unnecessary server load. WebSockets solve this by enabling instant communication channels with minimal packet overhead.

### Code Sample: Express & Socket.io

Below is a simplified architecture of a real-time message handler in a Node.js environment:

\`\`\`javascript
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

io.on('connection', (socket) => {
  console.log('User connected: ' + socket.id);

  socket.on('send_message', (data) => {
    // Process message, pass to chatbot engine, and reply
    const botReply = generateReply(data.text);
    socket.emit('receive_message', {
      text: botReply,
      sender: 'bot',
      timestamp: new Date()
    });
  });
});
\`\`\`

By coupling this with a frontend interface built in React, we create a responsive conversation loop that feels instantaneous to the user. Instantly render messages, handle typing indicators, and integrate rich markdown replies seamlessly.`
  }
];
