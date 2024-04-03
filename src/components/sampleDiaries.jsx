import { useTranslation } from "react-i18next";
import Diary from "./Diary"
const SampleDiaries=()=>{
    const {t}=useTranslation()  
    return(


<div className="grid grid-cols-3 grid-rows-2 gap-3">
  <div className=""><Diary diary={{
            did: 122,
            content: t('diary1'),
            updateTime: '2023-10-1'
          }} /></div>
  <div className="">
         <Diary diary=  {{
            did: 122,
            content: t('diary2'),
            updateTime: '2023-10-1'
          }} /></div>
            <div className="row-span-1">
         <Diary diary=  {{
            did: 122,
            content:t('diary4'),
            updateTime: '2023-10-1'
          }} /></div>
  <div className="">
            <Diary diary=  {{
            did: 122,
            content: t('diary3'),
            updateTime: '2023-10-1'
          }} /></div>
           <div className="row-span-1">
            <Diary diary=  {{
            did: 122,
            content: t('diary3'),
            updateTime: '2023-10-1'
          }} /></div>
           <div className="row-span-1">
            <Diary diary=  {{
            did: 122,
            content: t('diary3'),
            updateTime: '2023-10-1'
          }} /></div>

          
      {/*   <Diary diary=  {{
            did: 122,
            content: t('diary5'),
            updateTime: '2023-10-1'
          }} />
           <Diary diary=  {{
            did: 122,
            content:t('diary6'),
            updateTime: '2023-10-1'
          }} />  <div style={{ clipPath: 'polygon(0 0, 0 99%, 70% 0)'}}>
              </div>*/}  
</div>
 
        
    )
}
export default SampleDiaries;