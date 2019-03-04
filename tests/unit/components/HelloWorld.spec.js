import Vue from 'vue'
import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Vuetify from 'vuetify'
import { createStore } from '@/store'

const store = createStore()

Vue.use(Vuetify)

describe('Teste Page HelloWorld', function () {
  const msg = 'new message'
  const wrapper = mount(HelloWorld, { propsData: { msg }, store })

  it('should be msg match valye', () => {
    expect(wrapper.props().msg).toMatch(msg)
    expect(wrapper.props().msg).toHaveLength(msg.length)
  })
})
