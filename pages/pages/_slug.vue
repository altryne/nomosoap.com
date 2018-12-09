<template>
  <div>
    <nuxt-link :to="`/`">Back</nuxt-link>
    <h1> {{page.title}}</h1>
    <p v-html="page.body"> </p>

  </div>
</template>

<script>
  import gql from 'graphql-tag'
  export default {
    data: function(){
      return {
        page: ""
      }
    },
    apollo: {
      page: {
        query: gql`
          query Page($slug: String!){
              page(
                filter: {slug: { eq: $slug }
              }) {
                slug,
                title,
                body
              }
        }`,
        prefetch({route}) {
          return {
            slug: route.params.slug
          }
        },
        variables(){
          return {
            slug: this.$route.params.slug
          }
        }
      }
    }
  }

</script>

<style scoped>

</style>
