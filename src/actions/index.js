import { FETCH_MEDIA, SEARCH_MEDIA } from './types';

// export const fetchMedia = (url, postData) => async dispatch => {
//   console.log("fetching...");
//   let res = fetch(url, {
//     // mode: "cors", // no-cors, cors, *same-origin
//     // credentials: "same-origin", // include, *same-origin, omit
//     method: "POST",
//     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//     headers: {
//       "content-Type": "application/json",
//     },
//     body: JSON.stringify(postData), // body data type must match "Content-Type" header
//   })
//     .then(response => response.json()) // parses JSON response into native Javascript objects 
//     .catch(err => null);
//   dispatch({ type: FETCH_MEDIA, payload: res })
// };

export function fetchMedia(url, postData) {
  console.log("fetching...");
  console.log(url);
  return function (dispatch) {
    return dispatch({ type: FETCH_MEDIA, payload: { test: "hai" } });
  }
}
