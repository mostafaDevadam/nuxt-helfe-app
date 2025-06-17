<template>
    <ContentBox :left="true" :right="true">
            <div>
            <h1>About</h1>

            <button class="bg-gray-600 p-2 rounded" @click="(e) => console.log('clicked')">click</button>


             <DataTablesVuetifyDataTable />


            </div>
    </ContentBox>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>