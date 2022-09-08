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
   <h2>Hobbies</h2>
   <v-checkbox
      v-model="selectedHobbies"
      v-for="(i) in hobbies"
      :key = "i"
      :label="i"
      :value="i">
    </v-checkbox>

   <v-autocomplete
       v-model="selectedLocation"
       :items="location"
       :rules="[v => !!v || 'Location is required']"
       label="location"
       required
     ></v-autocomplete>
      <v-btn
      v-if="random"
       :disabled="!valid"
       color="success"
       @click="validate" >
       submit
     </v-btn> 
     <v-btn
     v-if="!random"
       :disabled="!valid"
       color="success"
       @click="save" >
       Update
     </v-btn>  
    </v-card>
  </v-dialog>
  </v-form>
  <v-simple-table>
        <thead>
          <tr>
            <th scope="col">Name </th>
            <th scope="col">Email</th>
            <th scope="col">gender</th>
            <th scope="col">hobby</th>
            <th scope="col">location</th>
          </tr>
        </thead>
        <tbody>
           <tr
            v-for="(item,i) in info" :key = "i">
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.gender}}</td>
            <td>{{ item.selectedHobbies }}</td>
            <td>{{ item.selectedLocation }}</td>
            <td>
          <v-btn @click="edit(item)"><v-icon small>mdi-pencil</v-icon></v-btn>
          <v-btn @click="del(item)"><v-icon small>mdi-delete</v-icon></v-btn>
        </td>
          </tr>
        </tbody>
        
      </v-simple-table>
  </v-app>
  </template>
  <script lang="ts">
    export default {
         data: () => ({
            tempObj:{},
            info :[],
           valid: true,
           name: '',
           gender:'',
           dialog : '',
           nameRules: [
             name=>!!name||'Name is required',
           ],
           email: '',
           emailRules: [
             email => !!email || 'E-mail is required',
             v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
           ],
           selectedLocation: '',
           selectedHobbies:[],
           hobbies : ['Dancing','Movies','Playing','Singing'],
           location: [
             'Tamil Nadu',
             'Kerala',
             'Karnataka',
             'Goa',
             'Telangana',
           ],
           random:true,
         }),
         methods: {
            close(){
                this.dialog = false
            },
           validate () {
            // const info = this.info
            this.$refs.form.validate()
             this.info.push({
               name : this.name,
               email : this.email,
               gender :this.gender,
               selectedLocation: this.selectedLocation,
               selectedHobbies:this.selectedHobbies,
             }),
            //  this.random=false
             this.dialog=false
            //  console.log(info[0])
            //  this.$refs.form
            this.reset()
             this.close()
           },

        del(item){
        this.edit = this.info.indexOf(item)
        this.editItem = Object.assign({}, item)
        this.dialogDelete = true
        this.info.splice(this.edit, 1)
        
        this.close()
        },
        edit(item) {
        this.dialog = true
        this.random=false
        this.tempObj = item 
        this.name = item.name
        this.email = item.email
        this.gender=item.gender
        this.selectedHobbies= item.selectedHobbies
        this.selectedLocation= item.selectedLocation
      },
      save() {
        let test = this.info.findIndex(temp => temp.id == this.tempObj.id)
        
          this.info[test].name = this.name
          this.info[test].email = this.email
          this.info[test].gender =this.gender
          this.info[test].selectedHobbies= this.selectedHobbies
          this.info[test].selectedLocation= this.selectedLocation
         this.random=true
         this.reset()
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