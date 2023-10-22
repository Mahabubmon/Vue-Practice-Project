<template>
    <HeaderVue /> 
    <h1>Add Resturent </h1>
    <form class="add">
        <input type="text" placeholder="Enter Name" v-model="resturent.name" name="name"/>
        <input type="text" placeholder="Enter Address" v-model="resturent.address" name="address"/>
        <input type="text" placeholder="Enter contect" v-model="resturent.contect" name="contect"/>
        <button type="button" v-on:click="addresturent">Add New Resturent</button>
    </form>
       
    </template>
    
    <script>
    import HeaderVue from './HeaderVue.vue';
    import axios from 'axios'
    export default{
        name:"AddVue",
        components:{
            HeaderVue
        },
        
        data()
        {
            return {
                resturent:{
                    name:'',
                    address:'',
                    contect:''
                }
            }
        },
        methods:{
           async addresturent()
           {
                console.warn(this.resturent);
                const result = await axios.post(" http://localhost:3000/resturent",{
                    name:this.resturent.name,
                    address:this.resturent.address,
                    contect:this.resturent.contect,
                });
                if(result.status==201)
                {
                    this.$router.push({name:'HomeVue'});
                }
                console.warn("result",result)
            }

        },
        mounted()
        {
            let user = localStorage.getItem('user-info');
            if(!user)
            {
                this.$router.push({name:'SignUp'});
            }
        }
         }
    </script>