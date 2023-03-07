<template>
  <router-view v-slot="{ Component }">
    <transition name="slide">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>
