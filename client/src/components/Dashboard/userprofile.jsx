import { useContext, useEffect, useState } from "react";
import { Divider, Typography, CircularProgress } from "@mui/material";
import UserContext from "../../context/user/usercontext";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;
import "./dashboard.css";
import { motion } from "framer-motion";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const UserProfile = () => {
  const [usr, setUsr] = useState({});
  const [loading, setLoading] = useState(true);
  const authUser = useContext(UserContext);

  useEffect(() => {
    const token = cookies.get("jwebtoken");
    axios
      .get(`${BASE_URL}/checkuser`, {
        
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUsr(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });

    document.title = "User Profile | Aidinity";
  }, []);

  return (
    <>
      {" "}
      <Navbar />{" "}
      {loading ? <>
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
        </> :
      <>
      {usr._id ? (
        <motion.div
          className="buttondiv"
          style={{
            width: "100%",
          }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div
            style={{
              width: "100%",
              minHeight: "92vh",
              marginTop: "8vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
            }}
          >
            <Typography
              sx={{ fontWeight: 500, textAlign: "center", color: "#FDC9FF" }}
              variant="h3"
            >
              User Profile Details
            </Typography>
            <Typography
              sx={{ fontWeight: 400, textAlign: "center", color: "#999" }}
              variant="h6"
            >
              All details are immutable.
            </Typography>
            <Divider color="#dadada" sx={{ margin: "1% 0%", width: "75%" }} />

            <table
              style={{
                color: "#F5F5DC",
                width: "70%",
                marginTop: "2vh",
                marginBottom: "3vh",
                boxShadow: "11px 11px #000",
              }}
            >
              <tr>
                <td>
                  <Typography
                    sx={{ textAlign: "center", color: "#D1FF8F" }}
                    variant="h6"
                  >
                    Name
                  </Typography>
                </td>
                <td>
                  <Typography sx={{ textAlign: "center" }} variant="h6">
                    {usr.name}
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography
                    sx={{ textAlign: "center", color: "#D1FF8F" }}
                    variant="h6"
                  >
                    Age
                  </Typography>
                </td>
                <td>
                  <Typography sx={{ textAlign: "center" }} variant="h6">
                    {usr.age}
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography
                    sx={{ textAlign: "center", color: "#D1FF8F" }}
                    variant="h6"
                  >
                    Gender
                  </Typography>
                </td>
                <td>
                  <Typography sx={{ textAlign: "center" }} variant="h6">
                    {usr.gender}
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography
                    sx={{ textAlign: "center", color: "#D1FF8F" }}
                    variant="h6"
                  >
                    Email ID
                  </Typography>
                </td>
                <td>
                  <Typography sx={{ textAlign: "center" }} variant="h6">
                    {usr.email}
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography
                    sx={{ textAlign: "center", color: "#D1FF8F" }}
                    variant="h6"
                  >
                    No. of fundraisers held
                  </Typography>
                </td>
                <td>
                  <Typography sx={{ textAlign: "center" }} variant="h6">
                    {usr.campaigns.length}
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography
                    sx={{ textAlign: "center", color: "#D1FF8F" }}
                    variant="h6"
                  >
                    No. of expressions published
                  </Typography>
                </td>
                <td>
                  <Typography sx={{ textAlign: "center" }} variant="h6">
                    {usr.expressions.length}
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography
                    sx={{ textAlign: "center", color: "#D1FF8F" }}
                    variant="h6"
                  >
                    No. of donations
                  </Typography>
                </td>
                <td>
                  <Typography sx={{ textAlign: "center" }} variant="h6">
                    {usr.donations.length}
                  </Typography>
                </td>
              </tr>
            </table>
          </div>
        </motion.div>
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
      </>}
      <Footer />
    </>
  );
};

export default UserProfile;
