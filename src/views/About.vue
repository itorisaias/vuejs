<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Hoje é {{ new Date | moment }}</p>
    <p>Hoje é {{ new Date | moment('L') }}</p>
    <p>Hoje é {{ new Date | moment('LL') }}</p>
    <p>Hoje é {{ new Date | moment('LLL') }}</p>
    <p>Hoje é {{ new Date | moment('LLLL') }}</p>
    <p>{{ new Date | moment('dddd DD [de] MMMM, [Agora é] h:mm:ss a') }}</p>
    <p id="content">Value content is: {{ content }}</p>
    <button id="toggle" @click="content = !content">Toggle data property</button>
    <button id="log" @click="logSomeText">Call function logSomeText</button>
  </div>
</template>

<script>
export default {
  name: 'About',
  title: 'About Page',
  data: () => ({
    content: true
  }),
  methods: {
    logSomeText () {
      console.log('The button was clicked. Method call successfull')
    }
  }
}
</script>
