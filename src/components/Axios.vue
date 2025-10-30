<script setup>
import  axios from 'axios'
import {ref, onMounted} from 'vue';
const posts = ref([]);
onMounted(async()=>{
    try{
         const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
         console.log(response.data);
         posts.value = response.data
    }
    catch(error){
        console.log('errow');
        
    }
})
</script>
<template>
<h1>Axios</h1>
<ul class="post-list">
    <li v-for="item in posts">
        <p>id {{ item.id }}</p>
        <p>title {{ item.title }}</p>
    </li>
</ul>
</template>

<style scoped>

</style>
