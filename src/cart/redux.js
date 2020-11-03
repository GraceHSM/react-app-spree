// actions
const OPEN = 'cart/OPEN';
const CLOSE = 'cart/CLOSE';

const initCartState = {
  isOpen: false,
  display_total: '$0',
  item_count: 0
}

//reducer
const reducer = (state = initCartState, action) => {
  switch (action.type) {
    case OPEN: {
      return {
        ...state,
        isOpen: true,
      }
    }
    case CLOSE: {
      return {
        ...state,
        isOpen: false,
      }
    }
    default:
      return state
  }
}

export default reducer;

// action creator
export const toggleList = (isOpen) => {
  if (isOpen) {
    return { type: CLOSE, }
  } else {
    return { type: OPEN, }
  }
}
