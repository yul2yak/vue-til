import store from '@/store/index';

export function setInterceptors(instance) {
  instance.interceptors.request.use(
    function(config) {
      console.log(config);
      config.headers.Authorization = `Bearer ${store.state.token}`;
      return config;
    },
    function(error) {
      // 요청 오류가 있는 작업 수행
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    function(response) {
      // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
      // 응답 데이터가 있는 작업 수행
      return response;
    },
    function(error) {
      // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
      // 응답 오류가 있는 작업 수행
      return Promise.reject(error);
    },
  );

  return instance;
}
