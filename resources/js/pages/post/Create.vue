<template>
  <div class="container">
    <div class="col-md-4 mx-auto mt-5">
      <form @submit.prevent="submit()">
        <div class="mb-3">
          <label for="title" class="form-label">Title</label>
          <input
            type="text"
            class="form-control"
            id="title"
            v-model="post.title"
            :class="{ 'is-invalid': errors.title }"
          />
          <div v-if="errors.title" class="invalid-feedback">
            {{ errors.title[0] }}
          </div>
        </div>
        <div class="mb-3">
          <label for="content" class="form-label">Content</label>
          <textarea
            style="resize: none"
            class="form-control"
            id="content"
            rows="10"
            v-model="post.content"
            :class="{ 'is-invalid': errors.content }"
          ></textarea>
          <div v-if="errors.content" class="invalid-feedback">
            {{ errors.content[0] }}
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
      post: {
        title: "",
        content: "",
      },
      errors: {},
    };
  },
  methods: {
    async submit() {
      try {
        await this.$store.dispatch("post/createPost", this.post);
        this.$swal({
          title: "Success",
          text: "Post created successfully",
          icon: "success",
        });
        this.$router.push("/post");
      } catch (error) {
        this.errors = error.response.data.errors;
      }
    },
  },
};
</script>
