import React, { useState, useEffect } from "react";
import {
  Button,
  Table,
  Popconfirm,
  Modal,
  Form,
  Input,
  InputNumber,
  notification,
} from "antd";
import {
  createSubscriptionPlan,
  updateSubscriptionPlan,
  deleteSubscriptionPlan,
} from "../api/adminApi";
import { getAllSubscriptionPlans } from "../api/backendApi";
const SubscriptionPlans = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingPlan, setEditingPlan] = useState(null);
  const [form] = Form.useForm(); // Initialize form instance

  useEffect(() => {
    loadPlans();
  }, []);

  const loadPlans = async () => {
    setLoading(true);
    try {
      const data = await getAllSubscriptionPlans();
      setPlans(data);
    } catch (error) {
      notification.error({ message: "Failed to load subscription plans" });
    } finally {
      setLoading(false);
    }
  };

  const showModal = (plan = null) => {
    setEditingPlan(plan);
    setIsModalVisible(true);
    if (plan) {
      form.setFieldsValue(plan); // Populate form with the selected plan's data if editing
    } else {
      form.resetFields(); // Reset form fields if adding a new plan
    }
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    setEditingPlan(null);
    form.resetFields();
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await deleteSubscriptionPlan(id);
      notification.success({
        message: "Subscription plan deleted successfully",
      });
      loadPlans();
    } catch (error) {
      notification.error({ message: "Failed to delete subscription plan" });
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = async (values) => {
    setLoading(true);
    try {
      if (editingPlan) {
        // Update existing plan
        await updateSubscriptionPlan(editingPlan.id, values);
        notification.success({
          message: "Subscription plan updated successfully",
        });
      } else {
        // Create new plan
        await createSubscriptionPlan(values);
        notification.success({
          message: "Subscription plan created successfully",
        });
      }
      loadPlans();
      handleModalCancel();
    } catch (error) {
      notification.error({ message: "Failed to save subscription plan" });
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "title",
      render: (text) => (
        <span className="text-blue-500 font-medium capitalize">{text}</span>
      ),
    },
    { title: "Description", dataIndex: "description", key: "description" },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `$${price}`,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div>
          <Button onClick={() => showModal(record)} style={{ marginRight: 8 }}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this subscription plan?"
            onConfirm={() => handleDelete(record.id)}
          >
            <Button type="danger" className="text-[red]">
              Delete
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Subscription Plans</h1>
      <Button
        type="primary"
        onClick={() => showModal()}
        style={{ marginBottom: 16 }}
      >
        Add Subscription Plan
      </Button>
      <Table
        dataSource={plans}
        columns={columns}
        rowKey="id"
        loading={loading}
      />

      <Modal
        title={editingPlan ? "Edit Subscription Plan" : "Add Subscription Plan"}
        visible={isModalVisible}
        onCancel={handleModalCancel}
        onOk={() => form.submit()} // Submit the form directly on "OK"
        okText={editingPlan ? "Update" : "Create"}
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            title: editingPlan?.title || "",
            description: editingPlan?.description || "",
            price: editingPlan?.price || 0,
          }}
          onFinish={handleFormSubmit} // Handle form submission
        >
          <Form.Item
            name="name"
            label="Title"
            rules={[
              { required: true, message: "Please input the plan title!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[
              { required: true, message: "Please input the plan description!" },
            ]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item
            name="days"
            label="Days"
            rules={[
              {
                required: true,
                type: "days",
                min: 0,
                message: "Please input a valid days!",
              },
            ]}
          >
            <InputNumber style={{ width: "100%" }} min={0} />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[
              {
                required: true,
                type: "number",
                min: 0,
                message: "Please input a valid price!",
              },
            ]}
          >
            <InputNumber style={{ width: "100%" }} prefix="$" min={0} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default SubscriptionPlans;
