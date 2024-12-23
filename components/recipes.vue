<template>
    <v-col id="recipes">
        <p class="detail-text">RECEITAS RECOMENDADAS</p>
        <h3 class="serif-text">Receitas e inspirações</h3>
        <swiper
            class="recipes-swiper"
            :loop="true"
            :effect="'creative'"
            :navigation="{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }"
            :slides-per-view="1"
            :speed="300"
            :modules="[SwiperEffectCreative, SwiperNavigation]"
            :creative-effect="{ prev: { shadow: false, translate: ['-20%', 0, -1] }, next: { translate: ['100%', 0, 0] } }"
        >
        <swiper-slide v-for="(r, i) in recipes" :key="`recipe-${i}`">
                <v-row class="d-flex align-center">
                    <div class="swiper-button-prev">
                        <v-col class="recipe-card">
                            <div :style="`background-image: linear-gradient(270deg, rgba(242, 240, 235, 0) 30%, rgba(242, 240, 235, 1) 100%), url(${getPrev(i).img}); background-size: 400px; width: 400px; height: 400px; background-position: center;`"></div>
                            <p>{{ getPrev(i)?.title }}</p>
                        </v-col>
                    </div>
                    <v-col class="recipe-card" style="background-image: url('https://www.starbucksathome.com/br/media/wysiwyg/backgroundCarousel.svg'); background-size: 650px; background-position: top;">
                        <div class="d-flex justify-center">
                            <v-img width="500px" height="400px" :src="r.img"></v-img>
                        </div>
                        <p>{{ r.title }}</p>
                    </v-col>
                    <div class="swiper-button-next">
                        <v-col class="recipe-card">
                            <div :style="`background-image: linear-gradient(90deg, rgba(242, 240, 235, 0) 30%, rgba(242, 240, 235, 1) 100%), url(${getNext(i).img}); background-size: 400px; width: 400px; height: 400px; background-position: center;`"></div>
                            <p>{{ getNext(i)?.title }}</p>
                        </v-col>
                    </div>
                </v-row>
            </swiper-slide>
        </swiper>
        <a class="link" href="#">Mais receitas</a>
    </v-col>
</template>

<script setup>
    const recipes = [
        {
            title: 'Vanilla Latte',
            img: 'https://www.starbucksathome.com/br/media/recipe/Vanilla_Latte_ContactShadow_Cream_0.png'
        },
        {
            title: 'Affogato',
            img: 'https://www.starbucksathome.com/br/media/recipe/affogatto.png'
        },
        {
            title: 'Caffé Americano',
            img: 'https://www.starbucksathome.com/br/media/recipe/AMERICANOSCOFFEE.png'
        },
        {
            title: 'Caffé Mocha',
            img: 'https://www.starbucksathome.com/br/media/recipe/MOCHA-LATTESS.png'
        },
        {
            title: 'Iced Caramel Macchiato',
            img: 'https://www.starbucksathome.com/br/media/recipe/CARAMELICED.png'
        },
        {
            title: 'Sparkling Espresso with Mint',
            img: 'https://www.starbucksathome.com/br/media/recipe/SPARKLINGEXPRESS_1.png'
        }
    ]

    const getNext = (id) => {
        if (id + 1 === recipes.length) return recipes[0]

        return recipes[id + 1]
    }

    const getPrev = (id) => {
        if (id === 0) return recipes[recipes.length - 1]

        return recipes[id - 1]
    }
</script>

<style lang="scss" src="@/assets/scss/components/recipes.scss"></style>