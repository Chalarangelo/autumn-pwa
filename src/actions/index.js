import { VIEW_ALL, SEARCH_POST, UPDATE_POSTS } from '../constants';

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

export const updatePosts = (posts) => {
  return {
    type: UPDATE_POSTS,
    posts
  }
}
