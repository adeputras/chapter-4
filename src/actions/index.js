import Axios from 'axios';
import { queryData } from '../helper';

export const getCars = (url, params) => async (dispatch) => {
  dispatch({type: "FETCH_CARS_PENDING"})
  try {
    const response = await Axios.get(`${url}/customer/v2/car?${queryData(params)}`)
    const payload = response.data
    dispatch({type: "FETCH_CARS_SUCCESS", payload})
  } catch (error) {
    throw error;
  }
};

export const getDetailCar = (url, id) => async (dispatch) => {
  dispatch({type: "FETCH_DETAIL_CAR_PENDING"})
  try {
    const response = await Axios.get(`${url}/customer/car/${id}`)
    const payload = response.data
    dispatch({type: "FETCH_DETAIL_CAR_SUCCESS", payload})
  } catch (error) {
    throw error;
  }
};
