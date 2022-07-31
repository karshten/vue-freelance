<template>
    <div class="sidebar__account account">
        <div class="account__avatar">
            <img src="src/assets/images/Main/userAvatar.png" alt="avatar">
        </div>
        <div class="account__info">
            <p class="account__info__name">Johnny Perry</p>
            <p class="account__info__email">johny-perry@gmail.com</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AccountInfo"
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/variables.scss";

    .account {
        margin: 25px 0 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &__avatar {
            padding: 7px;
            border: 2px solid $mid-light-blue;
            border-radius: 50%;
            margin-bottom: 30px;
        }

        &__info {
            font-weight: 700;
            text-align: center;

            &__name {
                color: #fff;
                font-size: 15px;
                margin-bottom: 15px;
            }

            &__email {
                color: $mid-dark-blue;
                font-size: 13px;
            }
        }
    }
</style>