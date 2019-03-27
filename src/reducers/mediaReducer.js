import { FETCH_MEDIA, SEARCH_MEDIA_LOCAL, SEARCH_MEDIA } from '../actions/types';

const initialState = {
  query: "",
  mediaList: {},
  filteredEntries: [],
  hasMoreData: true
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_MEDIA:
      return {
        ...state,
        hasMoreData: action.payload.hasMoreData,
        mediaList: { ...state.mediaList, ...action.payload.mediaList }
      };
    case SEARCH_MEDIA_LOCAL:
      return {
        ...state,
        // hasMoreData: action.payload.hasMoreData,
        query: action.payload.query
      };
    case SEARCH_MEDIA:
      return {
        ...state,
        // hasMoreData: action.payload.hasMoreData,
        mediaList: { ...state.mediaList, ...action.payload.mediaList }
      };
    default:
      return state;
  }
}
