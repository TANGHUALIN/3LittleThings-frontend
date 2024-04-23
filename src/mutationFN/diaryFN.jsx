import { getEntryAddedAPI,getFavoriteStateAPI } from "../apis/diaryAPI";
export async function addNewDiary(formData) {
    const res = await getEntryAddedAPI(formData);
    console.log(res.data)
    return res.data;
}
export async function updateFavoriteState(did,favoriteState) {
        const res = await getFavoriteStateAPI(did,favoriteState);
        console.log(res.data)
        return res.data;
}




