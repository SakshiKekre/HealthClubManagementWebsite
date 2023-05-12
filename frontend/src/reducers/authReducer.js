const initialState = {
    userName: '',
    userRole: '',
    memberId: '',
    isLoggedIn: false
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          userName: action.payload.userName,
          userRole: action.payload.userRole,
          memberId: action.payload.memberId,
          isLoggedIn: true
        };
      case 'LOGOUT':
        return {
          ...state,
          userName: '',
          userRole: '',
          memberId: '',
          isLoggedIn: false
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  