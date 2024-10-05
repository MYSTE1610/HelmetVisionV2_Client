const initialState = {
    user: null,
    loading: false,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_REQUEST':
        return { ...state, loading: true };
      case 'LOGIN_SUCCESS':
        return { ...state, loading: false, user: action.payload };
      case 'LOGIN_FAILURE':
        return { ...state, loading: false, error: action.payload };
      case 'REGISTER_REQUEST':
        return { ...state, loading: true };
      case 'REGISTER_SUCCESS':
        return { ...state, loading: false };
      case 'REGISTER_FAILURE':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default authReducer;
  