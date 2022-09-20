<template>
    <div>
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
              v-model="attributes.branch"
              label="branch"
          ></v-text-field>
          <v-text-field
              v-model="attributes.doorNumber"
             
              label="doorNumber"
          ></v-text-field>
          <v-text-field
              v-model="attributes.street"
              label="street"
          ></v-text-field>
          <v-text-field
              v-model="attributes.landmark"
              label="landmark"
          ></v-text-field>
          <v-text-field
              v-model="attributes.pincode"
              label="pincode"
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
    <div>
      <v-data-table
      :headers="headers"
      :items="arr"
      :items-per-page="10"
      class="elevation-1"
    >
    <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
        <v-icon small class="mr-2" @click="deleted(item.id)">mdi-delete</v-icon>
    </template>
  </v-data-table>
  </div>
  </div>
  </template>
  
  <script>
     import Vue from 'vue'
      import axios from 'axios'
      import VueAxios from 'vue-axios'
      Vue.use(VueAxios,axios)
      import searchKey from './searchKey.vue'
  
  export default {
    name: "customerTable",
    data() {
        return {
          headers: [
           
            { text: 'id', value: 'id' },
            { text: 'branch', value: 'branch' },
            { text: 'door_number', value: 'door_number' },
            { text: 'street', value: 'street' },
            { text: 'landmark', value: 'landmark' },
            { text: 'pincode', value: 'pincode' },
            { text: 'Actions', value: 'actions', sortable: false },
          ],
          attributes:{
          id: null,
          branch: "",
          doorNumber:null,
          street:"",
          landmark:"",
          pincode:null
           },
           arr: [],     
           dialogbox: false,
           correct: true,
           valform: {}
        }
    },
    mounted() {
        this.axios.get("http://127.0.0.1:3333/hotelread/").then((response) => {
            this.arr = response.data
        })
    },
    methods:{
      read() {
              Vue.axios.get("http://127.0.0.1:3333/hotelread/")
                  .then((resp) => this.arr = resp.data);
          },
  
  
      add() {
              
              Vue.axios.post("http://127.0.0.1:3333/hotelinsert", this.attributes )
              .then((res)=>{
                console.log(res);
                this.read();
              })
              this.dialogbox = false;
              this.correct = true;      
          },
      deleted(id) {
          Vue.axios.delete(`http://127.0.0.1:3333/hoteldelete/${id}`);
              this.read();
          },
      editItem(item) {
          this.dialogbox = true;
          this.correct = false;
          this.valform = item;
          this.attributes={
                  id :item.id,
                  branch : item.branch,
                  doorNumber: item.door_number,
                  street : item.street,
                  landmark : item.landmark,
                  pincode : item.pincode,
              }
          },
       editform() {
              let test = this.arr.findIndex(temp => temp.id == this.valform.id);
              this.arr[test].id = this.id;
              this.arr[test].branch = this.branch;
              this.arr[test].door_number = this.door_number;
              this.arr[test].street = this.street;
              this.arr[test].landmark = this.landmark;
              this.arr[test].pincode = this.pincode;
              this.dialogbox = false,
                  this.correct = true,
                  Vue.axios.put("http://127.0.0.1:3333/hotelupdate",this.attributes) ;
              this.read();
              this.resetform();
              this.$refs.forms.reset();
          },
       resetform() {
              this.id = "";
              this.branch = "";
              this.door_number = "";
              this.street = "";
              this.landmark = "";
              this.pincode = "";
              
             
          },
  
      searchKey(value) {
          this.arr = value.data;
       },
      
          
    },
    components: { searchKey }
    
    
  
  }
  </script>