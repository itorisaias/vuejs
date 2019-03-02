<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <pre>
      {{ isLoggedIn }}
      {{ currentUser }}
      {{ auth }}
    </pre>
    <button @click="logout">logout</button>
    <br>
    <div>
      <label for="name">Name
        <input type="text" id="name" v-model="auth.name">
      </label>
    </div>
    <div>
      <label for="name">Email
        <input type="text" id="email" v-model="auth.email">
      </label>
    </div>
    <button @click="loginNotMap">login</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: () => ({
    auth: {
      name: null,
      email: null
    }
  }),
  computed: {
    ...mapGetters('auth', ['isLoggedIn', 'currentUser'])
  },
  methods: {
    logout () {
      this.$store.dispatch('auth/logout')
    },
    ...mapActions('auth', ['login']),
    loginNotMap () {
      this.login(JSON.stringify(this.auth))
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
