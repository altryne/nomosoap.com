<template>
  <div>
    <nuxt-link :to="`/`">Back</nuxt-link>
    <b-loading :is-full-page="true" :active.sync="$apollo.loading" :can-cancel="true"></b-loading>
    <section class="bg-white py-8">
      <div class="w-5/6 max-w-lg ml-auto mr-auto mt-8 mb-8">
        <div class="flex flex-col justify-center text-center pb-8">
          <h2 class="text-5xl font-semibold leading-none tracking-tight mb-4">{{ getManufacturer.name }}</h2>
          <h3 class="text-3xl text-blue-darker opacity-75 font-normal leading-none mb-8">Turn off motion smoothing A.K.A Soap Opera effect for {{ getManufacturer.name }} TV sets</h3>
        </div>

        <div class="bg-white rounded shadow-lg overflow-hidden">

          <div class="flex flex-col-reverse md:flex-row bg-grey-lightest ">
            <div class="flex-1">
              <div class="p-8">
                <h2>Every TV maker has a different name for Motion Smoothing. In {{ getManufacturer.name }} sets it's called <b>{{getManufacturer.settingName}}</b></h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center"><div class="bg-grey-light h-1 w-16 rounded"></div></div>

      <div class="w-5/6 max-w-lg ml-auto mr-auto mt-8 mb-8">
        <h1 class="text-4xl font-normal tracking-tight leading-none mb-3">Step by Step guide</h1>

        <section class="bg-grey-lightest py-8">
          <div class="w-5/6 max-w-lg ml-auto mr-auto mt-8">
            <div class="flex flex-wrap -mx-6 -my-6">
              <div class="w-full px-6 py-6" v-for="step, index in getManufacturer.steps">
                  <div class="bg-purple-light rounded shadow-lg overflow-hidden p-8justify-start justify-start">
                    <div class="number flex">{{index + 1}}</div>
                    <div class="flex flex-wrap text-lg text-white leading-tight" v-html="step.stepDescription" ></div>
                  </div>
              </div>
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
            </div>
          </div>
        </section>
        <ul>
          <ol v-for="step, index in getManufacturer.steps" v-html="step.stepDescription">

          </ol>
        </ul>
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
  export default {
    data: function(){
      return {
        manufacturer: ""
      }
    },
    computed:{
      getManufacturer(){
        let apollo_data =  this.$store.state.apollo_data
        let result = apollo_data.allManufacturers.filter(
          x => x.id.toString().toLowerCase().indexOf(this.$route.params.id) > -1
        )
        return result[0]
      }
    }
    // apollo: {
    //   manufacturer: {
    //     query: gql`
    //       query Manufacturer($id: ItemId){
    //           manufacturer(
    //             filter: {id: { eq: $id }
    //           }) {
    //             id,
    //             name,
    //             settingName,
    //             body,
    //             youtubeSettingsLink{
    //             url
    //             }
    //             steps {
    //               stepDescription
    //             }
    //           }
    //     }`,
    //     prefetch({route}) {
    //       return {
    //         id: route.params.id
    //       }
    //     },
    //     variables(){
    //       return {
    //         id: this.$route.params.id
    //       }
    //     }
    //   }
    // }
  }

</script>

<style scoped>

</style>
