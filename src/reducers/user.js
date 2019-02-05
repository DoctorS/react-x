import { SET_USER } from '../constants/ActionTypes'

const initialState = {
  email: localStorage && localStorage.email ? localStorage.email : ''
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      if (localStorage) localStorage.email = action.email
      return { ...state, email: action.email }
    default:
      return state
  }
}
