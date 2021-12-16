import { createReducer, combineReducers } from "@reduxjs/toolkit";

import actions from "./actions";

const entities = createReducer([], {
  [actions.getHotdogsSuccess]: (state, action) => action.payload,
  [actions.getOneHotdogSuccess]: (state, action) => action.payload,
  [actions.addHotdogSuccess]: (state, action) => {
    return [...state, action.payload];
  },
  [actions.updateHotdogSuccess]: (state, action) => {
    return state.map((hotdog) =>
      hotdog.id === action.payload.id ? action.payload : hotdog
    );
  },
  [actions.deleteHotdogSuccess]: (state, action) => {
    return state.filter((hotdog) => hotdog.id !== action.payload);
  },
});

const loading = createReducer(false, {
  [actions.getHotdogsRequest]: () => true,
  [actions.getHotdogsSuccess]: () => false,
  [actions.getHotdogsError]: () => false,
  [actions.getOneHotdogRequest]: () => true,
  [actions.getOneHotdogSuccess]: () => false,
  [actions.getOneHotdogError]: () => false,
  [actions.addHotdogRequest]: () => true,
  [actions.addHotdogSuccess]: () => false,
  [actions.addHotdogError]: () => false,
  [actions.updateHotdogRequest]: () => true,
  [actions.updateHotdogSuccess]: () => false,
  [actions.updateHotdogError]: () => false,
  [actions.deleteHotdogRequest]: () => true,
  [actions.deleteHotdogSuccess]: () => false,
  [actions.deleteHotdogError]: () => false,
});

export default combineReducers({
  entities,
  loading,
});
