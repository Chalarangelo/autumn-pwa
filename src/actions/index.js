import { VIEW_ALL, SEARCH_POST, FETCH_POSTS } from '../constants';

export const viewAll = () => {
  return {
    type: VIEW_ALL
  }
}

export const searchPost = (query) => {
  return {
    type: SEARCH_POST,
    query
  }
}

export const fetchPosts = () => {
  const request = fetch("https://jsonbin.io/b/59f721644ef213575c9f6531");
  return {
    type: FETCH_POSTS,
    payload: request
  };
}
