import axios from "axios";
import qs from "qs";
//Set initial state
const initialState = {
  type: "OAuth",
  client_ID: "dd9e09fec1fa4dbea73cbef04c07d857",
  cient_Key: "zhnWVw9EJY0XEdqDRvpOT0qxNEBimQ5K",
  access_token: ""
};

export const actionCreators = {
  requestAccessTokenFromBlizzardAPI: () => async dispatch => {
    try {
      const CLIENT_ID = "dd9e09fec1fa4dbea73cbef04c07d857";
      const CLIENT_SECRET = "zhnWVw9EJY0XEdqDRvpOT0qxNEBimQ5K";
      await axios
        .request({
          url: "/oauth/token",
          method: "post",
          baseURL: encodeURI("https://us.battle.net/"),
          headers: {
            Authorization: "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET)
          },
          data: qs.stringify({
            grant_type: "client_credentials"
          })
        })
        .then(response => {
          dispatch({
            type: "OAuth",
            access_token: response.data.access_token
          });
        });
    } catch (error) {
      console.log(error.response);
    }
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "OAuth":
      return Object.assign({}, state, {
        access_token: action.access_token
      });
    default:
      return state;
  }
};
