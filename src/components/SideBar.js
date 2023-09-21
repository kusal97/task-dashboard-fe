import React from "react";
import { Layout, Menu } from "antd";
import menuItems from "../constants/constants";
import { useNavigate } from "react-router-dom";
const { Sider } = Layout;

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <Sider className="sidebar" breakpoint="lg" collapsedWidth="0">
      <Menu
        className="menu"
        defaultSelectedKeys={["/"]}
        theme="light"
        mode="inline"
        onClick={({ key }) => {
          navigate(key);
        }}
        items={menuItems}
      />
    </Sider>
  );
};

export default SideBar;
