export const simpleReducer = ( state = {loading: true,data: []} ,action) => {
  switch (action.type) {
    case 'FETCH_SIMPLE_PENDING':
      return {
        ...state,
        data: [],
        loading: true,
      };
    case 'FETCH_SIMPLE_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    default:
      return state;
  }
};