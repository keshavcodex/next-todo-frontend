import React, { Component } from "react";
import "./Home.css";

function Home() {
  return (
    <div className="blank">
      <span className="content">Confused about next task?</span>
      <span className="content-small">
        Don’t worry we are here to help you.
      </span>
      {/* <form className="box"> */}
      <form action="../../post" method="post" className="box">
        <input type="text" name="newTopic" />
        <button
          type="submit"
          onSubmit={createTopic()}
          class="btn btn-outline-success"
          value="submit"
        >
          Add Topic
        </button>
      </form>
    </div>
  );
}

function createTopic(event) {
  console.log(event);
}

export default Home;
