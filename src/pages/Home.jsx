import "./Home.css";
import Card from "../component/Card";
import Data from "../Data";

function createCard(Data) {
  return (
    <div className="column">
      <Card
        key={Data.id}
        name={Data.name}
        img={Data.imgURL}
        progress={Data.progress}
        deadline={Data.deadline}
      />
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <div>{Data.map(createCard)}</div>
    </div>
  );
}
