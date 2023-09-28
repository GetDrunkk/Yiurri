<template>
  <div class="love-heart-container">
    <div class="love-heart"></div>
  </div>
</template>

<style scoped>
.love-heart-container {
  background-color: black;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.love-heart {
  width: 100px;
  height: 100px;
  background-color: red;
  position: relative;
  animation: rotate 4s linear infinite;
  transform-origin: center;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
