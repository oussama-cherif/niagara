<template>
  <div>
    <v-container>
      <h1 class="ma-7">Bienvenue</h1>
      <v-row class="d-flex justify-space-between align-center">
        <v-col cols="3">
          <v-select
            v-if="carte.tags"
            :items="carte.tags"
            filled
            label="Filtres"
            v-model="filter"
          ></v-select>
        </v-col>
        <!-- <v-col cols="4"> -->
        <v-btn color="primary" rounded @click.prevent="createCard"
          >+ Ajouter une carte</v-btn
        >
        <!-- </v-col> -->
      </v-row>
      <v-card v-if="carte.nom" class="white d-flex justify-space-between">
        <p class="font-weight-medium pa-2">{{ nom }}</p>
        <div class="d-flex" v-if="tags">
          <v-chip
            class="ma-2 pa-2 text-center white--text"
            :color="
              tag === 'Production'
                ? 'pink'
                : tag === 'Logistique'
                ? 'blue'
                : tag === 'Qualité'
                ? 'green'
                : 'orange'
            "
            v-for="tag in tags"
            :key="tag"
          >
            {{ tag }}
          </v-chip>
        </div>
      </v-card>
      <!-- <v-row v-if="carte.tags === items.value">
        <p>{{ carte.nom }} - {{ carte.tags }}</p>
      </v-row> -->
      <!-- <v-row v-for="cart in carte" :key="cart.name">
        <p>{{ cart.name }} - {{ card.tags }}</p>
      </v-row> -->
      <!-- <div v-if="items.value === carte.tags">
        <v-card v-if="carte.nom" class="white d-flex justify-space-between">
          <p class="font-weight-medium pa-2">{{ nom }}</p>
          <div class="d-flex" v-if="tags">
            <v-chip
              class="ma-2 pa-2 text-center"
              color="primary"
              v-for="tag in tags"
              :key="tag"
            >
              {{ tag }}
            </v-chip>
          </div>
        </v-card>
      </div> -->
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    createCard() {
      this.$router.push("/create");
    },
  },
  data: () => ({
    filter: undefined,
  }),
  computed: {
    carte: {
      get() {
        return this.$store.state.carte;
      },
    },
    nom: {
      get() {
        return this.$store.state.carte.nom;
      },
    },
    tags: {
      get() {
        return this.$store.state.carte.tags;
      },
    },
  },
};
</script>
<style scoped>
.v-chip.Production {
  background: pink;
}
</style>
