import { useContext, useEffect } from "react";
import UserContext from "../../context/user/usercontext";
import { Typography, Grid, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import logowhite from "../../assets/logowhite.png";
import "./dashboard.css";
import Footer from "../Footer/footer";

const Dashboard = () => {
  const authUser = useContext(UserContext);

  useEffect(() => {
    document.title = "Dashboard | Aidinity";
  }, []);

  return (
    <>
      <Navbar />
      <Grid container>
        <Grid xs={12} sm={12} item>
          <Box
            sx={{
              backgroundColor: "#222",
              display: "fixed",
              height: "92vh",
              marginTop: "8vh",
            }}
          >
            {authUser.state.id ? (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{ color: "#fff", fontWeight: 700, fontSize: "3.5vw" }}
                    variant="h4"
                  >
                    Hi&nbsp;
                    <span
                      style={{ color: "#8E5BEB", textShadow: ".3vw .3vw #000" }}
                    >
                      {authUser.state.name}
                    </span>
                    &nbsp;👋🏻
                  </Typography>
                  <Typography
                    sx={{ marginTop: "1vh" }}
                    color="#aaa"
                    variant="h6"
                  >
                    Welcome to your{" "}
                    <span style={{ color: "#8E5BEB" }}>Aidinity</span>{" "}
                    dashboard.
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "2vh",
                      fontWeight: 400,
                      marginTop: "0.5vh",
                    }}
                    color="#aaa"
                    variant="h6"
                  >
                    Select an option 🡣
                  </Typography>
                  <Button
                    className="donatebutton"
                    sx={{
                      borderRadius: 2,
                      fontWeight: 600,
                      marginTop: "1%",
                      color: "#fff",
                    }}
                    type="submit"
                    component={Link}
                    to="/user"
                    variant="contained"
                    color="dashboard"
                  >
                    My Profile➜
                  </Button>
                  <Button
                    className="donatebutton"
                    sx={{
                      borderRadius: 2,
                      fontWeight: 600,
                      marginTop: "1%",
                      color: "#fff",
                    }}
                    type="submit"
                    component={Link}
                    to="/user/expressions"
                    variant="contained"
                    color="dashboard"
                  >
                    My Expressions➜
                  </Button>
                  <Button
                    className="donatebutton"
                    sx={{
                      borderRadius: 2,
                      fontWeight: 600,
                      marginTop: "1%",
                      color: "#fff",
                    }}
                    type="submit"
                    component={Link}
                    to="/user/fundcampaigns"
                    variant="contained"
                    color="dashboard"
                  >
                    My Fundraiser Campaigns➜
                  </Button>
                  <Button
                    className="donatebutton"
                    sx={{
                      borderRadius: 2,
                      fontWeight: 600,
                      marginTop: "1%",
                      color: "#fff",
                    }}
                    type="submit"
                    component={Link}
                    to="/user/donations"
                    variant="contained"
                    color="dashboard"
                  >
                    My Donations➜
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "-3vh",
                  }}
                >
                  <Typography
                    sx={{ fontWeight: 500, marginTop: "3%" }}
                    color="#bbb"
                    variant="h6"
                  >
                    To continue, please
                  </Typography>{" "}
                  <Button
                    className="donatebutton"
                    sx={{ borderRadius: 2, fontWeight: 600, marginTop: "1%" }}
                    type="submit"
                    component={Link}
                    to="/login"
                    variant="contained"
                    color="secondary"
                  >
                    Login➜
                  </Button>
                  <Typography
                    sx={{ fontWeight: 500, marginTop: "1%" }}
                    color="#bbb"
                    variant="h6"
                  >
                    OR
                  </Typography>
                  <Button
                    className="donatebutton"
                    sx={{
                      borderRadius: 2,
                      fontWeight: 600,
                      marginTop: "1%",
                      background: "#fff",
                    }}
                    type="submit"
                    component={Link}
                    to="/register"
                    variant="contained"
                    color="primary"
                  >
                    Register➜
                  </Button>
                </div>
              </>
            )}
          </Box>
        </Grid>
      </Grid>
      <img
        className="bottomlogo"
        style={{ position: "absolute", bottom: "3vh", right: "5vh" }}
        src={logowhite}
        alt=""
      />
      {/* <Typography color="#fff" variant="h3">Hi&nbsp;{authUser.state.name}</Typography> */}
      <Footer />
    </>
  );
};

export default Dashboard;
