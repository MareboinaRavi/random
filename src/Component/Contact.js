import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import scr from "./spinner.gif";
import "./Contact.css";
import getAllContacts, {
  getSingleContact,
  deleteContact,
} from "../redux/actions/contacts-action";
import AddEditContact from "./AddEditContact";
const Contact = ({
  getAllContacts,
  contacts,
  contact,
  getSingleContact,
  deleteContact,
  value,
}) => {
  // console.log(typeof contacts[0]);
  useEffect(() => {
    // fetchData();
    getAllContacts();
  }, [getAllContacts]);
  const handleDelete = (index) => {
    const isTrue = window.confirm("Are you Sure to delete");
    if (isTrue) {
      deleteContact(index);
      // console.log("item deleed");
      console.log(contact);
    }
  };
  let users = useSelector((state) => state.isLoading);
  // console.log(users);

  if (users) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "white",
        }}
      >
        <img
          src={scr}
          alt="loading...."
          style={{
            width: "500px",
            height: "500px",
            margin: "auto",
            display: "block",
            background: "white",
          }}
        />
      </div>
    );
  }
  return (
    <div>
      <div className="container d-flex flex-row justify-content-between mt-4">
        <h1>All Contacts</h1>
        <button
          className="btn btn-danger"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          +Add Contact
        </button>
      </div>
      {/* //table container */}
      <div className="mt-4">
        {contacts.filter((val) =>
          val.name.toLowerCase().includes(value.toLowerCase())
        ).length === 0 && (
          <h3 className="text-danger text-center">No Contacts available</h3>
        )}
        {contacts.filter((val) =>
          val.name.toLowerCase().includes(value.toLowerCase())
        ).length > 0 && (
          <table className="table table-info">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>E-mail</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts
                .filter((val) =>
                  val.name.toLowerCase().includes(value.toLowerCase())
                )
                .map((person, index) => (
                  <tr className="table-dark" key={index + new Date().getTime()}>
                    <td>{index + 1}</td>
                    <Link className="link" to={`/details/${person.id}`}>
                      <td>{person.name}</td> &nbsp;&nbsp;&nbsp;
                      {/* <td>{person.pno}</td> */}
                      <td>{person.email}</td>
                    </Link>
                    <td>
                      <>
                        <button
                          className="btn btn-secondary"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onClick={() => getSingleContact(index)}
                        >
                          Edit
                        </button>
                        &nbsp;
                        <button
                          className="btn btn-success"
                          onClick={() => handleDelete(index)}
                        >
                          Delete
                        </button>
                      </>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <AddEditContact editContactData={contact} />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
    contact: state.contact,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // fetchData: () => dispatch(fetchData()),
    getAllContacts: () => dispatch(getAllContacts()),
    getSingleContact: (index) => dispatch(getSingleContact(index)),
    deleteContact: (index) => dispatch(deleteContact(index)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Contact);
