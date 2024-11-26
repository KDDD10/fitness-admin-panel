import React, { useState, useEffect } from "react";
import { Table, notification } from "antd";
import { getAllUsers } from "../api/adminApi";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    setLoading(true);
    try {
      const data = await getAllUsers();
      setUsers(data);
    } catch (error) {
      notification.error({ message: "Failed to load users" });
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    { title: "First Name", dataIndex: "first_name", key: "first_name" },
    { title: "Last Name", dataIndex: "last_name", key: "last_name" },
    { title: "Email", dataIndex: "email", key: "email" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Users</h1>
      <Table
        dataSource={users}
        columns={columns}
        rowKey="id"
        loading={loading}
      />
    </div>
  );
};

export default Users;
