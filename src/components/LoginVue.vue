<template>
    <img class="logo" src="../assets/restologo.png" >
<h1>Login Page</h1>
<div class="login">
        
        <input type="text" v-model="email" placeholder="Enter Email"/>
        <input type="password" v-model="password" placeholder="Enter Password"/>
        <button v-on:click="login" >Login</button>
        <p>
            <router-link to="/sign-up">SignUp</router-link>
        </p>
    </div>    
    
    </template>
    
    <script>
    import axios from 'axios'
    export default {
        name:'LoginVue',
        
    }
    
    </script>