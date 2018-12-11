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
  import { mapState } from 'Vuex'

  export default {
    data() {
      return {

        name: '',
        selected: null
      }
    },
    methods: {
      onSelect(selected){
        return this.$router.push(`/guides/${selected.id}`)
      }
    },
    computed: {
      ...mapState([
        'apollo_data'
      ]),
      filteredDataArray() {
        if(typeof this.apollo_data.allManufacturers == 'undefined'){
          return []
        }
        return this.apollo_data.allManufacturers.filter((option) => {
          return option.name
            .toString()
            .toLowerCase()
            .indexOf(this.name.toLowerCase()) >= 0
        })
      }
    }
  }
</script>
