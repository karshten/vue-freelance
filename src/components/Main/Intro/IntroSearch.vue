<template>
    <div class="search">
        <button class="search__icon">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M12.5006 11.0006H11.7106L11.4306 10.7306C12.6306 9.33063 13.2506 7.42063 12.9106 5.39063C12.4406 2.61063 10.1206 0.390626 7.32063 0.0506256C3.09063 -0.469374 -0.469374 3.09063 0.0506256 7.32063C0.390626 10.1206 2.61063 12.4406 5.39063 12.9106C7.42063 13.2506 9.33063 12.6306 10.7306 11.4306L11.0006 11.7106V12.5006L15.2506 16.7506C15.6606 17.1606 16.3306 17.1606 16.7406 16.7506C17.1506 16.3406 17.1506 15.6706 16.7406 15.2606L12.5006 11.0006ZM6.50063 11.0006C4.01063 11.0006 2.00063 8.99063 2.00063 6.50063C2.00063 4.01063 4.01063 2.00063 6.50063 2.00063C8.99063 2.00063 11.0006 4.01063 11.0006 6.50063C11.0006 8.99063 8.99063 11.0006 6.50063 11.0006Z"
                      fill="#C3CAD9"/>
            </svg>
        </button>
        <input placeholder="Search..." class="search__input" type="text">
        <button class="search__btn">Search</button>
    </div>
</template>

<script>
    export default {
        name: "IntroSearch"
    }
</script>

<style scoped lang="scss">
    @import "../../../assets/scss/variables";

    .search {
        width: 350px;
        margin-top: 67px;
        background: #FFFFFF;
        box-shadow: 0 2px 5px rgba(54, 61, 77, 0.03);
        z-index: 100000;
        position: relative;

        &__input {
            width: 100%;
            border: none;
            padding: 18.3px 80px;
            color: $text-light-blue;
            font-size: 13px;
            font-weight: 700;
            border-radius: 30px;


            &::placeholder {
                color: $text-light-blue;
                font-size: 13px;
                font-weight: 700;
            }
        }

        &__btn {
            @include button(10px 19px);
            box-shadow: 0px 10px 30px rgba(51, 97, 255, 0.2);
            right: 16px;
            top: 9px;
        }

        &__icon {
            padding: 0px 6px;
            height: 99%;
            border-radius: 30px 0 0 30px;
            border: none;
            left: 26px;
        }

        &__icon, &__btn {
            cursor: pointer;
            position: absolute;
        }
    }
</style>