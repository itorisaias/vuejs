<template>
    <div>
      <span id="id">
        {{ $route.params.id ? $route.params.id : 'New Dog' }}
      </span>
    </div>
</template>

<script>
export default {
  name: 'dog'
}
</script>

<style scoped>

</style>
