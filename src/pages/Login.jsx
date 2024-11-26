// src/pages/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, notification } from "antd";
import { login } from "../api/backendApi";

const Login = () => {
  const [isloading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (data) => {
    console.log("Form data:", data);
    setIsLoading(true);

    try {
      const result = await login(data);
      if (result?.data?.is_staff) {
        console.log(result.data.is_staff);
        localStorage.setItem("adminToken", result.data.token);
        notification.success({
          message: "Login Successful",
          description: "Logged in successfully.",
        });
        navigate("/admin");
      } else
        notification.error({
          message: "Access Denied !",
          description: "Please Contact to Admin",
        });
    } catch (error) {
      console.log(error);
      notification.error({
        message: "Login Failed",
        description: error?.message || "There was an issue. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-lg rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        <Form onFinish={onFinish} layout="vertical">
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please input your email" }]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please input your password" }]}
          >
            <Input.Password />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={isloading}
            className="w-full"
          >
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
