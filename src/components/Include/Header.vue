<template>
  <div class="header">
    <div class="logo">
      <router-link to="/" class="logo-link">
        <h1>{{ msg || "Multi-Currency Expense Management System" }}</h1>
      </router-link>
    </div>
    <nav class="navigation">
      <router-link to="/ExpenseList" class="nav-link">Expense List</router-link>
      <router-link to="/Summary" class="nav-link">Summary</router-link>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
};
</script>
<style scoped>
.header {
  background-color: #333;
  color: white;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.logo h1 {
  margin: 0;
  font-size: 24px;
  font-weight: bold;
}

.logo-link {
  text-decoration: none;
  color: white;
}

.navigation {
  display: flex;
  gap: 20px;
}

.nav-link {
  text-decoration: none;
  color: white;
  font-size: 16px;
  font-weight: normal;
  padding: 8px 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-link:hover {
  background-color: #f1f1f1;
  color: #4a90e2;
}

.nav-link:active {
  transform: scale(0.98);
}
</style>
