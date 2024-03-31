import React from 'react';
import { Layout, Flex } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const LayoutT=()=>{
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
    const footerStyle = {
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#4096ff',
      };

return(
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
      <SiteTitle />
        <HeadNav />
      </Header>
      <Content style={contentStyle}>Content</Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
)
}
