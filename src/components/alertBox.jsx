import React from 'react';
import { Alert, Space, message } from 'antd';
const AlertBox = ({alertMsg,detailedMsg,type}) => (
   <Alert
      message={ alertMsg }
      description={ detailedMsg}
      type={ type }
      showIcon
      className='w-[24rem]'
    />
);
export default AlertBox;