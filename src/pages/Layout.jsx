import React from 'react';
import { Layout, Flex } from 'antd';
import { Outlet } from 'react-router-dom';
import SiteTitle from '../components/SiteTitle';
import HeadNav from '../components/HeadNav';
import { useSelector } from "react-redux"
import FooterWithAboutUs from '../components/Footer';
import SideNav from '../components/SideNav';
import DiaryPage from './DiaryPage';
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#fff',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#FFF',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#fff',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#fff',
};
const layoutStyle = {
  height: '100%',
  overflow: 'hidden',
  width: 'calc(50% - 8px)',
  maxWidth: 'calc(50% - 8px)',
};
const LayoutPage = () => {

    return(
   
      <Layout style={layoutStyle}>
      <Header style={headerStyle}><HeadNav/></Header>
      <Layout>
        <Sider width="25%" style={siderStyle}>
         <SideNav />
        </Sider>
        <Content style={contentStyle}><DiaryPage /></Content>
      </Layout>
      <Footer style={footerStyle}><FooterWithAboutUs/></Footer>
    </Layout>
);
    }
export default LayoutPage;