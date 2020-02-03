import { CHANGE_SLUG } from './constants';

// The initial state of the App
const initialState = {
  slug: '',
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SLUG:
      return { ...state, slug: action.slug };
    default:
      return state;
  }
}

export default homeReducer;
