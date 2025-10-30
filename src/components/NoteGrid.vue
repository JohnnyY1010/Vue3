<script setup>
import { useNoteStore } from '../stores/notestore';
import { ref, onMounted} from 'vue';
const noteStore = useNoteStore();
const{notes, markPinned} = noteStore;
let selectedNoteId = ref(0);
let deleteModal = null;
onMounted(()=>{
  deleteModal = new bootstrap.Modal(document.getElementById('deleteModal2'))
})
const showDeleteModal = (note)=>{
  selectedNoteId.value = note.id
  deleteModal.show()
}
const confirmDelete = ()=>{
  noteStore.deleteNote(selectedNoteId.value);
  deleteModal.hide();
}
</script>
<template>
<main id="result" class="container mt-4">
    <div class="row d-flex justify-content-start">
        <div class="col-4 mr-2 mb-4" v-for="note in notes">            
            <div class="card">
                <i class="fa-solid fa-thumbtack me-3 mb-3 pointer" :class="{'rotate':note.pinned}" @click="markPinned(note.id)"></i>
                <div class="card-body">
                  <router-link :to="{name:'edit',params:{id:note.id}}">
                    <h5 class="card-title">{{ note.title }}</h5>
                    <hr>
                    <p class="card-text">{{ note.content }}</p>
                  </router-link>
                    <i class="fa-solid fa-trash pointer" @click="showDeleteModal(note)"></i>
                </div>
            </div>
        </div>
    </div>
</main>
<div class="modal fade" tabindex="-1" id="deleteModal2">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">刪除資料</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>確定刪除此筆資料?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
        <button type="button" class="btn btn-primary" @click="confirmDelete()">確定</button>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.rotate{
  transform: rotate(45deg);
  color: red;
}
.pointer{
    cursor: pointer;
    font-size: 24px;
}
.pointer:hover{
  color:rgb(114, 114, 114);
}
.card-body {
  position: relative;
  color: #000;
}
.card:hover{
  background-color: #eaf5f8;
}
.card-title .card-text{
  color: #000;
}
.fa-trash {
  position: absolute;
  right: 0px;
  bottom: 0px;
  cursor: pointer;
  font-size: 16px;
}
.fa-trash:hover {
  color: rgb(114, 114, 114);
}
</style>