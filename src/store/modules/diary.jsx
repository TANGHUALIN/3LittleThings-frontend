import { createSlice } from "@reduxjs/toolkit";
import { request,setToken as setTokenInLocal,getToken } from "../../utils";
import { loginAPI, getUidAPI } from "../../apis/userAPI";
import { getDiaryAPI } from "../../apis/diaryAPI";

const diaryStore=createSlice(
    {
        name:"diary",
        initialState:{
            diaryList:[],
        },
        reducers:{
            setDiaryList(state,action){
                state.diaryList=action.payload
            },
            addDiaryList(state,action){
                const {update_time,content}=action.payload
                const entryDate = new Date(update_time).toDateString()
                const existingDiaryIndex = state.diaryList.findIndex(
                    diary => new Date(diary.update_time).toDateString() === entryDate
                )
                if (existingDiaryIndex >= 0) {
                    const existingDiary = state.diaryList[existingDiaryIndex];
                    existingDiary.content.push(content);
                    existingDiary.update_time = update_time;
                } else {
                    const newDiary = {
                      update_time:[update_time],
                      content:[content],
                      cid:0,
                      favoriteState:false,
                    };
                    state.diaryList.push(newDiary);
                }
           
        }
    }
)
const {setDiaryList,addDiaryList}=diaryStore.actions
const diaryReducer=diaryStore.reducer
const fetchDiaryList=()=>{
    return async()=>{
        const res=await getDiaryAPI()
        dispatch(setDiaryList(res.data))
    }
}
const fetchNewDiaryList=(dispatch,state)=>{
    async(dispatch,state)=>{
        const res=await getEntryAPI()
        const currentDiaries=state.diaryList
        const uniqueNewDiaries=res.data.filter((newDiary)=>{
            return !currentDiaries.some((currentDiary) => {
                return currentDiary.id === newDiary.id; // Assuming each diary has a unique ID
            })
        }

        )
        dispatch(addDiaryMap(uniqueNewDiaries))
    }
   

}
export{  fetchDiaryMap,fetchNewDiaryMap,setDiaryMap,addDiaryMap}
export default diaryReducer
