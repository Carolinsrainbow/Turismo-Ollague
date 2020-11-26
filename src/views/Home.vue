<template>
  <div class="home">
<Navbar></Navbar>
<Hoteles></Hoteles>
<Guias></Guias>
<Restaurant></Restaurant>
<Artesania></Artesania>
<Footer></Footer>
<RRSS></RRSS>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Hoteles from '@/views/Hoteles.vue'
import Guias from '@/views/Guias.vue'
import Restaurant from '@/views/Restaurant.vue'
import Artesania from '@/views/Artesania.vue'
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
