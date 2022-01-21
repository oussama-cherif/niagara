<template>
  <v-container>
    <h1>Sélectionner le déclencheur</h1>
    <label for="déclencheur"
      >Choisissez le type de déclencheur pour mettre à jour les données</label
    >
    <v-select :items="items" label="Standard" v-model="declancheur"></v-select>
    <p>
      Choisissez la date de mise à jour attendue (pour envoyer une alerte en cas
      de non réalisation)
    </p>
    <v-date-picker v-model="date"></v-date-picker>
    <v-row class="d-flex justify-space-between ma-4 pa-2">
      <v-btn disabled outlined rounded color="primary" @click.prevent="prev()"
        >Précedent</v-btn
      >
      <v-btn filled rounded color="primary" @click.prevent="next()"
        >Suivant</v-btn
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "3",
  computed: {
    declancheur: {
      get() {
        return this.$store.state.declancheur;
      },
      set(value) {
        this.$store.commit("setDeclancheur", { declancheur: value });
      },
    },
    date: {
      get() {
        return this.$store.state.date;
      },
      set(value) {
        this.$store.commit("setDate", { date: value });
      },
    },
  },
  data: () => ({
    items: ["Manuel", "Action prédéfinie", "Calendaire"],
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
  }),
};
</script>
