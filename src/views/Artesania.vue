<template>
  <div>
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
        <h1>ARTESANIA</h1>
        <div class="container pa-5 my-5 text-center">
          <h2>Oficios</h2>
          <div class="row">
            <div class="col-2">ALFARERIA</div>
            <div class="col-2">TEXTILERIA</div>
            <div class="col-2">TALLADO</div>
            <div class="col-2">ORFEBRERÍA</div>
            <div class="col-2">BORDADO</div>
            <div class="col-2">BUSCAR</div>
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