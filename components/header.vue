<template>
    <div>
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
                    <p class="detail-text">{{ p }}</p>
                </v-row>
            </swiper-slide>
        </swiper>
        <v-app-bar scroll-behavior="hide elevate" scroll-threshold="290" :class="`${ showFirstRow ? 'top-30' : ''}`" id="app-header">
            <v-spacer></v-spacer>
            <div class="d-flex justify-space-between align-center w-25">
                <nuxt-link v-for="m, i in menu" :key="`menu-${i}`" to="#">{{ m.title }}</nuxt-link>
            </div>
            <v-spacer></v-spacer>
            <img  width="50px" src="https://www.starbucksathome.com/br/static/version1730292575/frontend/Webjump/starbucks/pt_BR/images/logo.svg"></img>
            <v-spacer></v-spacer>
            <nav class="d-flex justify-space-between align-center w-25">
                <v-btn variant="outlined" color="white">Compre aqui</v-btn>
                <nuxt-link to="#"><svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></nuxt-link>
                <nuxt-link to="#"><svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></nuxt-link>
                <nuxt-link to="#">Entrar</nuxt-link>
                <nuxt-link to="#">Registrar</nuxt-link>
            </nav>
            <v-spacer></v-spacer>
        </v-app-bar>
    </div>
</template>

<script setup>
    const promoText = ['USE O CUPOM: PRIMEIROPEDIDO100 E GANHE 10% NO SEU PRIMEIRO PEDIDO*', '*VÁLIDO PARA PEDIDOS ACIMA DE R$ 100 **NÃO VÁLIDO PARA COMBOS']

    const menu = [
        {
            title: 'Explore nossos Cafés',
            submenu: [
                {
                    title: 'Explore nossos Cafés',
                    img: 'https://www.starbucksathome.com/br/static/version1730292575/frontend/Webjump/starbucks/pt_BR/images/exploreCoffees.png'
                },
                {
                    title: 'Starbucks® by Nespresso®',
                    img: 'https://www.starbucksathome.com/br//media/catalog/category/sbuxbynespressoassetthumb.png'
                },
                {
                    title: 'Starbucks® by NESCAFÉ® Dolce Gusto®',
                    img: 'https://www.starbucksathome.com/br//media/catalog/category/20240418_Imagem_Combo_boas_vindas_SBUX_SEM_TAG.png'
                },
                {
                    title: 'Café Torrado e Moído',
                    img: 'https://www.starbucksathome.com/br//media/catalog/category/20240312_Atualizar_imagens_Torrado_Moido_052.png'
                }
            ]
        },
        {
            title: 'Receitas',
            submenu: [
                {
                    title: 'Explorar Receitas',
                    img: 'https://www.starbucksathome.com/br/static/version1730292575/frontend/Webjump/starbucks/pt_BR/images/browse_recipes.png'
                },
                {
                    title: 'Receita do mês',
                    img: 'https://www.starbucksathome.com/br/static/version1730292575/frontend/Webjump/starbucks/pt_BR/images/LATTE_MACCHIATO.png'
                }
            ]
        },
        {
            title: 'Saiba mais',
            submenu: [
                {
                    title: 'Explore os artigos',
                },
                {
                    title: 'Jornada do café',
                    subtitle: 'É uma arte relaxar e realmente saborear o seu café,...'
                },
                {
                    title: 'Preparação de café',
                    subtitle: 'De onde vem o café - a sua origem - faz a diferença...'
                },
                {
                    title: 'Sustentabilidade',
                    subtitle: 'O pilar da Starbucks® é a abordagem de...'
                }
            ]
        }
    ]

    const color = ref('green')
    const showNavbar = ref(true)
    const showFirstRow = ref(true)
    let lastScrollPosition = ref(0)

    function onScroll () {
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
        
        if (currentScrollPosition < 0) return

        if (currentScrollPosition > 200) {
            color.value = 'white'
        } else {
            color.value = 'green'
        }

        if (Math.abs(currentScrollPosition - lastScrollPosition.value) < 60) return 

        if(currentScrollPosition < lastScrollPosition.value) {
            showNavbar.value = true
        }  else {
            showNavbar.value = false
        }
       
        lastScrollPosition.value = currentScrollPosition
    }

    onMounted(() => {
  	    window.addEventListener('scroll', onScroll)
	})

	onBeforeUnmount(() => {
		window.removeEventListener('scroll', onScroll)
	})
</script>

<style lang="scss" src="@/assets/scss/components/header.scss"></style>