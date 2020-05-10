const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: ["./.vuepress/theme/**/*.*", "./!(node_modules)/**/*.md", "./*.md"],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

module.exports = {
  title: "Budastack",
  description: "Just playing around",
  postcss: {
    plugins: [require("tailwindcss")("./tailwind.config.js"), 
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ],
  },
  plugins: {
    'disqus': {
      shortname: 'budastack'
    },
    'vuepress-plugin-dehydrate': {
      // disable SSR
      noSSR: '404.html',
      // remove scripts
      noScript: [
        'index.html',
        'blog/**.html',
      ],
    },
  }
};
