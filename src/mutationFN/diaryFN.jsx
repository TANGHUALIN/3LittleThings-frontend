import { deleteDiaryAPI, getEntryAddedAPI,getFavoriteStateAPI,updateDiaryEntryAPI,deleteDiaryEntryAPI } from "../apis/diaryAPI";
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
    console.log(res)
    return res.data;
}
export async function updateDiaryEntry(formData) {
    console.log("formData",formData)
    const res = await updateDiaryEntryAPI(formData)
    console.log(res.data)
    console.log("Response status:", res.status);
    return res.data;
}
export async function deleteDiaryEntry(eid) {
    const res = await deleteDiaryEntryAPI(eid);
    console.log(res)
    
    return res;
}


