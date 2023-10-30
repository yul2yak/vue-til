import { shallowMount } from '@vue/test-utils';
import SignupForm from '@/components/SignupForm.vue';

describe('SignupForm.vue', () => {
  test('ID, Password, Nickname 모두 입력되어야 버튼이 활성화 된다', () => {
    const wrapper = shallowMount(SignupForm, {
      data() {
        return {
          username: 'aa',
          password: 'aa',
          nickname: '',
        };
      },
    });
    const button = wrapper.find('button');
    expect(button.element.disabled).toBeTruthy();
  });
});
