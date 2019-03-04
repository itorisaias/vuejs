import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import router from '@/router/routes.js'
import ToDoItem from '@/components/Todo/ToDoItem.vue'

describe('Teste Component to-do-item', function () {
  const item = { id: 1, name: 'Itor' }

  Vue.use(router)
  Vue.use(Vuetify)
  let wrapper = mount(ToDoItem, { router, propsData: { item } })

  it('Props do component deve ser igual ao objeto [item]', () => {
    expect(wrapper.find('.v-list__tile__title').text()).toBe(item.name)
    expect(wrapper.props().item).toEqual(item)
  })

  it('should be function is called onDelete', () => {
    const onDeleteStub = jest.fn()

    wrapper.setMethods({
      onDelete: onDeleteStub
    })

    wrapper.find('.v-btn').trigger('click')

    expect(onDeleteStub).toBeCalled()
  })

  it('should be emit delete item', () => {
    wrapper.vm.$emit('delete', item)

    expect(wrapper.emitted().delete).toBeTruthy()
    expect(wrapper.emitted().delete.length).toBe(1)
    expect(wrapper.emitted().delete[0]).toEqual([item])
  })
})
