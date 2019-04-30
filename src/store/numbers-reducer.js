const initialState = { currentNumber: 42 };

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case 'RESET':
      return initialState;
    case 'CHANGE':
      return { currentNumber: Math.random() };
    default:
      return state;
  }
};
