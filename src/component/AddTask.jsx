import { useState } from "react";
import "./AddTask.css";
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
  username: "",
  email: "",
  phone: "",
};

const Container = styled(FormGroup)`
  ${'' /* width: 33%; */}
  margin: 1% auto 0;
  & > div {
    margin-top: 10px;
  }
`;

function AddTask() {
  const [user, setUser] = useState(defaultValue);

  const onValueChange = (e) => {
    // we are using "...user" so that new parameter gets append into it
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const AddTaskDetails = () => {};

  return (
    <Container className="fullscreen">
      <Typography variant="h4">Add Task</Typography>
      <FormControl>
        <InputLabel>Title</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" />
      </FormControl>
      <FormControl>
        <InputLabel>Image Link</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" />
      </FormControl>
      <FormControl>
        <InputLabel>Current Progress</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="username" />
      </FormControl>
      <FormControl>
        <InputLabel>Total required work</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" />
      </FormControl>

      <FormControl
        sx={{ flexDirection: "row", justifyContent: "space-around" }}
      >
        <InputLabel>Choose Deadline</InputLabel>
        <Input sx={{float: "right"}} type="date" onChange={(e) => onValueChange(e)} name="phone" />
      </FormControl>

      <FormControl>
        <CustomBtn onClick={() => AddTaskDetails()}>Add Task</CustomBtn>
      </FormControl>
    </Container>
  );
}

export default AddTask;
