<template>
  <v-layout>
    <v-list-tile-content>
      <v-list-tile-title>{{ item.name }}</v-list-tile-title>
    </v-list-tile-content>
    <v-list-tile-action>
      <v-btn color="red" @click="onDelete">remove</v-btn>
    </v-list-tile-action>
  </v-layout>
</template>

<script>
export default {
  name: 'to-do-item',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    onDelete () {
      this.$emit('delete', this.item)
    }
  }
}
</script>

<style scoped>

</style>
