<template>
  <v-container>
    <v-text-field
      class="novoItem"
      label="Novo Item"
      v-model="newItem">
    </v-text-field>
    <v-btn @click="onCreateItem">Send</v-btn>
    <v-list>
      <v-list-tile
        v-for="(item, index) in items"
        :key="item.id">
        <to-do-item
          :item="item"
          :key="index"
          @delete="onDeleteItem">
        </to-do-item>
      </v-list-tile>
    </v-list>
  </v-container>
</template>

<script>
import ToDoItem from '@/components/Todo/ToDoItem'

export default {
  name: 'todo',
  components: {
    ToDoItem
  },
  data: () => ({
    items: [
      { id: 1, name: 'Itor Isaias' },
      { id: 2, name: 'Vitor Marinho' }
    ],
    newItem: null
  }),
  methods: {
    onCreateItem () {
      if (!this.newItem) return

      const newId = Math.max.apply(null, this.items.map(t => t.id)) + 1
      this.items.push({ id: newId, name: this.newItem })
      this.newItem = null
    },
    onDeleteItem (todo) {
      this.items = this.items.filter(item => item.id !== todo.id)
    }
  }
}
</script>

<style scoped>

</style>
