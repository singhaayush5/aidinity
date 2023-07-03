import { useEffect, useState, useContext } from "react";
import { Grid, Typography, Button, CircularProgress } from "@mui/material";
import Navbar from "../Navbar/navbar";
import ExpCard from "./expcard";
import axios from "axios";
import Footer from "../Footer/footer";
import { Link } from "react-router-dom";
import UserContext from "../../context/user/usercontext";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const Expressions = () => {
  const authUser = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [exps, setExps] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/allexps`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setExps(res.data);
      })
      .then(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });

    document.title = "Expressions | Aidinity";
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
      ) : (
        <>
          {!exps || exps.length < 1 ? (
            <div
              style={{
                minWidth: "100%",
                minHeight: "92vh",
                marginTop: "8vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
              }}
            >
              <Typography
                sx={{ fontSize: "3vw", fontWeight: 500 }}
                variant="h3"
              >
                There aren&apos;t any published&nbsp;
                <span style={{ color: "#8E5BEB" }}>expressions</span> currently.
              </Typography>
            </div>
          ) : (
            <>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Typography
                  sx={{
                    fontSize: "2.5vw",
                    fontWeight: 600,
                    letterSpacing: 1,
                    margin: "10vh 0% 0% 0%",
                    textShadow: "4px 4px #000",
                  }}
                  color="#fff"
                  variant="h1"
                >
                  These people have shared their{" "}
                  <span style={{ color: "#FF7F50", fontWeight: 700 }}>
                    mental health
                  </span>{" "}
                  stories
                </Typography>
              </div>
              <Grid
                sx={{
                  padding: "0% 2% 2% 2%",
                  marginTop: "1vh",
                  minHeight: "92vh",
                  justifyContent: "center",
                }}
                container
                spacing={3}
              >
                {exps.map((exp) => (
                  <ExpCard
                    key={exp._id}
                    id={exp._id}
                    title={exp.title}
                    age={exp.age}
                    gender={exp.gender}
                    state={exp.state}
                    city={exp.city}
                    expression={exp.expression}
                    comments={exp.comments}
                  />
                ))}
              </Grid>
              {authUser.state.id && (
                <Button
                  component={Link}
                  to="/newexpression"
                  sx={{
                    position: "fixed",
                    bottom: "5vh",
                    right: "5vw",
                    background:
                      "linear-gradient(60deg, #FF7F50 30%, #FF461F 100%, #FF7F50 70%)",
                    borderRadius: 6,
                    padding: 1.5,
                    boxShadow: "7px 7px 0px 0px #000",
                    zIndex: 6,
                    width: "150px",
                    color: "#000",
                    fontWeight: 600,
                  }}
                >
                  Add new +
                </Button>
              )}
            </>
          )}
        </>
      )}
      <Footer />
    </>
  );
};

export default Expressions;
