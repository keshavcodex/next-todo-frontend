import "./Home.css";
import Card from "./Card";
import Data from "../Data";

function createCard(Data) {
  return (
    <div className="column">
      <Card
        key={Data.id}
        topic={Data.topic}
        img={Data.imgURL}
        progress={Data.progress}
        deadline={Data.deadline}
      />
    </div>
  );
}

export default function Home() {
  return <div className="">{Data.map(createCard)}</div>;
}
