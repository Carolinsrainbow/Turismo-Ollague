<template>
  <div class="home">
<Navbar></Navbar>
<RRSS></RRSS>
<Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/views/Footer.vue'
import RRSS from '@/components/RRSS.vue'

export default {
  name: 'Home',
  components: {
     Navbar,
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
