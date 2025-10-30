<script setup>
import { ref } from 'vue';
import { useNoteStore } from '../stores/notestore';
import{useRouter} from 'vue-router'
const noteStore = useNoteStore();
const newTitle = ref('');
const newContext = ref('筆記內容寫這邊...');
const router = useRouter()
function clearPlaceholder() {
  document.querySelector('#title').placeholder = '';
}
function clearTextArea() {
  newContext.value = '';
}
let is_added = ref(false)
const showSuccessAlert = ref(false);
function createNote(){
  if(newTitle.value){
    is_added = noteStore.AddNote(newTitle, newContext);
  }
  if(is_added){
    showSuccessAlert.value = true;
    setTimeout(function(){
      showSuccessAlert.value = false
      router.push('/')
    }, 1000)
  }
}
</script>
<template>
<div class="container p-5">
  <div class="alert alert-success text-left" role="alert" v-show="showSuccessAlert">
    更新成功!
  </div>
  <h2 class="mb-5">新增筆記</h2>
  <form @submit.prevent="createNote">
    <div class="mb-3">
        <input type="text" class="form-control" id="title" placeholder="請輸入標題..." v-model="newTitle" @focus="clearPlaceholder()">
    </div>
    <div class="mb-3">
        <textarea class="form-control" id="note" rows="20" v-model="newContext" @focus="clearTextArea()"></textarea>
    </div>
    <button class="btn btn-outline-success">更新 <i class="fa-solid fa-floppy-disk"></i></button>
  </form>
</div>
</template>

<style scoped>
  
</style>