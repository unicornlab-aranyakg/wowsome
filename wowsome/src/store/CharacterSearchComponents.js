const initialStateType = "CHAR::INITIAL_STATE";
const regionSelectionChangedType = "REGION_CHANGED";
const regionSelectionRealmChangedType = "REALM_CHANGED";
const characterNameChangedType = "CHARACTER_NAME_CHANGED";
const characterDataReceivedType = "CHARACTER_DATA_RECEIVED";
const characterMediaReceivedType = "MEDIA_IS_RECEIVED";

export const initialState = {
  type: initialStateType,
  isLoaded: false,
  isTyping: true,
  data: {},
  mediaData: {},
  region: "eu",
  realm: "kilrogg",
  characterName: "alchemy",
  regionList: { option1: "eu", option2: "us" },
  realmList: { option1: "kilrogg", option2: "runetotem", option3: "nagrand" }
};
/*
  Using https://cors-anywhere.herokuapp.com/ to get around CORS.
  Building up the url
  Make a request and get the data. ToDo: Save data.
  set methods are used to save data to store whenever user changes any input on the navbar.
*/
export const actionCreators = {
  getCharacterData: input => async dispatch => {
    console.log("INPUT", input);
    try {
      const url =
        "https://cors-anywhere.herokuapp.com/https://eu.api.blizzard.com/profile/wow/character/" +
        input.CharacterSearchComponents.realm +
        "/" +
        input.CharacterSearchComponents.characterName +
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
          return json;
        })
        .then(function(json) {
          //Seconday calls here
          input.getCharacterMediaData(json, input.OAuth.access_token);
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
  getCharacterMediaData: (input, token) => async dispatch => {
    const mediaUrl = input.media.href;
    const accessToken = "&access_token=" + token;
    const myUrl = mediaUrl + accessToken;
    let promise = await fetch(myUrl);
    let json = await promise.json();
    //console.log("Media url", myUrl, "JSON: ", json);
    dispatch({
      type: characterMediaReceivedType,
      payload: json
    });
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case regionSelectionChangedType:
      return Object.assign({}, state, {
        region: action.payload,
        isTyping: true
      });
    case regionSelectionRealmChangedType:
      return Object.assign({}, state, {
        realm: action.payload,
        isTyping: true
      });
    case characterNameChangedType:
      return Object.assign({}, state, {
        characterName: action.payload,
        isTyping: true
      });
    case characterDataReceivedType:
      return Object.assign({}, state, {
        data: action.payload.response,
        isLoaded: action.payload.isLoaded,
        isTyping: false
      });
    case characterMediaReceivedType:
      return Object.assign({}, state, {
        mediaData: action.payload,
        type: characterDataReceivedType
      });
    default:
      return state;
  }
};