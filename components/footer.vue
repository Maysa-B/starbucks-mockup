<template>
    <v-col id="footer" cols="12" class="flex-column align-center">
        <img src="https://www.starbucksathome.com/br/media/wysiwyg/logo-footer.png" alt="logo-footer">
        <p class="mt-9 mb-4">Cadastre-se para receber benefícios exclusivos.</p>
        <v-form @submit.prevent @submit="submit" id="register" class="d-flex flex-column align-center">
            <v-text-field 
                flat 
                placeholder="Email*"
                v-model="form.email" 
                :error-messages="v$.email.$errors.map(e => e.$message)"
                @change="v$.email.$touch"
                density="compact"
                variant="solo-filled"
                id="text-field"
                bg-color="rgba(255, 255, 255, 0.12)"
            />
            <button class="green-btn mt-4" type="submit">Assinar</button>
    </v-form>
    <v-spacer></v-spacer>
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