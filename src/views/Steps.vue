<template >
  <div>
    <div v-if="step === 1">
      <v-header>
        <v-container>
          <div class="text-center">
            <v-btn class="ma-2 mr-15" outlined fab color="blue">1</v-btn>

            <v-btn class="ma-2" outlined disabled fab color="blue">2</v-btn>
            <v-btn class="ma-2 ml-15" outlined disabled fab color="blue"
              >3</v-btn
            >
          </div>
        </v-container>
      </v-header>
      <v-container>
        <h1>Sélectionner le format d'entrée</h1>
        <v-row class="d-flex justify-space-around ma-10">
          <v-card class="ma-2 pa-2 text-center" width="150px" elevation="2">
            <v-row>
              <v-checkbox v-model="fichier" class="ml-3"> </v-checkbox>
              <v-icon x-large color="blue" class="ml-3"
                >mdi-file-upload-outline</v-icon
              >
            </v-row>
            <p class="mt-3">Fichier</p>
          </v-card>
          <v-card
            class="ma-2 pa-2 text-center"
            width="150px"
            disabled
            elevation="2"
          >
            <v-row>
              <v-checkbox v-model="application" class="ml-3"> </v-checkbox>
              <v-icon x-large color="green" class="ml-3"
                >mdi-application-cog-outline</v-icon
              >
            </v-row>
            <p class="mt-3">Application</p>
          </v-card>
          <v-card
            class="ma-2 pa-2 text-center"
            width="150px"
            disabled
            elevation="2"
          >
            <v-row>
              <v-checkbox v-model="api" class="ml-3"> </v-checkbox>
              <v-icon x-large color="orange" class="ml-3">mdi-api</v-icon>
            </v-row>
            <p class="mt-3">API</p>
          </v-card>
        </v-row>
      </v-container>
      <v-footer fixed>
        <v-container>
          <v-row class="d-flex justify-space-between ma-4 pa-2">
            <v-btn disabled outlined rounded color="primary"
              ><v-icon class="mr-1">mdi-arrow-left</v-icon>Précedent</v-btn
            >
            <v-btn
              filled
              rounded
              :disabled="enable"
              color="primary"
              @click.prevent="next()"
              >Suivant</v-btn
            >
          </v-row>
        </v-container>
      </v-footer>
    </div>
    <div v-if="step === 2">
      <v-header>
        <v-container>
          <div class="text-center">
            <v-btn class="ma-2 mr-15" outlined disabled fab color="blue"
              >1</v-btn
            >
            <v-btn class="ma-2" outlined fab color="blue">2</v-btn>
            <v-btn class="ma-2 ml-15" outlined disabled fab color="blue"
              >3</v-btn
            >
          </div>
        </v-container>
      </v-header>
      <v-container>
        <h1>Renseignez la carte</h1>
        <vue-dropzone
          ref="myVueDropzone"
          id="dropzone"
          :options="dropzoneOptions"
          class="my-3"
        ></vue-dropzone>

        <p class="ml-3">Donner un nom à votre carte</p>
        <input
          type="text"
          v-model="nom"
          class="my-3 ml-3"
          Placeholder="données de production des pommes"
          style="width: 99%;!important"
          required
        />
        <p class="ml-3 my-2">Ajouter des étiquettes d'équipe</p>
        <v-col cols="6 ">
          <v-select
            v-model="tags"
            :items="items"
            chips
            multiple
            outlined
            required
          ></v-select>
        </v-col>
      </v-container>
      <v-footer>
        <v-container>
          <v-row class="d-flex justify-space-between ma-4 pa-2">
            <v-btn outlined rounded color="primary" @click.prevent="prev()"
              ><v-icon class="mr-1">mdi-arrow-left</v-icon>Précedent</v-btn
            >
            <v-btn filled rounded color="primary" @click.prevent="next()"
              >Suivant</v-btn
            >
          </v-row>
        </v-container>
      </v-footer>
    </div>
    <div v-if="step === 3">
      <v-header>
        <v-container>
          <div class="text-center">
            <v-btn class="ma-2 mr-15" outlined disabled fab color="blue"
              >1</v-btn
            >
            <v-btn class="ma-2" outlined disabled fab color="blue">2</v-btn>
            <v-btn class="ma-2 ml-15" outlined fab color="blue">3</v-btn>
          </div>
        </v-container>
      </v-header>
      <v-container>
        <h1>Sélectionner le déclencheur</h1>
        <p>Choisissez le type de déclencheur pour mettre à jour les données</p>
        <v-select
          :items="trigger"
          label="Standard"
          v-model="declancheur"
        ></v-select>
        <p>
          Choisissez la date de mise à jour attendue (pour envoyer une alerte en
          cas de non réalisation)
        </p>
        <v-date-picker v-model="date"></v-date-picker>
      </v-container>
      <v-footer>
        <v-container>
          <v-row class="d-flex justify-space-between ma-4 pa-2">
            <v-btn outlined rounded color="primary" @click.prevent="prev()"
              ><v-icon class="mr-1">mdi-arrow-left</v-icon>Précedent</v-btn
            >
            <v-btn filled rounded color="primary" @click="submit()"
              >Terminer</v-btn
            >
          </v-row>
        </v-container>
      </v-footer>
    </div>
  </div>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

export default {
  components: {
    vueDropzone: vue2Dropzone,
  },
  data: () => {
    return {
      step: 1,
      items: ["Logistique", "Production", "Qualité", "Maintenance"],
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: { "My-Awesome-Header": "header value" },
      },
      trigger: ["Manuel", "Action prédéfinie", "Calendaire"],
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      fichier: false,
    };
  },
  methods: {
    prev() {
      this.step--;
    },
    next() {
      this.step++;
    },
    submit() {
      this.$router.push("/");
      console.log(this.$store.state.carte);
    },
  },
  computed: {
    enable() {
      return !this.fichier;
    },
    fichier: {
      get() {
        return this.$store.state.carte.fichier;
      },
      set(value) {
        this.$store.commit("setFichier", { fichier: value });
      },
    },
    nom: {
      get() {
        return this.$store.state.carte.nom;
      },
      set(value) {
        this.$store.commit("setNom", { nom: value });
      },
    },
    tags: {
      get() {
        return this.$store.state.carte.tags;
      },
      set(value) {
        this.$store.commit("setTags", { tags: value });
      },
    },
    declancheur: {
      get() {
        return this.$store.state.carte.declancheur;
      },
      set(value) {
        this.$store.commit("setDeclancheur", { declancheur: value });
      },
    },
    date: {
      get() {
        return this.$store.state.carte.date;
      },
      set(value) {
        this.$store.commit("setDate", { date: value });
      },
    },
  },
};
</script>

<style>
</style>