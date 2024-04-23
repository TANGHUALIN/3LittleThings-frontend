//日記に関するリクエスト
import { request } from "../utils";
export function getDiaryAPI(){
    return request({
        url:'/displayDiary',
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
        method: 'GET',
    });
}
export function deleteDiaryAPI(did) {
    return request({
        url: `/deleteDiary?did=${did}`,
        method: 'GET',
    });
}
export function updataDiaryEntryAPI(eid) {
    return request({
        url: `/deleteDiary?eid=${eid}`,
        method: 'GET',
    });
}

