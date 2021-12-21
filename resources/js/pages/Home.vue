<template>
  <div class="container">
    <div class="col-md-4 mx-auto">
      <h1>Xin chào {{ currentUser.name }}</h1>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  methods: {},
  computed: {
    ...mapGetters("auth", ["currentUser"]),
  },
};
</script>
