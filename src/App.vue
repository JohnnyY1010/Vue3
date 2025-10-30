<script setup>
// import Axios from './components/Axios.vue';
import NoteList from './components/NoteList.vue';
import ToolBar from './components/ToolBar.vue';
</script>

<template>
  <header>
    <ToolBar />
  </header>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3">
        <NoteList/>
      </div>
      <div class="col-9">
          <RouterView/>
      </div>
    </div>
  </div>
  <footer>
    <p>Copyright© Johnny Y</p>
  </footer>
</template>

<style scoped>
footer{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
}
footer p{
    color: white;
    display: flex;
    text-align: center;
    align-items: center;
}
</style>
