import { shallowMount } from '@vue/test-utils';
import LoginForm from '@/components/LoginForm.vue';

describe('LoginForm.vue', () => {
  test('ID가 이메일 형식이 아니면 경고 메시지가 출력된다', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test',
        };
      },
    });
    const warningText = wrapper.find('.warning');
    expect(warningText.exists()).toBe(true);
  });

  test('ID는 이메일 형식이어야 한다', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test',
        };
      },
    });
    const idInput = wrapper.find('#username');
    console.log(idInput.element.value);
    console.log(wrapper.vm.isUsernameValid);
  });

  test('컴포넌트가 마운팅되면 username이 존재하고 초기 값으로 설정되어 있어야 한다', () => {
    const wrapper = shallowMount(LoginForm);
    expect(wrapper.vm.username).toBe('');
  });

  test('ID와 PW가 입력되지 않으면 로그인 버튼이 비활성화 되어야 한다', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'xxx@aa',
          password: 'xxx',
        };
      },
    });
    const button = wrapper.find('button');
    expect(button.element.disabled).toBeTruthy();
  });
});
