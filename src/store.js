import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from "./reducers"

const initialState = {
    // query: "",
}

// const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
const store = createStore(reducers, initialState, applyMiddleware(reduxThunk));

export default store;