<template>
  <div class="container">
    <div class="col-md-4 mx-auto mt-5">
      <h1 class="mb-3 text-center">Register</h1>
      <form @submit.prevent="submit()">
        <div class="mb-3">
          <label for="text" class="form-label">Name</label>
          <input
            type="name"
            class="form-control"
            id="name"
            name="name"
            v-model="user.name"
            aria-describedby="nameHelp"
            :class="{ 'is-invalid': errors.name }"
          />
          <div v-if="errors.email" class="invalid-feedback">
            {{ errors.name[0] }}
          </div>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            v-model="user.email"
            aria-describedby="emailHelp"
            :class="{ 'is-invalid': errors.email }"
          />
          <div v-if="errors.email" class="invalid-feedback">
            {{ errors.email[0] }}
          </div>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            name="password"
            v-model="user.password"
            :class="{ 'is-invalid': errors.password }"
          />
          <div v-if="errors.password" class="invalid-feedback">
            {{ errors.password[0] }}
          </div>
        </div>
        <div class="mb-3">
          <label for="password_confirmation" class="form-label"
            >Re-Password</label
          >
          <input
            type="password"
            class="form-control"
            id="password_confirmation"
            name="password_confirmation"
            v-model="user.password_confirmation"
            :class="{ 'is-invalid': errors.password_confirmation }"
          />
          <div v-if="errors.password_confirmation" class="invalid-feedback">
            {{ errors.password_confirmation[0] }}
          </div>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      errors: {},
    };
  },
  methods: {
    async submit() {
      try {
        await this.$store.dispatch("auth/register", this.user);
        this.$swal({
          title: "Thành công.",
          text: "Đằng ký thành công.",
          icon: "success",
        });
        this.$router.push({ name: "home" });
      } catch (error) {
        this.errors = error.response.data.errors;
      }
    },
  },
};
</script>
