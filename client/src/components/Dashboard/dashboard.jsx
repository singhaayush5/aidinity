import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/user/usercontext";
import { Typography, Grid, Box, Button, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import logowhite from "../../assets/logowhite.png";
import { motion } from "framer-motion";
import "./dashboard.css";
import Footer from "../Footer/footer";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const BASE_URL = import.meta.env.VITE_BASE_URL;
import axios from "axios";



const Dashboard = () => {
  const authUser = useContext(UserContext);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  
  // const [loading, setLoading] = useState(true);
  const token = cookies.get("jwebtoken");
  const getCurrUser = async () => {
    try {
      const token = cookies.get("jwebtoken");
      const res = await axios.get(`${BASE_URL}/checkuser`, {
        
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 200) {
        setUser(res.data);
        setLoading(false);
        
      } 
      else{
        setLoading(false);
      }
    } catch (err) {
      console.log(err);

    }
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}/checkuser`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        {
          setUser(res.data);
        }
      }).catch((err) => {
        console.log(err);
      }).then(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
    
    document.title = "Dashboard | Aidinity";
  }, []);

  return (
    <>
      <Navbar />
      {loading ? (
        <>
          <div
            style={{
              width: "100%",
              height: "100vh",
              marginTop: "8vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
            <Typography sx={{fontWeight:500, marginTop:"3vh"}} color="#fff" variant="h6">Sit Tight. Working on your request ...</Typography>
          </div>
        </>
      ) :
      <>
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
                      {user.name}
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
                  <motion.div
                    className="buttondiv"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  >
                    <Button
                      className="donatebutton"
                      sx={{
                        borderRadius: 2,
                        fontWeight: 600,
                        marginTop: "2vh",
                        color: "#fff",
                        width: "100%",
                      }}
                      type="submit"
                      component={Link}
                      to="/user"
                      variant="contained"
                      color="dashboard"
                    >
                      My Profile➜
                    </Button>
                  </motion.div>
                  <motion.div
                    className="buttondiv"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  >
                    <Button
                      className="donatebutton"
                      sx={{
                        borderRadius: 2,
                        fontWeight: 600,
                        marginTop: "2vh",
                        color: "#fff",
                        width: "100%",
                      }}
                      type="submit"
                      component={Link}
                      to="/user/expressions"
                      variant="contained"
                      color="dashboard"
                    >
                      My Expressions➜
                    </Button>
                  </motion.div>
                  <motion.div
                    className="buttondiv"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  >
                    <Button
                      className="donatebutton"
                      sx={{
                        borderRadius: 2,
                        fontWeight: 600,
                        marginTop: "2vh",
                        color: "#fff",
                        width: "100%",
                      }}
                      type="submit"
                      component={Link}
                      to="/user/fundcampaigns"
                      variant="contained"
                      color="dashboard"
                    >
                      My Fundraiser Campaigns➜
                    </Button>
                  </motion.div>
                  <motion.div
                    className="buttondiv"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  >
                    <Button
                      className="donatebutton"
                      sx={{
                        borderRadius: 2,
                        fontWeight: 600,
                        marginTop: "2vh",
                        color: "#fff",
                        width: "100%",
                      }}
                      type="submit"
                      component={Link}
                      to="/user/donations"
                      variant="contained"
                      color="dashboard"
                    >
                      My Donations➜
                    </Button>
                  </motion.div>
                </div>
              </>
            ) : (
              <>
                <motion.div
                  className="buttondiv"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
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
                </motion.div>
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
      </>}
      <Footer />
    </>
  );
};

export default Dashboard;
