import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Dropdown, Space } from 'antd';

const ClassificationPulldown = ()=> {
    const { t }=useTranslation();
const items = [
  {
    label: <a href="https://www.antgroup.com">{t('work')}</a>,
    key: '0',
  },
  {
    label: <a href="https://www.aliyun.com">{t('study')}</a>,
    key: '1',
  },
  {
    label: <a href="https://www.aliyun.com">{t('life')}</a>,
    key: '2',
  },
];

  return (<Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Click me
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
  )
}
export default ClassificationPulldown;