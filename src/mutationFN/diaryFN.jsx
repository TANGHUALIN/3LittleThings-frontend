import { deleteDiaryAPI, getEntryAddedAPI,getFavoriteStateAPI } from "../apis/diaryAPI";
export async function addNewDiary(formData) {
    const res = await getEntryAddedAPI(formData);
    console.log(res.data)
    return res.data;
}
export async function updateFavoriteState(did,favoriteState) {
        console.log(did,favoriteState)
        const res = await getFavoriteStateAPI(did,favoriteState);
        console.log(res.data)
        return res.data;
}
export async function deleteDiary(did) {
    console.log(did)
    const res = await deleteDiaryAPI(did);
    console.log(res.data)
    return res.data;
}



