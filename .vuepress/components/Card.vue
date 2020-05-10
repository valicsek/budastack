<template lang="pug">
    div.card
        // img.w-full(src='https://via.placeholder.com/300')
        .card-body
            a(:href='link').text-2xl.font-bold {{ title }}
            p.mt-2 {{ content }}
            // span.block.text-xs {{ tag }} 
</template>

<script>
export default {
    props: ['tag', 'title', 'content', 'link']
}
</script>

<style lang="styl">
.card {
    @apply bg-white;
    min-width: 320px;

    img {
        @apply m-0;
        height: 250px;
    }

    .card-body {
        @apply p-8;
    }
}
</style>