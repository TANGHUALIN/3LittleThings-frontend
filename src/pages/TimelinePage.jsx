import { Timeline } from 'antd';
import { processEntryReturnP } from '../utils';
import { useQuery } from '@tanstack/react-query';
import { fetchDiaryList } from '../queryFN/diaryFN';
import TimelineComponent from '../components/TimelineFormat';

const TimelinePage = () =>{
  const {
    isPending,
    isError,
    data:diaryList,
    error}=
  useQuery({
    queryKey: ['diaryList'],
    queryFn: fetchDiaryList, 
    cacheTime: 1000 * 60 * 60, 
    staleTime: 1000 * 60 * 10, 
    })
  
return(
    <div>
      {diaryList?.map((diary) => (
        <TimelineComponent key={diary.did} diary={diary} />
      ))}
    </div>
)
}
export default TimelinePage;