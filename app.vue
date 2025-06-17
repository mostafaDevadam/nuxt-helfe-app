<template>
  <div id="app">
    <NuxtLayout>
      
        <Navbar />
        <NuxtPage class="mt-5 px-3" />
      
    </NuxtLayout>

  </div>
</template>

<script lang="ts" setup>

useSeoMeta({
  title: 'Mein Nuxt',
  description: 'Die Nuxt ist ein Vue Framework'
})

</script>

<style scoped>
#app {
  background-color: #e1faf4;
  /*color: #00DC82;*/
  height: 100vh;
}
</style>
