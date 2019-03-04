import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import router from '@/router/routes.js'
import ToDoList from '@/components/Todo/ToDoList.vue'

describe('Test Component to-do', function () {
  const items = [{ id: 1, name: 'Itor' }]
  const newItem = 'Itor Isaias'

  Vue.use(router)
  Vue.use(Vuetify)
  let wrapper = mount(ToDoList, { router })

  it('Validação de inejção de dados', () => {
    wrapper.setData({
      items,
      newItem
    })

    expect(wrapper.findAll('.v-list__tile').length).toBe(items.length)
    expect(wrapper.vm.items).toEqual(items)
    expect(wrapper.vm.newItem).toEqual(newItem)
  })

  it('should be function is called onCreateItem', () => {
    wrapper.setData({
      newItem
    })

    wrapper.find('.v-btn').trigger('click')

    expect(wrapper.vm.items.length).toBe(2)
  })
})
