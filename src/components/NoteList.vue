<script setup>
import { useNoteStore } from '../stores/notestore';
import { ref, onMounted} from 'vue';
const notes = useNoteStore();
let selectedNoteId = ref(0);
let deleteModal = null;
onMounted(()=>{
  deleteModal = new bootstrap.Modal(document.getElementById('deleteModal'))
})
const showDeleteModal = (note)=>{
  selectedNoteId.value = note.id
  deleteModal.show()
}
const confirmDelete = ()=>{
  notes.deleteNote(selectedNoteId.value);
  deleteModal.hide();
}
</script>
<template>
  <div class="sidebar">
    <div class="container">
    <div class="text-center">
        <router-link :to="{name:'add'}">
            <button class="my-4 btn btn-info w-75">新增筆記</button>
        </router-link>
    </div>
      <div class="row">
        <div class="col-12">
            <h5 class="mt-4">筆記列表</h5>
            <h5 class="pt-3"><i class="fa-solid fa-thumbtack me-2 pinnid"></i>&nbsp;&nbsp;重要</h5>   
            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center" v-for="note in notes.pinnedNotes">
                    <i class="fa-solid fa-thumbtack pinnid pointer" @click="notes.markPinned(note.id)" ></i>
                    <router-link :to="{name:'edit',params:{id:note.id}}">
                     <span class="w-100 mx-4">{{ note.title }}</span>
                    </router-link>
                <div class="icon-group">
                    <i class="fa-solid fa-trash pointer" @click="showDeleteModal(note)"></i>
                </div>
                </li>
                <h5 class="pt-3"><i class="fa-solid fa-list me-2"></i>&nbsp;列表</h5>
                <li class="list-group-item d-flex justify-content-between align-items-center" v-for="note in notes.unPinnedNotes">
                <i class="fa-solid fa-thumbtack pointer" @click="notes.markPinned(note.id)"></i>
                <router-link :to="{name:'edit',params:{id:note.id}}">
                 <span class="w-100 mx-4">{{ note.title }}</span>
                </router-link>
                <div class="icon-group ">
                    <i class="fa-solid fa-trash pointer" @click="showDeleteModal(note)"></i>
                </div>
                </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
<div class="modal fade" tabindex="-1" id="deleteModal">
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
.sidebar{
    width: 100%;
    background: #f0f0f0;
    height: 80vh;
}
.icon-group{
  display: flex;
  width: 50px;
  justify-content: end;
  align-items: center;
}
.pointer{
    cursor: pointer;
    font-size: 16px;
}
.pointer:hover{
  color:rgb(255, 0, 0);
}
.pinnid{
    color: red;
    transform: rotate(45deg);
}
span{
  color: #000;
}
.list-group-item:hover{
  background-color: #f5f5f5;
}
</style>