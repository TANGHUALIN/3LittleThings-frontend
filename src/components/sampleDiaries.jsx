import Diary from "./diarySample"
import { Row,Col } from "antd";
const SampleDiaries=()=>{  
    return(
<div class=" mt-[1rem] font-noto-jp w-1/3 h-[18rem] ml-[5rem] flex-auto lg:grid grid-cols-3 gap-0">
 <Diary diary=  {{
            did: 122,
            content: `one
        two
        three`,
            updateTime: '2023-10-1'
          }} />
         <Diary diary=  {{
            did: 122,
            content: `one
        two
        three`,
            updateTime: '2023-10-1'
          }} />
         <div style={{clipPath: 'polygon(100% 0, 100% 59%, 78% 100%, 0 100%, 0 0)'}}>
            <Diary diary=  {{
            did: 122,
            content: `one
        two
        three`,
            updateTime: '2023-10-1'
          }} /></div>


         <Diary diary=  {{
            did: 122,
            content: `one
        two
        three`,
            updateTime: '2023-10-1'
          }} />
           <Diary diary=  {{
            did: 122,
            content: `one
        two
        three`,
            updateTime: '2023-10-1'
          }} />
          <div style={{ clipPath: 'polygon(0 0, 0 99%, 70% 0)'}}>
               <Diary diary=  {{
            did: 122,
            content: `one
        two
        three`,
            updateTime: '2023-10-1'
          }} /></div>
             <Diary diary=  {{
            did: 122,
            content: `one
        two
        three`,
            updateTime: '2023-10-1'
          }} />
          <div style={{ clipPath: 'polygon(100% 0, 100% 39%, 74% 100%, 0 100%, 0 0)' }}>
        <Diary diary=  {{
            did: 122,
            content: `one
        two
        three`,
            updateTime: '2023-10-1'
          }} /></div>
      
        </div>
    )
}
export default SampleDiaries;