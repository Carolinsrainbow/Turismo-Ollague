<template>
  <div class="home">
<Navbar></Navbar>
<Servicios></Servicios>
<Footer></Footer>
<RRSS></RRSS>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Servicios from '@/components/Servicios.vue'
import Footer from '@/views/Footer.vue'
import RRSS from '@/components/RRSS.vue'

export default {
  name: 'Home',
  components: {
     Navbar,
     Servicios,
    Footer,
    RRSS
  }
}
</script>

<style scoped>
.home{
  color: white;
  background-color: #3B210F;
}
</style>
