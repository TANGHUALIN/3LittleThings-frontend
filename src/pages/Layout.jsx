import React from 'react';
import { Layout, Flex } from 'antd';
import { Outlet } from 'react-router-dom';
import SiteTitle from '../components/siteTitle';
import HeadNav from '../components/headNav';
import FooterWithAboutUs from '../components/footer';
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};
const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(50% - 8px)',
  maxWidth: 'calc(50% - 8px)',
};
const LayoutPage = () => (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <SiteTitle />
        <HeadNav />
      </Header>
      <Layout>
        <Sider width="25%" style={siderStyle}>
          Sider
        </Sider>
        <Content style={contentStyle}>
            <Outlet />
            
            Content</Content>
      </Layout>
      <Footer style={footerStyle}>
        <FooterWithAboutUs />
      </Footer>
    </Layout>   
);
export default LayoutPage;