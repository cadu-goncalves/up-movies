const initialState = { items: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case 'Movie/UPDATE':
      return {
        ...state,
        items: action.items
      };
    default:
      return state;
  }
};
