<template>
  <div id="app">
    <router-view v-slot="{ Component }">
  <transition name="bounce">
    <component :is="Component" />
  </transition>
</router-view>
  </div>
</template>

<style>
.bounce-enter-active {
  animation: bounce-in 0.7s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
