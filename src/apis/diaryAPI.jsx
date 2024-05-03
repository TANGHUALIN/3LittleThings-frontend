//日記に関するリクエスト
import { request } from "../utils";
export function getDiaryAPI(page){
    return request({
        url:`/displayDiary?page=${page}`,
        method:'GET',
    })
}
export function getDiaryCountAPI(){
    return request({
        url:`/diaryCount`,
        method:'GET',
    })
}


export function getEntryAddedAPI(formData){
    return request(
        {
            url:'/addDiary',
            method:'POST',
            data:formData
        }
    )
}
export function getFavoriteStateAPI(did, favoriteState) {
    console.log("params in api",did,favoriteState)
    return request({
        url: `/updateFavorite?did=${did}&favoriteState=${favoriteState}`,
        method: 'PUT',
    });
}
export function deleteDiaryAPI(did) {
    return request({
        url: `/deleteDiary?did=${did}`,
        method: 'DELETE',
    });
}
export function updateDiaryEntryAPI(formData) {
    return request({
        url: `/updateDiaryEntry`,
        method: 'PUT',
        data:formData
    });
}
export function deleteDiaryEntryAPI(eid) {
    return request({
        url: `/deleteDiaryEntry`,
        method: 'DELETE',
        data:eid
    });
}

