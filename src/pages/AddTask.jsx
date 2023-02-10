import { useState } from "react";
import "./AddTask.css";
import { addTask } from "../service/api";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  styled,
  Typography,
  Button,
} from "@mui/material";

const CustomBtn = styled(Button)({
  fontSize: 16,
  padding: "6px 12px",
  margin: "2% auto",
  lineHeight: 1.5,
  backgroundColor: "#1bb089",
  color: "black",
  transition: ".3s",

  "&:hover": {
    backgroundColor: "#1bb089",
    boxShadow: "0 4px 8px 0 rgb(3, 92, 70)",
  },
});

const defaultValue = {
  name: "",
  imgURL: "",
  progress: "",
  deadline: "",
};

const Container = styled(FormGroup)`
  margin: 1% auto 0;
  & > div {
    margin-top: 10px;
  }
`;

function AddTask() {
  const [task, setTask] = useState(defaultValue);
  const navigate = useNavigate();

  const onValueChange = (e) => {
    // we are using "...task" so that new parameter gets append into it
    var settingTask = { ...task, [e.target.name]: e.target.value };

    setTask(settingTask);
  };

  const addTaskDetails = async () => {
    var photo = "https://source.unsplash.com/random?" + task.name;
    if (task.imgURL === "") {
      // console.log(task.imgURL);
      task.imgURL = photo;
    }
    await addTask(task);
    navigate("/");
  };

  return (
    <Container className="fullscreen">
      <Typography variant="h4">Add Task</Typography>
      <FormControl>
        <InputLabel>Title</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" />
      </FormControl>
      <FormControl>
        <InputLabel>Image Link</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="imgURL"
          placeholder="(optional)"
        />
      </FormControl>
      <FormControl>
        <InputLabel>Current Progress</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="progress"
          type="number"
          inputProps={{ min: 0, max: 100 }}
          placeholder="0 to 100"
        />
      </FormControl>
      <FormControl>
        <InputLabel>Total required work</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="deadline"
          type="number"
          inputProps={{ min: 0, max: 100 }}
          placeholder="0 to 100"
        />
      </FormControl>
      <FormControl>
        <CustomBtn onClick={() => addTaskDetails()}>Add Task</CustomBtn>
      </FormControl>
    </Container>
  );
}

export default AddTask;
