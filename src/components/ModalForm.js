import React from "react";
import { Modal, Form, Input, Button, InputNumber, Upload, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
const ModalForm = ({
  visible,
  onCancel,
  onSubmit,
  initialValues,
  fields,
  form,
  loading,
}) => (
  <Modal visible={visible} onCancel={onCancel} footer={null}>
    <Form
      initialValues={initialValues}
      onFinish={onSubmit}
      layout="vertical"
      form={form}
    >
      {fields.map((field) => {
        if (field.name === "product_price") {
          return (
            <Form.Item
              key={field.name}
              name={field.name}
              label={field.label}
              rules={field.rules}
            >
              <InputNumber
                style={{ width: "100%" }}
                min={0}
                formatter={(value) => `$ ${value}`}
                parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
              />
            </Form.Item>
          );
        } else if (field.type === "file") {
          return (
            <Form.Item
              key={field.name}
              name={field.name}
              label={field.label}
              valuePropName="fileList"
              getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
            >
              <Upload beforeUpload={() => false} listType="picture">
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
            </Form.Item>
          );
        } else if (field.type === "select") {
          return (
            <Form.Item
              key={field.name}
              name={field.name}
              label={field.label}
              rules={field.rules}
            >
              <Select placeholder="Select a category">
                {field.options.map((option) => (
                  <Select.Option key={option.value} value={option.value}>
                    {option.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          );
        } else {
          return (
            <Form.Item
              key={field.name}
              name={field.name}
              label={field.label}
              rules={field.rules}
            >
              <Input />
            </Form.Item>
          );
        }
      })}
      <Form.Item>
        <Button
          loading={loading}
          type="primary"
          htmlType="submit"
          className="w-full"
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  </Modal>
);

export default ModalForm;
