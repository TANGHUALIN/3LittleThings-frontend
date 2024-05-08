
import 'wc-waterfall'

import { useQueryClient,useQuery } from "@tanstack/react-query";

import DiaryOrFavorite from "./DiaryOrFavorite";
import { fetchDiaryList } from '../queryFN/diaryFN';

const FavoritePage=()=>{

    
    return (   <DiaryOrFavorite  favorite={true} />)
}
export default FavoritePage