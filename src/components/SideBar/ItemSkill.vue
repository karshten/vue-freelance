<template>
    <div class="skills-list__item">
        <img :src="img" alt="img">
        <p class="skills-list__item__title">{{title}}</p>
        <div class="skills-list__item__count">{{count}}</div>
    </div>
</template>

<script>
    export default {
        name: "ItemSkill",
        props: ['img', 'title', 'count']
    }
</script>

<style lang="scss" scoped>
    .skills-list {
        display: flex;

        &__item {
            color: #fff;
            padding: 14px;
            width: 100%;
            background-color: inherit;
            border: none;
            display: flex;
            margin-bottom: 12px;
            border-radius: 10px;
            transition: .3s ease;
            font-size: 12px;
            font-weight: 700;

            &__title {
                display: block;
                margin-left: 24px;
            }

            &__count {
                margin-left: auto;
            }
        }
    }
</style>