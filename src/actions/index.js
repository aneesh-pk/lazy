import { FETCH_MEDIA, SEARCH_MEDIA_LOCAL, SEARCH_MEDIA } from './types';
import store from "../store";
import _ from "lodash";

export const fetchMedia = (postData) => dispatch => {
  let url = (process.env.REACT_APP_API_URL + "get-media");
  console.log("fetching...");
  fetch(url, {
    // mode: "cors", // no-cors, cors, *same-origin
    // credentials: "same-origin", // include, *same-origin, omit
    method: "POST",
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      "content-Type": "application/json"
    },
    body: JSON.stringify(postData), // body data type must match "Content-Type" header
  })
    .then(response => response.json()) // parses JSON response into native Javascript objects 
    .then(res => fromatFetchResponse(res))
    .then(res => dispatch({ type: FETCH_MEDIA, payload: res }))
    .catch(res => null);
};

export const searchMediaLocal = (query) => dispatch => {
  dispatch({ type: SEARCH_MEDIA_LOCAL, payload: { query: query, hasMoreData: false} })
};

export const searchMedia = () => dispatch => {
  let query = store.getState().media.query;

  let url = (process.env.REACT_APP_API_URL + "search-media");
  let postData = {
    "title": "Romantic Comedy",
    "query_string": query
  }
  console.log("searching...");
  fetch(url, {
    // mode: "cors", // no-cors, cors, *same-origin
    // credentials: "same-origin", // include, *same-origin, omit
    method: "POST",
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      "content-Type": "application/json"
    },
    body: JSON.stringify(postData), // body data type must match "Content-Type" header
  })
    .then(response => response.json()) // parses JSON response into native Javascript objects 
    .then(res => fromatSearchResponse(res))
    .then(res => dispatch({ type: SEARCH_MEDIA, payload: res }))
    .catch(res => null);
}


const fromatFetchResponse = (mediaData) => {
  let hasMoreData = true;
  let tmpMediaList = {};
  if (mediaData["page-size-returned"] < mediaData["page-size-requested"]) {
    hasMoreData = false;
  }
  if (mediaData && mediaData["content-items"] && mediaData["content-items"].content && mediaData["content-items"].content.length > 0) {
    tmpMediaList = _.cloneDeep(store.getState().media.mediaList);
    mediaData["content-items"].content.map((entry) => {
      if (typeof tmpMediaList[entry._id] == "undefined") {
        tmpMediaList[entry._id] = entry;
      }
      return tmpMediaList;
    });
  }
  return ({
    hasMoreData: hasMoreData,
    mediaList: tmpMediaList
  })
}

const fromatSearchResponse = (searchData) => {
  let tmpMediaList = {};
  if (searchData && searchData["content-items"] && searchData["content-items"].content && searchData["content-items"].content.length > 0) {
    tmpMediaList = _.cloneDeep(store.getState().media.mediaList);
    searchData["content-items"].content.map((entry) => {
      if (typeof tmpMediaList[entry._id] == "undefined") {
        tmpMediaList[entry._id] = entry;
      }
      return tmpMediaList;
    });
  }
  return ({
    hasMoreData: false,
    mediaList: tmpMediaList
  })
}
