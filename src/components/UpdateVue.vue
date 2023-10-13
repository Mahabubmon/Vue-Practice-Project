<template>
    <HeaderVue /> 
    <h1>Update of Resturent</h1>
    <form class="add">
        <input type="text" placeholder="Enter Name" v-model="resturent.name" name="name"/>
        <input type="text" placeholder="Enter Address" v-model="resturent.address" name="address"/>
        <input type="text" placeholder="Enter contect" v-model="resturent.contect" name="contect"/>
        <button type="button" v-on:click="updateResturent">Update Resturen</button>
    </form>
    
    
       
    </template>
    
    <script>
    import HeaderVue from './HeaderVue.vue';
    import axios from "axios"
    export default{
        name:"UpdateVue",
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
        components:{
            HeaderVue
        },
        methods:
        {
            async updateResturent(){
                const result = await axios.put(" http://localhost:3000/resturent/"+this.$route.params.id,{
                    name:this.resturent.name,
                    address:this.resturent.address,
                    contect:this.resturent.contect,
                });
                if(result.status==200)
                {
                    this.$router.push({name:'HomeVue'});
                }
            }
        },
        async mounted()
        {
            let user = localStorage.getItem('user-info');
            if(!user)
            {
                this.$router.push({name:'SignUp'});
            }
            const result = await axios.get(" http://localhost:3000/resturent/"+this.$route.params.id);
            // console.warn(this.$route.params.id)
            
            this.resturent = result.data
        }
        
    }
    </script>