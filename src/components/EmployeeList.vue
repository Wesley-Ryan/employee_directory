<template>
  <v-container fluid>
    <v-expansion-panels popout>
      <v-expansion-panel v-for="employee in employees" :key="employee.id">
        <v-expansion-panel-header>
          <v-row align="center" class="spacer" no-gutters> </v-row>
          <v-col cols="2">
            <v-avatar size="36px">
              <img
                alt="Avatar"
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
              />
            </v-avatar>
          </v-col>
          <v-col cols="10">
            <v-row>
              <p class="ma-4">ID: {{ employee.id }}</p>
              <p class="ma-4">First Name: {{ employee.first_name }}</p>
              <p class="ma-4">Last Name: {{ employee.last_name }}</p>
            </v-row>
          </v-col>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <p>ID: {{ employee.id }}</p>

          <div class="info-row">
            <p>First Name: {{ employee.first_name }}</p>
            <p>Last Name: {{ employee.last_name }}</p>
            <p>Email: {{ employee.email }}</p>
          </div>
          <div class="info-row">
            <p>Title : {{ employee.title }}</p>
            <p>Department: {{ employee.department }}</p>
            <p>Role: {{ employee.role }}</p>
          </div>
          <div class="info-row">
            <p>Salary: {{ employee.salary }}</p>
            <p>Active: {{ employee.active }}</p>
          </div>
          <v-btn elevation="4" large class="ma-4"> Edit Employee</v-btn>
          <v-btn elevation="4" large class="ma-4" @click="button(employee.id)">
            Deactivate Employee</v-btn
          >
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
          const returnedEmployees = response.data.data;
          returnedEmployees.forEach((employee) =>
            this.employees.push(employee)
          );
        })
        .catch((error) => {
          console.log(error);
        });
    },
    disableAccount(userId) {
      axiosAuth
        .put(`/company/account/${userId}}`, { active: false })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    button(data) {
      this.disableAccount(data);
    },
  },
};
</script>

<style scoped>
.info-row {
  display: flex;
  justify-content: center;
}

.info-row p {
  margin: 20px;
}
</style>
