<template>
  <v-app>
      <div>
          
          <searchKey @searchFunc="searchKey($event)"/>
      
      <v-form
      ref="form">
  
      <v-dialog
      v-model ="dialogbox"
       width="500">
      <template v-slot:activator="{on,attr}">
      <v-flex text-right align-right>
      <v-btn
          color="primary"
          v-bind="attr"
          v-on="on"  
      ><v-icon>
          mdi-plus
      </v-icon>
      </v-btn>
      </v-flex>
      </template>
      <v-card text class="white">
      <v-text-field
          v-model="attributes.id"
          label="id"
      ></v-text-field>
      <v-text-field
          v-model="attributes.name"
          label="name"
      ></v-text-field>
      <v-text-field
          v-model="attributes.department"
          label="department"
      ></v-text-field>
      <v-text-field
          v-model="attributes.language"
          label="language"
      ></v-text-field>
      <v-btn
          color="blue"
          v-if="correct"
          @click="add"
          >submit
      </v-btn>
      <v-btn
          color="blue"
          v-else
          @click="editform"
          >update
      </v-btn>
      </v-card>
      </v-dialog>
      </v-form> 
      </div> 
  <v-simple-table>
      <thead>
          <tr>
              <th>id</th>
              <th>name</th>
              <th>department</th>
              <th>language</th>
          </tr>

      </thead>
      <tbody>
          <tr 
          v-for="item in arr" :key="item.id"
          >
              <td>{{item.id}}</td>
              <td>{{item.name| shorttrim}}</td>
              <td>{{item.department}}</td>
              <td>{{item.language}}</td>
              <td> <v-btn @click="edit(item)"><v-icon small>mdi-pencil</v-icon></v-btn></td>
              <td><v-btn @click="deleted(item.id)"><v-icon small>mdi-delete</v-icon></v-btn></td>
      
              
          </tr>
      </tbody>
  </v-simple-table>

  </v-app>
</template>
<script>
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'
  import searchKey from './searchKey.vue'
  import { read,insert } from '../components/service/axios.js'

  Vue.use(VueAxios,axios)
  export default{
  data(){
      return{
    attributes:{
      id: "",
      name: "",
      department: "",
      language: "",
       },
      
      arr: [],
      dialogbox: false,
      correct: true,
      valform: {}
  }
},
  async mounted() {
      // this.arr=await read()
      Vue.axios.get(`${process.env.VUE_APP_APPKEY}/read/`)
          .then((resp) => this.arr = resp.data);
  },
  methods: {
      read() {
          Vue.axios.get(`${process.env.VUE_APP_APPKEY}/read/`)
              .then((resp) => this.arr = resp.data);
      },
      add() {
          Vue.axios.post(`${process.env.VUE_APP_APPKEY}/insert`, this.attributes );
          this.dialogbox = false;
          this.correct = true;
          this.$refs.form.reset();
          this.read();
      },
      deleted(id) {
          Vue.axios.delete(`${process.env.VUE_APP_APPKEY}/delete/${id}`);
          this.read();
      },
      edit(item) {
          this.dialogbox = true;
          this.correct = false;
          this.valform = item;
          this.attributes={
              id :item.id,
              name : item.name,
              department : item.department,
              language : item.language,
              
          }
      },
      editform() {
          // let test = this.arr.findIndex(temp => temp.id == this.valform.id);
          // this.arr[test].id = this.id;
          // this.arr[test].name = this.name;
          // this.arr[test].department = this.department;
          // this.arr[test].language = this.language;
          this.dialogbox = false,
              this.correct = true,
              Vue.axios.put(`${process.env.VUE_APP_APPKEY}/update/`, this.attributes);
              
              
          this.read();
          this.resetform();
          this.$refs.forms.reset();
      },
     
      resetform() {
          this.id = "";
          this.name = "";
          this.department = "";
          this.language = "";
      },
      
      searchKey(value) {
          this.arr = value.data;
      }
  },
  components: { searchKey }
}

</script>

