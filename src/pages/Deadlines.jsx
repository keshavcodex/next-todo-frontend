import Meter from "../component/Meter";
import data from "../Data";
function Deadlines() {
  return (
    <div>
      <Meter
        progress={data[6].progress + "%"}
        deadline={data[6].deadline + "%"}
      />
    </div>
  );
}

export default Deadlines;
