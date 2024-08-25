// store/someReducer.js
const initialState = {
  date:'Jan_2023'
};

const chartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHART_DATA_CHANGE':
      return{
        ...state,
        date:action.payload
      }
    // Define your action handlers here
    default:
      return state;
  }
};

export default chartReducer;
