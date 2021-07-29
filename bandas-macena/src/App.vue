<!-- Crear landing page agencia de bandas // pasos para crear el proyecto: // -
node js // - vue cli // - crear un proyecto VUE 2 // - instalar vuetify //
landingpage // utilizar componentes: // header // carrusel // bandas -> cards
contacto // input-> text field y text area // al enviar limpiar los campos y
mostrar un snackbar de exito // footer // utilizar anclas en el header para
hacer scroll hasta la seccion indicada en el btn // crear una carpeta assets:
ahi se guardan las imagenes, iconos, fondos, tipografias. -->
<template>
  <v-container class="contenedor">
    <header>
      <!-- <v-btn href="#fondo">Al fondo</v-btn> -->
      <el-header></el-header>
    </header>
    
    <body class="body">
      <el-carrusel></el-carrusel>
      <banda-favorita> </banda-favorita>
      <el-form></el-form>
    </body>
    <footer>
      <!-- <h4><a href="#fondo">#</a>Fondo</h4> -->
    </footer>
  </v-container>
</template>

<script>
import ElHeader from "./components/ElHeader.vue";
import ElCarrusel from "./components/ElCarrusel.vue";
import BandaFavorita from "./components/BandaFavorita.vue";
import ElForm from "./components/ElForm.vue"
export default {
  components: { ElCarrusel, BandaFavorita, ElHeader,ElForm},
  data() {
    return {};
  },
};
</script>
<style scoped>
.body {
  margin: 0;
  
}
.contenedor {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 20px;  
}
</style>
