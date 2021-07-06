<template>
  <v-container fluid>
    <v-row justify="center" align="center" class="row">
      <v-btn elevation="2" large @click="addEmployee">Add New Employee</v-btn>
      <v-btn elevation="2" large>Unlock Account</v-btn>
      <v-btn elevation="2" large>Edit Employee</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import axiosAuth from "../utils/axiosWithAuth";
export default {
  name: "AdminPanel",
  data() {
    return {};
  },

  methods: {
    addEmployee() {
      $router.push({ path: "/accounts/addnew" });
    },
    unlockAccount(userId) {
      axiosAuth
        .put(`company/account/${userId}`, { active: true })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
