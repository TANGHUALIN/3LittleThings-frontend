
import 'wc-waterfall'

import { useQueryClient,useQuery } from "@tanstack/react-query";

import DiaryOrFavorite from "./DiaryOrFavorite";
import { fetchDiaryList } from '../queryFN/diaryFN';

const FavoritePage=()=>{
    const queryClient = useQueryClient();
    const {
        isPending,
        isError,
        data:diaryList,
        error}=
      useQuery({
        queryKey: ['diaryList'],
        queryFn: fetchDiaryList, 
        cacheTime: 1000 * 60 * 60, 
        staleTime: 1000 * 60 * 10, 
        })
        const cachedDiaryList = diaryList.filter((diary)=>(diary.favoriteState===true))
    console.log(cachedDiaryList);
    
    return (   <DiaryOrFavorite diaryList={cachedDiaryList} />)
}
export default FavoritePage