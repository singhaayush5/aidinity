import { Button, Typography, Grid } from "@mui/material";
import helpinghands from "../../assets/helpinghands.png";
import "./home.css";
import Navbar from "../Navbar/navbar";
import { motion } from "framer-motion";
import { useEffect, useContext } from "react";
import home1 from "../../assets/home1.jpg";
import home2 from "../../assets/home2.jpg";
import home3 from "../../assets/home3.jpg";
import Footer from "../Footer/footer";
import homelogo from "../../assets/homelogo.png";
import UserContext from "../../context/user/usercontext";
import { Link } from "react-router-dom";

const Home = () => {
  const authUser = useContext(UserContext);

  useEffect(() => {
    document.title = "Aidinity";
  }, []);

  return (
    <>
      <Navbar />
      <div
        style={{
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "fixed",
          width: "100vw",
          zIndex: -1,
        }}
      >
        <motion.div
          className="buttondiv"
          style={{
            minHeight: "92vh",
            display: "flex",
            alignItems: "center",
            position: "fixed",
            zIndex: -1,
            justifyContent: "center",
            width: "100vw",
            color: "transparent",
          }}
          initial={{ opacity: 0, scale: 2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.6,
            ease: [0, 0.7, 0.2, 1.01],
          }}
        >
          <img
            style={{
              width: "100vw",
              opacity: "0.5",
              marginTop: "8vh",
              position: "fixed",
            }}
            src={helpinghands}
            alt=""
          ></img>
        </motion.div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <div
          className="topHead"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: -1,
          }}
        >
          <motion.div
            className="buttondiv"
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              color: "transparent",
            }}
            initial={{ opacity: 0, scale: 3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              ease: [0, 0.7, 0.2, 1.01],
            }}
          >
            <img
              className="homelogo"
              style={{ height: "16vw" }}
              src={homelogo}
            ></img>
          </motion.div>
        </div>
        <motion.div
          className="buttondiv"
          style={{
            width: "100%",
            color: "transparent",
          }}
          initial={{ opacity: 0, scale: 3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 1,
            ease: [0, 0.7, 0.2, 1.01],
          }}
        >
          <div
            className="topHead"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: -1,
            }}
          >
            {authUser.state.id ? (
              <Button
                className="homebuttons"
                sx={{
                  marginTop: "5vh",
                  background: "transparent",
                  boxShadow: "0 0px 0px 0px #000",
                  borderRadius: 5,
                }}
                variant="outlined"
                component={Link}
                to="/#about"
                size="large"
              >
                explore 🡣
              </Button>
            ) : (
              <Button
                className="homebuttons"
                sx={{
                  marginTop: "5vh",
                  background: "transparent",
                  boxShadow: "0 0px 0px 0px #000",
                  borderRadius: 5,
                }}
                variant="outlined"
                component={Link}
                to="/login"
                size="large"
              >
                login to continue 🡢
              </Button>
            )}
          </div>
        </motion.div>
      </div>
      <div
        id="about"
        className="menuHead"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 0,
          backgroundColor: "#0F0E0E",
          marginRight: 0,
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0px -7px 17px #000",
        }}
      >
        <Grid container spacing={0}>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            xs={12}
            sm={6}
            item
          >
            <motion.div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                color: "transparent",
              }}
              initial={{ opacity: 0, scale: 2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: [0, 0.7, 0.2, 1.01],
              }}
            >
              <Typography
                sx={{
                  zIndex: 0,
                  textAlign: "center",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "3vw",
                }}
                variant="h1"
              >
                What is <span style={{ color: "#8E5BEB" }}>Aidinity</span> ?
              </Typography>
            </motion.div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {" "}
              <Typography
                sx={{
                  zIndex: 0,
                  textAlign: "center",
                  color: "#fff",
                  fontWeight: 400,
                  marginTop: "3vw",
                  width: "87%",
                }}
                variant="h6"
              >
                As the name itself suggests, Aidinity is a{" "}
                <span style={{ color: "#8E5BEB", fontWeight: 500 }}>
                  Community
                </span>{" "}
                of{" "}
                <span style={{ color: "#8E5BEB", fontWeight: 500 }}>
                  Aiding
                </span>{" "}
                individuals, an empowering platform where compassion meets
                healing. Our website provides a unique space for users to create
                fundraising campaigns, rallying support for their medical needs.
                In addition, Aidinity offers a safe haven for anonymous
                expressions, allowing individuals to share their personal
                journeys and struggles with mental health. Join us on this
                transformative journey of compassion, connection, and healing.
                Together, we can make a meaningful difference in the lives of
                those in need. Welcome to Aidinity, where empathy finds its
                voice.
              </Typography>
              <Typography
                sx={{
                  zIndex: 0,
                  textAlign: "center",
                  color: "#fff",
                  fontWeight: 400,
                  marginTop: "1.7vh",
                  width: "87%",
                }}
                variant="h6"
              >
                <span style={{ fontWeight: 500 }}>
                  <a
                    style={{ textDecoration: "none", color: "#FF7F50" }}
                    href="/newexpression"
                  >
                    Express
                  </a>
                </span>{" "}
                or{" "}
                <span style={{ fontWeight: 500 }}>
                  <a
                    style={{ textDecoration: "none", color: "#0BDA51" }}
                    href="/fundcampaigns"
                  >
                    Donate
                  </a>
                </span>{" "}
                🡢
              </Typography>
            </div>
          </Grid>
          <Grid
            className="homeslide"
            sx={{ overflow: "hidden" }}
            xs={12}
            sm={6}
            item
          >
            <img
              className="slideimg"
              style={{ height: "100vh", right: 0 }}
              src={home1}
              alt=""
            ></img>
          </Grid>
        </Grid>
      </div>
      <div
        className="menuHead"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          backgroundColor: "#222",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0px -7px 17px #000",
        }}
      >
        <Grid container spacing={0}>
          <Grid
            className="homeslide"
            sx={{ overflow: "clip" }}
            xs={12}
            sm={6}
            item
          >
            <img
              className="slideimg"
              style={{ height: "100vh", right: "0px" }}
              src={home2}
              alt=""
            ></img>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            xs={12}
            sm={6}
            item
          >
            <motion.div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                color: "transparent",
              }}
              initial={{ opacity: 0, scale: 2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: [0, 0.7, 0.2, 1.01],
              }}
            >
              <Typography
                sx={{
                  zIndex: 0,
                  textAlign: "center",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "3vw",
                }}
                variant="h1"
              >
                <span style={{ color: "#8E5BEB" }}>Extend</span> a helping hand
              </Typography>
            </motion.div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {" "}
              <Typography
                sx={{
                  zIndex: 0,
                  textAlign: "center",
                  color: "#fff",
                  fontWeight: 400,
                  marginTop: "3vw",
                  width: "85%",
                }}
                variant="h6"
              >
                The fundraiser campaigns here at Aidinity make a lasting impact
                on the lives of individuals facing medical challenges. With
                Aidinity, you can easily create and share personalized
                campaigns, rallying support from friends, family, and
                compassionate strangers alike. Whether it&apos;s covering
                medical expenses, accessing life-saving treatments, or
                supporting rehabilitation efforts, our community is here to lend
                a helping hand. Together, let&apos;s transform stories of
                struggle into stories of triumph. Join us in embracing the power
                of collective kindness and generosity. Aidinity: Uniting hearts,
                restoring hope.
              </Typography>
              <Typography
                sx={{
                  zIndex: 0,
                  textAlign: "center",
                  color: "#fff",
                  fontWeight: 400,
                  marginTop: "1.7vh",
                  width: "87%",
                }}
                variant="h6"
              >
                <span style={{ fontWeight: 500 }}>
                  <a
                    style={{ textDecoration: "none", color: "#0BDA51" }}
                    href="/fundcampaigns"
                  >
                    Donate to a campaign
                  </a>
                </span>{" "}
                or{" "}
                <span style={{ fontWeight: 500 }}>
                  <a
                    style={{ textDecoration: "none", color: "#0BDA51" }}
                    href="/newcampaign"
                  >
                    Start your own campaign.
                  </a>
                </span>{" "}
                🡢
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
      <div
        className="menuHead"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 2,
          backgroundColor: "#150B1F",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0px -7px 17px #000",
          marginBottom: "-1vh",
        }}
      >
        <Grid container spacing={0}>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            xs={12}
            sm={6}
            item
          >
            <motion.div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                color: "transparent",
              }}
              initial={{ opacity: 0, scale: 2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: [0, 0.7, 0.2, 1.01],
              }}
            >
              <Typography
                sx={{
                  zIndex: 0,
                  textAlign: "center",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "3vw",
                }}
                variant="h1"
              >
                <span style={{ color: "#8E5BEB" }}>Express</span> yourself
              </Typography>
            </motion.div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {" "}
              <Typography
                sx={{
                  zIndex: 0,
                  textAlign: "center",
                  color: "#fff",
                  fontWeight: 400,
                  marginTop: "3vw",
                  width: "87%",
                }}
                variant="h6"
              >
                At Aidinity, the anonymous mental health expressions provide a
                safe space for individuals to share their innermost thoughts,
                fears, and triumphs without judgment or fear of identification.
                Each expression serves as a testament to the strength of the
                human spirit and the power of vulnerability. Together, we foster
                a community of empathy and support, where users can find solace
                and understanding. Join us in reading, responding, and offering
                compassionate comments below each expression, creating a network
                of love and healing. Aidinity: Unveiling the power of shared
                stories and helping minds.
              </Typography>
              <Typography
                sx={{
                  zIndex: 0,
                  textAlign: "center",
                  color: "#fff",
                  fontWeight: 400,
                  marginTop: "1.7vh",
                  width: "87%",
                }}
                variant="h6"
              >
                <span style={{ fontWeight: 500 }}>
                  <a
                    style={{ textDecoration: "none", color: "#FF7F50" }}
                    href="/expressions"
                  >
                    Read an expression
                  </a>
                </span>{" "}
                or{" "}
                <span style={{ fontWeight: 500 }}>
                  <a
                    style={{ textDecoration: "none", color: "#FF7F50" }}
                    href="/newexpression"
                  >
                    Publish your own
                  </a>
                </span>{" "}
                🡢
              </Typography>
            </div>
          </Grid>
          <Grid
            className="homeslide"
            sx={{ overflow: "hidden" }}
            xs={12}
            sm={6}
            item
          >
            <img
              className="slideimg"
              style={{ height: "118vh" }}
              src={home3}
              alt=""
            ></img>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
};

export default Home;
