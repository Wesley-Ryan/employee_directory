<template>
  <v-container fluid>
    <v-expansion-panels popout>
      <v-expansion-panel v-for="employee in employees" :key="employee.id">
        <v-expansion-panel-header>
          <v-row align="center" class="spacer" no-gutters> </v-row>
          <v-col cols="5">
            <v-avatar size="36px">
              <img
                alt="Avatar"
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
              />
            </v-avatar>
          </v-col>
          <v-col cols="7">
            <v-row>
              <p>{{ employee.id }}</p>
              <p>First Name: Wesley</p>
              <p>Last Name: White</p>
              <p>Email: ww@mntncorp.com</p>
            </v-row>
          </v-col>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <p>Title : Engineer</p>
          <p>Department: Engineering</p>
          <p>Salary: $100,000</p>
          <p>Role: Manager</p>
          <p>Active: True</p>
          <v-btn elevation="2" large> Edit Employee</v-btn>
          <v-btn elevation="2" large> Deactivate Employee</v-btn>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels></v-container
  >
</template>

<script>
import axiosAuth from "../utils/axiosWithAuth";

export default {
  name: "EmployeeList",
  data() {
    return {
      employees: [],
      error: null,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      const token = localStorage.getItem("MNTN_Corp");
      axiosAuth
        .get(`/company/admin/employees/all`, {
          headers: {
            authorization: token,
          },
        })
        .then((response) => {
          this.employees.push(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
