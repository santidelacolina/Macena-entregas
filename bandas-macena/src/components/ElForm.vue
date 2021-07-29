<template>
  <v-card ele>
    <v-card-title id="contactanos" >Contactanos </v-card-title>
    <form>
      <v-container fluid>
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="name"
              :error-messages="nameErrors"
              label="Name"
              required
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="email"
              :error-messages="emailErrors"
              label="E-mail"
              required
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-textarea
              v-model="comentarios"
              :error-messages="comentariosErrors"
              :counter="10"
              name="input-7-4"
              label="Comentarios extras"
              required
              @input="$v.comentarios.$touch()"
              @blur="$v.comentarios.$touch()"
            ></v-textarea>
          </v-col>
          <v-col cols="12">
            <v-btn class="mr-4" @click="submit"> enviar </v-btn>
            <v-btn @click="clear"> limpiar campos </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </form>
  </v-card>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required },
    email: { required, email },
    comentarios: { required, minLength: minLength(10) },
  },

  data: () => ({
    name: "",
    email: "",
    comentarios: "",
  }),

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;

      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    comentariosErrors() {
      const errors = [];
      if (!this.$v.comentarios.$dirty) return errors;
      !this.$v.comentarios.minLength &&
        errors.push("Debes escribir al menos 10 caracteres");
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.comentarios = "";
    },
  },
};
</script>

<style></style>
