import { createSlice } from "@reduxjs/toolkit";
import { request} from "../../utils";

import { getDiaryAPI, getFavoriteStateAPI } from "../../apis/diaryAPI";
const diaryStore = createSlice({
    name: "diary",
    initialState: {
        diaryList: [],
    },
    reducers: {
        setDiaryList(state, action) {
            state.diaryList = action.payload;
        },
        addNewDiary(state, action) {
            const { diaryEntry } = action.payload;
            const existingDiaryIndex = state.diaryList.findIndex(
              diary => diary.did === diaryEntry.did
            );
          
            if (existingDiaryIndex !== -1) {
              // Update existing diary
              const updatedDiaryList = [...state.diaryList];
              updatedDiaryList[existingDiaryIndex] = {
                ...updatedDiaryList[existingDiaryIndex],
                diaryEntry: [...updatedDiaryList[existingDiaryIndex].diaryEntry, diaryEntry],
              };
          
              return {
                ...state,
                diaryList: updatedDiaryList,
              };
            } else {
              // Add new diary
              const newDiary = {
                did: diaryEntry.did,
                diaryDate: diaryEntry.diaryDate,
                diaryEntry: [diaryEntry],
                favoriteState: false,
              };
              
              return {
                ...state,
                diaryList: [...state.diaryList, newDiary],
              };
            }
          }
          
        
       
        ,deleteDiary(state,action){

        }
        ,updateFavoriteState(state, action) {
            const diaries = state.diaryList;
            const { did, favoriteState } = action.payload;
            const existingDiaryIndex = state.diaryList.findIndex(
                diary => diary.did === did
            )
            if (existingDiaryIndex !== -1) {
                const existingDiary = state.diaryList[existingDiaryIndex];
                const updatedDiary = {
                    ...existingDiary,
                    favoriteState: favoriteState
                }
                const newDiaryList = diaries.map((diary, index) => {
                    if (index === existingDiaryIndex) {
                        return updatedDiary;
                    }
                    return diary;
                })
                return { ...state, diaryList: newDiaryList };
            }
            return state
        }
        
    
    }
});

const { setDiaryList, addNewDiary,updateFavoriteState } = diaryStore.actions;
const diaryReducer = diaryStore.reducer;

const fetchDiaryList = () => async (dispatch) => {
    try {
        const res = await getDiaryAPI();
        dispatch(setDiaryList(res.data));
        console.log(res.data)
    } catch (error) {
        console.error('Error fetching diary list:', error);
    }
};

const fetchNewDiary = () => async (dispatch) => {
    try {
        const res = await getEntryAddedAPI();
        dispatch(addNewDiary(res.data));
        console.log(res.data)
    } catch (error) {
        console.error('Error fetching newest diary:', error);
    }
};
const fetchFavoriteState=(did,favoriteState)=>async (dispatch) => {
    try {
        const res = await getFavoriteStateAPI(did,favoriteState);
        if (res.status === 200) {
          dispatch(updateFavoriteState(did, favoriteState));
        } else {
          console.error('Failed to update favorite state.');
        }
      } catch (error) {
        console.error('Error updating favorite state:', error);
      }
};

export { fetchDiaryList, fetchNewDiary, setDiaryList, addNewDiary,updateFavoriteState,fetchFavoriteState };
export default diaryReducer;
