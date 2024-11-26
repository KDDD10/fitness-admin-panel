import React, { useState, useEffect } from "react";
import {
  Button,
  Table,
  Popconfirm,
  Modal,
  Form,
  Input,
  notification,
  InputNumber,
  Select,
} from "antd";
import { createPlan, updatePlan, deletePlan } from "../api/adminApi";
import { getAllPlans } from "../api/backendApi";

const Plans = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingPlan, setEditingPlan] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    loadPlans();
  }, []);

  const loadPlans = async () => {
    setLoading(true);
    try {
      const data = await getAllPlans();
      setPlans(data);
    } catch (error) {
      notification.error({ message: "Failed to load plans" });
    } finally {
      setLoading(false);
    }
  };

  const showModal = (plan = null) => {
    setEditingPlan(plan);
    setIsModalVisible(true);
    if (plan) {
      form.setFieldsValue(plan);
    } else {
      form.resetFields();
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
      await deletePlan(id);
      notification.success({ message: "Plan deleted successfully" });
      loadPlans();
    } catch (error) {
      notification.error({ message: "Failed to delete plan" });
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = async (values) => {
    setLoading(true);
    try {
      if (editingPlan) {
        // Update existing plan
        await updatePlan(editingPlan.id, values);
        notification.success({
          message: "Plan updated successfully",
        });
      } else {
        // Create new plan
        await createPlan(values);
        notification.success({
          message: "Plan created successfully",
        });
      }
      loadPlans();
      handleModalCancel();
    } catch (error) {
      notification.error({ message: "Failed to save plan" });
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      title: "Title",
      render: (_, record) => (
        <p className="text-blue-500 font-medium capitalize">{record.name}</p>
      ),
      key: "name",
    },
    { title: "Description", dataIndex: "description", key: "description" },
    {
      title: "Plan Type",
      dataIndex: "plan_type",
      key: "plan_type",
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
            title="Sure to delete?"
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
      <h1 className="text-2xl font-semibold mb-4">Manage Plans</h1>
      <Button
        type="primary"
        onClick={() => showModal()}
        style={{ marginBottom: 16 }}
      >
        Add Plan
      </Button>
      <Table
        dataSource={plans}
        columns={columns}
        rowKey="id"
        loading={loading}
      />

      <Modal
        title={editingPlan ? "Edit Plan" : "Add Plan"}
        visible={isModalVisible}
        onCancel={handleModalCancel}
        onOk={() => form.submit()}
        okText={editingPlan ? "Update" : "Create"}
      >
        <Form form={form} layout="vertical" onFinish={handleFormSubmit}>
          <Form.Item
            name="name"
            label="Title"
            rules={[
              { required: true, message: "Please input the plan title!" },
            ]}
          >
            <Input />
          </Form.Item>
          {!editingPlan && (
            <Form.Item
              name="description"
              label="Description"
              rules={[
                {
                  required: true,
                  message: "Please input the plan description!",
                },
              ]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
          )}
          {!editingPlan && (
            <Form.Item
              name="duration_days"
              label="Days"
              rules={[
                {
                  required: true,
                  message: "Please input a valid number of days!",
                },
              ]}
            >
              <InputNumber style={{ width: "100%" }} min={0} />
            </Form.Item>
          )}
          {!editingPlan && (
            <Form.Item
              name="plan_type"
              label="Plan Type"
              rules={[
                { required: true, message: "Please select a plan type!" },
              ]}
            >
              <Select placeholder="Select Plan Type">
                <Select.Option value="exercise">Exercise</Select.Option>
                <Select.Option value="nutrition">Nutrition</Select.Option>
              </Select>
            </Form.Item>
          )}
        </Form>
      </Modal>
    </div>
  );
};

export default Plans;
