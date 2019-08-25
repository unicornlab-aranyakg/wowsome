const regionSelectionChangedType = "REGION_CHANGED";
const regionSelectionRealmChangedType = "REALM_CHANGED";
const characterNameChangedType = "CHARACTER_NAME_CHANGED";

const initialState = {
  type: "navbar-search",
  characterData: {},
  region: "eu",
  realm: "kilrogg",
  characterName: "alchemy",
  regionList: { option1: "eu", option2: "us" },
  realmList: { option1: "kilrogg", option2: "runetotem", option3: "nagrand" }
};

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
      fetch(url).then(results => {
        console.log(results.json());
      });
    } catch (E) {
      console.log(E.response);
    }
  },
  setRegionData: input => ({
    type: regionSelectionChangedType,
    payload: input
  }),
  setRealmData: input => ({
    type: regionSelectionRealmChangedType,
    payload: input
  }),
  setCharacterNameData: input => ({
    type: characterNameChangedType,
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
    default:
      return state;
  }
};
