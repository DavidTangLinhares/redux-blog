export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';

const ROOT_URL = 'https://dummyjson.com/posts';

export function fetchPosts() {
  const promise = fetch(ROOT_URL).then((response) => response.json());
  return {
    type: FETCH_POSTS,
    payload: promise
  };
}

export function fetchPost(id) {
  const promise = fetch(`${ROOT_URL}/${id}`).then((response) => response.json());
  return {
    type: FETCH_POST,
    payload: promise
  };
}
