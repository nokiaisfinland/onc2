<template>
  <div class="dashboard">
    <h2>Welcome to the Dashboard!</h2>
    <div class="options">
      <router-link to="/create-order">Create New Order</router-link>
      <router-link to="/create-quotation">Create New Quotation</router-link>
      <router-link to="/create-purchase">Create New Purchase</router-link>
      <router-link to="/create-delivery">Create New Delivery</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardPage" // Renamed the component to DashboardPage
};
</script>

<style>
.dashboard {
  max-width: 600px;
  margin: 0 auto;
}

.options {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}

.options a {
  display: block;
  padding: 10px 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: background-color 0.2s ease;
}

.options a:hover {
  background-color: #e0e0e0;
}
</style>
