<template>
    <div class="footer">
        <p>{{ msg || "Made by Julfiqur Haidar Raja" }}</p>
    </div>
</template>
<script>
export default {
    name: "Footer",
    props: {
        msg: String,
    },
};
</script>
<style scoped>
.footer {
    background-color: #333;
    color: white;
    padding: 20px;
    text-align: center;
    font-size: 14px;
    position: fixed;
    bottom: 0;
    width: 100%;
    box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
}

.footer p {
    margin: 0;
    font-weight: bold;
    font-size: 16px;
}

.footer p:hover {
    text-decoration: underline;
    color: #4a90e2;
}
</style>
