import "./App.css";
import NavBar from "./component/NavBar";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";
import Deadlines from "./pages/Deadlines";
import Calender from "./pages/Calender";
import Footer from "./component/Footer";
import AllTasks from "./pages/AllTasks";
import Meter from "./component/Meter";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        {/* <Warning /> */}
        <Routes>
          <Route path="/" element={<AllTasks />} />
          <Route path="/add" element={<AddTask />} />
          <Route path="/deadLines" element={<Deadlines />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/edit/:id" element={<EditTask />} />
        </Routes>
      </BrowserRouter>
      <Footer />
        <Meter progress={100} color="#053" />
    </div>
  );
}

export default App;
