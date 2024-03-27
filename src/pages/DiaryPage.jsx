import { useState } from "react"
//import Diary from "../components/diary"
const DiaryPage=()=>{
    const[diaryList,setDiaryList]=useState([])
    const[classificationList,setClassificationList]=useState([])
    const[favoriteState,setFavoriteState]=useState([])


    return 
    <div>
        this is diarypage
    {/*<Diary>
       {diaryList.map(item=>
       <div value={item.did}>
        {item.updateTime}
        {item.content}
        </div>)}
       </Diary>*/}

    </div>
}
export default DiaryPage