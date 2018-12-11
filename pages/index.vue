<template>
  <section class="bg-blue-lightest h-full py-8 header-hero" >
    <div class="w-5/6 max-w-xlg ml-auto mr-auto h-full">
      <div class="flex items-center justify-center text-center h-full">
        <div>

          <h1 class="text-3xl sm:text-4xl font-normal leading-none tracking-tight mb-4">Search for your TV below to find out how to turn off motion smoothing</h1>
          <h2 class="text-2xl sm:text-3xl text-blue-darker opacity-75 font-normal leading-tight mb-8"> A.K.A the Soap Opera effect</h2>
          <div class="flex flex-col sm:flex-row items-center justify-center sm:pt-3 mb-3 sm:mb-6">
            <Search></Search>
          </div>
          <div class="flex flex-col sm:flex-row justify-center pt-8">
            <button class="bg-blue hover:bg-blue-dark text-2xl leading-none text-white font-semibold h-12 px-8 rounded-full whitespace-no-wrap mb-2 sm:mb-0 sm:mr-2">
              About
            </button>
            <button class="bg-transparent text-2xl leading-none text-blue font-semibold hover:text-blue-dark h-12 px-8 border border-blue-lighter hover:border-blue-light rounded-full whitespace-no-wrap mt-2 sm:mt-0 sm:ml-2">
              Why should I care?
            </button>
          </div>
        </div>
      </div>
    </div>

    <ul>
      <li v-for="page in apollo_data.allPages" >

        <nuxt-link :to="`pages/${page.slug}`">
          {{ page.title }}
        </nuxt-link>

      </li>


    </ul>
    <!--<div>-->
      <!--<logo/>-->
      <!--<h1 class="title">-->
        <!--nomosoap.com-->
      <!--</h1>-->
      <!--<h2 class="subtitle">-->
        <!--No Mo Soapy TV-->
      <!--</h2>-->
      <!--<div class="links">-->
        <!--<a-->
          <!--href="https://nuxtjs.org/"-->
          <!--target="_blank"-->
          <!--class="button&#45;&#45;green">Documentation</a>-->
        <!--<a-->
          <!--href="https://github.com/nuxt/nuxt.js"-->
          <!--target="_blank"-->
          <!--class="button&#45;&#45;grey">GitHub</a>-->
      <!--</div>-->
    <!--</div>-->


    <h1>about page :</h1>
    <div v-html="page.body"></div>
    <!--<ul>-->
      <!--{{allPosts}}-->
      <!--<li v:for="page in allPosts">-->
        <!--<div>11111</div>-->
        <!--<div>{{ page }}</div>-->
        <!--&lt;!&ndash;<h2>&ndash;&gt;-->
       <!---->
        <!--&lt;!&ndash;</h2>&ndash;&gt;-->
        <!--<p>-->
          <!--{{ page }}-->
        <!--</p>-->
      <!--</li>-->
    <!--</ul>-->
  </section>

</template>

<script>
  import Search from '../components/Search'
  import { mapState } from 'Vuex'

  export default {
    components: {
      Search,
    },
    computed: {
        ...mapState([
          'apollo_data',
          'counter'
        ]),
    },
    methods:{

    },
    data () {
      return {
        // Initialize your apollo data
        page: '',
      }
    },


  }
</script>

<style>

  /* Sample `apply` at-rules with Tailwind CSS
  .container {
    @apply min-h-screen flex justify-center items-center text-center mx-auto;
  }
  */


  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

</style>
