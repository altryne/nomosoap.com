<template>
  <div class="h-full text-black">
    <header class="absolute pin-t pin-l w-full py-4">
      <div class="flex items-center justify-between px-8">
                <span class="text-2xl tracking-tight font-semibold">
                    <nuxt-link :to="`/`"><img src="/img/nomosoaplogo.svg" alt=""></nuxt-link>
                </span>
        <div class="">
          <div class="flex items-center">
            <a class="text-lg leading-normal text-blue hover:text-blue-dark no-underline ml-8" href="#">Link</a>
            <a class="text-lg leading-normal text-blue hover:text-blue-dark no-underline ml-8" href="#">Link</a>
            <a class="text-lg leading-normal text-blue hover:text-blue-dark no-underline ml-8" href="#">Link</a>
          </div>
        </div>
      </div>
    </header>

    <nuxt/>

    <!--<section class="bg-white py-8">-->
      <!--<div class="w-5/6 max-w-lg ml-auto mr-auto mt-8 mb-8">-->
        <!--<div class="flex flex-wrap -mx-6 -my-6">-->
          <!--<div class="w-full sm:w-1/2 px-6 py-6">-->
            <!--<div class="mb-8">-->
              <!--<svg class="align-middle text-red" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>-->
            <!--</div>-->
            <!--<h3 class="text-3xl sm:text-4xl font-semibold tracking-tight leading-none mb-3">This is a small heading</h3>-->
            <!--<p class="text-lg sm:text-xl leading-normal text-grey-darker mb-8">If you don't plan to use the shadow utilities in your project, you can disable them entirely.</p>-->
            <!--<a class="text-lg leading-normal text-blue hover:text-blue-dark no-underline" href="#">Link to something</a>-->
          <!--</div>-->
          <!--<div class="w-full sm:w-1/2 px-6 py-6">-->
            <!--<div class="mb-8">-->
              <!--<svg class="align-middle text-teal" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="14.31" y1="8" x2="20.05" y2="17.94"/><line x1="9.69" y1="8" x2="21.17" y2="8"/><line x1="7.38" y1="12" x2="13.12" y2="2.06"/><line x1="9.69" y1="16" x2="3.95" y2="6.06"/><line x1="14.31" y1="16" x2="2.83" y2="16"/><line x1="16.62" y1="12" x2="10.88" y2="21.94"/></svg>-->
            <!--</div>-->
            <!--<h3 class="text-3xl sm:text-4xl font-semibold tracking-tight leading-none mb-3">This is a small heading</h3>-->
            <!--<p class="text-lg sm:text-xl leading-normal text-grey-darker mb-8">If you don't plan to use the shadow utilities in your project, you can disable them entirely.</p>-->
            <!--<a class="text-lg leading-normal text-blue hover:text-blue-dark no-underline" href="#">Link to something</a>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</section>-->

    <!--<section class="bg-grey-lightest py-8">-->
      <!--<div class="w-5/6 max-w-2xl ml-auto mr-auto mt-8 mb-8">-->
        <!--<div class="flex flex-wrap -mx-6 -my-6">-->
          <!--<div class="w-full sm:w-1/2 lg:w-1/4 px-6 py-6">-->
            <!--<div class="mb-8">-->
              <!--<svg class="align-middle text-teal" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>-->
            <!--</div>-->
            <!--<h3 class="text-3xl font-semibold tracking-tight leading-none mb-3">This is a small heading</h3>-->
            <!--<p class="text-lg leading-normal text-grey-dark mb-8">If you don't plan to use the shadow utilities in your project, you can disable them entirely by setting the option.</p>-->
            <!--<a class="text-lg leading-normal text-blue hover:text-blue-dark no-underline" href="#">Link to something</a>-->
          <!--</div>-->
          <!--<div class="w-full sm:w-1/2 lg:w-1/4 px-6 py-6">-->
            <!--<div class="mb-8">-->
              <!--<svg class="align-middle text-pink" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="14.31" y1="8" x2="20.05" y2="17.94"/><line x1="9.69" y1="8" x2="21.17" y2="8"/><line x1="7.38" y1="12" x2="13.12" y2="2.06"/><line x1="9.69" y1="16" x2="3.95" y2="6.06"/><line x1="14.31" y1="16" x2="2.83" y2="16"/><line x1="16.62" y1="12" x2="10.88" y2="21.94"/></svg>-->
            <!--</div>-->
            <!--<h3 class="text-3xl font-semibold tracking-tight leading-none mb-3">This is a small heading</h3>-->
            <!--<p class="text-lg leading-normal text-grey-dark mb-8">If you don't plan to use the shadow utilities in your project, you can disable them entirely by setting the option.</p>-->
            <!--<a class="text-lg leading-normal text-blue hover:text-blue-dark no-underline" href="#">Link to something</a>-->
          <!--</div>-->
          <!--<div class="w-full sm:w-1/2 lg:w-1/4 px-6 py-6">-->
            <!--<div class="mb-8">-->
              <!--<svg class="align-middle text-purple" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="14.31" y1="8" x2="20.05" y2="17.94"/><line x1="9.69" y1="8" x2="21.17" y2="8"/><line x1="7.38" y1="12" x2="13.12" y2="2.06"/><line x1="9.69" y1="16" x2="3.95" y2="6.06"/><line x1="14.31" y1="16" x2="2.83" y2="16"/><line x1="16.62" y1="12" x2="10.88" y2="21.94"/></svg>-->
            <!--</div>-->
            <!--<h3 class="text-3xl font-semibold tracking-tight leading-none mb-3">This is a small heading</h3>-->
            <!--<p class="text-lg leading-normal text-grey-dark mb-8">If you don't plan to use the shadow utilities in your project, you can disable them entirely by setting the option.</p>-->
            <!--<a class="text-lg leading-normal text-blue hover:text-blue-dark no-underline" href="#">Link to something</a>-->
          <!--</div>-->
          <!--<div class="w-full sm:w-1/2 lg:w-1/4 px-6 py-6">-->
            <!--<div class="mb-8">-->
              <!--<svg class="align-middle text-orange" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="14.31" y1="8" x2="20.05" y2="17.94"/><line x1="9.69" y1="8" x2="21.17" y2="8"/><line x1="7.38" y1="12" x2="13.12" y2="2.06"/><line x1="9.69" y1="16" x2="3.95" y2="6.06"/><line x1="14.31" y1="16" x2="2.83" y2="16"/><line x1="16.62" y1="12" x2="10.88" y2="21.94"/></svg>-->
            <!--</div>-->
            <!--<h3 class="text-3xl font-semibold tracking-tight leading-none mb-3">This is a small heading</h3>-->
            <!--<p class="text-lg leading-normal text-grey-dark mb-8">If you don't plan to use the shadow utilities in your project, you can disable them entirely by setting the option.</p>-->
            <!--<a class="text-lg leading-normal text-blue hover:text-blue-dark no-underline" href="#">Link to something</a>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</section>-->

    <!--<section class="bg-white py-8">-->
      <!--<div class="w-5/6 max-w-lg ml-auto mr-auto mt-8 mb-8">-->
        <!--<div class="flex flex-col md:flex-row items-center justify-center">-->
          <!--<p class="text-xl leading-normal mr-6 mb-8 md:mb-0 text-center md:text-left">This could be a call to action.</p>-->
          <!--<button class="bg-blue hover:bg-blue-dark text-xl leading-none text-white font-semibold h-10 px-6 rounded-full whitespace-no-wrap">-->
            <!--Get started-->
          <!--</button>-->
        <!--</div>-->
      <!--</div>-->
    <!--</section>-->

    <div class="flex justify-center">
      <div class="bg-grey-light h-1 w-16 rounded"></div>
    </div>



    <!--<section class="bg-grey-lightest py-8">-->
      <!--<div class="w-5/6 max-w-2xl ml-auto mr-auto mt-8">-->
        <!--<div class="flex flex-wrap -mx-6 -my-6">-->
          <!--<div class="w-full lg:w-1/3 px-6 py-6">-->
            <!--<a class="no-underline" href="#">-->
              <!--<div class="bg-pink-dark rounded shadow-lg overflow-hidden p-8">-->
                <!--<h5 class="text-2xl text-white mb-4">Small heading</h5>-->
                <!--<p class="text-lg text-white leading-tight">This card links to a deeper screen with more info on some topic.</p>-->
              <!--</div>-->
            <!--</a>-->
          <!--</div>-->
          <!--<div class="w-full lg:w-1/3 px-6 py-6">-->
            <!--<a class="no-underline" href="#">-->
              <!--<div class="bg-red-light rounded shadow-lg overflow-hidden p-8">-->
                <!--<h5 class="text-2xl text-white mb-4">Small heading</h5>-->
                <!--<p class="text-lg text-white leading-tight">This card links to a deeper screen with more info on some topic.</p>-->
              <!--</div>-->
            <!--</a>-->
          <!--</div>-->
          <!--<div class="w-full lg:w-1/3 px-6 py-6">-->
            <!--<a class="no-underline" href="#">-->
              <!--<div class="bg-purple-light rounded shadow-lg overflow-hidden p-8">-->
                <!--<h5 class="text-2xl text-white mb-4">Small heading</h5>-->
                <!--<p class="text-lg text-white leading-tight">This card links to a deeper screen with more info on some topic.</p>-->
              <!--</div>-->
            <!--</a>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</section>-->

    <section class="bg-grey-lightest py-8">
      <div class="w-5/6 max-w-xl ml-auto mr-auto my-8">
        <div class="flex md:items-center flex-col md:flex-row md:justify-between">
          <div class="mb-8 md:mb-0 md:pr-4">
            <h3 class="text-4xl font-normal tracking-tight leading-none mb-3">This is a medium heading</h3>
            <h4 class="text-3xl text-grey-dark font-normal leading-tight">This might be used for a call to action.</h4>
          </div>
          <div class="md:pl-4">
            <div class="flex items-center">
              <button class="bg-blue hover:bg-blue-dark text-xl leading-none text-white font-semibold h-10 px-6 rounded-full whitespace-no-wrap mr-2">
                Get started
              </button>
              <button class="bg-transparent text-xl leading-none text-blue font-semibold hover:text-blue-dark h-10 px-6 border border-blue-lighter hover:border-blue-light rounded-full whitespace-no-wrap ml-2">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="bg-grey-lightest py-8">
      <div class="flex flex-col-reverse md:flex-row md:items-center md:justify-between px-8">
        <small class="block text-sm text-grey">
          &copy; CompanyName
        </small>
        <div class="mb-4 md:mb-0">
          <div class="flex flex-col md:flex-row md:items-center">
            <a class="text-xl md:text-base leading-normal text-grey-dark hover:text-black no-underline mb-4 md:mb-0 md:ml-8" href="#">Link</a>
            <a class="text-xl md:text-base leading-normal text-grey-dark hover:text-black no-underline mb-4 md:mb-0 md:ml-8" href="#">Another link</a>
            <a class="text-xl md:text-base leading-normal text-grey-dark hover:text-black no-underline mb-4 md:mb-0 md:ml-8" href="#">Link to something</a>
          </div>
        </div>
      </div>
    </footer>


  </div>
</template>

<style>
  .header-hero{
    height:100vh;
  }
</style>
