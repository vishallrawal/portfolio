export default defineConfig({
  site: "https://vishallrawal.github.io",
  base: "/portfolio/",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});