import React, { useState, useEffect } from "react";
import { Button, Table, Popconfirm, notification } from "antd";
import {
  createCategory,
  updateCategory,
  deleteCategory,
} from "../api/adminApi";
import { getAllCategories } from "../api/backendApi";
import ModalForm from "../components/ModalForm";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const response = await getAllCategories();
      setCategories(response.data);
    } catch (error) {
      notification.error({ message: "Failed to load categories" });
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteCategory(id);
      loadCategories();
      notification.success({ message: "Category deleted" });
    } catch {
      notification.error({ message: "Failed to delete category" });
    }
  };

  const handleSubmit = async (values) => {
    try {
      editingCategory
        ? await updateCategory(editingCategory.id, values)
        : await createCategory(values);
      loadCategories();
      setModalVisible(false);
      setEditingCategory(null);
      notification.success({ message: "Category saved" });
    } catch (error) {
      console.log(error.response.data.name[0]);
      notification.error({
        message: error.response.data.name[0] || "Failed to save category",
      });
    }
  };

  const columns = [
    { title: "ID", dataIndex: "id" },
    {
      title: "Name",
      key: "name",
      render: (_, record) => (
        <p className="text-blue-500 font-medium capitalize">{record.name}</p>
      ),
    },
    {
      title: "Actions",
      render: (_, record) => (
        <div>
          <Button
            onClick={() => {
              setEditingCategory(record);
              setModalVisible(true);
            }}
          >
            Edit
          </Button>
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.id)}
          >
            <Button className="text-[red]" type="danger">
              Delete
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Button
        type="primary"
        className="mb-4"
        onClick={() => setModalVisible(true)}
      >
        Add Category
      </Button>
      <Table dataSource={categories} columns={columns} rowKey="id" />
      <ModalForm
        visible={modalVisible}
        onCancel={() => {
          setModalVisible(false);
          setEditingCategory(null);
        }}
        onSubmit={handleSubmit}
        initialValues={editingCategory}
        fields={[
          { name: "name", label: "Category Name", rules: [{ required: true }] },
        ]}
      />
    </div>
  );
};

export default Categories;
