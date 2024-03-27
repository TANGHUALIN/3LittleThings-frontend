import { HeartFilled,HeartOutlined } from "@ant-design/icons"

const Diary=({diary})=>{
  const {did,content,updateTime}=diary
  const lines = content.split('\n');
  const contentList = lines.map((line, index) => (
    <li key={index}>{line}</li>
));
  return(
    <div class=" w-[9rem] h-[12rem] opacity-90 bg-slate-100 rounded-lg mr-[-0.5rem]  mb-[2rem]">
    <p id={did}>
      <h4 class="underline text-center"> {updateTime}</h4>
     <ul class="list-disc pl-4 mt-3">
      {contentList}
     </ul>

    </p>
    </div>
  )
}
export default Diary;