import "./Warning.css";
// import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";
import { forwardRef } from "react";
import { Dialog, Fade, Button, Stack, DialogContent } from "@mui/material";
import { deleteData } from "../utils/DeleteData";

const Transition = forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props} />;
});
function Warning(open, closeDialog, title) {
  // function deleteData(){

  // }
  return (
    <Dialog open={open} onClose={closeDialog} TransitionComponent={Transition}>
      <DialogContent>
        <div class="cnfcard">
          <div class="cnfcontainer">
            <Stack direction="row" justifyContent={"space-around"}>
              <h2>Are you sure you want to delete {title}</h2>
            </Stack>
            <Stack direction="row" justifyContent={"space-around"}>
              <Button
                sx={{ fontWeight: "bold", fontSize: "20px" }}
                variant="outlined"
                onClick={closeDialog}
              >
                No
              </Button>

              <Button
                sx={{ fontWeight: "bold", fontSize: "20px" }}
                variant="outlined"
                color="error"
                onClick={deleteData}
              >
                Yes
              </Button>
            </Stack>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default Warning;
