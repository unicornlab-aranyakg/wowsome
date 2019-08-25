const regionSelectionChangedType = "REGION_CHANGED";
const regionSelectionRealmChangedType = "REALM_CHANGED";
const characterNameChangedType = "CHARACTER_NAME_CHANGED";
const characterDataReceivedType = "CHARACTER_DATA_RECEIVED";

const initialState = {
  type: "navbar-search",
  characterData: {},
  region: "eu",
  realm: "kilrogg",
  characterName: "alchemy",
  regionList: { option1: "eu", option2: "us" },
  realmList: { option1: "kilrogg", option2: "runetotem", option3: "nagrand" },
  isLoaded: false
};
/*
  Using https://cors-anywhere.herokuapp.com/ to get around CORS.
  Building up the url
  Make a request and get the data. ToDo: Save data.
  set methods are used to save data to store whenever user changes any input on the navbar.
*/
export const actionCreators = {
  getCharacterData: input => async dispatch => {
    try {
      const url =
        "https://cors-anywhere.herokuapp.com/https://eu.api.blizzard.com/profile/wow/character/" +
        input.Navbar.realm +
        "/" +
        input.Navbar.characterName +
        "?namespace=profile-eu&locale=en_US&access_token=" +
        input.OAuth.access_token;
      console.log(url);
      fetch(url)
        .then(function(results) {
          return results.json();
        })
        .then(function(json) {
          if (json.code === 404) {
            dispatch({
              type: characterDataReceivedType,
              payload: {
                response: "This character does not exists!",
                isLoaded: false
              }
            });
          } else {
            dispatch({
              type: characterDataReceivedType,
              payload: { response: json, isLoaded: true }
            });
          }
        });
    } catch (E) {
      console.log("ERROR: ", E.response);
      dispatch({
        type: characterDataReceivedType,
        payload: { response: "Something went wrong!", isLoaded: true }
      });
    }
  },
  setRegionData: input => ({
    type: regionSelectionChangedType,
    payload: input.toLowerCase()
  }),
  setRealmData: input => ({
    type: regionSelectionRealmChangedType,
    payload: input.toLowerCase()
  }),
  setCharacterNameData: input => ({
    type: characterNameChangedType,
    payload: input.toLowerCase()
  }),
  setCharacterData: input => ({
    type: characterDataReceivedType,
    payload: input
  })
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case regionSelectionChangedType:
      return Object.assign({}, state, { region: action.payload });
    case regionSelectionRealmChangedType:
      return Object.assign({}, state, { realm: action.payload });
    case characterNameChangedType:
      return Object.assign({}, state, { characterName: action.payload });
    case characterDataReceivedType:
      return Object.assign({}, state, {
        characterData: action.payload.response,
        isLoaded: action.payload.isLoaded
      });
    default:
      return state;
  }
};
