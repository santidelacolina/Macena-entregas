<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      color="#45454B"
      dark
      shrink-on-scroll
      src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/212a2555870239.5bc4c98eab020.png"
    >
      <template>
        <v-img></v-img>
      </template>
      <v-card-actions>
        <v-btn href="#banda-favorita"> Bandas </v-btn>
        <v-btn href="#contactanos"> Contacto </v-btn>
      </v-card-actions>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
.titulo {
  text-align: center;

  /* font-family: "Roboto", sans-serif; */
  font-size: auto;
  position: unset;
  width: max-content;
  color: rgb(204, 174, 174);
  background-color: rgba(0, 0, 0, 0.719);
}
</style>
