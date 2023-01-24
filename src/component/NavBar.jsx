import { AppBar, Toolbar, styled, Container } from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from "./logo.webp";
import "./NavBar.css";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const Header = styled(AppBar)`
  background: #1bb089;
  justifycontent: "space-between";
  transition: 0.5s;
  overflow: hidden;
  position: sticky;
  top: 0;
  &:hover {
    background-color: #1bb089;
    box-shadow: 0 4px 8px 0 rgb(1, 66, 50);
  }
`;
const Tab = styled(NavLink)`
  font-size: 20px;
  margin-right: 40px;
  @media (max-width: 768px) {
    margin-right: 20px;
  }
  color: #000;
  text-decoration: none;
`;

const Hamburger = styled(IconButton)`
  display: none;
  color: #000;
  @media (max-width: 600px) {
    display: block;
  }
  
`;

const CloseMenuBtn = styled(IconButton)`
  padding: 1rem;
  color: #000;
`;

function NavBar() {
  // keep track of the state of the menu (open or closed)
  const [menuOpen, setmenuOpen] = useState(false);
  const menu = useRef();

  // remove the class hidden from the menu
  const handleHamburger = (e) => {
    menu.current.classList.remove("hidden");
    if (menu.current.classList.contains("hidden") !== true) {
      setmenuOpen(true);
    } else {
      setmenuOpen(false);
    }
  };

  // add the class hidden to the menu
  const handleCross = (e) => {
    menu.current.classList.add("hidden");
    setmenuOpen(false);
  };

  return (
    <Header position="">
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          {/* only show when menu is not open */}
          {!menuOpen && (
            <div className="tabs">
              {/* div below will visible only in smaller devices */}
              <div>
                <Tab to="/">
                  <img src={logo} alt="logo" className="logo" />
                </Tab>
              </div>
              <Tab to="/">
                <img src={logo} alt="logo" className="logo" />
              </Tab>
              <h2 className="sitename">Task Tracker</h2>
              <Tab to="/">Home</Tab>
              <Tab to="/add">Add Task</Tab>
              <Tab to="/deadLines">DeadLines</Tab>
              <Tab to="/calender">Calender</Tab>
            </div>
          )}
          {/* side nav bar */}
          <nav
            ref={menu} // reference to the menu
            className="side-nav hidden" // class hidden by default
            data-side-nav="data-side-nav"
          >
            <div className="side-nav-content">
              <div className="close-wrapper">
                <CloseMenuBtn onClick={handleCross} className="close-menu-btn">
                  <CloseIcon />
                </CloseMenuBtn>
              </div>
              <ul className="side-nav__list ">
                <div>
                  <img src={logo} alt="logo" className="logo" />
                </div>
                <Tab onClick={handleCross} to="/">
                  Home
                </Tab>
                <Tab onClick={handleCross} to="/add">
                  Add Task
                </Tab>
                <Tab onClick={handleCross} to="/deadLines">
                  DeadLines
                </Tab>
                <Tab onClick={handleCross} to="/calender">
                  Calender
                </Tab>
              </ul>
            </div>
          </nav>
          {/* hamburger will visible only if side nav is not open */}
          {!menuOpen && (
            <div className="ham-container">
              <Hamburger
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleHamburger}
              >
                <MenuIcon />
              </Hamburger>
            </div>
          )}
        </Toolbar>
      </Container>
    </Header>
  );
}

export default NavBar;
