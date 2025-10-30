import { defineStore } from 'pinia'
import NoteGrid from '../components/NoteGrid.vue'
import AddNote from '../components/AddNote.vue'
import SearchNote from '../components/SearchNote.vue'

export const useNoteStore = defineStore("notes", {
    state: () => ({
        notes: [
            {
                id: 1,
                title: '運動計畫',
                content: '每週三次慢跑30分鐘，提升體能與健康',
                pinned: false
            },
            {
                id: 2,
                title: '學習新知',
                content: '每天晚上閱讀30分鐘技術書籍，增進專業能力',
                pinned: true
            },
            {
                id: 3,
                title: '娛樂放鬆',
                content: '每週安排一次電影之夜，舒緩壓力',
                pinned: true
            },
            {
                id: 4,
                title: '時間規劃',
                content: '每週日晚上規劃下週行程，提升效率',
                pinned: false
            },
            {
                id: 5,
                title: '運動打卡',
                content: '使用APP記錄每日步數，養成運動習慣',
                pinned: false
            },
            {
                id: 6,
                title: '學習筆記',
                content: '每次學習後整理重點，方便複習',
                pinned: false
            }
        ],
        SearchNotes: []
    }),
    getters: {
        pinnedNotes(state) {
            return state.notes.filter(note => note.pinned)
        },
        unPinnedNotes(state) {
            return state.notes.filter(note => !note.pinned)
        }
    },
    actions: {
        markPinned(id) {
            const note = this.notes.find(note => note.id === id);
            note.pinned = !note.pinned
        },
        AddNote(newTitle, newContent) {
            if (newTitle == false) return false
            const newId = this.notes.length + 1;
            this.notes.push({
                id: newId,
                title: newTitle,
                content: newContent,
                pinned: false
            })
            return true
        },
        editNote(id, newTitle, newContent) {
            const note = this.notes.find(note => note.id === id)
            if (note !== -1) {
                note.title = newTitle
                note.content = newContent
                return true
            }
        },
        deleteNote(id) {
            const index = this.notes.findIndex(note => note.id === id);
            this.notes.splice(index, 1);
        },
        searchNotes(keyword) {
            this.searchResult = this.notes.filter(
                note => note.title.includes(keyword) || note.content.includes(keyword));
            console.log(this.searchResult);

        }
    }

})