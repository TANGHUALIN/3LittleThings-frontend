import { HeartFilled,HeartOutlined,DeleteOutlined,EditOutlined,CheckOutlined} from "@ant-design/icons"


const DiaryCard=({contentList,handleDeleteDiary,handleEditDiary,clickHeart,favoriteState})=>{
   
    return(
        <div>
        {contentList}
      <div className="flex">
       <div onClick={handleDeleteDiary}><DeleteOutlined /></div>
      <div className="ml-2" onClick={handleEditDiary}> <EditOutlined /></div>
      <div className="ml-auto" onClick={clickHeart}>{favoriteState?<HeartFilled/>:<HeartOutlined />}</div> 
       </div>
       </div>
    )
}
export default DiaryCard