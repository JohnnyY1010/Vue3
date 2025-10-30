<script setup>
import {ref, watchEffect} from 'vue'
import { useNoteStore } from '../stores/notestore';
import { useRoute, useRouter } from 'vue-router';
const noteStore = useNoteStore();
const router = useRouter();
const route = useRoute();
let noteTitle = ref('');
let noteContent = ref('');
let noteId = Number(route.params.id);
watchEffect(function(){
  noteId = Number(route.params.id);
  const currentNote = noteStore.notes.find(note => note.id === noteId);
  if(currentNote != null){
  noteTitle.value = currentNote.title
  noteContent.value = currentNote.content;
}
})
let is_edited = ref(false);
const showSuccessAlert = ref(false);
function editNote(){
  if(noteTitle.value && noteContent.value){
    is_edited.value = noteStore.editNote(noteId, noteTitle.value, noteContent.value);
  }if(is_edited){
    showSuccessAlert.value = true;
    setTimeout(()=>{
      showSuccessAlert.value = false;
      router.push('/');
    },1000)
  }

}
</script>
<template>
<div class="container p-5">
  <div class="alert alert-success text-left" role="alert" v-show="showSuccessAlert">
    更新成功!
  </div>
  <h2 class="mb-5">編輯筆記</h2>
  <form @submit.prevent="editNote">
    <div class="mb-3">
        <input type="text" class="form-control" id="title" placeholder="請輸入標題..." v-model="noteTitle">
    </div>
    <div class="mb-3">
        <textarea class="form-control" id="note" rows="20" v-model="noteContent"></textarea>
    </div>
    <button class="btn btn-outline-success">更新 <i class="fa-solid fa-floppy-disk"></i></button>
  </form>
</div>

</template>

<style scoped>
  
</style>