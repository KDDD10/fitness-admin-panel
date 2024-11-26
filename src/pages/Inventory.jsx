import React, { useState, useEffect } from "react";
import { Button, Table, Modal, InputNumber, notification } from "antd";
import { updateInventory } from "../api/adminApi";
import { getAllProducts } from "../api/backendApi";

const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [newQuantity, setNewQuantity] = useState(null);

  useEffect(() => {
    loadInventory();
  }, []);

  const loadInventory = async () => {
    setLoading(true);
    try {
      const data = await getAllProducts();
      setInventory(data);
    } catch (error) {
      notification.error({ message: "Failed to load inventory" });
    } finally {
      setLoading(false);
    }
  };

  // Show modal to edit quantity
  const showEditModal = (item) => {
    setSelectedItem(item);
    setNewQuantity(item.total_quantity);
    setIsModalVisible(true);
  };

  // Handle updating quantity
  const handleUpdateQuantity = async () => {
    if (newQuantity == null) {
      notification.error({ message: "Quantity cannot be empty" });
      return;
    }

    setLoading(true);
    try {
      await updateInventory(selectedItem.id, newQuantity);
      notification.success({ message: "Inventory updated successfully" });
      setIsModalVisible(false);
      setSelectedItem(null);
      loadInventory();
    } catch (error) {
      notification.error({ message: "Failed to update inventory" });
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      title: "Product Name",
      render: (_, record) => (
        <p className="text-blue-500 font-medium capitalize">
          {record.product_name}
        </p>
      ),
      key: "product_name",
    },
    { title: "Quantity", dataIndex: "total_quantity", key: "quantity" },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Button onClick={() => showEditModal(record)}>Edit Quantity</Button>
      ),
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Inventory</h1>
      <Table
        dataSource={inventory}
        columns={columns}
        rowKey="id"
        loading={loading}
      />

      <Modal
        title={`Update Quantity for ${selectedItem?.product_name}`}
        visible={isModalVisible}
        onOk={handleUpdateQuantity}
        onCancel={() => setIsModalVisible(false)}
      >
        <InputNumber
          min={0}
          value={newQuantity}
          onChange={(value) => setNewQuantity(value)}
          style={{ width: "100%" }}
        />
      </Modal>
    </div>
  );
};

export default Inventory;
