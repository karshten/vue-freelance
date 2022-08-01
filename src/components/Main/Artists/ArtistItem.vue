<template>
    <div class="artist">
        <div class="artist__account">
            <img class="artist__avatar" :src="artist.imgUrl" alt="avatar">
            <div class="artist__info">
                <h3 class="artist__name">{{artist.name}}</h3>
                <p class="artist__job">{{artist.job}}</p>
            </div>
            <button class="artist__more-about-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="4" viewBox="0 0 14 4" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M2.2001 0.400002C1.3201 0.400002 0.600098 1.12 0.600098 2C0.600098 2.88 1.3201 3.6 2.2001 3.6C3.0801 3.6 3.8001 2.88 3.8001 2C3.8001 1.12 3.0801 0.400002 2.2001 0.400002ZM11.8001 0.400002C10.9201 0.400002 10.2001 1.12 10.2001 2C10.2001 2.88 10.9201 3.6 11.8001 3.6C12.6801 3.6 13.4001 2.88 13.4001 2C13.4001 1.12 12.6801 0.400002 11.8001 0.400002ZM7.0001 0.400002C6.1201 0.400002 5.4001 1.12 5.4001 2C5.4001 2.88 6.1201 3.6 7.0001 3.6C7.8801 3.6 8.6001 2.88 8.6001 2C8.6001 1.12 7.8801 0.400002 7.0001 0.400002Z"
                          fill="#7D8FB3"/>
                    <mask id="mask0_52_396" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="14"
                          height="4">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M2.2001 0.400002C1.3201 0.400002 0.600098 1.12 0.600098 2C0.600098 2.88 1.3201 3.6 2.2001 3.6C3.0801 3.6 3.8001 2.88 3.8001 2C3.8001 1.12 3.0801 0.400002 2.2001 0.400002ZM11.8001 0.400002C10.9201 0.400002 10.2001 1.12 10.2001 2C10.2001 2.88 10.9201 3.6 11.8001 3.6C12.6801 3.6 13.4001 2.88 13.4001 2C13.4001 1.12 12.6801 0.400002 11.8001 0.400002ZM7.0001 0.400002C6.1201 0.400002 5.4001 1.12 5.4001 2C5.4001 2.88 6.1201 3.6 7.0001 3.6C7.8801 3.6 8.6001 2.88 8.6001 2C8.6001 1.12 7.8801 0.400002 7.0001 0.400002Z"
                              fill="white"/>
                    </mask>
                    <g mask="url(#mask0_52_396)">
                    </g>
                </svg>
            </button>
        </div>
        <p class="artist__description">{{artist.description}}</p>
        <div class="artist__btns">
            <button class="artist__salary">${{artist.salary}}/hr</button>
            <button class="artist__success">{{artist.success}}%Success({{artist.jobsCount}}Jobs)</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ArtistItem",
        props: ['artist']
    }
</script>

<style scoped lang="scss">
    @import "../../../assets/scss/variables";

    .artist {
        max-width: 100%;
        padding: 30px;
        background: #FFFFFF;
        box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
        border-radius: 15px;

        &__account {
            display: flex;
            align-items: center;
            padding-bottom: 35px;
            margin-bottom: 30px;
            border-bottom: 2px solid #FAFBFC;
        }

        &__avatar {
            width: 60px;
            height: 60px;
            border-radius: 50%;
        }

        &__info {
            margin-left: 30px;
        }

        &__name {
            font-size: 14px;
            font-weight: 700;
            color: $mid-dark-blue;
            line-height: 30px;
        }

        &__job {
            font-size: 12px;
            font-weight: 700;
            color: $text-light-blue;
        }

        &__more-about-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 30px;
            height: 30px;
            cursor: pointer;
            margin-left: 66px;
            border-radius: 50%;
            border: none;

            &:hover, &:focus {
                width: 29px;
                height: 29px;
                border: 1px solid #7D8FB3;
            }
        }

        &__description {
            font-size: 14px;
            font-weight: 700;
            color: $text-light-blue;
            line-height: 25px;
            margin-bottom: 25px;
        }

        &__btns {
            max-width: 100%;
            display: flex;
            justify-content: space-between;
        }

        &__salary, &__success {
            padding: 12px 17px;
            font-size: 12px;
            font-weight: 800;
            border-radius: 30px;
            background: #FAFBFC;
            border: none;
            cursor: pointer;

            &:hover, &:focus {
                padding: 10px 16px;
            }
        }

        &__salary {
            color: $low-dark-blue;

            &:hover, &:focus {
                 border: 1px solid $low-dark-blue;
            }
        }

        &__success {
            color: $salad-green;

            &:hover, &:focus {
                 border: 1px solid $salad-green;
            }
        }
    }
</style>