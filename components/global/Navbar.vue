<template>
   <nav class="rounded shadow p-3">

      <div class="flex justify-between">

         <NuxtLink to="/home">Helfe App</NuxtLink>

         <ul class="flex flex-row justify-end gap-1 p-1">

            <li>
               <NuxtLink to="/auth">SignIn</NuxtLink>
            </li>

            <li>
               <NuxtLink to="/auth">
                  <v-chip class="mb-3">AB</v-chip>
               </NuxtLink>
            </li>

            <li>
               <div
                  class="w-8 h-8 rounded-full bg-orange-500 text-gray-100 text-center flex justify-center items-center">
                  A</div>
            </li>

            <li>
               <div class="relative group">
                  <div
                     class="w-8 h-8 rounded-full bg-orange-500 text-gray-100 text-center flex justify-center items-center"
                     @click="toggleDropdown_">
                     B</div>

                  <!-- Dropdown Menu -->
                  <div v-show="isDropdownOpen_"
                     class="absolute group-hover:block bg-white text-black mt-2 py-2 w-40 rounded-lg shadow-lg">
                     <a href="#" class="block px-4 py-2 hover:bg-gray-200" @click="toggleDropdown_">Web Design</a>
                     <a href="#" class="block px-4 py-2 hover:bg-gray-200" @click="toggleDropdown_">SEO</a>
                     <a href="#" class="block px-4 py-2 hover:bg-gray-200" @click="toggleDropdown_">Marketing</a>
                  </div>
               </div>
            </li>

            <li>
               <div class="relative group">
                  <button class=" focus:outline-none" @click="toggleDropdown">
                     Services
                  </button>

                  <!-- Dropdown Menu -->
                  <div v-show="isDropdownOpen"
                     class="absolute group-hover:block bg-white text-black mt-2 py-2 w-40 rounded-lg shadow-lg">
                     <a href="#" class="block px-4 py-2 hover:bg-gray-200" @click="toggleDropdown">Web Design</a>
                     <a href="#" class="block px-4 py-2 hover:bg-gray-200" @click="toggleDropdown">SEO</a>
                     <a href="#" class="block px-4 py-2 hover:bg-gray-200" @click="toggleDropdown">Marketing</a>
                  </div>
               </div>
            </li>

            <li>

               <!-- Menu -->
               <div class="relative">
                  <!-- Dropdown Button -->
                  <button class="peer px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300">
                     Menu
                  </button>

                  <!-- Dropdown Menu -->
                  <div
                     class="absolute hidden peer-focus:block focus-within:block mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                     <a href="#" class="block px-4 py-2 hover:bg-gray-100">Item 1</a>
                     <a href="#" class="block px-4 py-2 hover:bg-gray-100">Item 2</a>
                     <a href="#" class="block px-4 py-2 hover:bg-gray-100">Item 3</a>
                  </div>
               </div>


            </li>

            <li>

               <!-- Menu -->
               <div class="relative">
                  <!-- Dropdown Button -->
                  <button class="peer text-gray-100 bg-orange-500 rounded-full w-8 h-8 hover:text-gray-700 focus:text-green-500 ">
                     M
                  </button>

                  <!-- Dropdown Menu -->
                  <div
                     class="absolute hidden peer-focus:block focus-within:block mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                     <a href="#" class="block px-4 py-2 hover:bg-gray-100">Item 1</a>
                     <a href="#" class="block px-4 py-2 hover:bg-gray-100">Item 2</a>
                     <a href="#" class="block px-4 py-2 hover:bg-gray-100">Item 3</a>
                  </div>
               </div>


            </li>



         </ul>

         <div>
            <ul class="flex flex-row gap-3 p-1">
               <li>SignOut</li>
            </ul>
         </div>
      </div>

   </nav>
</template>

<script setup lang="ts">

// Reactive state for dropdown visibility
const isDropdownOpen = ref(false);

// Toggle dropdown function
const toggleDropdown = () => {
   isDropdownOpen.value = !isDropdownOpen.value;
};

const isDropdownOpen_ = ref(false);

// Toggle dropdown function
const toggleDropdown_ = () => {
   isDropdownOpen_.value = !isDropdownOpen_.value;
};

</script>

<style scoped></style>