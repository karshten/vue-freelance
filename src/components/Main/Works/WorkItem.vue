<template>
    <li class="work">
        <div class="works__icons">
            <div class="works__icon">
                <img :src="work.icon" :alt="work.title">
            </div>
            <div :class="work.color" class="work__number">{{work.number}}</div>
        </div>
        <div class="work__text">
            <h4 class="work__title">{{work.title}}</h4>
            <p class="work__description">{{work.description}}</p>
        </div>
    </li>
</template>

<script>
    export default {
        name: "WorkItem",
        props: ['work']
    }
</script>

<style scoped lang="scss">
    @import "src/assets/scss/variables.scss";

    .work {
        position: relative;
        cursor: pointer;
        background: #fff;
        box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
        border-radius: 15px;
        padding: 50px 48px 40px;
        width: 24%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: .3s ease-in-out;

        &:hover, &:focus {
            transform: scale(1.05);
        }

        &__title {
            margin: 35px 0 20px;
            text-align: center;
            font-size: 14px;
            font-weight: 700;
            color: $mid-dark-blue;
        }

        &__description {
            line-height: 20px;
            text-align: center;
            font-size: 12px;
            font-weight: 700;
            color: $text-light-blue;
        }

        &__number {
            position: absolute;
            top: 26%;
            left: 50px;
            color: #fff;
            font-size: 12px;
            font-weight: 800;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .blue {
        background: $mid-light-blue;
        box-shadow: 0px 10px 30px rgba(51, 97, 255, 0.15);
    }

    .orange {
        background: $orange;
        box-shadow: 0px 10px 30px rgba(255, 102, 51, 0.15);
    }

    .green {
        background: $salad-green;
        box-shadow: 0px 10px 30px rgba(41, 204, 57, 0.15);
    }

    .purple {
        background: $purple;
        box-shadow: 0px 10px 30px rgba(136, 51, 255, 0.15);
    }
</style>