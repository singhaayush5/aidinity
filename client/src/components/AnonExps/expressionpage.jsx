import {
  Card,
  Divider,
  Typography,
  Button,
  TextField,
  Grid,
  CircularProgress
} from "@mui/material";
import { useState, useContext, useEffect } from "react";
import UserContext from "../../context/user/usercontext";
import Navbar from "../Navbar/navbar";
import dummyman from "../../assets/dummyman.png";
import CommentBubble from "./commentbubble";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./exppage.css";
import { motion } from "framer-motion";
import Footer from "../Footer/footer";
const BASE_URL = import.meta.env.VITE_BASE_URL;
import Cookies from "universal-cookie";
const cookies = new Cookies();

const ExpressionPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [expression, setExpression] = useState({});
  const authUser = useContext(UserContext);
  const [cmmnt, setCmmnt] = useState(null);
  const { id } = useParams();

  const getExpression = async () => {
    axios
      .get(`${BASE_URL}/findexpression/${id}`, {
        
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => setExpression(res.data)).then(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  };

  useEffect(() => {
    getExpression();
  }, []);

  useEffect(() => {
    document.title = `${expression.title} | Aidinity`;
  }, [expression]);

  const addComment = async (eve) => {
    eve.preventDefault();
    const token = cookies.get("jwebtoken");
    const res = await axios
      .post(
        `${BASE_URL}/addcomment`,
        {
          eid: id,
          uid: authUser.state.id,
          age: authUser.state.age,
          gender: authUser.state.gender,
          comment: cmmnt,
        },
        {
          
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {})
      .catch((err) => {
        console.log(err);
      });

    navigate(0);
  };

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
      <Grid spacing={0} container>
        <Grid xs={12} sm={12} item>
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
              className="expdiv1"
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
                  {expression.title}
                </Typography>

                <img
                  style={{ width: "65px", display: "inline", float: "right" }}
                  src={dummyman}
                  alt=""
                ></img>
              </div>
              <Card
                className="underarea"
                elevation={0}
                sx={{ backgroundColor: "#111" }}
              >
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
                  {expression.gender}/{expression.age} ({expression.city},{" "}
                  {expression.state})
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
                  {expression.comments ? expression.comments.length : 0} comment
                  {(!expression.comments ||
                    expression.comments.length > 1 ||
                    expression.comments.length < 1) &&
                    "s"}
                </Typography>
              </Card>
              <Divider color="#dadada" sx={{ margin: "2% 0%" }} />
              <Typography
                sx={{ fontWeight: 400, margin: "2% 4%" }}
                color="#aaaaaa"
                variant="h6"
              >
                {expression.expression}
              </Typography>

              <Divider color="#dadada" sx={{ margin: "2% 0%" }} />

              <div style={{ margin: "1% 5%" }}>
                {authUser.state.id && (
                  <>
                    <Card
                      elevation={0}
                      sx={{
                        backgroundColor: "#111",
                        paddingTop: "1%",
                        borderRadius: 0,
                        marginBottom: "5%",
                        padding: "10px",
                      }}
                    >
                      <div
                        style={{
                          display: "inline",
                          float: "left",
                          width: "78%",
                        }}
                      >
                        <TextField
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
                          }}
                          inputMode="dark"
                          size="small"
                          name="comment"
                          value={cmmnt}
                          onChange={(eve) => setCmmnt(eve.target.value)}
                          label="Comment"
                          variant="outlined"
                          inputProps={{ style: { color: "#fff" } }}
                          multiline
                          fullWidth
                        />
                      </div>

                      {cmmnt ? (
                        <Button
                          sx={{
                            marginTop: "0.2%",
                            fontWeight: 600,
                            borderRadius: 2,
                            display: "inline",
                            float: "right",
                            width: "20%",
                          }}
                          color="secondary"
                          variant="contained"
                          onClick={addComment}
                        >
                          Add +
                        </Button>
                      ) : (
                        <Button
                          sx={{
                            marginTop: "0.2%",
                            fontWeight: 600,
                            borderRadius: 2,
                            display: "inline",
                            float: "right",
                            width: "20%",
                            "&.Mui-disabled": {
                              background: "#4f4f4f",
                              color: "#9b9e9e",
                            },
                          }}
                          variant="contained"
                          disabled
                          fullWidth
                        >
                          Add +
                        </Button>
                      )}
                    </Card>
                  </>
                )}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {expression.comments &&
                    expression.comments.map((comm, idx) => (
                      <CommentBubble
                        key={idx}
                        age={comm.age}
                        gender={comm.gender}
                        comment={comm.comment}
                        uid={comm.uid}
                        eid={id}
                        num={idx + 1}
                      />
                    ))}
                </div>
              </div>
            </div>
          </motion.div>
        </Grid>
      </Grid>
      </>}
      <Footer />
    </>
  );
};

export default ExpressionPage;
