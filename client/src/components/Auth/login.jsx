import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Alert,
  Collapse,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import login from "../../assets/login.jpg";
import logowhite from "../../assets/logowhite.png";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/user/usercontext";
import "./auth.css";
import { motion } from "framer-motion";
import Footer from "../Footer/footer";
import Cookies from  "universal-cookie";
const BASE_URL = import.meta.env.VITE_BASE_URL;
const cookies = new Cookies();

function Login() {
  const navigate = useNavigate();
  const authUser = useContext(UserContext);

  const [loginError, setLoginError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    document.title = "Login | Aidinity";
  }, []);

  const [user, setUser] = useState({
    email: null,
    password: null,
  });

  const handleChange = (eve) => {
    setUser({ ...user, [eve.target.name]: eve.target.value });
  };

  const postUserData = async (eve) => {
    eve.preventDefault();
    const { email, password } = user;

    const res = await axios
      .post(
        `${BASE_URL}/login`,
        { email: email, password: password },
        {
          
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          cookies.set("jwebtoken", response.data.token, {path: "/"});
          authUser.getCurrUser();
          navigate("/");
        } else {
          console.log(response);
          setLoginError(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoginError(true);
      });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
          alignItems: "center",
          marginBottom: "3%",
        }}
      >
        <div
          className="authHalf"
          style={{ maxHeight: "100vh", overflow: "hidden" }}
        >
          <img
            className="banner form"
            style={{ width: "100%", margin: 0, zIndex: -2 }}
            src={login}
            alt=""
          ></img>
        </div>

        <div
          className="authHalf"
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#111",
              height: "100%",
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              style={{
                fontWeight: 600,
                color: "#DECCFF",
                margin: "2% auto",
                textShadow: "4px 4px #000",
              }}
              variant="h3"
            >
              Login
            </Typography>
            <motion.div
              className="buttondiv"
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                color: "transparent",
              }}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                ease: [0, 0.7, 0.2, 1.01],
              }}
            >
              <Card
                style={{
                  backgroundColor: "#111",
                  width: "80%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                elevation={0}
              >
                <CardContent>
                  <form>
                    <Grid container spacing={2}>
                      <Grid xs={12} item>
                        <TextField
                          sx={{
                            "& input": {
                              color: "#fff",
                            },
                            "& .MuiInputLabel-root": { color: "white" },
                            "& .MuiOutlinedInput-root": {
                              "& > fieldset": {
                                borderColor: "#fff",
                                borderRadius: 0,
                              },
                            },
                            "& .MuiOutlinedInput-root:hover": {
                              "& > fieldset": {
                                borderColor: "#fff",
                                borderRadius: 0,
                                color: "white",
                              },
                            },
                            "& .MuiOutlinedInput-root.Mui-focused": {
                              "& > fieldset": {
                                borderColor: "#fff",
                                borderRadius: 0,
                              },
                            },
                          }}
                          inputMode="dark"
                          size="small"
                          name="email"
                          value={user.email}
                          onChange={handleChange}
                          type="email"
                          label="Email"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid xs={12} item>
                        <FormControl
                          sx={{
                            "& input": {
                              color: "#fff",
                            },
                            "& .MuiInputLabel-root": { color: "white" },
                            "& .MuiOutlinedInput-root": {
                              "& > fieldset": {
                                borderColor: "#fff",
                                borderRadius: 0,
                              },
                            },
                            "& .MuiOutlinedInput-root:hover": {
                              "& > fieldset": {
                                borderColor: "#fff",
                                borderRadius: 0,
                                color: "grey",
                              },
                            },
                            "& .MuiOutlinedInput-root.Mui-focused": {
                              "& > fieldset": {
                                borderColor: "#fff",
                                borderRadius: 0,
                              },
                            },
                          }}
                          variant="outlined"
                          size="small"
                          name="password"
                          value={user.password}
                          onChange={handleChange}
                          required
                          fullWidth
                        >
                          <InputLabel htmlFor="outlined-adornment-password">
                            Password
                          </InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={() => setShowPassword(!showPassword)}
                                  onMouseDown={(eve) => eve.preventDefault()}
                                  edge="end"
                                >
                                  {showPassword ? (
                                    <VisibilityOff style={{ color: "#fff" }} />
                                  ) : (
                                    <Visibility style={{ color: "#fff" }} />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                            label="Password"
                          />
                        </FormControl>
                      </Grid>

                      <Grid xs={12} item>
                        {user.email && user.password ? (
                          <Button
                            sx={{
                              borderRadius: 0,
                              fontWeight: 600,
                              color: "#fff",
                            }}
                            type="submit"
                            onClick={postUserData}
                            variant="contained"
                            color="primary"
                            fullWidth
                          >
                            Submit
                          </Button>
                        ) : (
                          <Button
                            sx={{
                              borderRadius: 0,
                              fontWeight: 600,
                              "&.Mui-disabled": {
                                background: "#4f4f4f",
                                color: "#9b9e9e",
                              },
                            }}
                            variant="contained"
                            disabled
                            fullWidth
                          >
                            Submit
                          </Button>
                        )}
                      </Grid>
                      <Grid xs={12} item>
                        <Collapse in={loginError}>
                          <Alert
                            severity="error"
                            action={
                              <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                  setLoginError(!loginError);
                                }}
                              >
                                <CloseIcon fontSize="inherit" />
                              </IconButton>
                            }
                            sx={{ mb: 2 }}
                          >
                            <strong>Invalid credentials</strong> - retry.
                          </Alert>
                        </Collapse>
                      </Grid>
                      <Grid xs={12} item>
                        <Typography
                          sx={{
                            color: "#9b9e9e",
                            fontSize: "15px",
                            textAlign: "right",
                          }}
                          variant="h6"
                        >
                          Don&apos;t have an account?{" "}
                          <span style={{ color: "#fff" }}>
                            <a
                              style={{
                                textDecoration: "none",
                                color: "#8E5BEB",
                              }}
                              href="/register"
                            >
                              &nbsp;Register➜
                            </a>
                          </span>
                        </Typography>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
            <img
              className="bottomlogo"
              style={{ position: "absolute", bottom: "3vh", right: "5vh" }}
              src={logowhite}
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
