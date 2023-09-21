import React from "react";
import { Layout, Menu } from "antd";
import menuItems from "../constants/constants";
const { Sider } = Layout;

const SideBar = () => {
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <Menu
        defaultSelectedKeys={["/"]}
        theme="light"
        mode="inline"
        items={menuItems}
      />
    </Sider>
  );
};

export default SideBar;
