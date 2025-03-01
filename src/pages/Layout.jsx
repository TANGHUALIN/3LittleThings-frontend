import React from 'react';
import { Layout, Flex } from 'antd';
import { Outlet } from 'react-router-dom';
import SiteTitle from '../components/SiteTitle';
import HeadNav from '../components/HeadNav';
import FooterWithAboutUs from '../components/Footer';
import SideNav from '../components/SideNav';
import DiaryPage from './DiaryPage';
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 150,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#fff',
};
const contentStyle = {
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#FFF',
};
const siderStyle = {
  textAlign: 'left',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#fff',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#fff',
  height:'10%'
};
const layoutStyle = {
  height: '100%'
};
const LayoutPage = () => {

    return(
   
      <Layout style={layoutStyle}>
       <Header style={headerStyle}>
        <div className="flex ml-10 mt-8">
      <SiteTitle />
      <div className="ml-auto"><HeadNav /></div>  
        </div> 
      </Header>
      <Layout>
        <Sider width="20%" style={siderStyle}>
         <SideNav />
        </Sider>
        <Content style={contentStyle}>
        {/* 二級ルータの出口 */}
        <Outlet />
        </Content>
      </Layout>
      <Footer style={footerStyle}><FooterWithAboutUs/></Footer>
    </Layout>
);
    }
export default LayoutPage;