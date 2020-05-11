const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: [
    "./.vuepress/theme/**/*.*",
    "./!(node_modules)/**/*.md",
    "./.vuepress/components/**/*.vue",
    "./**/*.md",
    "./**/*.vue"
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

module.exports = {
  title: "Web, UI and Cloud | Budastack",
  description: "Web, UI and Cloud. Web and Software development",
  themeConfig: {
    author: 'Budastack',
    domain: 'https://budastack.com'
  },
  postcss: {
    plugins: [require("tailwindcss")("./tailwind.config.js"), 
    // require("autoprefixer"),
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
      // Remove scripts
      // For a static content where we don't use VUE it is not necessary to have.
      noScript: [
        'index.html',
        'blog/**.html',
      ],
    },
    // SEO PART
    'seo': { },
    'sitemap': {
      hostname: 'https://budastack.com'
    },
  }
};
