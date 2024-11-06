<template>
    <v-col id="products">
        <p>QUERIDINHOS</p>
        <h3>Que tal uma xícara de café?</h3>
        <v-row class="justify-space-between">
            <v-col cols="12" md="3" class="product" v-for="p, i in products" :key="`product-${i}`">
                <img :src="p.img"></img>
                <p class="title">{{ p.title }}</p>
                <p class="by">{{ p.by }}</p>
                <p>****** ({{ p.avaliations }})</p>
                <v-row class="pt-5 justify-center">
                    <p class="discount" v-if="p.beforePrice">R$ {{ p.beforePrice }}</p>
                    <p>R$ {{ p.price }}</p>
                </v-row>
                <v-row class="justify-center align-center mt-8">
                    <button class="up-btn">-</button>
                    <p>1</p>
                    <button class="up-btn">+</button>
                    <button class="add-btn">Adicionar</button>
                </v-row>
            </v-col>
        </v-row>
    </v-col>
</template>

<script setup>
    const products = [
        {
            title: 'Starbucks® Cappuccino by NESCAFÉ® Dolce Gusto® - 10 Cápsulas',
            by: 'by NESCAFÉ® Dolce Gusto®',
            beforePrice: '24,50',
            price: '20,83',
            avaliations: 2,
            img: 'https://www.starbucksathome.com/br/media/catalog/product/cache/b90b8b710d5a319a644d2039872a6859/2/0/20240312_mockup_10_caps_sbux_ndg_cappuccino_1_.png'
        },
        {
            title: 'Starbucks® Single-Origin Colombia by Nespresso® - 10 cápsulas',
            by: 'by Nespresso® | Torra Média',
            beforePrice: '28,99',
            price: '20,90',
            avaliations: 5,
            img: 'https://www.starbucksathome.com/br/media/catalog/product/cache/b90b8b710d5a319a644d2039872a6859/0/7/07613036961721_colombia_co1_enuk_5.png'
        },
        {
            title: 'Starbucks® Pike Place® Roast Torrado e Moído - 250g',
            by: 'Torrado Moído | Torra Média',
            price: '29,99',
            avaliations: 11,
            img: 'https://www.starbucksathome.com/br/media/catalog/product/cache/b90b8b710d5a319a644d2039872a6859/p/i/pike-place-1772x1772.png'
        }
    ]
</script>

<style lang="scss" src="@/assets/scss/components/products.scss"></style>