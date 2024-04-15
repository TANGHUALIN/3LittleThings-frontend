import { useTranslation } from "react-i18next";
import Diary from "./DiaryFormat";
import 'wc-waterfall'
const SampleDiaries = () => {
  const { t } = useTranslation();

  return (
<wc-waterfall gap={10} cols={3}>
<div>  <Diary diary=  {{
            did: 122,
            content: t('diary4'),
            diaryDate: '2023-10-1'
          }} /></div>
<div><Diary diary=  {{
            did: 122,
            content: t('diary6'),
            diaryDate: '2023-10-2'
          }} /></div>
<div><Diary diary=  {{
            did: 122,
            content: t('diary5'),
            diaryDate: '2023-10-3'
          }} /></div>
<div><Diary diary=  {{
            did: 122,
            content: t('diary3'),
            diaryDate: '2023-10-4'
          }} /></div>
<div><Diary diary=  {{
            did: 122,
            content: t('diary2'),
            diaryDate: '2023-10-5'
          }} /></div>
<div><Diary diary=  {{
            did: 122,
            content: t('diary1'),
            diaryDate: '2023-10-6'
          }} /></div>
</wc-waterfall>





  );
};



export default SampleDiaries;
