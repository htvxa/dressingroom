const initialState = {
  topclothes: "",
  botclothes: "",
  shoes: "",
  handbags: "",
  necklaces: "",
  hairstyle: "",
  background: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_PRODUCT":
      
// action.payload.type = "topclothes" => state["topclothes"] = action.payload.img; => state.topclothes = action.payload.img;
// action.payload.type = "shoes" => state["shoes"] = action.payload.img;
      state[action.payload.type] = action.payload.img;
      return {...state};
    default:
      return state;
  }
};

export default reducer;

/**
 * 1. ở component ProductItem, nhấn nút thử dispatch action type "SELECT_PRODUCT"
 *  payload : {type: '', img: ''}
 * 2.reducer selecteProduct, xử lý action
 * 3.component Model, lấy selectedProducts xuống
 *
 */
