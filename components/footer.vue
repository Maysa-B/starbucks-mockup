<template>
    <v-col id="footer" class="d-flex flex-column align-center">
        <img id="logo-center" src="https://www.starbucksathome.com/br/media/wysiwyg/logo-footer.png" alt="logo-footer">
        <p class="mt-9 mb-4">Cadastre-se para receber benefícios exclusivos.</p>
        <v-form @submit.prevent @submit="submit" id="register" class="d-flex flex-column align-center mb-4">
            <v-text-field flat placeholder="E-mail*" v-model="form.email"
                :error-messages="v$.email.$errors.map(e => e.$message)" @change="v$.email.$touch" density="compact"
                variant="solo-filled" id="text-field" class="custom-placeholer-color"
                bg-color="rgba(255, 255, 255, 0.12)" />
            <button class="green-btn mt-2" type="submit">Assinar</button>
        </v-form>
        <v-row class="about d-flex justify-center align-center mt-9">
            <a href="#" class="mr-4">Sobre a Starbucks</a>
            <a href="#" class="ml-4">
                <p class="mr-3">
                    Contato
                </p>                
                <img class="mr-1" src="https://www.starbucksathome.com/br/media/wysiwyg/World.png" alt="world">
                |
                <img class="ml-1" src="https://www.starbucksathome.com/br/media/wysiwyg/brazil_icon.png" alt="br">
            </a>
        </v-row>
        <v-row class="nav d-flex justify-space-around align-center">
            <a href="#">Cookies</a>
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos e Condições de Uso</a>
            <a href="#">Regulamento das Promoções</a>
            <a href="#">FAQs</a>
            <a href="#">Starbucks.com.br</a>
        </v-row>
        <v-row class="logos d-flex justify-space-around align-center">
            <img src="https://www.starbucksathome.com/br/media/wysiwyg/Instagram.png" alt="">
            <img src="https://www.starbucksathome.com/br/media/wysiwyg/Facebook.png" alt="">
            <img src="https://www.starbucksathome.com/br/media/wysiwyg/Youtube.png" alt="">
            <img src="https://www.starbucksathome.com/br/media/wysiwyg/whats-branco_3.png" alt="">
        </v-row>
        <p class="mt-8 end">Nestlé® usa a marca Starbucks® sob licença. ⓒ  2024 Starbucks Corporation</p>
        <p class="end">Nespresso® e NESCAFÉ Dolce Gusto® são marcas registradas da Société des Produits Nestlé S.A.. Todas as outras marcas são de propriedade de seus proprietários.</p>
    </v-col>
</template>

<script setup>
import { required, email, helpers } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'

let form = ref({ email: '' })

const rules = computed(() => ({
    email: {
        required: helpers.withMessage("Este é um campo obrigatório.", required),
        email: helpers.withMessage("Por favor insira um endereço de e-mail válido (Ex: exemplo@dominio.com).", email),
    }
}))

const v$ = useVuelidate(rules, form)

async function submit() {
    v$.value.$validate();
    if (v$.value.$error) return
}
</script>

<style lang="scss" src="@/assets/scss/components/footer.scss"></style>