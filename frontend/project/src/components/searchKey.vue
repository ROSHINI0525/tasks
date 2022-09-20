<template>
    
    <v-container>
        <v-text-field 
        v-model="searchKey"
         placeholder="search"
         @keyup="search()"
         ></v-text-field>
        </v-container>
    
</template>
<script>
export default {
  name: "searchKey",
  data() {
      return {
      }
  },
  methods: {
      async search() {
         this.$emit('searchFunc',{searchKey:this.searchKey})
          
      }
  },
}
</script>