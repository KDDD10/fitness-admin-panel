import React, { useState, useEffect } from "react";
import { Button, Table, Popconfirm, notification, Form } from "antd";
import { createProduct, updateProduct, deleteProduct } from "../api/adminApi";
import { getAllProducts, getAllCategories } from "../api/backendApi";
import ModalForm from "../components/ModalForm";
import { useNavigate } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [categories, setCategories] = useState([]);
  const [formLoading, setFormLoading] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  useEffect(() => {
    loadProducts();
    loadCategories();
  }, []);

  const loadProducts = async () => {
    setLoading(true);
    try {
      const data = await getAllProducts();
      setProducts(Array.isArray(data) ? data : []);
    } catch (error) {
      notification.error({ message: "Failed to load products" });
    } finally {
      setLoading(false);
    }
  };

  const loadCategories = async () => {
    try {
      const response = await getAllCategories();
      setCategories(response.data);
    } catch (error) {
      notification.error({ message: "Failed to load categories" });
    }
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await deleteProduct(id);
      notification.success({ message: "Product deleted successfully" });
      loadProducts();
    } catch {
      notification.error({ message: "Failed to delete product" });
    } finally {
      setLoading(false);
    }
  };
  console.log(products);
  const handleSubmit = async (values) => {
    setFormLoading(true);
    const formData = new FormData();
    formData.append("product_name", values.product_name);
    formData.append("product_price", values.product_price);
    formData.append("product_description", values.product_description);
    formData.append("product_categories", values.product_categories);

    try {
      let uploadedImageUrls = [];
      if (values.uploaded_images) {
        const uploadPromises = values.uploaded_images.map((file) => {
          const uploadData = new FormData();
          uploadData.append("file", file.originFileObj);
          uploadData.append("upload_preset", "fitness");
          return fetch(
            "https://api.cloudinary.com/v1_1/dcb1zsjuk/image/upload",
            {
              method: "POST",
              body: uploadData,
            }
          )
            .then((res) => res.json())
            .then((data) => data.secure_url)
            .catch((err) => {
              notification.error({ message: "Failed to upload image" });
              return null;
            });
        });

        const uploadedImages = await Promise.all(uploadPromises);
        uploadedImageUrls = uploadedImages.filter((url) => url !== null);
        uploadedImageUrls.forEach((url) => {
          formData.append("uploaded_images", url);
        });
      }

      if (editingProduct) {
        await updateProduct(editingProduct.id, formData);
      } else {
        await createProduct(formData);
      }
      setFormLoading(false);
      notification.success({
        message: editingProduct
          ? "Product updated successfully"
          : "Product created successfully",
      });
      loadProducts();
      setModalVisible(false);
      setEditingProduct(null);
    } catch (error) {
      console.error("Error during submission:", error);
      notification.error({ message: "Failed to save product" });
    }
  };

  const showModal = (product = null) => {
    setEditingProduct(product);
    setModalVisible(true);
    if (product) {
      form.setFieldsValue({
        ...product,
        product_categories: product.product_categories.map((cat) => cat.id),
      });
    } else {
      form.resetFields();
    }
  };

  const columns = [
    {
      title: "Name",
      render: (_, record) => (
        <p className="text-blue-500 font-medium capitalize">
          {record.product_name}
        </p>
      ),
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "product_price",
      key: "price",
      render: (price) => `$${price?.toFixed(2)}`,
    },
    {
      title: "Description",
      dataIndex: "product_description",
      key: "description",
    },
    {
      title: "Quantity",
      dataIndex: "total_quantity",
      key: "total_quantity",
      render: (quantity, record) => (
        <div>
          <div>{quantity}</div>
          <div
            className="text-blue-500 cursor-pointer"
            onClick={() => navigate("/admin/inventory")}
          >
            Add
          </div>
        </div>
      ),
    },
    {
      title: "Image",
      dataIndex: "images",
      key: "image",
      render: (images) =>
        images && images[0] ? (
          <img
            src={images[0]?.image}
            alt="Product"
            style={{ width: 50, height: 50 }}
          />
        ) : (
          "No image"
        ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div>
          <Button
            onClick={() => {
              setEditingProduct(record);
              showModal(record);
            }}
          >
            Edit
          </Button>
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.id)}
          >
            <Button
              className="text-[red]"
              type="danger"
              style={{ marginLeft: 8 }}
            >
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
        onClick={() => {
          form.resetFields();
          setEditingProduct(null);
          setModalVisible(true);
        }}
        style={{ marginBottom: 16 }}
      >
        Add Product
      </Button>
      <Table
        dataSource={products}
        columns={columns}
        rowKey="id"
        loading={loading}
      />
      <ModalForm
        visible={modalVisible}
        onCancel={() => {
          setModalVisible(false);
          setEditingProduct(null);
        }}
        onSubmit={handleSubmit}
        initialValues={editingProduct}
        loading={formLoading}
        form={form}
        fields={[
          {
            name: "product_name",
            label: "Product Name",
            rules: [
              { required: true, message: "Please input the product name!" },
            ],
          },
          {
            name: "product_price",
            label: "Price",
            rules: [
              {
                required: true,
                type: "number",
                min: 0,
                message: "Please input a valid price!",
              },
            ],
          },
          { name: "product_description", label: "Description" },
          {
            name: "product_categories",
            label: "Category",
            type: "select",
            options: categories?.map((cat) => ({
              label: `${cat.name}`,
              value: cat.id,
            })),
            rules: [{ required: true, message: "Please select a category" }],
          },
          { name: "uploaded_images", label: "Image", type: "file" },
        ]}
      />
    </div>
  );
};

export default Products;
