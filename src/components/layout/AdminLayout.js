import React from "react";
import { Layout } from "antd";
import Sidebar from "../Sidebar";

const { Header, Sider, Content } = Layout;

const AdminLayout = ({ children }) => (
  <Layout style={{ minHeight: "100vh" }}>
    <Sider collapsible>
      <Sidebar />
    </Sider>
    <Layout>
      <Header
        style={{
          background: "#002140",
          padding: 0,
          textAlign: "center",
          color: "white",
          fontWeight: "bold",
          fontSize: "24px",
        }}
      >
        Fitness Pannel
      </Header>
      <Content style={{ margin: "16px" }}>{children}</Content>
    </Layout>
  </Layout>
);

export default AdminLayout;
