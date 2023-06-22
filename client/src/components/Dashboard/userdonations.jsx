import { useEffect, useState, useContext } from "react";
import { Typography } from "@mui/material";
import UserContext from "../../context/user/usercontext";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;
import "./dashboard.css";
import { motion } from "framer-motion";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";

const UserDonations = () => {
  const authUser = useContext(UserContext);
  const [donations, setDonations] = useState([]);

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
        setDonations(res.data.donations);
      });

    document.title = "My Donations | Aidinity";
  }, []);

  return (
    <>
      {" "}
      <Navbar />{" "}
      {authUser.state.id ? (
        !donations || donations.length === 0 ? (
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
              You haven&apos;t <span style={{ color: "#8E5BEB" }}>donated</span>{" "}
              till now.
            </Typography>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              minHeight: "92vh",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "8vh",
            }}
          >
            <Typography
              sx={{
                fontSize: "2.5vw",
                fontWeight: 600,
                letterSpacing: 1,
                marginTop: "2vh",
                textShadow: "4px 4px #000",
              }}
              color="#fff"
              variant="h1"
            >
              You&apos;ve made these&nbsp;
              <span style={{ color: "#0BDA51", fontWeight: 700 }}>
                donations
              </span>
            </Typography>
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
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <table
                style={{
                  color: "#F5F5DC",
                  width: "85%",
                  marginTop: "3vh",
                  marginBottom: "3vh",
                  boxShadow: "11px 11px #000",
                }}
              >
                <tr>
                  <th>
                    <Typography variant="h6">S. No.</Typography>
                  </th>
                  <th>
                    <Typography variant="h6">Amount</Typography>
                  </th>
                  <th>
                    <Typography variant="h6">Donation ID</Typography>
                  </th>
                </tr>
                {donations &&
                  donations.length > 0 &&
                  donations.map((don, idx) => (
                    <>
                      <tr>
                        <td>
                          <Typography sx={{ textAlign: "center" }} variant="h6">
                            {idx + 1}
                          </Typography>
                        </td>
                        <td>
                          <Typography sx={{ textAlign: "center" }} variant="h6">
                            ₹{don.amount}
                          </Typography>
                        </td>
                        <td>
                          <Typography sx={{ textAlign: "center" }} variant="h6">
                            {don.donationId}
                          </Typography>
                        </td>
                      </tr>
                    </>
                  ))}
              </table>
            </motion.div>
          </div>
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
      <Footer />
    </>
  );
};

export default UserDonations;
