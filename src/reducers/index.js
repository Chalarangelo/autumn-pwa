import { VIEW_ALL, SEARCH_POST, FETCH_POSTS } from '../constants';

// const readJson = jsonUrl => {
//   let result = null;
//   fetch(jsonUrl)
//   .then( response => response.json())
//   .then( data => {
//     result = data;
//   });
//   return result;
// }


const posts = (state = [], action) => {
  let posts = null;
  // state = null;
  // state = readJson("https://jsonbin.io/b/59f721644ef213575c9f6531");
  //state = [{id: 'a', text: 'b'}]
  // fetch("https://jsonbin.io/b/59f721644ef213575c9f6531")
  // .then(response => response.json())
  // .then( data => {
  //   state = data;
  //   console.log(state);
  //   // for (let post of data){
  //   //   //console.log(post.id);
  //   // }
  // });
  // console.log(state);
  // Get the JSON data here
  switch(action.type){
    case FETCH_POSTS:
      return [action.payload, ...state];
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
