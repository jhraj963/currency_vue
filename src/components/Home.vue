<template>
    <div class="expense-form">
        <form @submit.prevent="addExpense">
            <div class="form-group">
                <label for="description">Description</label>
                <input v-model="description" id="description" placeholder="Description" required />
            </div>

            <div class="form-group">
                <label for="amount">Amount</label>
                <input v-model.number="amount" id="amount" type="number" placeholder="Amount" required />
            </div>

            <div class="form-group">
                <label for="currency">Currency</label>
                <select v-model="currency" id="currency" required>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="BDT">BDT</option>
                    <option value="JPY">JPY</option>
                </select>
            </div>

            <button type="submit">Add Expense</button>
        </form>
    </div>
</template>


<script>
import DataService from "../services/DataService";

export default {
    name: "Home",
    data() {
        return {
            description: "",
            amount: null,
            currency: "USD",
        };
    },
    methods: {
        async addExpense() {
            try {
                const response = await DataService.expense({
                    description: this.description,
                    amount: this.amount,
                    currency: this.currency,
                });
                console.log("Expense added:", response.data);
                alert("Expense added successfully!");
            } catch (error) {
                console.error("Error adding expense:", error.response?.data || error.message);
            }
        },
    },
};
</script>
<style scoped>
.expense-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}

.form-group input,
.form-group select {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

button {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>
