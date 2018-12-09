<template>
  <div>
    <nuxt-link :to="`/`">Back</nuxt-link>
    <b-loading :is-full-page="true" :active.sync="$apollo.loading" :can-cancel="true"></b-loading>
    <section class="bg-white py-8">
      <div class="w-5/6 max-w-lg ml-auto mr-auto mt-8 mb-8">
        <div class="flex flex-col justify-center text-center pb-8">
          <h2 class="text-5xl font-semibold leading-none tracking-tight mb-4">{{ manufacturer.name }}</h2>
          <h3 class="text-3xl text-blue-darker opacity-75 font-normal leading-none mb-8">Turn off motion smoothing A.K.A Soap Opera effect for {{manufacturer.name}} TV sets</h3>
        </div>

        <div class="bg-white rounded shadow-lg overflow-hidden">

          <div class="flex flex-col-reverse md:flex-row bg-grey-lightest ">
            <div class="flex-1">
              <div class="p-8">
                <h2>Every TV maker has a different name for Motion Smoothing. In {{manufacturer.name}} sets it's called <b>{{manufacturer.settingName}}</b></h2>
              </div>
            </div>


          </div>
        </div>
      </div>

      <div class="w-5/6 max-w-md ml-auto mr-auto pt-8 mt-8 mb-8">
        <div class="flex flex-wrap -mx-6 -my-6">
          <div class="w-full sm:w-1/2 px-6 py-6">
            <h3 class="text-xl font-semibold leading-tight mb-3">Can I use these templates for free?</h3>
            <p class="text-lg leading-normal text-grey-darker mb-8">Yes! These templates are open-source so you can copy, paste and edit them any way you see fit.</p>
          </div>
          <div class="w-full sm:w-1/2 px-6 py-6">
            <h3 class="text-xl font-semibold leading-tight mb-3">Can I use these templates for free?</h3>
            <p class="text-lg leading-normal text-grey-darker mb-8">Yes! These templates are open-source so you can copy, paste and edit them any way you see fit.</p>
          </div>
          <div class="w-full sm:w-1/2 px-6 py-6">
            <h3 class="text-xl font-semibold leading-tight mb-3">Can I use these templates for free?</h3>
            <p class="text-lg leading-normal text-grey-darker mb-8">Yes! These templates are open-source so you can copy, paste and edit them any way you see fit.</p>
          </div>
          <div class="w-full sm:w-1/2 px-6 py-6">
            <h3 class="text-xl font-semibold leading-tight mb-3">Can I use these templates for free?</h3>
            <p class="text-lg leading-normal text-grey-darker mb-8">Yes! These templates are open-source so you can copy, paste and edit them any way you see fit.</p>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script>
  import gql from 'graphql-tag'
  export default {
    data: function(){
      return {
        manufacturer: ""
      }
    },
    apollo: {
      manufacturer: {
        query: gql`
          query Manufacturer($id: ItemId){
              manufacturer(
                filter: {id: { eq: $id }
              }) {
                id,
                name,
                settingName,
                body,
                youtubeSettingsLink{
                url
                },
                products{
                  productName
                }
              }
        }`,
        prefetch({route}) {
          return {
            id: route.params.id
          }
        },
        variables(){
          return {
            id: this.$route.params.id
          }
        }
      }
    }
  }

</script>

<style scoped>

</style>
