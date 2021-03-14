//khởi tạo giá trị ban đầu của state
const initialState = [
  { tabName: "tabTopClothes", showName: "Áo", type: "topclothes" },
  { tabName: "tabBotClothes", showName: "Quần", type: "botclothes" },
  { tabName: "tabShoes", showName: "Giày dép", type: "shoes" },
  { tabName: "tabHandBags", showName: "Túi xách", type: "handbags" },
  { tabName: "tabNecklaces", showName: "Dây chuyền", type: "necklaces" },
  // { tabName: 'tabModels', showName: 'Người mẫu', type: 'models' },
  { tabName: "tabHairStyle", showName: "Kiểu tóc", type: "hairstyle" },
  { tabName: "tabBackground", showName: "Nền", type: "background" },
];

//reducer là một function, nhận vào 2 tham số
/**
 *
 * @param {*} state : giá trị hiện của dữ liệu reducer đang quản lý (state chính là categories)
 * @param {*} action : hành động từ component gửi lên
 */
// reducer sẽ tiếp nhận action, chỉnh sửa state, return state mới sau khi chỉnh sửa
const cateReducer = (state = initialState, action) => {
  return state;
};

export default cateReducer