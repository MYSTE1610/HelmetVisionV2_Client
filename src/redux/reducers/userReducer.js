const initialState = {
    instances: [],
    challans: [],
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_INSTANCES':
        return { ...state, instances: action.payload };
      case 'SET_CHALLANS':
        return { ...state, challans: action.payload };
      default:
        return state;
    }
  };
  
  export default userReducer;
  