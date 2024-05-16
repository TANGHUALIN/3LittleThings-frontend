import { HeartFilled,HeartOutlined,DeleteOutlined,EditOutlined,CheckOutlined} from "@ant-design/icons"
import { Card, Input, Form ,Button,ConfigProvider} from "antd";
import { processEntryReturnLi,processContentReturnLi } from "../utils/contentProcess";
import { useEffect,useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { updateDiaryEntry } from "../mutationFN/diaryFN";
import { useTranslation } from "react-i18next";
import { processEntryReturnString} from "../utils/contentProcess";
import { deleteDiaryEntry } from "../mutationFN/diaryFN";
const DiaryEdit=({diaryEntry,handleEditable,did})=>{
    const formRef = useRef(null);
    const queryClient = useQueryClient()
    const [formData,setFormData]=useState([]);
    const [emptyEntries, setEmptyEntries] = useState([]); 
    console.log("did",did)
    const updateEntryMutation = useMutation({
        mutationFn: (formData) => updateDiaryEntry(formData),
        onSuccess: (data, formData) => {
                queryClient.invalidateQueries('diaryList');
            
        },
        onError: (error) => {
            console.error("Mutation failed:", error);
        },
    })
    const deleteEntryMutation = useMutation({
        mutationFn: (eid) => deleteDiaryEntry(eid),
        onSuccess: () => {
                queryClient.invalidateQueries('diaryList')
        },
        onError: (error) => {
            console.error("Mutation failed:", error);
        },
    });
    
  const handleSubmit = () => {
    console.log("formData in submit", formData)
    if (emptyEntries.length > 0 && formData.length > 0) {
        updateEntryMutation.mutate(formData);
        deleteEntryMutation.mutate(emptyEntries);
    } else if (emptyEntries.length > 0) {
        deleteEntryMutation.mutate(emptyEntries);
    } else if (formData.length > 0) {
        updateEntryMutation.mutate(formData);
    } else {
        console.log("No entries to update or delete.");
    }
    handleEditable();
}

     const handleChange = (e) => {
        const { value, id } = e.target;
        const valueWithoutDot = value.startsWith("・") ? value.substring(1) : value;
        if (!valueWithoutDot) {
            setFormData(prevData => prevData.filter(entry => entry[id] === undefined))
            setEmptyEntries(prevEmptyEntries => [...prevEmptyEntries, id]);
        } else {
            const newDiaryEntry = { [id]: valueWithoutDot };
            setEmptyEntries(prevEids => prevEids.filter(eid => eid !== id));
            setFormData(prevFormData => {
                const existingIndex = prevFormData.findIndex(item => item[id]);
                if (existingIndex !== -1) {
                    return prevFormData.map((diaryEntry, idx) => idx === existingIndex ? newDiaryEntry : diaryEntry);
                } else {
                    return [...prevFormData, newDiaryEntry];
                }
            });
        }
    }
    
    
return(
    <ConfigProvider
  theme={{
    components: {
        token: {
            colorBorder: "rgba(0, 0, 0, 0.0)",
          },
      Input: {
        activeBg:"rgba(0, 0, 0, 0.0)",
        activeBorderColor:"rgba(0, 0, 0, 0.0)",
        hoverBorderColor:"rgba(0, 0, 0, 0.0)",
        hoverBg:"rgba(0, 0, 0, 0.0)",
        activeShadow:"rgba(0, 0, 0, 0.0)",
        errorActiveShadow:"rgba(0, 0, 0, 0.0)",

      },
    },
  }}
>
        <Form className="h-auto max-w-full " ref={formRef}  >
    {diaryEntry.map((entry) => (
        <Form.Item key={entry.eid} className="m-0">
          <Input
            autoSize
            name="entryContent"
            onChange={handleChange}
            id={entry.eid} 
            defaultValue={processEntryReturnString(entry.entryContent)}
            className="h-auto max-w-full bg-transparent outline-none border-none hover:bg-transparent focus:outline-none"
            onPressEnter={handleSubmit}

          />
        </Form.Item>
      ))}
   <CheckOutlined className="w-4 h-4 text-3xl mt-4 cursor-pointer hover:text-slate-400" onClick={handleSubmit}/>
     </Form>
     </ConfigProvider>
    
)
}
export default DiaryEdit