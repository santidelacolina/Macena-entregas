<template>
  <v-card>
    <v-carousel
      height="800px"
      :show-arrows="false"
      hide-delimiter-background
      :cycle="true"
      interval="3000"
    >
      <!-- hacer que la lista de integrantes sea desplegable para que las card no se desajusten -->
      <v-carousel-item
        class="carousel-item"
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        fade
      >
        <h3>{{ item.artista }}</h3></v-carousel-item
      >
    </v-carousel>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://hipersonica.com/wp-content/uploads/2021/07/A-tribe-called-quest.jpg",
          artista: "A Tribe Called Quest",
        },
        {
          src: "https://i.pinimg.com/originals/a2/9c/dd/a29cdd85a0a5523d9f090fb8c4bfbe6f.jpg",
          artista: "Patricio Rey y sus Redonditos de Ricota",
        },
        {
          src: "https://estaticos-cdn.elperiodico.com/clip/9c0bc6a8-46aa-46d1-8c89-7295bebc988f_alta-libre-aspect-ratio_default_0.jpg",
          artista: "Ayax y Prok",
        },
        {
          src: "https://i.ytimg.com/vi/K9YVpXiXvag/maxresdefault.jpg",
          artista: "Tale of Us",
        },
      ],
    };
  },
};
</script>

<style scoped>
h3 {
  text-align: center;
  font-size: 20;
  color: rgb(204, 174, 174);
  background-color: rgba(0, 0, 0, 0.719);
  max-width: max-content;
}
</style>
