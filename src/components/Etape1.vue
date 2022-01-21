<template>
  <v-container>
    <h1>Sélectionner le format d'entrée</h1>
    <v-row class="d-flex justify-center ma-10">
      <v-card class="ma-2">
        <v-checkbox v-model="fichier"> </v-checkbox>
        Fichier
      </v-card>
      <v-card class="ma-2"> Application </v-card>
      <v-card class="ma-2"> Api </v-card>
    </v-row>
    <v-row class="d-flex justify-space-between ma-4 pa-2">
      <v-btn disabled outlined rounded color="primary">Précedent</v-btn>
      <v-btn filled rounded color="primary" @click.prevent="next()"
        >Suivant</v-btn
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "1",
  method: {
    next() {
      this.$router.push("/2");
    },
  },
  computed: {
    fichier: {
      get() {
        return this.$store.state.fichier;
      },
      set(value) {
        this.$store.commit("setFichier", { fichier: value });
      },
    },
  },
  data: () => ({}),
};
</script>
