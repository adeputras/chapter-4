import React, { useContext, createContext, useReducer } from 'react';

/* Constants */
const SET_SAMPLE = 'SET_SAMPLE';

/* Context */
export const SampleContext = createContext();
export const SampleDispatchContext = createContext();

/* Initial State */
const initialState = {
  sample: false,
  test: 'ini test lagi'
};

/* Actions */
export const useSampleActions = (dispatch) => {
  const setSample = (data) => {
    dispatch({ type: SET_SAMPLE, sample: data });
  };

  return {
    setSample,
  };
};

/* Reducer */
export const sampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SAMPLE: {
      return {
        ...state,
        sample: action.sample,
      };
    }
    default: {
      return state;
    }
  }
};

/* Provider */
export const SampleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sampleReducer, initialState);
  return (
    <SampleContext.Provider value={state}>
      <SampleDispatchContext.Provider value={dispatch}>
        {children}
      </SampleDispatchContext.Provider>
    </SampleContext.Provider>
  );
};

/* Main Hook */
export const useSampleContext = () => {
  // const state = useContext(SampleContext);
  // return state.toObject();
  // console.log('state', typeof state)
  return useContext(SampleContext);
};
export const useSampleDispatchContext = () => useContext(SampleDispatchContext);
