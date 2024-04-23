import { getDiaryAPI } from "../apis/diaryAPI";
export async function fetchDiaryList() {
    const res = await getDiaryAPI();
    return res.data;
}


