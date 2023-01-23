import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import "./Card.css";
import Meter from "./Meter";
import { Link } from "@mui/material";
import { useState } from "react";
// import Warning from "./Warning";
import EditData from "../utils/EditData";
import DeleteData from "../utils/DeleteData";

function MediaControlCard(props) {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [deleteData, setDeleteData] = useState({});

  const {id, name, img, progress, deadline } = props;
  const progressBar = progress + "%";
  const deadlineBar = deadline + "%";
  var deadlineColor = "#000";
  if (deadline > progress) {
    deadlineColor = "#ff0000";
  }

  // function deleteFunction(name) {
  //   console.log(name + " has been deleted(in log only, from card page)");
  //   DeleteUser(props);
  // }
  
  function editUser(name) {
    console.log(name + " has been edited(in log only, from card page)");
    EditData(props);
  }

  function openDelete(props) {
    setOpen(false);
    setDeleteData(props.id);
  }
  return (
    <div className="card">
      <Card sx={{ pb: 1.5 }}>
        <CardMedia
          height="240px"
          component="img"
          image={img}
          alt={name + " image"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="h6" component="span" fontSize="medium">
            Progress: <Meter progress={progressBar} color="#1bb089" />
          </Typography>
          <Typography variant="h6" component="div" fontSize="medium">
            Deadline: <Meter progress={deadlineBar} color={deadlineColor} />
          </Typography>
        </CardContent>

        <Stack direction="row" justifyContent={"space-around"}>
          <Link onClick={() => editUser(id)} to={"#"}>
            <Button
              sx={{ background: "#078262" }}
              variant="contained"
              size="small"
            >
              Edit
            </Button>
          </Link>
          <Link onClick={() => openDelete(props)} to={"#"}>
            <Button
              sx={{ background: "#078262" }}
              variant="contained"
              color="error"
            >
              Delete
            </Button>
          </Link>
        </Stack>
      </Card>
      {/* <Warning open={open} closeDialog={() => setOpen(false)} name={name} /> */}
    </div>
  );
}

export default MediaControlCard;
