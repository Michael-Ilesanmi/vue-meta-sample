<template>
  <div class="about">
    <h1>This is the SERVICES page</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </div>
</template>

<script>
import { useHead } from 'unhead'
export default {
  name: 'App',  
  setup() {
    useHead({
      title: "SERVICES",
      meta: [
        {
          name: `description`,
          content: `This is the services page for a sample site that demonstrates how to add custom meta tags to individual pages.`,
        },
        ],
     
    })
  },
}
</script> 
<style>
</style>
