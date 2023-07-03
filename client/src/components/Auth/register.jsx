import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
  OutlinedInput,
  IconButton,
  Collapse,
  Alert,
  
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import register from "../../assets/register.jpg";
import logowhite from "../../assets/logowhite.png";
import axios from "axios";
import { useState, useEffect } from "react";
import "./auth.css";
import { motion } from "framer-motion";
import Footer from "../Footer/footer";
import { useNavigate } from "react-router-dom";
const BASE_URL = import.meta.env.VITE_BASE_URL;

function Register() {
  const navigate = useNavigate();
  const [regError, setRegError] = useState(false);

  useEffect(() => {
    document.title = "Register | Aidinity";
  }, []);

  const [showPassword, setShowPassword] = useState(false);
  const [showCnfPassword, setShowCnfPassword] = useState(false);

  const [user, setUser] = useState({
    name: null,
    age: null,
    gender: null,
    email: null,
    password: null,
    cnfpassword: null,
  });

  const handleChange = (eve) => {
    setUser({ ...user, [eve.target.name]: eve.target.value });
  };

  const postUserData = async (eve) => {
    eve.preventDefault();
    const { name, age, gender, email, password, cnfpassword } = user;

    const res = await axios
      .post(
        `${BASE_URL}/register`,
        {
          name: name,
          age: age,
          gender: gender,
          email: email,
          password: password,
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => { 
        if(response.status === 202) setRegError(true);
        else navigate("/login");
    })
      .catch((err) => {
        console.log(err);
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
            className="banner"
            style={{ width: "100%", margin: 0, zIndex: -2 }}
            src={register}
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
            className="form"
            style={{
              backgroundColor: "#111",
              minHeight: "100vh",
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
                margin: "1% auto",
                textShadow: "4px 4px #000",
              }}
              variant="h3"
              align="Center"
            >
              Register
            </Typography>
            <motion.div
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
                          name="name"
                          value={user.name}
                          onChange={handleChange}
                          label="Full name"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid xs={6} sm={6} item>
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
                          name="age"
                          type="number"
                          value={user.age}
                          inputProps={{ min: 0 }}
                          onChange={handleChange}
                          label="Age"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid xs={6} sm={6} item>
                        <FormControl
                          name="gender"
                          fullWidth
                          required
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
                        >
                          <InputLabel size="small" id="select-gender-label">
                            Gender
                          </InputLabel>
                          <Select
                            size="small"
                            sx={{
                              color: "#fff",
                              ".MuiSvgIcon-root ": {
                                fill: "white !important",
                              },
                            }}
                            MenuProps={{
                              sx: {
                                "&& .Mui-selected": {
                                  backgroundColor: "#3b3b3b",
                                  color: "#fff",
                                },
                              },
                            }}
                            value={user.gender}
                            name="gender"
                            onChange={handleChange}
                            labelId="select-gender-label"
                            label="gender"
                          >
                            <MenuItem value={"F"}>Female</MenuItem>
                            <MenuItem value={"M"}>Male</MenuItem>
                            <MenuItem value={"O"}>Others</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
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
                          name="cnfpassword"
                          value={user.cnfpassword}
                          onChange={handleChange}
                          required
                          fullWidth
                        >
                          <InputLabel htmlFor="outlined-adornment-password">
                            Confirm Password
                          </InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-password"
                            name="cnfpassword"
                            type={showCnfPassword ? "text" : "password"}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={() =>
                                    setShowCnfPassword(!showCnfPassword)
                                  }
                                  onMouseDown={(eve) => eve.preventDefault()}
                                  edge="end"
                                >
                                  {showCnfPassword ? (
                                    <VisibilityOff style={{ color: "#fff" }} />
                                  ) : (
                                    <Visibility style={{ color: "#fff" }} />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                            label="Confirm Password"
                          />
                        </FormControl>
                      </Grid>
                      <Grid xs={12} item>
                        {user.name &&
                        user.age &&
                        user.gender &&
                        user.email &&
                        user.password &&
                        user.password === user.cnfpassword ? (
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
                        <Collapse in={regError}>
                          <Alert
                            severity="error"
                            action={
                              <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                  setRegError(!regError);
                                }}
                              >
                                <CloseIcon fontSize="inherit" />
                              </IconButton>
                            }
                            sx={{ mb: 2 }}
                          >
                            <strong>Email</strong> already exists.
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
                          Already have an account?{" "}
                          <span style={{ color: "#fff" }}>
                            <a
                              style={{
                                textDecoration: "none",
                                color: "#8E5BEB",
                              }}
                              href="/login"
                            >
                              &nbsp;Login➜
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

export default Register;
