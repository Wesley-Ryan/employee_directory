<template>
  <v-container fluid class="fluid" id="container">
    <v-app-bar id="nav-bar" dense dark fixed height="70px">
      <v-app-bar-nav-icon>
        <v-img
          :src="require('../assets/logoOnly.png')"
          contain
          height="90"
          id="img-logo"
        />
      </v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list width="200">
          <v-list-item
            v-for="link in links"
            :key="link.id"
            @click="
              () => {
                link.action;
              }
            "
          >
            <v-list-item-title> {{ link.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-row justify="center" align="center" class="row">
      <v-col id="profile-tab">
        <v-card class="mx-auto my-12" max-width="374">
          <v-card-title id="centered">Your Details</v-card-title>
          <v-row justify="center" align="center" class="row">
            <v-avatar size="124" rounded>
              <img :src="user.avatar" alt="John" />
            </v-avatar>
          </v-row>
          <v-card-text>
            <div class="div-row">
              <v-card-text
                ><span>First Name:</span> {{ user.firstName }}</v-card-text
              >
              <v-card-text>
                <span>Last Name: </span>{{ user.lastName }}</v-card-text
              >
            </div>
            <div class="div-row">
              <v-card-text><span>Role:</span> {{ setRole }}</v-card-text>
              <v-card-text
                ><span>Department: </span> {{ setDepartment }}</v-card-text
              >
            </div>

            <v-card-text id="email">
              <span>Email: </span>
              <a href="`mailto:fakeemail@mail.com`">{{
                user.email
              }}</a></v-card-text
            >
          </v-card-text>
        </v-card></v-col
      >
      <v-col class="text-center" style="height: 100vh">
        <h1>Welcome {{ user.firstName }}</h1>
        <EmployeeList />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axiosAuth from "../utils/axiosWithAuth";
import EmployeeList from "../components/EmployeeList.vue";
export default {
  name: "Dashboard",
  components: { EmployeeList },
  data: () => ({
    links: [
      { id: 1, name: "Account", action: console.log("Account") },
      { id: 2, name: "Logout", action: console.log("Logout") },
    ],
    user: {
      avatar:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      firstName: "",
      lastName: "",
      email: "",
      role: 1328,
      department: "",
    },
  }),
  created() {
    this.getData();
  },
  computed: {
    setRole() {
      return "Administrator";
    },
    setDepartment() {
      switch (this.user.department) {
        case this.user.department == 100:
          return "Engineering";

        case this.user.department == 200:
          return "Operations";

        case this.user.department == 300:
          return "Sales";

        default:
          return "IT";
      }
    },
  },
  methods: {
    getData() {
      const id = this.$route.params.user_id;
      axiosAuth
        .get(`/company/account/${id}`)
        .then((response) => {
          this.user = {
            firstName: response.data.data.first_name,
            lastName: response.data.data.last_name,
            email: response.data.data.email,
            role: response.data.data.role,
            department: response.data.data.department,
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
h1 {
  margin-top: 30px;
}
#container {
  margin-top: 60px;
}

#profile-tab {
  max-width: 400px;
  background: #4a5680;
  height: 100vh;
}
#email {
  text-align: center;
}

.div-row {
  display: flex;
  justify-content: space-around;
}
span {
  font-weight: 400;
  color: black;
}
</style>
