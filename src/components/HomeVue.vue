<template>
    <HeaderVue /> 
    <table border="1">
    <tr>
    <td>ID</td>
    <td>NAME</td>
    <td>ADDRESS</td>
    <td>CONTECT</td>
    <td>Action</td>

    </tr>
    <tr v-for="item in resturent" :key="item.id">
    <td>{{ item.id }}</td>
    <td>{{ item.name }}</td>
    <td>{{ item.address }}</td>
    <td>{{ item.contect }}</td>
    <td><router-link :to="'/update/'+item.id">Update</router-link></td>
    <button v-on:click="deleteResturent(item.id)">Delete</button>
    </tr>
</table>
<AddMenu />
       
    </template>
    
    <script>
    import axios from 'axios';
    import HeaderVue from './HeaderVue.vue';
    import AddMenu from './AddMenu.vue';
    export default{
        name:"HomeVue", 
        data()
    {
        return {
            name:'',
            resturent:[],
        }
    },
    components:{
        HeaderVue, AddMenu
    },
    methods:{
        async deleteResturent(id){
            let result = await axios.delete("http://localhost:3000/resturent/"+id);
            if(result.status==200){
                this.loadData();

            }
        },
        async loadData(){
            let user = localStorage.getItem('user-info');
        this.name= JSON.parse(user).name
        if(!user)
        {
            this.$router.push({name:'SignUp'});
        }
        let result = await axios.get("http://localhost:3000/resturent");
        console.warn(result)
        this.resturent = result.data;
        }
    },
    mounted()
    {
        this.loadData();
    }
        
    }
    </script>
    
    <style>
tdd{
    width: 350px;
    height: 120px;
}


</style>