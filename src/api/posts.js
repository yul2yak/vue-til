import { postInstance } from '@/api/index';
// 학습 노트 데이터를 조회하는 API
function fetchPosts() {
  return postInstance.get();
}

// 학습 노트 데이터를 생성하는 API
function createPost(postData) {
  return postInstance.post('', postData);
}

export { fetchPosts, createPost };
