<template>
    <div>
      <h1>Dog</h1>
      <router-link to="/dog/">List</router-link> |
      <router-link to="/dog/1">1</router-link> |
      <router-link to="/dog/new">new</router-link>
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'dogs',
  title: 'Dogs Page'
}
</script>
