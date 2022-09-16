import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios);

let result=[];
async function read(){
    result=await Vue.axios.get(`${process.env.VUE_APP_APPKEY}/read/`)
    console.log(result.data);
    return result.data
}

async function insert(value){
   return result=await Vue.axios.post(`${process.env.VUE_APP_APPKEY}`+"/insert",
    {
    id:value.id,
    name:value.name,
    department:value.department,
    language:value.language
})
}
async function deleted(id){
   return result =await Vue.axios.delete(`${process.env.VUE_APP_APPKEY}/delete/${id}`)
}
async function update(value){
    return result = await Vue.axios.put(`${process.env.VUE_APP_APPKEY}`+"/update/", 
    {
        id:value.id,
        name:value.name,
        department:value.department,
        language:value.language
    });

}
async function sortidasc(){
    return result = await Vue.axios.get(`${process.env.VUE_APP_APPKEY}/Sortidasc/`)
}
async function sortiddsc(){
    return await Vue.axios.get(`${process.env.VUE_APP_APPKEY}/Sortiddsc/`)
}
async function sortnameasc(){
    return result = await Vue.axios.get(`${process.env.VUE_APP_APPKEY}/Sortnameasc/`)
}
async function sortnamedsc(){
    return result = await Vue.axios.get(`${process.env.VUE_APP_APPKEY}/Sortnamedsc/`)
}
async function sortdepartmentasc(){
    return result = await Vue.axios.get(`${process.env.VUE_APP_APPKEY}/Sortdepartmentasc/`)
}
async function sortdepartmentdsc(){
    return result = await Vue.axios.get(`${process.env.VUE_APP_APPKEY}/Sortdepartmentsc/`)
}
async function sortlanguageasc(){
    return result = await Vue.axios.get(`${process.env.VUE_APP_APPKEY}/Sortlanguageasc/`)
}
async function sortlanguagedsc(){
    return result = await Vue.axios.get(`${process.env.VUE_APP_APPKEY}/Sortlanguagedsc/`)
}

export {read,insert,deleted,update,sortidasc,sortiddsc,sortnameasc,sortnamedsc,sortdepartmentasc,sortdepartmentdsc,sortlanguageasc,sortlanguagedsc};