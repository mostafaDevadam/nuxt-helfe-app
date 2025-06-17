<template>
    <v-app>
        <div>
            <slot />

            <clientOnly>
                <NuxtSnackbar />
            </clientOnly>
        </div>
    </v-app>
</template>

<script setup lang="ts">

</script>

<style scoped></style>