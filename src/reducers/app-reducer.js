const initialState = {
  environment: 'dev'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SITE':
      return { ...state, site: action.payload };
    default:
      return state;
  }
};