import {React, useState} from "react";
import { BrowserRouter,
  Routes,
  Route,
  useParams,
  Link,
  useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import Main from "./modules/Main"
import Login from "./modules/Login";
import Menu from "./modules/Menu";
import db from "./modules/Firebase-config"
import uid from "uid";
//import Booking from "./modules/Booking";
import RestaurantReservations from "./modules/Reservations";
import RestaurantReservationForm from "./modules/Booking"
import FBLogo from "./modules/images/FBLogo.png"
import IGLogo from "./modules/images/IGLogo.png"


  function App() {
    return(
      <BrowserRouter basename="/fondueapp">
      <NavBar />
        <Routes >
          /* Public Routes */
          <Route path="/fondueapp" element={<Main />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/booking" element={<RestaurantReservationForm />}></Route>
          <Route path="/user/login" element={<Login />}></Route>

          /*Private Routes */
          <Route path="/user/reservations" element={<RestaurantReservations />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    )
  }

  function NavBar(props) {
    const [collapsed, setCollapsed] = useState(true);
  
    const toggleNavbar = () => setCollapsed(!collapsed);
  
    return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/fondueapp">
          <img
            alt="logo"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/15ebfb18806393.5603f1b61f3e6.jpg"
            style={{
              height: 50
            }}
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2"/>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
          <NavItem>
              <NavLink style={{color:"red"}} href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/menu">Menu</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/booking">Book a Table</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

const Footer = () => {
  return (
    <footer style={{marginTop:"5rem", padding:"2rem", background:"black"}}>
      <div className="container" style={{ display:"flex", justifyContent:"space-evenly",alignItems:"center", color:"#FFF", fontWeight:"600"}}>
        <p>Address: 123 Main Street, Anytown USA</p>
        <p>Phone: (555) 555-5555</p>
        <div>
          <a href="#"><img style={{width:"1.5rem"}} src={FBLogo} alt="Facebook"/></a>
          <a href="#"><img style={{width:"3rem"}} src={IGLogo} alt="Instagram" /></a>
        </div>
        <ul style={{listStyle:"none"}}>
          <li><a style={{color:"#FFF"}} href="/fondueapp">Home</a></li>
          <li><a style={{color:"#FFF"}} href="menu">Menu</a></li>
          <li><a style={{color:"#FFF"}} href="booking">Book a table</a></li>
          <li><a style={{color:"#FFF"}} href="user/login">Log In</a></li>
          
        </ul>
      </div>
    </footer>
  );
};


export default App;
