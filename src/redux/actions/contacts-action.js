import axios from "axios";
import { FETCH_API_REQUEST, FETCH_FAIL, FETCH_SUCCESS } from "./action-types";

const getAllContacts = () => {
  return {
    type: "GET_ALL_CONTACTS",
  };
};
export default getAllContacts;
export const addContact = (contact) => {
  return {
    type: "ADD_CONTACT",
    payload: contact,
  };
};
export const editContact = (contact, id) => {
  return {
    type: "EDIT_CONTACT",
    payload: contact,
    id,
  };
};
export const deleteContact = (id) => {
  return {
    type: "DELETE_CONTACT",
    id,
  };
};
export const getSingleContact = (index) => {
  return {
    type: "GET_SINGLE_CONTACT",
    index,
  };
};
export const fetchApiRequest = () => {
  return {
    type: FETCH_API_REQUEST,
  };
};
export const fetchSuccess = (myData) => {
  return {
    type: FETCH_SUCCESS,
    data: myData,
  };
};
export const fetchFail = (error) => {
  return {
    type: FETCH_FAIL,
    data: error,
  };
};

export const fetchData = () => {
  return function (dispatch) {
    dispatch(fetchApiRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        const contacts = response.data;
        dispatch(fetchSuccess(contacts));
      })
      .catch((error) => {
        dispatch(fetchFail(error));
      });
  };
};
