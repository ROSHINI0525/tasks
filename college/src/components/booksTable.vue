





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
            v-model="attributes.author"
            label="author"
        ></v-text-field>
        <v-text-field
            v-model="attributes.price"
            label="price"
        ></v-text-field>
        <v-text-field
            v-model="attributes.year"
            label="year"
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
  ><template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template></v-data-table>
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
  name: "booksTable",
  data() {
      return {
        headers: [
         
          { text: 'id', value: 'id' },
          { text: 'author', value: 'author' },
          { text: 'price', value: 'price' },
          { text: 'year', value: 'year' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
        attributes:{
        id: null,
        author: "",
        price: null,
        year: null,
         },
         arr: [],     
         dialogbox: false,
         correct: true,
      }
  },
  mounted() {
      this.axios.get("http://127.0.0.1:46171/bookread/").then((response) => {
          this.arr = response.data
      })
  },
  methods:{
    read() {
            Vue.axios.get("http://127.0.0.1:46171/bookread/")
                .then((resp) => this.arr = resp.data);
        },


    add() {
            Vue.axios.post("http://127.0.0.1:46171/bookinsert", this.attributes )
            .then((res)=>{
              console.log(res);
              this.read();
            })
            this.dialogbox = false;
            this.correct = true;      
        },
        
  },
  components: { searchKey }
  
  

}
</script>
