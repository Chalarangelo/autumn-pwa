import { VIEW_ALL, SEARCH_POST } from '../constants';

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
