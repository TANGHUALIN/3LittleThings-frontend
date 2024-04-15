import { createSlice } from "@reduxjs/toolkit";
import { request,setToken as setTokenInLocal,getToken } from "../../utils";
import { loginAPI, getUidAPI } from "../../apis/userAPI";
import { getDiaryAPI } from "../../apis/diaryAPI";
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
            const {diaryEntry} = action.payload;
            const existingDiaryIndex = state.diaryList.findIndex(
                diary => diary.did === diaryEntry.did
            )
            if (existingDiaryIndex!==-1) {
                const existingDiary = state.diaryList[existingDiaryIndex]
                existingDiary.content.push(content)
                existingDiary.diaryDate = diaryEntry.entryDate
            } else {
                const newDiary = {
                    did:did,
                    diaryDate: diaryDate,
                    diaryEntry:[],
                    cid: 0,
                    favoriteState: false,
                };
                state.diaryList.push(newDiary);
            }
        }
        ,deleteDiary(state,action){

        }
        ,updateDiary(state,action){

        }
    }
});

const { setDiaryList, addNewDiary } = diaryStore.actions;
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

export { fetchDiaryList, fetchNewDiary, setDiaryList, addNewDiary };
export default diaryReducer;
