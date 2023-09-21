import React from "react";
import { Layout } from "antd";
import AppFooter from "../components/Footer";
import SideBar from "../components/SideBar";
const { Content } = Layout;

const MainScreen = ({ children }) => {
  return (
    <Layout className="main-layout">
      <SideBar />
      <Layout>
        <Content className="content-main-wrapper">
          <div className="content-wrapper">{children}</div>
        </Content>
        <AppFooter />
      </Layout>
    </Layout>
  );
};

export default MainScreen;
