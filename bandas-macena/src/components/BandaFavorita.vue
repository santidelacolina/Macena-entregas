<template>
  <v-card class="mx-auto" max-width="100%">
    <v-card-title class="text-center" id="banda-favorita" >Nuestras Bandas</v-card-title>
    <v-container fluid>
      <v-row dense>
        <v-col v-for="(banda, i) in bandas" :key="i" cols="6">
          <v-card class="grey" color="black">
            <v-img :src="banda.logo" height="600px"> </v-img>
            <v-card-title ><v-item>{{banda.nombre}}</v-item> </v-card-title>
            <v-container>
              <h4>Integrantes:</h4>
              <v-card-subtitle
                class="text-justify"
                v-for="(artista, index) in banda.artistas"
                :key="index"
                ><ul>
                  <li>{{ artista }}</li>
                </ul>
              </v-card-subtitle>
            </v-container>
            <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header
                >Info sobre la banda</v-expansion-panel-header
              >
              <v-expansion-panel-content>
                <v-card-text>
                  {{ banda.info }}
                </v-card-text>
              </v-expansion-panel-content>
            </v-expansion-panel>
            </v-expansion-panels>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      bandas: [
        {
          nombre: "A Tribe Called Quest",
          artistas: [
            "Kamal Fareed 'Q-Tip'",
            "Malik Taylor 'Phife Dawg'",
            "Ali Shaheed Muhammad",
            "Jarobi White",
          ],
          info: "Fue un grupo de hip hop estadounidense, originalmente formado en Queens, Nueva York, en 1985.El grupo estaba originalmente conformado por el rapero y productor Q-Tip (Kamal Fareed), el rapero Phife Dawg (Malik Taylor), el Dj y coproductor Ali Shaheed Muhammad. El cuarto miembro Jarobi White, solo estuvo presente en el primer disco y dejó el grupo en 1991. Año en el cual más tarde el grupo lanzaría su segundo álbum influenciado por el jazz The Low End Theory, considerado por moldear el hip hop alternativo de los años 1990.2​ El grupo se caracterizó por una fuerte impronta artística, además de una cierta actitud bohemia en comparación a otras agrupaciones contemporáneas del género.",
          logo: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/a-tribe-called-quest-logo-atcq-rap-hip-hop-dj-bailey-farrar.jpg",
        },
        {
          nombre: "Patricio Rey y sus Redonditos de Ricota",
          artistas: [
            "Indio Solari",
            "Skay Beilinson",
            "Willy Crook",
            "Sergio Dawi",
            "Walter Sidotti",
            "Fernando 'Semilla' Bucciarelli",
          ],
          info: "También conocidos como Los Redondos, fue una banda de rock de La Plata (Argentina) considerada como una de las más importantes e influyentes de su país. Se formó en 19761​ y, aunque a lo largo de su historia contó en sus filas con varios integrantes, siempre tuvo como líderes centrales a Indio Solari como cantante y letrista, Skay Beilinson como guitarrista y compositor",
          logo: "https://cdn-d15c.kxcdn.com/fotos/discos/000/000/555/original/foto.jpg",
        },
        {
          nombre: "Ayax y Prok",
          artistas: ["Ayax Pedrosa", "Adrian Pedrosa"],
          info: "Ayax y Adrián, naturales de Granada, nacieron en el 1991, son hermanos gemelos componen un duo de artistas granadinos, criados en el barrio del Albayzín, y han escrito rap desde hace más de una década. Desde chicos desarrollaron un gran interés por el saber y la composición poética, también por las artes plásticas tales como la pintura y el dibujo. ",
          logo: "https://steamuserimages-a.akamaihd.net/ugc/958593001519470397/270BC0D6379A9EC31D717FB3F21C30222900AF8F/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=falser",
        },
        {
          nombre: "Tale of Us",
          artistas: ["Matteo Milleri", "Carmine Conte"],
          info: "Tale of Us es un dúo de DJs y productores integrados por los italianos Matteo Milleri y Carmine Conte. Ambos comparten una visión particular de la música electrónica que reúne elementos del techno y del house, para mezclarlos con pop, disco o rock. Sus producciones, siempre reconocibles, pueden ir desde la pista de baile al salón de casa, con composiciones más abstractas.",
          logo: "https://medellinstyle.com/wp-content/uploads/Tale-of-us.jpg",
        },
      ],
    };
  },
};
</script>

<style>
.carta-banda {
  background-color: olive;
}
v-card-subtitle {
  padding: 6px;
}
</style>
