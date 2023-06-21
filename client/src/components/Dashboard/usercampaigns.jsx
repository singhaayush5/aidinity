import { useEffect, useState, useContext } from "react";
import { Button, Grid, Typography } from "@mui/material";
import Navbar from "../Navbar/navbar";
import { Link } from "react-router-dom";
import CampCard from "./campcard";
import axios from "axios";
import Footer from "../Footer/footer";
import UserContext from "../../context/user/usercontext";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const UserCampaigns = () => {
  const authUser = useContext(UserContext);
  const [camps, setCamps] = useState([]);
  console.log(camps);

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
        setCamps(res.data.campaigns);
      });

    document.title = "My Fundraiser Campaigns | Aidinity";
  }, []);

  return (
    <>
      <Navbar />
      {authUser.state.id ? (
        !camps || camps.length < 1 ? (
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
            <Typography sx={{ fontSize: "3vw" }} variant="h3">
              You don&apos;t have any fundraiser campaigns currently.
            </Typography>
          </div>
        ) : (
          <>
            {" "}
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
                  Here are the&nbsp;
                  <span style={{ color: "#0BDA51", fontWeight: 700 }}>
                    fundraisers
                  </span>
                  &nbsp;held by you
                </Typography>
                <Typography
                  color="#777777"
                  variant="h6"
                  sx={{ letterSpacing: 1, marginTop: "1vh" }}
                >
                  <span style={{ color: "#bbb", fontWeight: 600 }}> NOTE</span>{" "}
                  : A campaign once finished can&apos;t be activated back.
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
              spacing={3.5}
            >
              {camps.map((camp) => (
                <CampCard key={camp.campid} id={camp.campid} />
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
          <Typography sx={{ fontSize: "3vw" }} variant="h3">
            You aren&apos;t logged in.
          </Typography>
        </div>
      )}

      {authUser.state.id && (
        <Button
          component={Link}
          to="/newcampaign"
          sx={{
            position: "fixed",
            bottom: "5vh",
            right: "5vw",
            background:
              "linear-gradient(60deg, #98FB98 30%, #0BDA51 100%, #98FB98 70%)",
            borderRadius: 6,
            padding: 1.5,
            boxShadow: "7px 7px 0px 0px #000",
            zIndex: 6,
            width: "150px",
            color: "#000",
            fontWeight: 600,
          }}
        >
          Start new +
        </Button>
      )}

      <Footer />
    </>
  );
};

export default UserCampaigns;