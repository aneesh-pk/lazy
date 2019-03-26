import { FETCH_MEDIA, SEARCH_MEDIA } from '../actions/types';

const initialState = {
  // mediaList: {},
  // filteredEntries: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_MEDIA:
      console.log("triggered action");
      return {
        ...state,
        mediaList: action.payload
      };
    default:
      return state;
  }
}
