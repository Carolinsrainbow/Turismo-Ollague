<template>
  <div class="artesania">
    <Navbar></Navbar>
    <div class="row">
      <div class="col-3">
        <b-list-group>
          <b-list-group-item
            ><router-link to="artesania"
              >Artesania</router-link
            ></b-list-group-item
          >
          <b-list-group-item
            ><router-link to="circuitos"
              >Circuitos</router-link
            ></b-list-group-item
          >
          <b-list-group-item
            ><router-link to="guias">Guías</router-link></b-list-group-item
          >
          <b-list-group-item
            ><router-link to="hoteles">Hoteles</router-link></b-list-group-item
          >
          <b-list-group-item
            ><router-link to="restaurant"
              >Restaurant</router-link
            ></b-list-group-item
          >
        </b-list-group>
      </div>
      <div class="container col-9">
       <img src="@/assets/img/Portadas/artesania.png" alt="Portada de Artesanía" class="portada">
        <h1>ARTESANIA</h1>
        <div class="container">
          <h2>Oficios</h2>
          <div class="row">
            <div class="col-2 caja">ALFARERIA
  <img src="@/assets/img/Oficios/alfareria.png" alt="Alfareria" class="icon">
            </div>
            <div class="col-2 caja">TEXTILERIA
                <img src="@/assets/img/Oficios/textileria.png" alt="Textileria" class="icon">
            </div>
            <div class="col-2 caja">TALLADO
                <img src="@/assets/img/Oficios/tallado.png" alt="Tallado" class="icon">
            </div>
            <div class="col-2 caja">ORFEBRERÍA
                <img src="@/assets/img/Oficios/orfebreria.png" alt="Orfebreria" class="icon">
            </div>
            <div class="col-2 caja">BORDADO
                <img src="@/assets/img/Oficios/bordado.png" alt="Bordado" class="icon">
            </div>
            <div class="col-2 caja">BUSCAR
                <img src="@/assets/img/Oficios/buscar.png" alt="Buscar" class="icon">
            </div>
          </div>
        </div>
      </div>
    </div>

<Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Artesania",
  components: { Navbar, Footer },
};
</script>

<style>
.portada{
  width: 1000px;
  height: 500px;
}
.caja{
  width: 50 px;
height: 200px;
border: solid black 1px;
}

.artesania{
  color: white;
  background-color:  #3B210F;
}
.img{
  width: 10%;
}
.caja{
  height: 75 px;
  width: 75 px;
}

</style>