<template>
  <v-container fluid class="mx-auto mt-8" id="form-card">
    <v-row justify="center" align="center" class="row">
      <v-col class="text-center">
        <v-img
          :src="user.avatar ? user.avatar : require('../assets/Logo.jpeg')"
          contain
          height="180"
        />

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
              <v-text-field v-model="role" label="Role" required></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="department"
                label="Department"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <p id="error">{{ errors[0] }}</p>
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
                @click="$router.push({ path: `/dashboard/${user.id}` })"
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
import axiosAuth from "../utils/axiosWithAuth";
export default {
  name: "EditEmployeeForm",
  data: () => ({
    errors: [],
    user: {
      avatar: "",
      first_name: "",
      lastname: "",
      email: "",
      title: "",
      salary: "",
      role: 0,
      department: 0,
    },
    role: "",
    department: "",
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
  created() {
    this.getData();
  },
  methods: {
    getData() {
      axiosAuth
        .get(`/company/account/${this.$route.params.user_id}`)
        .then((response) => {
          this.firstname = response.data.data.first_name;
          this.lastname = response.data.data.last_name;
          this.email = response.data.data.email;
          this.title = response.data.data.title;
          this.salary = response.data.data.salary;
          this.role = response.data.data.role;
          this.department = response.data.data.department;

          this.user = {
            id: response.data.data.id,
            avatar: response.data.data.avatar,
            first_name: response.data.data.first_name,
            lastname: response.data.data.last_name,
            email: response.data.data.email,
            title: response.data.data.title,
            salary: response.data.data.salary,
            role: response.data.data.role,
            department: response.data.data.department,
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },

    submitForm() {
      this.errors.push("SORRY FORM IS NOT SETUP YET");
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
#error {
  margin-top: 25px;
  font-size: 1.2rem;
  color: red;
  text-align: center;
}
</style>
