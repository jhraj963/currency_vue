<template>
    <div class="expense-list">
        <h2>Expense List</h2>
        <ul>
            <li v-for="expense in expenses" :key="expense.id" class="expense-item">
                <span class="expense-description">{{ expense.description }}</span>
                <span class="expense-amount">{{ expense.amount }} {{ expense.currency }}</span>
            </li>
        </ul>
    </div>
</template>
<script>
import DataService from "../services/DataService";

export default {
    name: "ExpenseList",
    data() {
        return {
            expenses: [],
        };
    },
    async mounted() {
        try {
            const response = await DataService.expenses(); // Correctly invoking the function
            this.expenses = response.data;
        } catch (error) {
            console.error("Error fetching expenses:", error.response?.data || error.message);
        }
    },
};
</script>
<style scoped>
.expense-list {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f4f7fb;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

h2 {
    text-align: center;
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
}

ul {
    list-style: none;
    padding: 0;
}

.expense-item {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #ffffff;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    font-size: 16px;
}

.expense-description {
    font-weight: bold;
    color: #333;
}

.expense-amount {
    color: #007bff;
    font-weight: bold;
}

.expense-item:hover {
    background-color: #f1f1f1;
    cursor: pointer;
}
</style>
