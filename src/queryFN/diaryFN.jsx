import { getDiaryAPI,getDiaryCountAPI } from "../apis/diaryAPI";
export async function fetchDiaryList(page) {
    console.log("page in fn",page)
    const res = await getDiaryAPI(page);
    return res.data;
}
export async function fetchDiaryCount() {
    const res = await getDiaryCountAPI();
    console.log(res.data)
    return res.data;
}



