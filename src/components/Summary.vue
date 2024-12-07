<template>
    <div class="summary">
        <h2 class="title">Expense Summary</h2>
        <select v-model="baseCurrency" @change="fetchSummary" class="currency-selector">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="BDT">BDT</option>
            <option value="JPY">JPY</option>
        </select>
        <div class="total-container">
            <p class="total-text">Total:</p>
            <p class="total-amount">{{ total }} {{ baseCurrency }}</p>
        </div>
    </div>
</template>
<script>
import DataService from "../services/DataService";

export default {
    name: "Summary",
    data() {
        return {
            baseCurrency: "USD",
            total: 0,
        };
    },
    methods: {
        async fetchSummary() {
            try {
                const response = await DataService.summary({
                    params: { baseCurrency: this.baseCurrency },
                });
                this.total = response.data.total;
            } catch (error) {
                console.error("Error fetching summary:", error.response?.data || error.message);
            }
        },
    },
    mounted() {
        this.fetchSummary();  // Fetch summary on component mount
    },
};
</script>
<style scoped>
.summary {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    margin: 30px auto;
    padding: 20px;
    text-align: center;
    font-family: 'Arial', sans-serif;
}

.title {
    font-size: 24px;
    font-weight: bold;
    color: #4a90e2;
    margin-bottom: 20px;
}

.currency-selector {
    padding: 10px;
    width: 100%;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ddd;
    background-color: #f9f9f9;
    margin-bottom: 20px;
    outline: none;
    cursor: pointer;
}

.currency-selector:focus {
    border-color: #4a90e2;
}

.total-container {
    display: flex;
    justify-content: center;
    align-items: baseline;
}

.total-text {
    font-size: 18px;
    font-weight: normal;
    color: #333;
    margin-right: 10px;
}

.total-amount {
    font-size: 22px;
    font-weight: bold;
    color: #4a90e2;
}
</style>
