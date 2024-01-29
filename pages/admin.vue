<template>
  <div>
    <h1>Hello User</h1>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ['auth']
})
</script>
