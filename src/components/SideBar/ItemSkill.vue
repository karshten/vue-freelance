<template>
    <div class="skills-list__item">
        <img :src="img" alt="img">
    </div>
</template>

<script>
    export default {
        name: "ItemSkill",
        props: ['img', 'title', 'count']
    }
</script>

<style scoped>

</style>