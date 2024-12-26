module.exports = {
    plugins: {
      tailwindcss: {},         // Load Tailwind CSS
      autoprefixer: {},        // Add vendor prefixes for cross-browser support
      cssnano: process.env.NODE_ENV === 'production' ? {} : false // Minify CSS in production
    }
  };
  