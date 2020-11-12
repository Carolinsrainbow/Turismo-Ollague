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
import Hoteles from '@/components/Hoteles.vue'
import Guias from '@/components/Guias.vue'
import Restaurant from '@/components/Restaurant.vue'
import Artesania from '@/components/Artesania.vue'
import Footer from '@/components/Footer.vue'
import RRSS from '@/components/RRSS.vue'

export default {
  name: 'Home',
  components: {
     Navbar,
   Hoteles,
    Guias,
    Restaurant,
    Artesania,
    Footer,
    RRSS
  }
}
</script>
