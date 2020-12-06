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
      <div class="col-9">
       <img src="@/assets/img/Portadas/artesania.png" alt="Portada de Artesanía">
        <h1>ARTESANIA</h1>
        <div class="container">
          <h2>Oficios</h2>
          <div class="row">
            <div class="col-2 caja">ALFARERIA
  <img src="@/assets/img/Oficios/alfareria.png" alt="Alfareria">
            </div>
            <div class="col-2 caja">TEXTILERIA
                <img src="@/assets/img/Oficios/textileria.png" alt="Textileria">
            </div>
            <div class="col-2 caja">TALLADO
                <img src="@/assets/img/Oficios/tallado.png" alt="Tallado">
            </div>
            <div class="col-2 caja">ORFEBRERÍA
                <img src="@/assets/img/Oficios/orfebreria.png" alt="Orfebreria">
            </div>
            <div class="col-2 caja">BORDADO
                <img src="@/assets/img/Oficios/bordado.png" alt="Bordado">
            </div>
            <div class="col-2 caja">BUSCAR
                <img src="@/assets/img/Oficios/buscar.png" alt="Buscar">
            </div>
          </div>
        </div>
      </div>
    </div>


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

<style scoped>
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