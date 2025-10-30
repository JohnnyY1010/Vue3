import { createRouter, createWebHistory } from 'vue-router'
import AddNote from '../components/AddNote.vue';
import EditNote from '../components/EditNote.vue';
import NoteGrid from '../components/NoteGrid.vue';
import SearchNote from '../components/SearchNote.vue';

const routes = [
    { path: '/', component: NoteGrid, name: 'home' },
    { path: '/add', component: AddNote, name: 'add' },
    { path: '/edit/:id', component: EditNote, name: 'edit' },
    { path: '/search', component: SearchNote, name: 'search' },
]
const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router