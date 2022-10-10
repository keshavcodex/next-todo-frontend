import { useState } from "react";
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import {
  FormControl,
  FormGroup,
  TextField,
  InputLabel,
  Input,
  styled,
  Typography,
  Button,
} from "@mui/material";

const defaultValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const Container = styled(FormGroup)`
  width: 33%;
  margin: 5% auto 0;
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
    <div>
      <Container>
        <Typography variant="h4">Add Task</Typography>
        <FormControl>
          <InputLabel>Title</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="name" />
        </FormControl>
        <FormControl>
          <InputLabel>Total hours required</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="username" />
        </FormControl>
        <FormControl>
          <InputLabel>Current Progress</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="email" />
        </FormControl>

        <FormControl style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <InputLabel>Choose Deadline</InputLabel>
          <Input type="date" onChange={(e) => onValueChange(e)} name="phone" />
        </FormControl>
        
        <FormControl>
          <Button variant="contained" onClick={() => AddTaskDetails()}>
            Add User
          </Button>
        </FormControl>
      </Container>
    </div>
  );
}

export default AddTask;
