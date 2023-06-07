<template>
  <div class="about">
    <h1>This is the ABOUT page</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/services">Services</router-link>
    </nav>
  </div>
</template>

<script>
import { useHead } from 'unhead'
export default {
  setup() {
    useHead({
      title: "ABOUT",
      meta: [
        {
          name: `description`,
          content: `This is the about page for a sample site that demonstrates how to add custom meta tags to individual pages.`,
        },
        ],
     
    })
  },
}
</script>


<style>
</style>
