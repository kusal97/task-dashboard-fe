import React from "react";
import { Layout } from "antd";
import AppFooter from "../components/Footer";
import SideBar from "../components/SideBar";
const { Content } = Layout;

const Main = () => {
  return (
    <Layout className="main-layout">
      <SideBar />
      <Layout>
        <Content className="content-wrapper">
          <div></div>
        </Content>
        <AppFooter />
      </Layout>
    </Layout>
  );
};

export default Main;
