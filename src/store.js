import { reactive } from "vue";

export const store = reactive({
    characters: [],
    categorysList: ["Breaking Bad","Better Call Saul"],
    categorySelected:""
})