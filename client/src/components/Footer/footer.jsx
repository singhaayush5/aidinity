import logowhite from "../../assets/logowhite.png";
import "./footer.css";
import { Divider, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GithubIcon from "@mui/icons-material/Github";
import { Link } from "react-router-dom";

const Footer = () => {
  const now = new Date();

  return (
    <div
      className="foothero"
      style={{
        backgroundColor: "#000",
        zIndex: 2,
        position: "absolute",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/">
          <img className="navlogo" src={logowhite} alt=""></img>
        </Link>
        <div>
          <a href="https://www.instagram.com/">
            <InstagramIcon
              sx={{ color: "#fff", fontSize: "2vw", marginLeft: "2vw" }}
            />
          </a>
          <a href="https://twitter.com/">
            <TwitterIcon
              sx={{ color: "#fff", fontSize: "2vw", marginLeft: "2vw" }}
            />
          </a>
          <a href="https://github.com">
            <GithubIcon
              sx={{ color: "#fff", fontSize: "2vw", marginLeft: "2vw" }}
            />
          </a>
        </div>
      </div>

      <Divider className="dividr" color="#dadada" sx={{ margin: "1% 0%" }} />
      <div
        className="footlink"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Typography
          sx={{ textTransform: "uppercase" }}
          color="#fff"
          variant="h6"
        >
          {/* <a style={{ textDecoration: "none", color: "#fff" }} href="/"> */}
          <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
           Home
          </Link>
           
          {/* </a> */}
        </Typography>
        <Typography
          sx={{ textTransform: "uppercase" }}
          color="#fff"
          variant="h6"
        >
          &nbsp;&nbsp;•&nbsp;&nbsp;
        </Typography>
        <Typography
          sx={{ textTransform: "uppercase" }}
          color="#fff"
          variant="h6"
        >
          {/* <a
            style={{ textDecoration: "none", color: "#fff" }}
            href="/expressions"
          > */}
          <Link style={{ textDecoration: "none", color: "#fff" }} to="/expressions">
            Expressions
            </Link>
          {/* </a> */}
        </Typography>
        <Typography
          sx={{ textTransform: "uppercase" }}
          color="#fff"
          variant="h6"
        >
          &nbsp;&nbsp;•&nbsp;&nbsp;
        </Typography>
        <Typography
          sx={{ textTransform: "uppercase" }}
          color="#fff"
          variant="h6"
        >
          {/* <a
            style={{ textDecoration: "none", color: "#fff" }}
            href="/fundcampaigns"
          > */}
          <Link style={{ textDecoration: "none", color: "#fff" }} to="/fundcampaigns">
            Fund Campaigns
            </Link>
        
          {/* </a> */}
        </Typography>
        <Typography
          sx={{ textTransform: "uppercase" }}
          color="#fff"
          variant="h6"
        >
          &nbsp;&nbsp;•&nbsp;&nbsp;
        </Typography>
        <Typography
          sx={{ textTransform: "uppercase" }}
          color="#fff"
          variant="h6"
        >
          <a
            href="mailto:aidinity23@gmail.com"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            Contact us
          </a>
        </Typography>
      </div>
      <div
        className="footlink"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Typography
          sx={{
            fontWeight: 300,
            letterSpacing: 1,
            position: "absolute",
            bottom: 1,
          }}
          color="#fff"
          variant="h6"
        >
          Copyright © {now.getFullYear()}
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
