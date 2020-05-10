module.exports = {
  title: "Budastack",
  description: "Just playing around",
  postcss: {
    plugins: [require("tailwindcss")("./tailwind.config.js"), require("autoprefixer")
  ],
  },
  plugins: {
    'disqus': {
      shortname: 'budastack'
    }
  }
};
