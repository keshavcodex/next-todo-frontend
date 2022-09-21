import React, { Component } from "react";
import "./Home.css";

function Home() {
  return (
    <div className="blank">
      <span className="content">Confused about next task?</span>
      <span className="content-small">
        Don’t worry we are here to help you.
      </span>
      <form className="box">
        <input type="text" name="name" />
        <button type="submit" class="btn btn-outline-success" v value="submit">
          Add Topic
        </button>
      </form>
    </div>
  );
}
export default Home;
