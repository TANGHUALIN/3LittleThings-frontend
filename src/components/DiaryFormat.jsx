import { HeartFilled,HeartOutlined,DeleteOutlined,EditOutlined,CheckOutlined} from "@ant-design/icons"
import { Card, Input, Form ,Button} from "antd";
import { processEntryReturnLi,processContentReturnLi, processEntryReturnString } from "../utils/contentProcess";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { deleteDiary, updateFavoriteState } from "../mutationFN/diaryFN";
import { useTranslation } from "react-i18next";
import { processEntryReturnP } from "../utils/contentProcess";
import DiaryEdit from "./DiaryEdit";
import DiaryCard from "./DiaryCard";

const Diary=({diary,keyword})=>{

  const[content,setContent]=useState(diary)
  const[isEditing,setIsEditing]=useState(false)
  const [favoriteState, setFavoriteState] = useState(diary.favoriteState);
const {t}=useTranslation()
  

const [form]=Form.useForm()

const queryClient = useQueryClient()


 
  let contentList;
  if(diary.diaryEntry){
    contentList = processEntryReturnLi(diary.diaryEntry,keyword)
  }
    else{ contentList=null }
    let contentListEditable;
    if(diary.diaryEntry){
      contentListEditable= processEntryReturnP(diary.diaryEntry)}
      else{ contentList=null }
    
  const clickHeart=()=>{
    console.log("clicked",)
    try{
      favoriteStateMutation.mutate([diary.did,!favoriteState])
    setFavoriteState(!favoriteState)
  } catch(error){
    console.log(error)
   }
  }
  const favoriteStateMutation=useMutation({
    mutationFn: ([did,fS])=>updateFavoriteState(did,fS),
    onSuccess: (data) => {
      console.log("Mutation succeeded with data:", data)
      if(data.status === 200){
        queryClient.setQueryData(['diaryList', data.did], (existingDiary) => {
          return {
            ...existingDiary,
            favoriteState: !existingDiary.favoriteState
          };
        });
      }
      queryClient.invalidateQueries('diaryList');
    },    
      onError: (error) => {
      console.log("Mutation failed with error:", error)
      },
     } )


     const deleteDiaryMutation=useMutation({
      mutationFn: (did)=>deleteDiary(did),
      onSuccess: () => {
        queryClient.invalidateQueries('diaryList');
      },    
        onError: (error) => {
        console.log("Mutation failed with error:", error)
        },
       } )
  

const handleDeleteDiary=()=>{
  deleteDiaryMutation.mutate(diary.did)

}

const handleEditDiary=()=>{
  setIsEditing(true)
  
}

const handleEditable=()=>{

  setIsEditing(false)

}
 
const onValuesChange = (changedValues, allValues) => {
  console.log('Changed Values:', changedValues);
  console.log('All Values:', allValues);
};


  return(
   
     <Card size="small" id={diary.did} className="bg-slate-300 rounded-lg  h-auto max-w-full text-center" title={diary.diaryDate}>
  
  {isEditing?<DiaryEdit diaryEntry={diary.diaryEntry}
 handleEditable={handleEditable}
 did={diary.did}/>:
  <DiaryCard 
  contentList={contentList}
  handleDeleteDiary={handleDeleteDiary}
handleEditDiary={handleEditDiary}
clickHeart={clickHeart}
favoriteState={favoriteState}

 />}
     
  
  
    </Card>
   
  )
}
export default Diary;