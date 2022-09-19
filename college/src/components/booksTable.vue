





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
         valform: {}
      }
  },
  mounted() {
      this.axios.get("http://127.0.0.1:3333/bookread/").then((response) => {
          this.arr = response.data
      })
  },
  methods:{
    read() {
            Vue.axios.get("http://127.0.0.1:3333/bookread/")
                .then((resp) => this.arr = resp.data);
        },


    add() {
            Vue.axios.post("http://127.0.0.1:3333/bookinsert", this.attributes )
            .then((res)=>{
              console.log(res);
              this.read();
            })
            this.dialogbox = false;
            this.correct = true;      
        },
    deleted(id) {
        Vue.axios.delete(`http://127.0.0.1:3333/bookdelete/${id}`);
            this.read();
        },
    editItem(item) {
        this.dialogbox = true;
        this.correct = false;
        this.valform = item;
        this.attributes={
                id :item.id,
                author : item.author,
                price : item.price,
                year : item.year,
                
            }
        },
     editform() {
            let test = this.arr.findIndex(temp => temp.id == this.valform.id);
            this.arr[test].id = this.id;
            this.arr[test].author = this.author;
            this.arr[test].price = this.price;
            this.arr[test].year = this.year;
            this.dialogbox = false,
                this.correct = true,
                Vue.axios.put("http://127.0.0.1:3333/bookupdate",this.attributes) ;
            this.read();
            this.resetform();
            this.$refs.forms.reset();
        },
     resetform() {
            this.id = "";
            this.author = "";
            this.price = "";
            this.year = "";
        },

    searchKey(value) {
        this.arr = value.data;
     },
    
        
  },
  components: { searchKey }
  
  

}
</script>
