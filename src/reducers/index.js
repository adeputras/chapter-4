import { combineReducers } from 'redux';
// import simpleReducer from './simpleReducer';

const listCarsReducer = ( state = {loading: false, data: [], emptyData: false} ,action) => {
  switch (action.type) {
    case 'FETCH_CARS_PENDING':
      return {
        ...state,
        data: [],
        loading: true,
        emptyData: false
      };
    case 'FETCH_CARS_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload.cars,
        emptyData: action.payload.cars.length > 0 ? false : true,
      };
    default:
      return state;
  }
};
const detailCarReducer = ( state = {loading: false, data: {}} ,action) => {
  switch (action.type) {
    case 'FETCH_DETAIL_CAR_PENDING':
      return {
        ...state,
        data: {},
        loading: true,
      };
    case 'FETCH_DETAIL_CAR_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
};

// const sampleBReducer = ( state = {loading: true,data: []} ,action) => {
//   switch (action.type) {
//     case 'FETCH_SAMPLE_B_PENDING':
//       return {
//         ...state,
//         data: [],
//         loading: true,
//       };
//     case 'FETCH_SAMPLE_B_SUCCESS':
//       return {
//         ...state,
//         loading: false,
//         data: action.payload.data,
//       };
//     default:
//       return state;
//   }
// };

export default combineReducers({
  // sampleA: sampleAReducer,
  // sampleB: sampleBReducer,
  cars: listCarsReducer,
  detailCar: detailCarReducer
});