import { useEffect, useState, useContext } from "react";
import { Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import ExpCard from "./expcard";
import axios from "axios";
import Footer from "../Footer/footer";
import UserContext from "../../context/user/usercontext";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const UserExpressions = () => {
  const authUser = useContext(UserContext);
  const [exps, setExps] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/checkuser`, {
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setExps(res.data.expressions);
      });

    document.title = "My Expressions | Aidinity";
  }, []);

  return (
    <>
      <Navbar />
      {authUser.state.id ? (
        !exps || exps.length < 1 ? (
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
            <Typography sx={{ fontSize: "3vw", fontWeight: 500 }} variant="h3">
              You haven&apos;t published any{" "}
              <span style={{ color: "#8E5BEB" }}>expressions</span> till now.
            </Typography>
          </div>
        ) : (
          <>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
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
                  Here are your{" "}
                  <span style={{ color: "#FF7F50", fontWeight: 700 }}>
                    anonymous
                  </span>{" "}
                  expressions
                </Typography>
                <Typography
                  color="#777777"
                  variant="h6"
                  sx={{ letterSpacing: 1, marginTop: "1vh" }}
                >
                  <span style={{ color: "#bbb", fontWeight: 600 }}> NOTE</span>{" "}
                  : An expression once deleted is deleted forever.
                </Typography>
              </div>
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
                <ExpCard key={exp.expid} id={exp.expid} />
              ))}
            </Grid>
          </>
        )
      ) : (
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
          <Typography sx={{ fontSize: "3vw", fontWeight: 500 }} variant="h3">
            You aren&apos;t <span style={{ color: "#8E5BEB" }}>logged</span> in.
          </Typography>
        </div>
      )}

      {authUser.state.id && (
        <Button
          component={Link}
          to="/newexpression"
          sx={{
            position: "fixed",
            color: "#000",
            bottom: "5vh",
            right: "5vw",
            background:
              "linear-gradient(60deg, #FF7F50 30%, #FF461F 100%, #FF7F50 70%)",
            borderRadius: 6,
            padding: 1.5,
            width: "150px",
            boxShadow: "7px 7px 0px 0px #000",
            fontWeight: 600,
            zIndex: 6,
          }}
        >
          Add new +
        </Button>
      )}

      <Footer />
    </>
  );
};

export default UserExpressions;
