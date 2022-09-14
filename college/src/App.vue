<template>
  <v-app>
    <!-- <v-div> -->
    <!-- <booksTable/> -->
    <studentsTable />
    <searchKey />
    <!-- </v-div> -->
  </v-app>
</template>

<script>
import searchKey from '@/components/searchKey.vue'
import studentsTable from '@/components/studentsTable.vue'
 

export default {
  name: 'App',
  components: {
    searchKey,
    studentsTable
},

  data: () => ({
    
  }),
};
</script>
