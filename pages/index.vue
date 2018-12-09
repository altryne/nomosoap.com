<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        nomosoap.com
      </h1>
      <h2 class="subtitle">
        No Mo Soapy TV
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>

    <div> All blog posts</div>
    <div v-for="post in allPosts">
      <h1>{{post.title}}</h1>
      <h2>{{post.slug}}</h2>

      <VueMarkdown>
        {{post.body}}

      </VueMarkdown>
    </div>
    <!--<ul>-->
      <!--{{allPosts}}-->
      <!--<li v:for="post in allPosts">-->
        <!--<div>11111</div>-->
        <!--<div>{{ post }}</div>-->
        <!--&lt;!&ndash;<h2>&ndash;&gt;-->
          <!--&lt;!&ndash;<nuxt-link :to="`blog/${post.slug}`">&ndash;&gt;-->
            <!--&lt;!&ndash;{{ post.title }}&ndash;&gt;-->
          <!--&lt;!&ndash;</nuxt-link>&ndash;&gt;-->
        <!--&lt;!&ndash;</h2>&ndash;&gt;-->
        <!--<p>-->
          <!--{{ post }}-->
        <!--</p>-->
      <!--</li>-->
    <!--</ul>-->
  </section>

</template>

<script>
  import Logo from '~/components/Logo.vue'
  import gql from 'graphql-tag'
  import VueMarkdown from 'vue-markdown'

  export default {
    components: {
      Logo,
      VueMarkdown
    },

    apollo:{
      allPosts: gql`{
        allPosts {
          title,
          body,
          slug
        }
    }`
    }
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

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495E;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
