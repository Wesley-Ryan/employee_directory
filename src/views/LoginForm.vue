<template>
  <v-container fluid class="mx-auto mt-8" id="form-card">
    <v-card-title>
      <h1 class="display-1" id="centered">Login</h1>
    </v-card-title>
    <v-img :src="require('../assets/Logo.jpeg')" contain height="180" />
    <v-form lazy-validation>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="Email"
        required
        prepend-icon="mdi-account-circle"
      />
      <v-text-field
        v-model="password"
        :rules="passwordRules"
        :type="showPassword ? 'text' : 'password'"
        label="Password"
        prepend-icon="mdi-lock"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPassword = !showPassword"
      />

      <v-row justify="space-around" align="center" class="row" mt-5>
        <v-btn
          large
          class="green darken-1 white--text mt-5"
          width="120"
          @click="submitForm()"
        >
          Login
        </v-btn>

        <v-btn
          large
          class="grey darken-3 white--text mt-5"
          width="120"
          @click="$router.push({ path: 'register' })"
        >
          Register
        </v-btn>
        <p id="error">{{ errors[0] }}</p>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginForm",
  data: () => ({
    errors: [],
    showPassword: false,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) =>
        /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        ) || "E-mail must be valid",
    ],
    password: "",
    passwordRules: [(v) => !!v || "password is required"],
  }),

  methods: {
    login(loginData) {
      axios
        .post("https://nexient-side.herokuapp.com/accounts/login", loginData)
        .then((response) => console.log(response))
        .catch((error) => {
          this.errors.push(error);
        });
    },
    submitForm() {
      const formData = {
        email: this.email,
        password: this.password,
      };
      if (!this.email || !this.password) {
        this.errors.push("Email and Password are required");
        console.log(this.errors);
      } else {
        this.errors = [];
        this.login(formData);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#form-card {
  max-width: 450px;
}
#centered {
  text-align: center;
  margin: 0 auto;
}
#error {
  margin-top: 15px;
  font-size: 1.2rem;
  color: red;
}
</style>
