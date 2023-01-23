import "./App.css";
import Home from "./pages/Home";
import NavBar from "./component/NavBar";
import AddTask from "./pages/AddTask";
import Deadlines from "./pages/Deadlines";
import Calender from "./pages/Calender";
import Footer from "./component/Footer";
import Warning from "./component/Warning";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        {/* <Warning /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddTask />} />
          <Route path="/deadLines" element={<Deadlines />} />
          <Route path="/calender" element={<Calender />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
