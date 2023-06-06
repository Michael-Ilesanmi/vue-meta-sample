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
import { useMeta } from 'vue-meta'
export default {
  setup () {
    const { meta } = useMeta({
      title: 'Services',
      meta: [
          { name: 'description', content:  'This is the services page for a sample site that demonstrates how to add custom meta tags to individual pages.'},
          { property: 'og:title', content: "Services Sample"},
          { property: 'og:site_name', content: 'Vue Meta Tag'},
          {property: 'og:type', content: 'website'},    
          {name: 'robots', content: 'index,follow'} 
      ]
    })
  }
}
</script> 
<style>
</style>
