<template>
  <v-app>
    <router-link to="/booksTable"><v-btn>booksTable</v-btn></router-link><br/>
     <router-link to="/studentsTable"><v-btn>studentsTable</v-btn></router-link>
     <router-view/>
  </v-app>
</template>

<!-- <script>
import searchKey from '@/components/searchKey.vue'
import studentsTable from '@/components/studentsTable.vue'
import booksTable from '@/components/booksTable.vue'

 

export default {
  name: 'App',
  components: {
    searchKey,
    studentsTable,
    booksTable

},

  data: () => ({
    
  }),
};
</script> -->
