const initialState = {
  posts: [],
  fetchedPosts: []
};

export const postReducer = (state = initialState, action) => {
   switch(action.type) {
      case CREATE_POST:
         return {...state}
      default: return state
   }
};