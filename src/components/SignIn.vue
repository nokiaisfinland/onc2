<template>
  <div class="sign-in">
    <h2>Sign In</h2>
    <form @submit.prevent="handleSignIn">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit">Sign In</button>
    </form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    handleSignIn() {
      // For demonstration purposes, we'll use a sample username and password.
      // Replace this with your own logic to handle sign-in authentication.
      if (this.username === "user" && this.password === "password") {
        alert("Sign in successful!");
        // You can redirect the user to another page after successful sign-in.
        this.$router.push('/dashboard');
      } else {
        alert("Invalid username or password. Please try again.");
      }
    }
  }
};
</script>

<style>
.sign-in {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
