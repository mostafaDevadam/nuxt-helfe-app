<template>
  <div>

   




    <input class="placeholder-shown:border-gray-500 " placeholder="you@example.com" />

    <div>
      <input type="checkbox" class="appearance-none indeterminate:bg-gray-300" id="ch" />
      <label for="ch">Check</label>
    </div>


    <input type="text" class="disabled:opacity-75 border" />

    <input type="text" class="enabled:hover:border-gray-400 disabled:opacity-75 border" />

    <input type="checkbox" class="appearance-none checked:bg-blue-500 border" />



    <a href="https://seinfeldquotes.com" class="text-blue-600 visited:text-purple-600 bg-gray-800 ...">
      Inspiration
    </a>

    <button class="bg-blue-500 active:bg-blue-600 p-1 rounded text-gray-100">
      Submit
    </button>

    <div class="max-w-lg mx-auto p-8">
      <details
        class="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg"
        open>
        <summary class="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
          Why do they call it Ovaltine?
        </summary>
        <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
          <p>The mug is round. The jar is round. They should call it Roundtine.</p>
        </div>
      </details>
    </div>


    <div>
      <article class="print:hidden">
        <h1>My Secret Pizza Recipe</h1>
        <p>This recipe is a secret, and must not be shared with anyone</p>
        <!-- ... -->
      </article>
      <div class="hidden print:block">
        Are you seriously trying to print this? It's secret!
      </div>
    </div>


    <form>
      <legend> Choose a theme: </legend>
      <label>
        <input type="radio" class="forced-colors:appearance-auto appearance-none" />
        <p class="forced-colors:block hidden">
          Cyan
        </p>
        <div class="forced-colors:hidden h-6 w-6 rounded-full bg-cyan-200 ..."></div>
        <div class="forced-colors:hidden h-6 w-6 rounded-full bg-cyan-500 ..."></div>
      </label>
      <!-- ... -->
    </form>



    <form>
      <label class="block">
        <span class="block text-sm font-medium text-slate-700">Social Security Number</span>
        <input
          class="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
        <p class="mt-2 opacity-10 contrast-more:opacity-50 text-slate-600 text-sm">
          We need this to steal your identity.
        </p>
      </label>
    </form>

    <div class="bg-white w-2/4 dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
      <div>
        <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
          <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            aria-hidden="true"><!-- ... --></svg>
        </span>
      </div>
      <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
      <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer
        space.
      </p>
    </div>



    <form class="flex items-center space-x-6">
      <div class="shrink-0 flex flex-col gap-3">
        <div
          class="h-7 w-7 object-cover rounded-full bg-slate-600 text-gray-100 text-center flex justify-center items-center align-bottom">
          <span>AB</span>
        </div>
        <div
          class="h-10 w-10 object-cover rounded-full bg-slate-600 text-gray-100 text-center flex justify-center items-center align-bottom">
          <span>AB</span>
        </div>
        <div
          class="h-10 w-10 object-cover rounded-full bg-slate-600 text-gray-100 text-center flex justify-center items-center align-bottom">
          <span>AB</span>
        </div>
      </div>
      <label class="block">
        <span class="sr-only">Choose profile photo</span>
        <input type="file" class="block w-full text-sm text-slate-500
     file:mr-4 file:py-2 file:px-4
     file:rounded-full file:border-0
     file:text-sm file:font-semibold
     file:bg-violet-50 file:text-violet-700
     hover:file:bg-violet-100
   " />
      </label>
    </form>


  </div>
</template>