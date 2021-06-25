import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import scr from "./spinner.gif";

const Details = () => {
  useEffect(() => {
    setLoading(true);
    getComment();
  }, []);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [comment, setComment] = useState({});

  async function getComment() {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/comments/${id}`
      );
      const data = await res.json();
      setComment(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  if (loading) {
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
  console.log(comment);
  return (
    <>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
      <center>
        <h2> Single Comment Page....</h2>
        {
          <>
            <h3>Name :</h3>
            <h3> {comment.name}</h3>
            <h4>E-mail:</h4>
            <h4> {comment.email}</h4>
            <h5>Body: </h5>
            <h5>{comment.body}</h5>
          </>
        }
      </center>
    </>
  );
};

export default Details;
