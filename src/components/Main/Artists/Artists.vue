<template>
    <section class="artists">
        <div class="container">
            <h2 class="artists__title">Best <span>Artists</span> for You</h2>
            <div class="artists__internal-title"><h2>BEST ARTISTS</h2></div>
            <ArtistsList/>
        </div>
    </section>
</template>

<script>
    import ArtistsList from "./ArtistsList.vue";

    export default {
        name: "Artists",
        components: {ArtistsList}
    }
</script>

<style lang="scss">
    @import "../../../assets/scss/variables";

    .artists {
        max-width: 100%;
        margin-top: 95px;

        & .container {
            position: relative;
        }

        &__content {
            max-width: 100%;
            display: flex;
            justify-content: space-between;
        }

        &__title {
            margin-bottom: 95px;
            position: relative;
            text-align: center;
            font-size: 24px;
            font-weight: 600;
            color: $mid-dark-blue;

            & span {
                font-weight: 900;
            }
        }

        &__internal-title {
            top: -75px;
            left: 15%;
            opacity: 0.03;
            position: absolute;

            & h2 {
                font-size: 120px;
                color: #002881;
                font-weight: 800;
            }
        }
    }
</style>