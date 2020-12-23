<template>
    <div id="footer">
   <div class="container">
           
       <div class="row">
           <div class="col-8">
          <h2> <img src="@/assets/img/Iconos/volcan.png" alt="Icono de Volcan" class="iconoGrande"> Circuitos Turísticos</h2>      
    <h5>Localidad: Comuna de Ollagüe</h5>
    <h4> Teléfono: +569 12445678 </h4>
    <h4> Email: circuito@correo.cl </h4>
           </div>

           <div class="col-4 ">
<h5>Galería</h5>
<h5>Contacto</h5>
  <b-form-input size="sm" class="mr-sm-2" placeholder="Búsqueda"></b-form-input>
           </div>
       </div>
   </div>
    </div>
</template>

<script>
export default {
    name:"Footer"
}
</script>

<style>
#footer{
    background-color: #343A40;
}
.iconoGrande{
    width: 10%
}
</style>