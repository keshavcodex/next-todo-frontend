import React from "react";
import "./Tasks.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import networkImg from "../images/cn.jpg";
import k8s from "../images/k8s.png";
import dsa from "../images/dsa.jpg";

function MediaControlCard(props) {
  const {img, topic} = props

  return (
    <Card sx={{ maxWidth: 300, m: 1, pb: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {topic}
        </Typography>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          color="text.secondary"
        >
          Work Meter:
        </Typography>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          color="text.secondary"
        >
          Deadline Meter:
        </Typography>
      </CardContent>

      <Stack direction="row" justifyContent={"space-around"}>
        <Button variant="contained" size="small">
          Edit
        </Button>

        <Button variant="contained" component="label">
          Upload
          <input hidden accept="image/*" multiple type="file" />
        </Button>
      </Stack>
    </Card>
  );
}

export default function Tasks() {
  return (
        <div className="">
          <MediaControlCard img={networkImg} topic="Computer Networks"/>
          <MediaControlCard img={dsa} topic="Data Structure and Algorithm"/>
          <MediaControlCard img={k8s} topic="Kubernetes"/>
    </div>
  );
}
