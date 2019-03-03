import { mount } from '@vue/test-utils'
import About from '@/views/About'
import '@/filters'

describe('Test View About', () => {
  let wrapper = mount(About)

  it('should be toggle value content', () => {
    wrapper.setData({ content: true })

    wrapper.find('#toggle').trigger('click')

    expect(wrapper.vm.content).toBe(false)
  })

  it('should be function is called loggin text to console', () => {
    const logSomeTextStub = jest.fn()

    wrapper.setMethods({
      logSomeText: logSomeTextStub
    })

    wrapper.find('#log').trigger('click')

    expect(logSomeTextStub).toBeCalled()
  })
})
