<template>
  <div class="home">
<Navbar></Navbar>
<Servicios></Servicios>
<Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Servicios from '@/components/Servicios.vue'

import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
     Navbar,
     Servicios,
        Footer
  }
}
</script>

<style scoped>
.home{
  color: white;
  background-color: #3B210F;
}
</style>
