<template>
  <v-app>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    >
    <v-dialog v-model="dialog" width="750" color="yellow">
    <template v-slot:activator="{ on, attrs }">
      <v-flex text-right align-right>
        <v-btn
          color="primary"
          v-bind="attrs"
          v-on="on"
        >
        <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-flex>
      </template>
      <v-card class="white">
        <v-text-field
     v-model="id"
     
     label="id"
     
   >id</v-text-field>
          <v-text-field
     v-model="name"
     :rules="nameRules"
     label="Name"
     required
   >Name</v-text-field>
   <v-text-field
     v-model="email"
     :rules="emailRules"
     label="E-mail"
     required
   ></v-text-field>
   <!-- <br> -->
   <h2>Gender</h2>
   <v-radio-group
   v-model="gender"
   row
   >
           <v-radio
             label="male"
             value="male"
           ></v-radio>
           <v-radio
             label="female"
             value="female"
           ></v-radio>
     </v-radio-group>
 <h2>Hobbies </h2>
 <v-checkbox
    v-model="selectedHobbies"
    v-for="(i) in hobbies"
    :key = "i"
    :label="i"
    :value="i">
  </v-checkbox>

 <v-autocomplete
     v-model="location"
     :items="selectedLocation"
     :rules="[v => !!v || 'Location is required']"
     label="location"
     required
   ></v-autocomplete>
    <v-btn
    v-if="random"
     color="success"
     @click="update" >
     submit
   </v-btn> 
   <v-btn
   v-else
     color="success"
     @click="save" >
     update
     
   </v-btn>  
  </v-card>
</v-dialog>
</v-form>
<v-simple-table>
      <thead>
        <tr>
          <th>Id</th>
          <th scope="col">Name </th>
          <th scope="col">Email</th>
          <th scope="col">gender</th>
          <th scope="col">hobby</th>
          <th scope="col">location</th>
        </tr>
      </thead>
      <tbody>
         <tr
          v-for="item in arr" :key = "item.id">
          <td>{{item.id}}</td>
          <td>{{ item.name | shorttrim}}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.gender}}</td>
          <td>{{ item.hobby }}</td>
          <td>{{ item.location }}</td>
          <td>
        <v-btn @click="edit(item)"><v-icon small>mdi-pencil</v-icon></v-btn>
        <v-btn @click="deleted(item.id)"><v-icon small>mdi-delete</v-icon></v-btn>
      </td>
        </tr>
      </tbody>
      
    </v-simple-table>
</v-app>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)
  export default {
    
    
       data: () => ({
        formopen:{},
        arr:[],
        return :{forms:undefined},


          tempObj:{},
        
        
         name: '',
         id:'',
         gender:'',
         selectedHobbies:[],
         location: '',
         

         dialog : false,
         nameRules: [
           name=>!!name||'Name is required',
         ],
         email: '',
         emailRules: [
           email => !!email || 'E-mail is required',
           v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
         ],
        
         hobbies: ['Dancing','Movies','Playing','Singing'],
         selectedLocation: [
           'Tamil Nadu',
           'Kerala',
           'Karnataka',
           'Goa',
           'Telangana',
         ],
         random:true,
       }),
       mounted()
       {
        Vue.axios.get("http://127.0.0.1:35285/read/")
        .then((resp)=>
        this.arr=resp.data);  
        },
       methods: {
        update(){
            Vue.axios.post("http://127.0.0.1:35285/insert",{id:this.id,
              name:this.name,
              email:this.email,
              gender:this.gender,
              hobby:this.selectedHobbies,
              location:this.location})
              this.dialog=false
        },
        edit(item){
            this.random = false
            this.dialog = true
            this.formopen = item
            this.id = item.id
            this.name = item.name
            this.email = item.email
            this.gender=item.gender
            this.selectedHobbies= item.selectedHobbies
            this.location= item.location  
        },             
        save(){
            let test = this.arr.findIndex(temp => temp.id == this.formopen.id)
            this.arr[test].id = this.id
            this.arr[test].name = this.name
            this.arr[test].email = this.email
            this.arr[test].gender =this.gender
            this.arr[test].selectedHobbies= this.selectedHobbies
            this.arr[test].location= this.location
            this.dialog=false
            this.random=true
            Vue.axios.put('http://127.0.0.1:35285/edit',{
              id : this.id,
              name : this.name,
              email :this.email,
              gender : this.gender,
              selectedHobbies : this.selectedHobbies,
              location :this.location
            })
            this.reset()
            this.$refs.forms.reset()  
        },
        
        
        async deleted(id)
                {
                    await Vue.axios.delete(`http://127.0.0.1:35285/delete/${id}`)

                    Vue.axios.get("http://127.0.0.1:35285/read/").then((resp)=>this.arr=resp.data);
                },

          close(){
              this.dialog = false
          },
        
      del(item){
      this.edit = this.info.indexOf(item)
      this.editItem = Object.assign({}, item)
      this.dialogDelete = true
      this.info.splice(this.edit, 1)
      
      this.close()
      },
      
     reset(){
      this.name = ''
      this.email =''
      this.gender =''
      this.selectedHobbies=''
      this.selectedLocation= ''
    }
  }
  }
  </script>