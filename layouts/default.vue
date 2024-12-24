<template>
    <v-app id="layout-default">
        <Header />

        <div id="page-content">
			<slot />
		</div>

        <Footer />
    </v-app>
</template>

<style lang="scss" src="@/assets/scss/layout.scss" />