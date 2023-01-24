import axios from "axios";

const URL = "http://localhost:8000";

export const addTask = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log("Error while calling add task api", error);
  }
};


export const getTasks = async () =>{
  try{
      return await axios.get(`${URL}/`);
  } catch (error){
      console.log('Error while calling getTasks API', error);
  }
}

export const getTask= async (id) =>{
  try{
      return await axios.get(`${URL}/${id}`);
  } catch (error){
      console.log('Error while calling getTaskAPI', error);
  }
}

export const editTask = async (task, id) =>{
  try{
      return await axios.put(`${URL}/${id}`, task);
  } catch (error){
      console.log('Error while calling edittask API', error);
  }
}

export const deleteTask = async (id) =>{
  try{
      return await axios.delete(`${URL}/${id}`);
  } catch (error){
      console.log('Error while calling deleteTask API', error);
  }
}
