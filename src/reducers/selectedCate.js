const initialState = "topclothes";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_CATEGORY": {
      //logic xử lý action
      state = action.payload;
      return state;
    }
    default:
      return state;
  }
};

export default reducer;
