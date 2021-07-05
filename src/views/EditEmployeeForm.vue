<template>
  <v-container fluid class="mx-auto mt-8" id="form-card">
    <v-row justify="center" align="center" class="row">
      <v-col class="text-center">
        <v-img :src="require('../assets/Logo.jpeg')" contain height="180" />

        <v-form ref="form" class="px-4" lazy-validation>
          <v-row justify="center" align="center" class="row">
            <v-col>
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                label="First Name"
                required
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                label="Last Name"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row justify="center" align="center" class="row">
            <v-col justfiy="center">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center" align="center" class="row">
            <v-col>
              <v-text-field
                v-model="title"
                :rules="titleRules"
                label="Title"
                required
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="salary"
                label="Salary"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center" align="center" class="row">
            <v-col>
              <v-select :items="roles" label="Role"></v-select>
            </v-col>
            <v-col>
              <v-select :items="departments" label="Department"></v-select>
            </v-col>
          </v-row>
          <v-row justify="space-around" align="center" class="row">
            <v-col>
              <v-btn
                class="green darken-1 white--text mt-5"
                width="120"
                @click="submitForm"
              >
                Apply
              </v-btn>
            </v-col>
            <v-col>
              <v-btn
                class="grey darken-3 white--text mt-5"
                width="120"
                @click="$router.push({ path: `/dashboard/3` })"
              >
                Clear
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "RegisterForm",
  data: () => ({
    roles: [1328, 2399, 2893],
    departments: [400, 300, 200, 100],

    firstname: "",
    lastname: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) =>
        /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        ) || "E-mail must be valid",
    ],
    title: "",
    salary: "",

    titleRules: [(v) => !!v || "Title is required"],
  }),
  methods: {
    login(regdata) {
      axios
        .post("https://nexient-side.herokuapp.com/accounts/signup", regdata)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
    },
    submitForm() {
      const formData = {
        first_name: this.firstname,
        last_name: this.lastname,
        email: this.email,
        password: this.confirm_password,
        login_attempts: 0,
        title: "",
        salary: "",
        role: 3893,
        department: 300, //add to form,
        pinpoint: "",
        active: true,
      };
      this.$refs.form.validate();
      console.log(formData);
      this.login(formData);
      this.clearForm();
    },
  },
};
</script>

<style scoped>
.fluid {
  margin: 0;
  padding: 0;
}
#form-card {
  max-width: 450px;
}
</style>
