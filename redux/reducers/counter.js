const initialState = {
  result: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, result: +action.angka1 + +action.angka2 };
    case "SUBTRACTION":
      return { ...state, result: action.angka1 - action.angka2 };
    case "MULTIPLICATION":
      return { ...state, result: action.angka1 * action.angka2 };
    case "DIVISION":
      return { ...state, result: action.angka1 / action.angka2 };
    default:
      return state;
  }
};

export default reducer;
