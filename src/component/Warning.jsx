import "./Warning.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
function Warning() {
  return (
    <div class="cnfcard">
      <div class="cnfcontainer">
        <Stack direction="row" justifyContent={"space-around"}>
        <h2>Delete this card?</h2>
        </Stack>
        <Stack direction="row" justifyContent={"space-around"}>
          <Button
            sx={{ fontWeight: "bold", fontSize:"20px" }}
            variant="outlined"
            
          >
            No
          </Button>

          <Button
            sx={{ fontWeight: "bold", fontSize:"20px" }}
            variant="outlined"
            color="error"
          >
            Yes
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default Warning;
