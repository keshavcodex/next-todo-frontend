import "./App.css";
import Home from "./component/Home";
import NavBar from "./component/NavBar";
import AddTask from "./component/AddTask";
import Deadlines from "./component/Deadlines";
import Calender from "./component/Calender";
import Footer from "./component/Footer";
import Warning from "./component/Warning";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      {/* <Warning /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddTask />} />
        <Route path="/deadLines" element={<Deadlines />} />
        <Route path="/calender" element={<Calender />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
