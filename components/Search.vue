<template>

  <section>

      <b-autocomplete
        rounded
        v-model="name"
        :data="filteredDataArray"
        field="name"
        placeholder="e.g. LG, Toshiba"
        icon="magnify"
        @select="onSelect"
        class="text-3xl"
        >
        <template slot="empty">No results...</template>
      </b-autocomplete>

  </section>
</template>

<script>
  import gql from 'graphql-tag'
  export default {
    data() {
      return {
        allManufacturers: [
        ],
        name: '',
        selected: null
      }
    },
    apollo:{
      allManufacturers: gql`query{
        allManufacturers{
          id,
          name,
        }
      }`
    },
    methods: {
      onSelect(selected){
        return this.$router.push(`/guides/${selected.id}`)
      }
    },
    computed: {
      filteredDataArray() {
        if(typeof this.allManufacturers == 'undefined'){
          return []
        }
        return this.allManufacturers.filter((option) => {
          return option.name
            .toString()
            .toLowerCase()
            .indexOf(this.name.toLowerCase()) >= 0
        })
      }
    }
  }
</script>
