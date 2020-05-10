<template lang="pug">
    section(class='px-4 md:px-0')
        Nav
        div.flex.flex-wrap.min-h-screen.max-w-6xl.mx-auto.py-5
            div(class="w-2/3")
                Content
            div(class="w-1/3")
                h2 Find more topic
        Footer
</template>

<style lang="stylus">
@import '../styles/theme.styl';

h1,h2,h3 {
    @apply mb-4;
}

p {
    @apply pb-4;
}
</style>
