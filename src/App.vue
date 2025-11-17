<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <transition name="fade-slide" mode="out-in">
    <RouterView />
  </transition>
</template>

<style>
/* ANIMAÇÃO DE TRANSIÇÃO */
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(15px);
}

.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.fade-slide-enter-active {
  transition: all 0.4s ease;
}

.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}

.fade-slide-leave-active {
  transition: all 0.35s ease;
}
</style>
