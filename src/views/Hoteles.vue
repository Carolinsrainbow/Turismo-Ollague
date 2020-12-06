<template>
    <div>
        <Navbar></Navbar>
      <div class="container">
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
                   <div class="container pa-5 my-5 text-center">
     <img src="@/assets/img/Portadas/hoteles.png" alt="Portada Hoteles">
    <h1>HOTELES</h1>

    <div class="row">
<div class="col-6">
    <h2>Reserva</h2>
</div>
<div class="col-6">
    <h2>Soy el mapa</h2>
        
</div>
</div>
</div>     
                  
                 </div>
          </div>
          </div>








    </div>
</template>


<script>
import Navbar from '../components/Navbar.vue'

export default {
     name: "Hoteles",
  components: { Navbar },
  
}
</script>


