import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import Logo from "../../src/images/Logo.png";
import {
  UserOutlined,
  AppstoreOutlined,
  TagsOutlined,
  ShoppingOutlined,
  ToolOutlined,
  ProfileOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogoutOut = () => {
    localStorage.removeItem("adminToken");
    navigate("/");
  };
  return (
    <>
      <div>
        <img src={Logo} alt="Logo" className="px-4" />
      </div>
      <Menu mode="inline" theme="dark" className="mt-6">
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/admin/users">Users</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<AppstoreOutlined />}>
          <Link to="/admin/categories">Categories</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<TagsOutlined />}>
          <Link to="/admin/products">Products</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<ShoppingOutlined />}>
          <Link to="/admin/inventory">Inventory</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<ToolOutlined />}>
          <Link to="/admin/plans">Plans</Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<ToolOutlined />}>
          <Link to="/admin/goals">Goals</Link>
        </Menu.Item>
        <Menu.Item key="7" icon={<ProfileOutlined />}>
          <Link to="/admin/subscription-plans">Subscription Plans</Link>
        </Menu.Item>
      </Menu>
      <div
        onClick={() => handleLogoutOut()}
        className="flex gap-2 ml-7 mt-6  text-red-500 cursor-pointer"
      >
        <LogoutOutlined color="#ffffff" />
        <p className="text-white font-medium">LOG OUT</p>
      </div>
    </>
  );
};

export default Sidebar;
