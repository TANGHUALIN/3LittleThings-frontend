import { useTranslation } from "react-i18next";
import SampleDiary from "./SampleDiary";
import 'wc-waterfall'
const SampleDiaries = () => {
  const { t } = useTranslation();

  return (
<wc-waterfall gap={10} cols={3}>
<div>  <SampleDiary diary=  {{
            did: 1,
            content: t('diary1'),
            diaryDate: '2024-04-01'
          }} /></div>
<div><SampleDiary diary=  {{
            did: 2,
            content: t('diary2'),
            diaryDate: '2024-04-02'
          }} /></div>
<div><SampleDiary diary=  {{
            did: 3,
            content: t('diary3'),
            diaryDate: '2024-04-03'
          }} /></div>
<div><SampleDiary diary=  {{
            did: 4,
            content: t('diary4'),
            diaryDate: '2024-04-05'
          }} /></div>
<div><SampleDiary diary=  {{
            did: 5,
            content: t('diary5'),
            diaryDate: '2024-04-11'
          }} /></div>
<div><SampleDiary diary=  {{
            did: 6,
            content: t('diary6'),
            diaryDate: '2024-04-21'
          }} /></div>
</wc-waterfall>





  );
};



export default SampleDiaries;
