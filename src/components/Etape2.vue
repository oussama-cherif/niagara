<template>
  <v-container>
    <h1>Renseignez la carte</h1>
    <vue-dropzone
      ref="myVueDropzone"
      id="dropzone"
      :options="dropzoneOptions"
    ></vue-dropzone>
    <label>Donner un nom à votre carte</label>
    <input
      type="text"
      placeholder="données de production des pommes"
      v-model="nom"
    />
    <label for="chips"> Ajouter des étiquettes d'équipe</label>
    <v-select
      v-model="tags"
      :items="items"
      chips
      label="Chips"
      multiple
      outlined
    ></v-select>
    <p>{{ $store.state.tags }}</p>
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
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
export default {
  name: "2",
  components: {
    vueDropzone: vue2Dropzone,
  },
  computed: {
    nom: {
      get() {
        return this.$store.state.nom;
      },
      set(value) {
        this.$store.commit("setNom", { nom: value });
      },
    },
    tags: {
      get() {
        return this.$store.state.tags;
      },
      set(value) {
        this.$store.commit("setTags", { tags: value });
      },
    },
  },
  data: () => ({
    items: ["Logistique", "Production", "Qualité", "Maintenance"],
    dropzoneOptions: {
      url: "https://httpbin.org/post",
      thumbnailWidth: 150,
      maxFilesize: 0.5,
      headers: { "My-Awesome-Header": "header value" },
    },
  }),
};
</script>
