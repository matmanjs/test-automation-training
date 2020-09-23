// 导入 Vue Test Utils 内的 `shallowMount` 和待测试的组件
import { shallowMount } from '@vue/test-utils'
import MyComponent from '../../src/components/MyComponent.vue'

import HelloWorld from '../../src/components/HelloWorld.vue';

/**
 * @author tangitan
 * @priority P1
 * @casetype unit
 */
describe('HelloWorld测试', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
});

// 挂载这个组件
const wrapper = shallowMount(MyComponent)

/**
 * @author tangitan
 * @priority P1
 * @casetype unit
 */
describe('MyComponent测试', () => {
  // 检查原始组件选项
  it('has a created hook', () => {
    expect(typeof MyComponent.created).toBe('function')
  })

  // 评估原始组件选项中的函数的结果
  it('sets the correct default data', () => {
    expect(typeof MyComponent.data).toBe('function')
    const defaultData = MyComponent.data()
    expect(defaultData.message).toBe('hello!')
  })

  // 检查 mount 中的组件实例
  it('correctly sets the message when created', () => {
    expect(wrapper.vm.$data.message).toBe('bye!')
  })

  // 创建一个实例并检查渲染输出
  it('renders the correct message', () => {
    expect(wrapper.text()).toBe('bye!')
  })
})