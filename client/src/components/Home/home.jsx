import { Typography } from "@mui/material";
import helpinghands from "../../assets/helpinghands.png";
import "./home.css";
import Navbar from "../Navbar/navbar";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  // const callHomePage = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:8080/checkuser", {
  //       withCredentials: true,
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     console.log(res);

  //     if (res.status !== 200) {
  //       const err = new Error(res.error);
  //       throw err;
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     navigate("/login");
  //   }
  // };

  useEffect(() => {
    document.title = "Aidinity";
    // callHomePage();
  }, []);

  return (
    <>
      <Navbar/>
      <div
        style={{
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "fixed",
          zIndex: -1,
        }}
      >
        <img
          style={{ width: "100%", opacity: "0.5" }}
          src={helpinghands}
          alt=""
        ></img>
      </div>
      <div
        className="topHead"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: -1,
        }}
      >
        <Typography
          sx={{
            zIndex: -1,
            textAlign: "center",
            color: "#fff",
            fontWeight: 600,
            fontSize: "14vw",
            position: "fixed",
          }}
          variant="h1"
        >
          Welcome!
        </Typography>
      </div>
      <div
        className="menuHead"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 0,
          backgroundColor: "#0F0E0E",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            zIndex: 0,
            textAlign: "center",
            color: "#fff",
            fontWeight: 600,
            fontSize: "100px",
          }}
          variant="h1"
        >
          We are in this together.
        </Typography>
      </div>
      <div
        className="menuHead"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          backgroundColor: "#282A3A",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            zIndex: 1,
            textAlign: "center",
            color: "#fff",
            fontWeight: 600,
            fontSize: "100px",
          }}
          variant="h1"
        >
          Be the change for someone.
        </Typography>
      </div>
      <div
        className="menuHead"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 2,
          backgroundColor: "#434242",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            zIndex: 2,
            textAlign: "center",
            color: "#fff",
            fontWeight: 600,
            fontSize: "100px",
          }}
          variant="h1"
        >
          Express yourself.
        </Typography>
      </div>
    </>
  );
};

export default Home;
