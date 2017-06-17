import { combineReducers } from 'redux';

const posts = (state = [], action) => {
    return state;
};

const users = (state = [], action) => {
  return state;
};

const skgReact = combineReducers({
  posts,
});

export default skgReact;
