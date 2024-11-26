import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLayout from "./components/layout/AdminLayout";
import Categories from "./pages/Categories";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Inventory from "./pages/Inventory";
import Users from "./pages/Users";
import Plans from "./pages/Plans";
import SubscriptionPlans from "./pages/SubscriptionsPlans";
import GoalsPage from "./pages/Goals";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/admin/*"
          element={
            <AdminLayout>
              <Routes>
                <Route path="categories" element={<Categories />} />
                <Route path="products" element={<Products />} />
                <Route path="inventory" element={<Inventory />} />
                <Route path="users" element={<Users />} />
                <Route path="plans" element={<Plans />} />
                <Route path="goals" element={<GoalsPage />} />
                <Route
                  path="subscription-plans"
                  element={<SubscriptionPlans />}
                />
              </Routes>
            </AdminLayout>
          }
        />
      </Routes>
    </Router>
  );
}
export default App;
