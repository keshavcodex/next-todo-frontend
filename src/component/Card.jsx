import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import "./Card.css";
import Meter from "./Meter";

function MediaControlCard(props) {
  const { img, topic, progress, deadline } = props;
  const progressBar = progress + "%";
  const deadlineBar = deadline + "%";
  var deadlineColor = "#000";
  if (deadline > progress) {
    deadlineColor = "#ff0000";
  }
  return (
    <div className="card">
      <Card sx={{ pb: 1.5 }}>
        <CardMedia
          height="240px"
          component="img"
          image={img}
          alt={topic + " image"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {topic}
          </Typography>
          <Typography variant="h6" component="span" fontSize="medium">
              Progress: <Meter progress={progressBar} color="#1bb089" />
          </Typography>
          <Typography variant="h6" component="div" fontSize="medium">
            Deadline: <Meter progress={deadlineBar} color={deadlineColor} />
          </Typography>
        </CardContent>

        <Stack direction="row" justifyContent={"space-around"}>
          <Button
            sx={{ background: "#078262" }}
            variant="contained"
            size="small"
          >
            Edit
          </Button>

          <Button
            sx={{ background: "#078262" }}
            variant="contained"
            color="error"
          >
            Delete
          </Button>
        </Stack>
      </Card>
    </div>
  );
}

export default MediaControlCard;
