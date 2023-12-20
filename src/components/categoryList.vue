<template>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <div class="container">
        <div class="card" style="width: 90%;">
      <div class="title">
        {{category.brand}}
      </div>
      <div class="card-body">
        <p class="card-text">{{ category.description }}</p>
      </div>
      <div class="card-footer border-none bg-white">
        <a href="http://localhost:5173/Products" class="btn">Go to product</a>
      </div>
    </div>
    </div>
    
    </template>
    
    <script setup>
    
    const props = defineProps({
            category: Object
        })
    
    </script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
.card {
    transition: transform 0.3s ease-in-out;
    background-color: #ffffff6f;
    margin-top: 40%;
}

.card:hover {
    transform: translateY(-7px);
}
.card-text {
    height: 20vh;
    margin-top: 30px;
    font-weight: 500;
    font-family: 'Quicksand', sans-serif;
    padding: 10px;
    
}
.title {
    display: flex;
    justify-content: center;
    font-weight: 700;
    font-family: 'Quicksand', sans-serif;
    font-size: 28px;
    margin-top: 20px;
}

.btn {
    display: flex;
    justify-content: center;
    height: 6vh;
    align-items: center;
    font-size: 18px;
    font-family: 'Quicksand', sans-serif;
    font-weight: 500;
}


</style>