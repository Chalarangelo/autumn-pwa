import { VIEW_ALL, SEARCH_POST } from '../constants';

const posts = (state = [], action) => {
  let posts = null;
  // Get the JSON data here
  switch(action.type){
    case VIEW_ALL:
      // Return all posts
      return posts;
    case SEARCH_POST:
      // Return posts matched in search
      return posts;
    default:
      return state;
  }
}

export default posts;
