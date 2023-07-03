import {
  Card,
  Divider,
  Typography,
  Button,
  TextField,
  Grid,
  Box,
  Snackbar,
  CircularProgress
} from "@mui/material";
import { useState, useContext, useEffect } from "react";
import UserContext from "../../context/user/usercontext";
import Navbar from "../Navbar/navbar";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./camppage.css";
import { motion } from "framer-motion";
import Footer from "../Footer/footer";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const CampPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [camp, setCamp] = useState({});
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const [amt, setAmt] = useState(null);
  const [details, setDetails] = useState("");

  const authUser = useContext(UserContext);
  const { id } = useParams();

  const { vertical, horizontal, open } = state;

  const handleOpen = () => {
    setState({ ...state, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
    navigate(0);
  };

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
        `${BASE_URL}/createpayment`,
        {
          order_id: ordId,
          amount: amt.toString(),
          payment_capture: 1,
          currency: "INR",
        },
        {
          
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (!res.data.data) {
          alert("Some error occured! Retry.");
          return;
        } else {
          let options = {
            key: import.meta.env.VITE_RZP_KEY,
            currency: res.data.data.currency,
            amount: res.data.data.amount,
            order_id: res.data.data.id,
            name: "Aidinity",
            description: "Test Transaction",
            image: "https://i.ibb.co/JxstzBG/Group-1-2.png",
            handler: async function (response) {
              const paymentDetails = await axios
                .post(`${BASE_URL}/paymentdetails`, response, {
                  
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
                    if (payRes.data.data.status !== "captured") {
                      alert("Payment wasn't completed!");
                      return;
                    }
                    const confirmPayment = axios
                      .post(
                        `${BASE_URL}/confirmpayment`,
                        {
                          cid: id,
                          uid: authUser.state.id,
                          ordId: ordId,
                          amount: amt,
                        },
                        {
                          
                          headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                          },
                        }
                      )
                      .then((rs) => {
                        setDetails(`Successful donation!\n
                        Please keep these details for future needs.\n
                        Donation ID : ${ordId}\n
                        Amount : ₹${amt}`);
                        handleOpen();
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
              email: "aidinity23@gmail.com",
              contact: 919905467583,
            },
            notes: {
              Payment_gateway: "Powered by Razorpay",
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
      .get(`${BASE_URL}/findcamp/${id}`, {
        
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => setCamp(res.data)).then(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  };

  useEffect(() => {
    getCamp();
  }, []);

  useEffect(() => {
    document.title = `${camp.title} | Aidinity`;
  }, [camp]);

  const pct = Math.trunc((camp.amountRaised / camp.amountRequested) * 100);

  let topDonors = camp.donors;
  if (topDonors && topDonors.length > 0)
    topDonors.sort((a, b) => b.amount - a.amount).slice(0, 5);

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
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        sx={{ height: "auto", padding: 0, whiteSpace: "pre-line" }}
        onClose={handleClose}
        message={details}
        key={vertical + horizontal}
        action={
          <Button sx={{ boxShadow: "0px 0px" }} onClick={handleClose}>
            OK
          </Button>
        }
      />
      <Grid spacing={0} container>
        <Grid xs={12} sm={7} item>
          <motion.div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
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
                    color: "#DECCFF",
                    fontWeight: 600,
                    display: "inline",
                    float: "left",
                    textShadow: "4px 4px #000",
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
              <Card className="underarea" sx={{ backgroundColor: "#111" }}>
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
                  {camp.donors ? camp.donors.length : 0} donation
                  {(!camp.donors ||
                    camp.donors.length > 1 ||
                    camp.donors.length < 1) &&
                    "s"}
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
                <span style={{ color: "#8E5BEB" }}>Patient&apos;s Name : </span>
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

              <Divider color="#dadada" sx={{ margin: "2% 0% 0% 0%" }} />
              {topDonors && topDonors.length > 0 && (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Typography
                    sx={{ color: "#8E5BEB", fontWeight: 600, marginTop: "3vh" }}
                    color="#fff"
                    variant="h5"
                  >
                    Top Donations&nbsp;
                    <span style={{ color: "#fff" }}>of the campaign</span>
                  </Typography>
                </div>
              )}

              <div style={{ display: "flex", justifyContent: "center" }}>
                {topDonors && topDonors.length > 0 && (
                  <table
                    style={{
                      color: "#F5F5DC",
                      width: "100%",
                      marginTop: "3vh",
                      marginBottom: "3vh",
                      boxShadow: "11px 11px #000",
                    }}
                  >
                    <tr>
                      <th>
                        <Typography variant="h6">Rank</Typography>
                      </th>
                      <th>
                        <Typography variant="h6">Donor</Typography>
                      </th>
                      <th>
                        <Typography variant="h6">Amount</Typography>
                      </th>
                    </tr>

                    {topDonors &&
                      topDonors.length > 0 &&
                      topDonors.map(
                        (donor, idx) =>
                          idx < 5 && (
                            <>
                              <tr>
                                <td>
                                  <Typography
                                    sx={{ textAlign: "center" }}
                                    variant="h6"
                                  >
                                    #{idx + 1}
                                  </Typography>
                                </td>
                                <td>
                                  <Typography
                                    sx={{ textAlign: "center" }}
                                    variant="h6"
                                  >
                                    {donor.donorName}
                                  </Typography>
                                </td>
                                <td>
                                  <Typography
                                    sx={{ textAlign: "center" }}
                                    variant="h6"
                                  >
                                    ₹{donor.amount}
                                  </Typography>
                                </td>
                              </tr>
                            </>
                          )
                      )}
                  </table>
                )}
              </div>
            </div>
          </motion.div>
        </Grid>

        <Grid xs={12} sm={5} item>
          <Box
            className="paydiv"
            sx={{
              backgroundColor: "#222",
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {authUser.state.id ? (
              <>
                {" "}
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
                <Box
                  className="payinput"
                  sx={{ width: "100%", display: "flex" }}
                >
                  <Typography
                    sx={{
                      marginTop: "50px",
                      fontWeight: 500,
                      color: "#8E5BEB",
                    }}
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
                      zIndex: 0,
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
                )}{" "}
              </>
            ) : (
              <>
                <div
                  style={{
                    display: "flex",
                    width: "32.5%",
                    justifyContent: "center",
                    marginTop: "15%",
                  }}
                >
                  <Typography
                    sx={{ fontWeight: 500, marginTop: "3%" }}
                    color="#bbb"
                    variant="h6"
                  >
                    To continue donating
                  </Typography>
                </div>{" "}
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
                <div
                  style={{
                    display: "flex",
                    width: "32.5%",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{ fontWeight: 500, marginTop: "3%" }}
                    color="#bbb"
                    variant="h6"
                  >
                    OR
                  </Typography>
                </div>
                <Button
                  className="donatebutton"
                  sx={{
                    borderRadius: 2,
                    fontWeight: 600,
                    marginTop: "1%",
                    color: "#000",
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
              </>
            )}
          </Box>
        </Grid>
      </Grid>
      </>}
      <Footer />
    </>
  );
};

export default CampPage;
