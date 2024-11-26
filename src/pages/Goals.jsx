import React, { useState, useEffect } from "react";
import {
  Button,
  Table,
  Modal,
  Form,
  Input,
  InputNumber,
  Popconfirm,
  notification,
} from "antd";
import { createGoal, deleteGoal, updateGoal } from "../api/adminApi";
import { getAllPlans, getGoalsByPlan } from "../api/backendApi";

const GoalsPage = () => {
  const [goals, setGoals] = useState([]);
  const [plans, setPlans] = useState([]);
  const [loadingPlans, setLoadingPlans] = useState(true);
  const [loadingGoals, setLoadingGoals] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [multiGoalData, setMultiGoalData] = useState([
    { day_number: 1, description: "" },
  ]);
  const [editingGoal, setEditingGoal] = useState(null); // For editing an individual goal

  useEffect(() => {
    loadPlans();
  }, []);

  const loadPlans = async () => {
    setLoadingPlans(true);
    try {
      const planData = await getAllPlans();
      setPlans(planData);
    } catch (error) {
      notification.error({ message: "Failed to load plans" });
    } finally {
      setLoadingPlans(false);
    }
  };

  const loadGoals = async (planId) => {
    setLoadingGoals(true);
    try {
      const goalData = await getGoalsByPlan(planId);
      setGoals(goalData);
    } catch (error) {
      notification.error({ message: "Failed to load goals" });
    } finally {
      setLoadingGoals(false);
    }
  };

  const handleSelectPlan = (planId) => {
    setSelectedPlan(planId);
    loadGoals(planId);
  };

  const showGoalModal = () => {
    setMultiGoalData([{ day_number: 1, description: "" }]);
    setEditingGoal(null); // Reset editing state
    setIsModalVisible(true);
  };

  const handleEditGoal = (goal) => {
    setEditingGoal(goal); // Set the goal to edit
    setMultiGoalData([goal]); // Populate modal with goal details
    setIsModalVisible(true);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    setMultiGoalData([{ day_number: 1, description: "" }]);
    setEditingGoal(null);
  };

  const handleAddMore = () => {
    if (multiGoalData.length >= 30) {
      notification.error({ message: "You can only add up to 30 goals" });
      return;
    }
    setMultiGoalData((prevData) => [
      ...prevData,
      { day_number: prevData.length + 1, description: "" },
    ]);
  };

  const handleInputChange = (index, field, value) => {
    const updatedData = [...multiGoalData];
    updatedData[index][field] = value;
    setMultiGoalData(updatedData);
  };

  const handleFormSubmit = async () => {
    if (!selectedPlan) {
      notification.error({ message: "Please select a plan first!" });
      return;
    }

    const payload = multiGoalData.map((goal) => ({
      ...goal,
      plan: selectedPlan,
    }));

    try {
      if (editingGoal) {
        // Update existing goal
        await updateGoal(editingGoal.id, payload[0]); // Update only the first goal (single edit)
        notification.success({ message: "Goal updated successfully" });
      } else {
        // Create new goals
        await createGoal(payload);
        notification.success({ message: "Goals created successfully" });
      }
      loadGoals(selectedPlan);
      handleModalCancel();
    } catch (error) {
      notification.error({ message: "Failed to save goal(s)" });
    }
  };

  const handleDeleteGoal = async (id) => {
    try {
      await deleteGoal(id);
      notification.success({ message: "Goal deleted successfully" });
      loadGoals(selectedPlan);
    } catch (error) {
      notification.error({ message: "Failed to delete goal" });
    }
  };

  const columns = [
    {
      title: "Day Number",
      dataIndex: "day_number",
      key: "day_number",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div>
          <Button
            type="link"
            onClick={() => handleEditGoal(record)}
            style={{ marginRight: 8 }}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this goal?"
            onConfirm={() => handleDeleteGoal(record.id)}
          >
            <Button type="link" danger>
              Delete
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Manage Goals</h1>

      {/* Plans List */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">
          Available Plans : Select Plan to add Goals
        </h2>
        {loadingPlans ? (
          <p>Loading plans...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`p-4 border rounded cursor-pointer hover:border hover:border-[#485fe4] ${
                  selectedPlan === plan.id
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => handleSelectPlan(plan.id)}
              >
                <h3 className="font-semibold">{plan.name}</h3>
                <p className="text-sm text-gray-600">{plan.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Goals Table */}
      {selectedPlan && (
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Goals for Selected Plan
          </h2>
          <Table
            dataSource={goals}
            columns={columns}
            rowKey="id"
            loading={loadingGoals}
            bordered
          />
          <Button
            type="primary"
            onClick={() => showGoalModal()}
            style={{ marginTop: 16 }}
          >
            Add Goals
          </Button>
        </div>
      )}

      {/* Modal for Adding/Editing Goals */}
      <Modal
        title={editingGoal ? "Edit Goal" : "Add Multiple Goals"}
        visible={isModalVisible}
        onCancel={handleModalCancel}
        onOk={handleFormSubmit}
        okText={editingGoal ? "Update Goal" : "Save Goals"}
      >
        {multiGoalData.map((goal, index) => (
          <div key={index} className="mb-4 border-b pb-4">
            <h3 className="font-semibold">
              {editingGoal ? "Edit Goal" : `Goal ${index + 1}`}
            </h3>
            <Form layout="vertical">
              <Form.Item label="Day Number">
                <InputNumber
                  min={1}
                  value={goal.day_number}
                  onChange={(value) =>
                    handleInputChange(index, "day_number", value)
                  }
                  style={{ width: "100%" }}
                />
              </Form.Item>
              <Form.Item label="Description">
                <Input.TextArea
                  rows={2}
                  value={goal.description}
                  onChange={(e) =>
                    handleInputChange(index, "description", e.target.value)
                  }
                />
              </Form.Item>
            </Form>
          </div>
        ))}
        {!editingGoal && (
          <Button
            className="bg-blue-300"
            type="dashed"
            onClick={handleAddMore}
            block
          >
            Add More
          </Button>
        )}
      </Modal>
    </div>
  );
};

export default GoalsPage;
