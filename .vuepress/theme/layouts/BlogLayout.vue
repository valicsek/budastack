<template lang="pug">
    section(class='px-4 md:px-0')
        div.bg-black.text-white
            Nav
        div.flex.flex-wrap.min-h-screen.max-w-6xl.mx-auto.py-20
            div(class="w-full lg:w-2/3 lg:pr-10")
                Content
                Disqus
            div(class="w-full lg:w-1/3")
              div.border.p-10(style="height:fit-content;")
                h2.text-center About Budastack
                p Budastack is a ...
        Footer
</template>

<style lang="stylus">
@import '../styles/theme.styl';

h1,h2,h3 {
    @apply mb-4 text-4xl;
}

p {
    @apply pb-4 font-thin;
}

pre {
    @apply border p-5 my-5;
    width: 100%;
    overflow-x: auto;
}
</style>
