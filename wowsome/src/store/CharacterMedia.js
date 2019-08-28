export const initialMediaType = "MEDIA_NOT_RECEIVED";
export const postMediaType = "MEDIA_IS_RECEIVED";

const initialState = {
  type: initialMediaType,
  data: {},
  mediaUrl: "",
  isMediaReceived: false
};

export const actionCreators = {
  setMediaData: payload => async dispatch => {
    console.log("getState: ", "this: ", payload);
    /*
    if (startDateIndex === getState().weatherForecasts.startDateIndex) {
      // Don't issue a duplicate request (we already have or are loading the requested data)
      return;
    }
    */
    dispatch({ type: initialMediaType, payload });
  },
  setType: () => ({
    type: postMediaType,
    isMediaReceived: false
  })
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case initialMediaType:
      console.log(action);
      return Object.assign({}, state, {
        type: postMediaType,
        mediaUrl: action.payload,
        isMediaReceived: true
      });
    case postMediaType:
      return Object.assign({}, state, {
        type: initialMediaType,
        isMediaReceived: false
      });
    default:
      return state;
  }
};
