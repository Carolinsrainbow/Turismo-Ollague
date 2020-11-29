<template>
       <div>
           <!-- Incorporación del jumbotron -->
<div id="jumbotron">
  <b-jumbotron>
    <template #header>Bienvenido a Ollagüe</template>
    <template #lead>
      This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
      featured content or information.
    </template>

    <hr class="my-4">

    <p>
      It uses utility classes for typography and spacing to space content out within the larger
      container.
    </p>

    <b-button variant="primary" href="#">Do Something</b-button>
    <b-button variant="success" href="#">Do Something Else</b-button>
  </b-jumbotron>
</div>
  <!-- Fin de jumbotron -->       

   <!-- Incorporación de caja de texto -->
   <section class id="container">
  <div class="row">
    <div class="col-sm-6">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </div>
        <div class="col-sm-6">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </div>
    </div>
   </section>
  <!-- Fin de caja de texto -->          

   <!-- Incorporación de caja de Servicios-->
   <div class="container pa-5 my-5 text-center">
  <h2>Ven a Visitarnos</h2>
    <div class="row">
<div class="col-2">
    HOTELES
</div>
<div class="col-2">
    GUIAS
</div>
<div class="col-2">
    RESTAURANTES
</div>
<div class="col-2">
    ARTESANIA
</div>
<div class="col-2">
    MAPA
</div>
<div class="col-2">
    RUTAS
</div>
</div>
</div>
      <!-- Fin de caja de Servicios-->


    </div>
</template>

<script>
export default {
    name:"Servicios"
}
</script>

<style>
</style>