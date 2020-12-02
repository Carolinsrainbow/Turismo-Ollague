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
                  
                 </div>
          </div>
          </div>
          <Footer></Footer>
        <RRSS></RRSS>
        </div>
         </template>

<script>
export default {
  name:"Restaurant"
}
</script>
