<template>
  <div>
      <Navbar></Navbar>
      <div class="row">
          <div class="col-3">
        <b-list-group>
        <b-list-group-item><router-link to="artesania">Artesania</router-link></b-list-group-item>
       <b-list-group-item><router-link to="circuitos">Circuitos</router-link></b-list-group-item>
       <b-list-group-item><router-link to="guias">Guías</router-link></b-list-group-item>
       <b-list-group-item><router-link to="hoteles">Hoteles</router-link></b-list-group-item>
       <b-list-group-item><router-link to="restaurant">Restaurant</router-link></b-list-group-item>
          </b-list-group>
          </div>
                 <div class="col-9">
                   <h1>Rutas</h1>
            <Rutas></Rutas>
                 </div>
          </div>
          <Footer></Footer>

        </div>
         </template>

<script>
  import Rutas from '@/components/Rutas.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'


export default {
    name:"Circuitos",
    components: {
           Navbar,
           Rutas,
    Footer,

    }
}
</script>
