import React, { useContext, createContext, useReducer } from 'react';
import Axios from 'axios';
import { queryData } from '../helper';

/* Constants */
const FETCH_CARS_PENDING = 'FETCH_CARS_PENDING';
const FETCH_CARS_SUCCESS = 'FETCH_CARS_SUCCESS';

/* Context */
export const CarsContext = createContext();
export const CarsDispatchReducer = createContext();

/* Initial State */
const initialState = {
  loading: false,
  cars: [],
  emptyData: false,
};

/* Provider */
export const CarsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(listCarsReducer, initialState);
  return (
    <CarsContext.Provider value={state}>
      <CarsDispatchReducer.Provider value={dispatch}>
        {children}
      </CarsDispatchReducer.Provider>
    </CarsContext.Provider>
  );
};

/* Actions */
export const useCarsActions = (dispatch) => {
  const getCars = async (url, params) =>  {
    dispatch({ type: FETCH_CARS_PENDING });
    try {
      const response = await Axios.get(
        `${url}/customer/v2/car?${queryData(params)}`
      );
      const payload = response.data;
      dispatch({ type: FETCH_CARS_SUCCESS, payload });
    } catch (error) {
      throw error;
    }
  };
  return {
    getCars,
  };
};

/* Reducer */
export const listCarsReducer = ( state = initialState ,action) => {
  switch (action.type) {
    case FETCH_CARS_PENDING:
      return {
        ...state,
        cars: [],
        loading: true,
        emptyData: false
      };
    case FETCH_CARS_SUCCESS:
      return {
        ...state,
        loading: false,
        cars: action.payload.cars,
        emptyData: action.payload.cars.length > 0 ? false : true,
      };
    default:
      return state;
  }
};

/* Custom Hook */
export const useCarsContext = () => {
  return useContext(CarsContext);
};
export const useCarsDispatchContext = () => useContext(CarsDispatchReducer);
