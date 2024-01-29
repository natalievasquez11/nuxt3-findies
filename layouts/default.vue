<script setup>
const user = useUser()
</script>

<template>
  <nav style="display: flex; gap: 10px;">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/movies">Movies</NuxtLink>
    <NuxtLink to="http://www.vueschool.io">Vue School</NuxtLink>
    <NuxtLink v-if="!user.isLoggedIn" to="/login">Login</NuxtLink>
    <a href='#' v-else="user.isLoggedIn" @click.prevent="isLoggedIn = false">Logout</a>
  </nav>
  <slot></slot>
</template>