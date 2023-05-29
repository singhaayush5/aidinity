import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import register from "../../assets/register.jpg";

import { useState } from "react";
import "./auth.css";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (eve) => {
    console.log(user);
    setUser({ ...user, [eve.target.name]: eve.target.value });
    console.log(user.branch);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
          alignItems: "center",
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
              backgroundColor: "#000",
              minHeight: "100vh",
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              style={{ fontWeight: 600, color: "#fff", margin: "1% auto" }}
              variant="h3"
              align="Center"
            >
              Register
            </Typography>
            <Card
              style={{
                backgroundColor: "#000",
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
                          "& .MuiInputLabel-root": { color: "white" }, //styles the label
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
                    <Grid xs={12} item>
                      <TextField
                        sx={{
                          "& input": {
                            color: "#fff",
                          },
                          "& .MuiInputLabel-root": { color: "white" }, //styles the label
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
                      <TextField
                        sx={{
                          "& input": {
                            color: "#fff",
                          },
                          "& .MuiInputLabel-root": { color: "white" }, //styles the label
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
                        size="small"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        type="password"
                        label="Password"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <TextField
                        sx={{
                          "& input": {
                            color: "#fff",
                          },
                          "& .MuiInputLabel-root": { color: "white" }, //styles the label
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
                        size="small"
                        name="cnfpassword"
                        value={user.cnfpassword}
                        onChange={handleChange}
                        type="password"
                        label="Confirm password"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <Button
                        sx={{ borderRadius: 0, fontWeight: 600 }}
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                      >
                        Submit
                      </Button>
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
                            style={{ textDecoration: "none", color: "#fff" }}
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
