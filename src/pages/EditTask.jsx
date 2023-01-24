import { useState, useEffect } from "react";
import "./AddTask.css";
import { editTask, getTask } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";

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
  pediting: "6px 12px",
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

function EditTask() {
  const [task, setTask] = useState(defaultValue);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    loadTaskDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const loadTaskDetails = async () => {
    const response = await getTask(id);
    console.log(response);
    setTask(response.data[0]);
  };

  
  const onValueChange = (e) => {
    // we are using "...task" so that new parameter gets append into it
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const editTaskDetails = async () => {
    await editTask(task, id);
    navigate("/");
  };

  return (
    <Container className="fullscreen">
      <Typography variant="h4">Edit Task</Typography>
      <FormControl>
        <InputLabel>Title</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={task.name}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Image Link</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="imgURL"
          value={task.imgURL}
          placeholder="(optional)"
        />
      </FormControl>
      <FormControl>
        <InputLabel>Current Progress</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="progress"
          value={task.progress}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Total required work</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="deadline"
          value={task.deadline}
        />
      </FormControl>
      <FormControl>
        <CustomBtn onClick={() => editTaskDetails()}>Edit Task</CustomBtn>
      </FormControl>
    </Container>
  );
}

export default EditTask;
