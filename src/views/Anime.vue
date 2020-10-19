<template>
    <div>
        <h1>{{ anime.canonicalTitle }}</h1>
        <div class="anime-grid">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'anime',
    data() {
        return {
            anime: null
        }
    },
        created() {
        this.anime = this.$route.params.data
    },

}
</script>

<style>

</style>