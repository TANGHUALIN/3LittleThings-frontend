import React from 'react';
import { Timeline } from 'antd';
const TimelinePage = () =>{



  return (
  <Timeline
    items={[
      {
        color: 'red',
        children: (
          <>
            <p>Solve initial network problems 1</p>
            <p>Solve initial network problems 2</p>
            <p>Solve initial network problems 3 2015-09-01</p>
          </>
        ),
      },  
    ]}
  />
);
}
export default TimelinePage;