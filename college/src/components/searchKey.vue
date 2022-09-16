<template>
  <v-container>
      <v-text-field 
      v-model="searchKey"
       placeholder="search"
       @keyup="search()"
       ></v-text-field>
      <!-- <v-btn 
      @click="search()"
      >search
      </v-btn> -->
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
          await axios.post(`${process.env.VUE_APP_APPKEY}/search`, {
              searchKey: this.searchKey
          }).then((response) => {
              this.$emit('searchFunc', response)
          })
      }
  },
//   async search() {
//           await axios.post(`${process.env.VUE_APP_APPKEY}/booksearch`, {
//               searchKey: this.searchKey
//           }).then((response) => {
//               this.$emit('searchFunc', response)
//           })
//       }
  
}
</script>