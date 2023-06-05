import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import button from '../button.vue';
// The component to test
describe('test button', () => {
  it('should render slot', () => {
    const wrapper = mount(button, {
      slots: {
        default: '我是组件内容'
      }
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('我是组件内容');
  });
});