<template>
    <header>
        <swiper
            class="header-swiper"
            :loop="true"
            :effect="'creative'"
            :slides-per-view="1"
            :speed="300"
            :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]"
            @autoplayTimeLeft="onAutoplayTimeLeft"
            :autoplay="{ delay: 5000, disableOnInteraction: false }"
            :creative-effect="{ prev: { shadow: false, translate: ['-20%', 0, -1] }, next: { translate: ['100%', 0, 0] } }"
        >
            <swiper-slide v-for="(p, i) in promoText" :key="`s-${i}`">
                <v-row class="slide d-flex align-center justify-center">
                    <svg class="pr-3" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.096"></g><g id="SVGRepo_iconCarrier"> <path d="M17.6842 3.60279C18.2055 2.944 17.7132 2 16.8484 2H10.1317C9.75652 2 9.40996 2.19159 9.22321 2.50227L4.14052 10.9577C3.73978 11.6243 4.2439 12.4554 5.04904 12.4554H8.47764L5.24755 20.5203C4.78108 21.5406 6.04257 22.473 6.89092 21.735L20 9.33119H13.151L17.6842 3.60279Z" stroke="#ffffff" stroke-width="0.672" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
                    <p>{{ p }}</p>
                </v-row>
            </swiper-slide>
        </swiper>
        <v-app-bar flat id="app-header">
            <div id="content">
                <div class="d-flex justify-space-between align-center w-33">
                    <nuxt-link to="#">Explore nossos Cafés</nuxt-link>
                    <nuxt-link to="#">Receitas</nuxt-link>
                    <nuxt-link to="#">Saiba mais</nuxt-link>
                </div>
                <img  width="50px" src="https://www.starbucksathome.com/br/static/version1730292575/frontend/Webjump/starbucks/pt_BR/images/logo.svg"></img>
                <nav class="d-flex justify-space-between align-center w-33">
                    <v-btn variant="outlined" color="white">Compre aqui</v-btn>
                    <nuxt-link to="#"><svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></nuxt-link>
                    <nuxt-link to="#"><svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></nuxt-link>
                    <nuxt-link to="#">Entrar</nuxt-link>
                    <nuxt-link to="#">Registrar</nuxt-link>
                </nav>
            </div>
        </v-app-bar>
    </header>
</template>

<script setup>
    const promoText = ['USE O CUPOM: PRIMEIROPEDIDO100 E GANHE 10% NO SEU PRIMEIRO PEDIDO*', '*VÁLIDO PARA PEDIDOS ACIMA DE R$ 100 **NÃO VÁLIDO PARA COMBOS']

</script>

<style lang="scss" src="@/assets/scss/components/header.scss"></style>