import { HeartFilled,HeartOutlined,DeleteOutlined,EditOutlined,CheckOutlined} from "@ant-design/icons"
import { useTranslation } from "react-i18next";

const DiaryCard=({contentList,handleDeleteDiary,handleEditDiary,clickHeart,favoriteState})=>{
    const {i18n}=useTranslation()
    const layoutClassName = i18n.language === 'jp' ? 'font-noto-jp' : 'font-noto-cn';

    return(
        <div className={layoutClassName}>
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