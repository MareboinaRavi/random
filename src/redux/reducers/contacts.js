import {
  FETCH_API_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAIL,
} from "../actions/action-types";

const initialContacts = {
  contacts: [],
  error: "",
  isLoading: false,
  contact: {},
};
const contactsReducer = (state = initialContacts, action) => {
  switch (action.type) {
    case "GET_ALL_CONTACTS":
      return { ...state };
    case "ADD_CONTACT": {
      let contacts = [...state.contacts];
      contacts.push(action.payload);
      return { ...state, contacts };
    }
    case "EDIT_CONTACT": {
      let contacts = [...state.contacts];
      contacts[action.id] = action.payload;
      return { ...state, contacts };
    }
    case "DELETE_CONTACT": {
      let contacts = [...state.contacts];
      contacts.splice(action.id, 1);
      return { ...state, contacts };
    }
    case "GET_SINGLE_CONTACT":
      return {
        ...state,
        contact: {
          ...state.contacts[action.index],
          id: action.index,
        },
      };
    case FETCH_API_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_SUCCESS:
      return { ...state, contacts: action.data, isLoading: false, error: "" };
    case FETCH_FAIL:
      return { ...state, contacts: [], isLoading: false, error: action.data };
    default:
      return state;
  }
};

export default contactsReducer;
