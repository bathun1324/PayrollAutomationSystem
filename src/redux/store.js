import { createStore } from 'redux'
import { userSlice } from './slice';
const initialState = {
  sidebarShow: true,
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

const store = createStore(changeState)
export default store


// export default configureStore({

//   reducer: {
//     user: userSlice.reducer,

//   },

// })