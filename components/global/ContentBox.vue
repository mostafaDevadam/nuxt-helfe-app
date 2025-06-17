<template>
    <div id="block" class="flex flex-row gap-3">

        <div   class=" p-3 w-1/5 " v-if="left">
             <LeftSideBar />
        </div>


        <div class="divider divider-horizontal " v-if="left"></div>

        <main class="rounded shadow-sm p-3 w-4/5 h-screen bg-gray-50">
           <slot />
        </main>

        <div  class="rounded shadow-sm  p-3 w-1/5	" v-if="right">
             <RightSideBar />
        </div>
    </div>
</template>

<script setup >

const props = defineProps({
    left: {
        type: Boolean,
        required: false
    },
    right: {
        type: Boolean,
        required: false,
    }
})

const {left, right} = toRefs(props)

</script>

<style scoped>

#block {
    background-color: #e1faf4;
}

main {
  /*min-height: 63.5vw;
  width: 150vh;*/
  
  
}

#div-left {
    width: 30vh;
}

#div-right {
    width: 30vh;
    min-height: 10vh;
}

</style>