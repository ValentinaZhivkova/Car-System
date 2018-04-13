import {initialState} from '../users/users.state';

import {ROUTES_CHANGE} from './core.actions';

export function coreReducer(state = initialState, action) {
  if (action.type === ROUTES_CHANGE) {
    return Object.assign({}, state, {
      message: null
    });
  } else {
    const result = action.result;
    if (result) {
      let message = result.message;
      const errors = result.errors;
      if (errors) {
        const keys = Object.keys(errors);
        if (keys.length > 0) {
          const firstKey = Object.keys(errors)[0];
          message = errors[firstKey];
        }
      }
      if (message) {
        return Object.assign({}, state, {message});
      }
    }
  }


  return state;
}
