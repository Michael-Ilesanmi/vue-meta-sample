<script setup>
</script>

<template>
  <main>
    <h1>This is the HOME page</h1>
    <nav>
      <router-link to="/about">About</router-link>
      <router-link to="/services">Services</router-link>
    </nav>
  </main>
</template>


<style>
nav {
  display: grid;
  gap: 12px;
  align-items: center;
}
</style>