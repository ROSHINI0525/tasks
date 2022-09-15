<template>
  <v-container>
      <v-text-field 
      v-model="searchKey"
       placeholder="search"
       ></v-text-field>
      <v-btn 
      @click="search()"
      >search
      </v-btn>
  </v-container>
</template>
<script>
import axios from 'axios';
export default {
  name: "searchKey",
  data() {
      return {
      }
  },
  methods: {
      async search() {
          await axios.post('http://127.0.0.1:3333/search', {
              searchKey: this.searchKey
          }).then((response) => {
              this.$emit('searchFunc', response)
          })
      }
  }
}
</script>