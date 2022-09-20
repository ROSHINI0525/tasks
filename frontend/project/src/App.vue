<template>
  <v-app>
    <router-link to="/customerTable"><v-btn>customerTable</v-btn></router-link><br/>
     <router-link to="/hotelTable"><v-btn>hotelTable</v-btn></router-link>
     <router-view/>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
