import { Typography } from "@mui/material";
import logo from "../../assets/logo.png";
import "./navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'
import { useState } from "react";

const Navbar = () => {
    const [showNav,setNav] = useState(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "8vh",
          backgroundColor: "#0F0E0E",
          width: "100%",
          position: "fixed",
          zIndex: 5,
        }}
      >
        <div style={{ width: "50%", paddingLeft: "2%" }}>
          <img
            className="navlogo"
            src={logo}
            alt=""
          ></img>
        </div>
        <div
          style={{
            width: "50%",
            paddingRight: "2%",
            display: "flex",
            flexDirection: "row-reverse",
          }}
        >
          <Typography
            className="navlinks"
            style={{
              color: "#fff",
              textAlign: "right",
              fontSize: "2vh",
              letterSpacing: 3,
              fontWeight: 500,
            }}
            variant="h5"
          >
          <a href="/" style={{textDecoration:"none", color:"#fff"}}>ABOUT US</a>
            
          </Typography>
          <Typography
            className="navlinks"
            style={{
              color: "#fff",
              textAlign: "right",
              marginRight: "4%",
              fontSize: "2vh",
              letterSpacing: 3,
              fontWeight: 500,
            }}
            variant="h5"
          >
            <a href="/" style={{textDecoration:"none", color:"#fff"}}>EXPRESS</a>
          </Typography>
          <Typography
            className="navlinks"
            style={{
              color: "#fff",
              textAlign: "right",
              marginRight: "4%",
              fontSize: "2vh",
              letterSpacing: 3,
              fontWeight: 500,
            }}
            variant="h5"
          >
            <a href="/" style={{textDecoration:"none", color:"#fff"}}>HELP</a>
          </Typography>
          <Typography
            className="navlinks"
            style={{
              color: "#fff",
              textAlign: "right",
              marginRight: "4%",
              fontSize: "2vh",
              letterSpacing: 3,
              fontWeight: 500,
            }}
            variant="h5"
          >
            <a href="/" style={{textDecoration:"none", color:"#fff"}}>LOGIN</a>
          </Typography>
          {
            showNav ? <CloseIcon onClick={() => {setNav(!showNav)}} className="micon" style={{color:"#fff"}}/> : <MenuIcon onClick={() => {setNav(!showNav)}} className="micon" style={{color:"#fff"}}/>
          }
          
          
          
        </div>
      </div>
      {
        showNav && <div className="micon slide-left" style={{backgroundColor:"#0F0E0E", zIndex:6,marginTop:"8vh", position:"fixed", right:0,  width:"30vh", height:"92vh", display:"flex", flexDirection:"column", alignItems:"center"}}>
      <Typography
            style={{
              color: "#fff",
              textAlign: "right",
              fontSize: "2vh",
              letterSpacing: 3,
              fontWeight: 500,
              margin:"3% auto"
            }}
            variant="h5"
          >
          <a href="/" style={{textDecoration:"none", color:"#fff"}}>HELP</a>
            
          </Typography>
      
      <Typography
            style={{
              color: "#fff",
              textAlign: "right",
              fontSize: "2vh",
              letterSpacing: 3,
              fontWeight: 500,
              margin:"3% auto"
            }}
            variant="h5"
          >
          <a href="/" style={{textDecoration:"none", color:"#fff"}}>EXPRESS</a>
            
          </Typography>
      
      <Typography
            style={{
              color: "#fff",
              textAlign: "right",
              fontSize: "2vh",
              letterSpacing: 3,
              fontWeight: 500,
              margin:"3% auto"
            }}
            variant="h5"
          >
          <a href="/" style={{textDecoration:"none", color:"#fff"}}>LOGIN</a>
            
          </Typography>
     
      <Typography
            style={{
              color: "#fff",
              textAlign: "right",
              fontSize: "2vh",
              letterSpacing: 3,
              fontWeight: 500,
              margin:"3% auto"
            }}
            variant="h5"
          >
          <a href="/" style={{textDecoration:"none", color:"#fff"}}>ABOUT US</a>
            
          </Typography>
          </div>
      }
      
    </>
  );
};

export default Navbar;
