<template>
  <div class="home">
    <Navbar></Navbar>
<Hoteles></Hoteles>
<Guias></Guias>
<Restaurant></Restaurant>
<Artesania></Artesania>
  </div>
</template>

<script>
import Hoteles from '@/components/Hoteles.vue'
import Navbar from '@/components/Navbar.vue'
import Guias from '@/components/Guias.vue'
import Restaurant from '@/components/Restaurant.vue'
import Artesania from '@/components/Artesania.vue'

export default {
  name: 'Home',
  components: {
   Hoteles,
    Navbar,
    Guias,
    Restaurant,
    Artesania
  }
}
</script>
