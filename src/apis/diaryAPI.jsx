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
    return request({
        url: `/updateFavorite?did=${did}&favoriteState=${favoriteState}`,
        method: 'GET',
    });
}
