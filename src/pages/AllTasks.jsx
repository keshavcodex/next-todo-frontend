import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Meter from "../component/Meter";
import { getTasks, deleteTask } from "../service/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const AllTasks = () => {
  const [tasks, setTasks] = useState([]);
  var deadlineColor = "#000";
  useEffect(() => {
    getAllTasks();
  }, []);

  const getAllTasks = async () => {
    let response = await getTasks();
    // console.log(response.data);
    setTasks(response.data);
  };

  const deleteTaskDetails = async (id) => {
    await deleteTask(id);
    getAllTasks();
  };

  return (
    <div className="">
      {tasks.map((task) => (
        <div className="card">
          <div className="column">
            <Card sx={{ pb: 1.5 }}>
              <CardMedia
                height="240px"
                component="img"
                image={task.imgURL}
                alt={task.name + " image"}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {task.name}
                </Typography>
                <Typography variant="h6" component="span" fontSize="medium">
                  Progress: <Meter progress={task.progress} color="#1bb089" />
                </Typography>
                <Typography variant="h6" component="div" fontSize="medium">
                  Deadline:{" "}
                  <Meter progress={task.deadline} color={deadlineColor} />
                </Typography>
              </CardContent>

              <Stack direction="row" justifyContent={"space-around"}>
                <Button
                  sx={{ background: "#078262" }}
                  variant="contained"
                  size="small"
                  component={Link}
                  to={`/edit/${task._id}`}
                >
                  Edit
                </Button>
                <Button
                  sx={{ background: "#078262" }}
                  variant="contained"
                  color="error"
                  onClick={() => deleteTaskDetails(task._id)}
                >
                  Delete
                </Button>
              </Stack>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllTasks;
