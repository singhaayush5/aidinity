import { useEffect, useState, useContext } from "react";
import { Button, Grid, Typography, CircularProgress } from "@mui/material";
import Navbar from "../Navbar/navbar";
import { Link } from "react-router-dom";
import CampCard from "./campcard";
import axios from "axios";
import Footer from "../Footer/footer";
import UserContext from "../../context/user/usercontext";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const FCampaigns = () => {
  const authUser = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [camps, setCamps] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/allcamps`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setCamps(res.data);
      }).then(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });

    document.title = "Fundraiser Campaigns | Aidinity";
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
          {!camps || camps.length < 1 ? (
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
                There aren&apos;t any{" "}
                <span style={{ color: "#8E5BEB" }}>fundraisers</span> active
                currently.
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
                  Currently{" "}
                  <span style={{ color: "#0BDA51", fontWeight: 700 }}>
                    active
                  </span>{" "}
                  fundraiser campaigns
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
                spacing={3.5}
              >
                {camps.map(
                  (camp) =>
                    camp.active && (
                      <CampCard
                        key={camp._id}
                        id={camp._id}
                        title={camp.title}
                        holder={camp.campaignHolder}
                        age={camp.age}
                        gender={camp.gender}
                        state={camp.state}
                        city={camp.city}
                        amtRequested={camp.amountRequested}
                        amtRaised={camp.amountRaised}
                        description={camp.description}
                      />
                    )
                )}
              </Grid>
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
            </>
          )}
        </>
      )}
      <Footer />
    </>
  );
};

export default FCampaigns;
