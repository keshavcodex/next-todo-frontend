import { useState } from "react";
import "./Home.css";

function Home() {
  const [topic, setTopic] = useState("");

  function handleChange(event) {
    setTopic(event.target.value);
  }

  function handleClick(event) {
    setTopic(event.target.value);
    console.log(topic);
  }

  return (
    <div>
      <h1>Unable to track your Tasks?</h1>
      <h3>Don't worry we are here to help you...</h3>
      <h3>Click on add Task</h3>
    </div>
  );
}

export default Home;
