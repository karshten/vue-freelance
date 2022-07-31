<template>
    <div class="tag">
        <button class="tag__btn">{{tag}}</button>
    </div>
</template>

<script>
    export default {
        props: ['tag'],
        name: "IntroTag"
    }
</script>

<style scoped lang="scss">
    @import "src/assets/scss/variables.scss";

    .tag {
        display: inline-block;
        margin-right: 10px;

        &__btn {
            background: #F7F8FA;
            box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
            border-radius: 30px;
            padding: 9px 14.5px;
            color: $text-light-blue;
            font-size: 12px;
            font-weight: 800;
            border: none;
            cursor: pointer;

            &:hover {
                padding: 8px 13.5px;
                border: 1px solid $text-light-blue;
            }
        }
    }
</style>