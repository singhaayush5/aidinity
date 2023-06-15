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
} from "@mui/material";

import register from "../../assets/register.jpg";
import axios from "axios";
import { useState, useEffect} from "react";
import "./auth.css";

function Register() {
  useEffect(() => {
    document.title = "Aidinity | Register"
  },[])

  const [user, setUser] = useState({
    name: null,
    age: null,
    gender: null,
    email: null,
    password: null,
    cnfpassword: null,
  });

  const handleChange = (eve) => {
    console.log(user);
    setUser({ ...user, [eve.target.name]: eve.target.value });
    console.log(user.branch);
  };

  const postUserData = async (eve) => {
    eve.preventDefault();
    const { name, age, gender, email, password, cnfpassword } = user;

    const res = await axios
      .post(
        "http://localhost:8080/register",
        { name: name, age: age, gender: gender, email: email, password: password },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(res);
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
                      {user.name &&
                      user.age &&
                      user.gender &&
                      user.email &&
                      user.password &&
                      user.password === user.cnfpassword ? (
                        <Button
                          sx={{ borderRadius: 0, fontWeight: 600 }}
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
