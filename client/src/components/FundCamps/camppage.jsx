import {
  Card,
  Divider,
  Typography,
  Button,
  TextField,
  Grid,
  Box,
  private_createTypography,
} from "@mui/material";
import React, { useState, useContext, useEffect } from "react";
import UserContext from "../../context/user/usercontext";
import Navbar from "../Navbar/navbar";
import dummyman from "../../assets/dummyman.png";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./camppage.css";

const CampPage = (props) => {
  const navigate = useNavigate();
  const [camp, setCamp] = useState({});
  const [amt, setAmt] = useState(null);
  const authUser = useContext(UserContext);
  const { id } = useParams();
  console.log(camp);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const donateAmt = async () => {
    let ordId =
      "AI" + Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));

    const scr = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!scr) {
      alert(
        "There was an error loading the checkout page. Check your internet connection."
      );
      return;
    }

    const response = await axios
      .post(
        "http://localhost:8080/createpayment",
        {
          order_id: ordId,
          amount: amt.toString(),
          payment_capture: 1,
          currency: "INR",
        },
        {
          withCredentials: true,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        if (!res.data.data) {
          alert("Some error occured! Retry.");
          return;
        } else {
          console.log(res.data);
          let options = {
            key: "rzp_test_uZGiUOHM6LJi8D",
            currency: res.data.data.currency,
            amount: res.data.data.amount,
            order_id: res.data.data.id,
            name: "Aidinty",
            description: "Test Transaction",
            image: "https://i.ibb.co/JxstzBG/Group-1-2.png",
            handler: async function (response) {
              // console.log("response--", response);
              const paymentDetails = await axios
                .post("http://localhost:8080/carddetails", response, {
                  withCredentials: true,
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                })
                .then((payRes) => {
                  if (!payRes) {
                    alert("Payment Failed!");
                    return;
                  } else {
                    console.log(payRes.data.data);
                    const confirmPayment = axios
                      .post(
                        "http://localhost:8080/confirmpayment",
                        {
                          cid: id,
                          uid: authUser.state.id,
                          ordId: ordId,
                          amount: amt,
                        },
                        {
                          withCredentials: true,
                          headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                          },
                        }
                      )
                      .then((rs) => {
                        console.log("afterpayment", rs);
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }
                })
                .catch((err) => {
                  console.log(err);
                });
            },
            prefill: {
              email: "fakeemail@gmail.com",
              contact: 1111111111,
            },
            notes: {
              address: "Powered by Razorpay",
            },
            theme: {
              color: "#8E5BEB",
            },
          };
          let paymentWindow = new window.Razorpay(options);
          paymentWindow.open();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCamp = async () => {
    axios
      .get(`http://localhost:8080/findcamp/${id}`, {
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => setCamp(res.data));
  };

  useEffect(() => {
    getCamp();
  }, []);

  const pct = Math.trunc((camp.amountRaised / camp.amountRequested) * 100);

  return (
    <>
      <Navbar />
      <Grid spacing={0} container>
        <Grid xs={12} sm={7} item>
          <div
          className="paydiv1"
            style={{
              minHeight: "92vh",
              display: "flex",
              flexDirection: "column",
              
              marginTop: "8vh",
            }}
          >
            <div
            className="titlearea"
              style={{
                display: "flex",
                justifyContent: "space-between",
                justifyItems: "center",
                alignItems: "center",
              }}
            >
              <Typography
              
                sx={{
                  textAlign: "left",
                  color: "#fff",
                  fontWeight: 600,
                  display: "inline",
                  float: "left",
                }}
                variant="h3"
              >
                {camp.title}
              </Typography>
              <Typography

                sx={{
                  textAlign: "left",
                  fontWeight: 600,
                  display: "inline",
                  float: "right",
                  color: "#0BDA51",
                }}
                variant="h5"
              >
                {pct}%
              </Typography>
            </div>
            <Card className="underarea" sx={{ backgroundColor: "#000" }}>
              <Typography
              
                sx={{
                  fontWeight: 400,
                  marginTop: "1.5%",
                  display: "inline",
                  float: "left",
                }}
                color="#666666"
                variant="h5"
              >
                {camp.gender}/{camp.age} ({camp.city}, {camp.state})
              </Typography>
              <Typography
             
                sx={{
                  textAlign: "right",
                  fontWeight: 400,
                  marginTop: "1.5%",
                  display: "inline",
                  float: "right",
                }}
                color="secondary"
                variant="h5"
              >
                {camp.donors ? camp.donors.length : 0} donations
              </Typography>
            </Card>
            <Divider color="#dadada" sx={{ margin: "2% 0%" }} />
            <Typography
              sx={{ fontWeight: 400, margin: "2% 4%" }}
              color="#aaaaaa"
              variant="h6"
            >
              {camp.description}
            </Typography>

            <Typography
              sx={{
                fontWeight: 400,
                marginTop: "1.5%",
                display: "inline",
                float: "right",
              }}
              color="#666666"
              variant="h6"
            >
              <span style={{ color: "#8E5BEB" }}>Patient's Name : </span>
              {camp.campaignHolder}
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                marginTop: "0.5%",
                display: "inline",
                float: "right",
              }}
              color="#666666"
              variant="h6"
            >
              <span style={{ color: "#8E5BEB" }}>
                Total collections till now :&nbsp;&nbsp;
              </span>
              <span style={{ color: "#fff" }}>₹{camp.amountRaised} </span>/ ₹
              {camp.amountRequested}
            </Typography>

            <Divider color="#dadada" sx={{ margin: "2% 0%" }} />
          </div>
        </Grid>
        <Grid xs={12} sm={5} item>
          <Box
            className="paydiv"
            sx={{
              backgroundColor: "#111111",
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
             
            }}
          >
            <Typography sx={{ marginTop: "8vh" }} color="#fff" variant="h5">
              Donate to help
            </Typography>
            <Typography
              sx={{ color: "#8E5BEB", fontWeight: 500 }}
              color="#fff"
              variant="h4"
            >
              {camp.campaignHolder}
            </Typography>
            <Box className="payinput" sx={{ width: "100%", display: "flex" }}>
              <Typography
                sx={{ marginTop: "50px", fontWeight: 500, color: "#8E5BEB" }}
                variant="h3"
              >
                ₹
              </Typography>
              <TextField
                className="amtbox"
                sx={{
                  "& input": {
                    color: "#fff",
                  },
                  "& .MuiInputLabel-root": { color: "white" },
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": {
                      borderColor: "#fff",
                      borderRadius: 2,
                    },
                  },
                  "& .MuiOutlinedInput-root:hover": {
                    "& > fieldset": {
                      borderColor: "#fff",
                      borderRadius: 2,
                      color: "white",
                    },
                  },
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                      borderColor: "#fff",
                      borderRadius: 2,
                    },
                  },
                  "& .MuiFormHelperText-root": {
                    marginTop: "1%",
                    fontSize: "15px",
                    color: "#dadada !important",
                  },

                  marginTop: "50px",
                  marginLeft: "15px",
                }}
                inputMode="dark"
                value={amt}
                onChange={(eve) => setAmt(eve.target.value)}
                size="large"
                type="number"
                name="amount"
                label="Amount"
                variant="outlined"
                inputProps={{ min: 0, style: { color: "#fff" } }}
                helperText={`You can donate a maximum of ₹${
                  camp.amountRequested - camp.amountRaised
                } for now.`}
              />
            </Box>
            {amt &&
            amt > 0 &&
            amt <= camp.amountRequested - camp.amountRaised ? (
              <Button
                className="donatebutton"
                sx={{ borderRadius: 2, fontWeight: 600, marginTop: "3%" }}
                type="submit"
                variant="contained"
                color="secondary"
                onClick={donateAmt}
              >
                Donate➜
              </Button>
            ) : (
              <Button
                className="donatebutton"
                sx={{
                  borderRadius: 2,
                  fontWeight: 600,
                  "&.Mui-disabled": {
                    background: "#4f4f4f",
                    color: "#9b9e9e",
                  },
                  marginTop: "3%",
                }}
                variant="contained"
                disabled
              >
                Donate➜
              </Button>
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default CampPage;
