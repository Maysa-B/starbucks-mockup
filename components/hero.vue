<template>
    <swiper
        :loop="true"
        :effect="'creative'"
        :slides-per-view="1"
        :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }"
        :speed="300"
        :pagination="{ clickable: true }"
        :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination, SwiperNavigation]"
        @autoplayTimeLeft="onAutoplayTimeLeft"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :creative-effect="{ prev: { shadow: false, translate: ['-20%', 0, -1] }, next: { translate: ['100%', 0, 0] } }"
    >
        <swiper-slide v-for="(s, i) in slides" :key="`s-${i}`">
            <div :style="`background-image: url(${s.desktop}); width: 100%; height: 700px; background-position: center center; background-size: 100%;background-repeat: no-repeat;`">
            </div>
        </swiper-slide>
        <div class="swiper-button-prev">
            <svg xmlns="http://www.w3.org/2000/svg" id="seta-direita_bgbranco_pequena" width="30" height="100" viewBox="0 0 30 84">
                <path id="Caminho_5" data-name="Caminho 5" d="M133.9,394.541v83.64s1.3-7.236-11.4-12.958c-7.561-3.4-11.191-7.2-13.105-9.785a18.2,18.2,0,0,1-1.663-2.6,32.926,32.926,0,0,1-3.251-9.708c-.159-1.224-.389-2.639-.454-3.982a37.221,37.221,0,0,1,0-5.492,38.161,38.161,0,0,1,2.192-9.761,28.656,28.656,0,0,1,2.369-4.737,21.035,21.035,0,0,1,5.226-5.571,37.234,37.234,0,0,1,5.64-3.366c1.441-.609,4.427-2.393,5.89-3.236C130.633,403.933,133.9,399.935,133.9,394.541Z" transform="translate(-103.94 -394.181)" fill="#fff" opacity="0.6"/>
                <g id="b" transform="translate(7 38)">
                    <g id="c" transform="translate(0 0)">
                        <path id="Caminho_2" data-name="Caminho 2" d="M10.6-3.109l3.721,3.5H0v.815H14.324L10.6,4.6l.5.682L16,.8,11.1-3.723Z" transform="translate(0 3.723)"/>
                    </g>
                </g>
            </svg>
        </div>
        <div class="swiper-button-next">
            <svg xmlns="http://www.w3.org/2000/svg" id="seta-direita_bgbranco_pequena" width="30" height="100" viewBox="0 0 30 84">
                <path id="Caminho_5" data-name="Caminho 5" d="M133.9,394.541v83.64s1.3-7.236-11.4-12.958c-7.561-3.4-11.191-7.2-13.105-9.785a18.2,18.2,0,0,1-1.663-2.6,32.926,32.926,0,0,1-3.251-9.708c-.159-1.224-.389-2.639-.454-3.982a37.221,37.221,0,0,1,0-5.492,38.161,38.161,0,0,1,2.192-9.761,28.656,28.656,0,0,1,2.369-4.737,21.035,21.035,0,0,1,5.226-5.571,37.234,37.234,0,0,1,5.64-3.366c1.441-.609,4.427-2.393,5.89-3.236C130.633,403.933,133.9,399.935,133.9,394.541Z" transform="translate(-103.94 -394.181)" fill="#fff" opacity="0.6"/>
                <g id="b" transform="translate(7 38)">
                    <g id="c" transform="translate(0 0)">
                        <path id="Caminho_2" data-name="Caminho 2" d="M10.6-3.109l3.721,3.5H0v.815H14.324L10.6,4.6l.5.682L16,.8,11.1-3.723Z" transform="translate(0 3.723)"/>
                    </g>
                </g>
            </svg>
        </div>
    </swiper>
</template>

<script setup>
    const slides = [
        {
            desktop: 'https://www.starbucksathome.com/br/media/wysiwyg/BR_pt_SBUX_0411NESSPRESSO04NOVregularbannerDESK_M1.jpg',
            mobile: 'https://www.starbucksathome.com/br/media/wysiwyg/BR_pt_SBUX_0411NESSPRESSO04NOVregularbannerMOBILE_M1.jpg'
        },
        {
            desktop: 'https://www.starbucksathome.com/br/media/wysiwyg/starbucks-estatico-banners-DESK_16.jpg',
            mobile: 'https://www.starbucksathome.com/br/media/wysiwyg/starbucks-estatico-banners-MOBILE_15.jpg'
        },
        {
            desktop: 'https://www.starbucksathome.com/br/media/wysiwyg/BR_pt_SBUX_KVFLAVOREDSbannerDESK_M1.png',
            mobile: 'https://www.starbucksathome.com/br/media/wysiwyg/BR_pt_SBUX_KVFLAVOREDSbannerMOBILE_M1.png'
        },
        {
            desktop: 'https://www.starbucksathome.com/br/media/wysiwyg/BR_pt_SBUX_BYNESPRTESSOADAPTATIONPEOPLEbannerDESK_M1_3.jpg',
            mobile: 'https://www.starbucksathome.com/br/media/wysiwyg/BR_pt_SBUX_BYNESPRTESSOADAPTATIONPEOPLEbannerMOBILE_M1_1.jpg'
        },
        {
            desktop: 'https://www.starbucksathome.com/br/media/wysiwyg/starbuucks-14-caffemocha-receitadesk.jpg',
            mobile: 'https://www.starbucksathome.com/br/media/wysiwyg/starbuucks-14-caffemocha-receitamobile.jpg'
        }
    ]
</script>

<style lang="scss" src="@/assets/scss/components/hero.scss"></style>