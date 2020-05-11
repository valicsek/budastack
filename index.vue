<template lang="pug">
    div
      Nav
      section.max-w-3xl.mx-auto.py-20.px-5.text-center(class="lg:py-20 lg:px-0")
        h1.text-5xl.font-bold(class="lg:text-6xl") Are you looking for a Fullstack Developer?
        p.text-2xl.font-thin.mt-5 I can help you to build prototypes, create UI sketches, improve your website and build scalable and maintainable applications.
        div.mt-10
          button.bg-blue-500.text-white.font-bold.shadow-md.rounded.px-12.py-5.mr-5(class="w-full lg:w-auto") Show your works
          button.border.font-bold.rounded.px-12.py-5(class="w-full lg:w-auto mt-2 lg:mt-0") I want to work with you
      section.px-5(class="lg:py-10 lg:px-0")
        h2.max-w-5xl.mx-auto.text-4xl.mb-10.text-center(class="lg:text-6xl") Technologies I Use
        .flex.overflow-x-scroll
          img.w-24.h-24.mr-10(loading="lazy" src='https://miro.medium.com/max/800/1*Pk2mZo1cBqfVqQi-mtAkuA.png' alt='vue')
          img.w-24.h-24.mr-10(loading="lazy" src='https://webpack.js.org/dcd5e077cf9f54ebe52d4f7ebe8c3080.png' alt='webpack')
          img.w-24.h-24.mr-10(loading="lazy" src='https://cdn.iconscout.com/icon/free/png-256/docker-226091.png' alt='docker')
          img.w-24.h-24.mr-10(loading="lazy" src='https://images.opencollective.com/typeorm/00c882e/logo/256.png' alt='typeorm')
          img.w-24.h-24.mr-10(loading="lazy" src='https://cdn.iconscout.com/icon/free/png-256/nodejs-2-226035.png' alt='nodejs')
          img.w-24.h-24.mr-10(loading="lazy" src='https://cdn.iconscout.com/icon/free/png-256/sass-226054.png' alt='sass')
          img.w-24.h-24.mr-10(loading="lazy" src='https://d2m06gn7cjwia2.cloudfront.net/express.png' alt='express node')
          img.w-24.h-24.mr-10(loading="lazy" src='https://vectorified.com/images/aws-icon-png-19.png' alt='amazon s3 static file storage')
          img.w-24.h-24.mr-10(loading="lazy" src='https://i1.wp.com/www.macbed.com/wp-content/uploads/2019/04/69721.png?w=620&ssl=1' alt='framer x')
          img.w-24.h-24.mr-10(loading="lazy" src='https://cdn.iconscout.com/icon/free/png-256/bootstrap-226077.png' alt='bootstrap css framework')
          img.w-24.h-24.mr-10(loading="lazy" src='https://d2.alternativeto.net/dist/icons/bulma_95302.png?width=128&height=128&mode=crop&upscale=false' alt='bulma css framework')
          img.w-24.h-24.mr-10(loading="lazy" src='https://images.opencollective.com/tailwindcss/5cfb17e/logo/256.png' alt='tailwind css')
          img.w-24.h-24.mr-10(loading="lazy" src='https://cdn.iconscout.com/icon/free/png-256/gulp-3-1175163.png' alt='gulp js')
          img.w-24.h-24.mr-10(loading="lazy" src='https://cdn.iconscout.com/icon/free/png-256/sencha-282968.png' alt='sencha ext js')
        p.text-xs.text-gray-400 Scroll right to see more
      section.pt-20
        div.max-w-5xl.mx-auto.px-5(class="lg:px-0")
          h2.text-6xl.text-center.mb-5 Designs
        .flex.overflow-x-scroll
          img(loading="lazy" src="/images/spotify.png")
          img(loading="lazy" src="/images/measurement.png")
      section.bg-black.py-20
        div.max-w-5xl.mx-auto.py-5.px-5(class="lg:px-0")
          h2.text-4xl.mb-5.text-white.text-center(class="lg:text-6xl") Maybe you might be interested
          p.text-2xl.text-center.font-thin.my-5.text-white I like to take notes and share my knowledge. You may find some relevant information which helps you to decide.
          .grid.grid-cols-1.grid-rows-1.grid-flow-row.gap-2(class="sm:grid-cols-2 lg:grid-cols-3")
            Card(
              v-for="blog of $site.pages.filter(i => i.regularPath.includes('/blog/'))"
              :tag='blog.frontmatter.tag'
              :title="blog.frontmatter.title"
              :content='blog.frontmatter.description'
              :link='blog.path')
      Footer
</template>
<script>
import Nav from "./.vuepress/components/Nav";
import Footer from "./.vuepress/components/Footer";
import Card from "./.vuepress/components/Card";

export default {
  components: {
    Nav,
    Footer,
    Card
  },
};
</script>

<style lang="stylus">
@import './.vuepress/theme/styles/theme.styl';

</style>
