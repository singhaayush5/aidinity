import {
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Divider,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import Navbar from "../Navbar/navbar";
import axios from "axios";

const NewCampaign = () => {
  const [camp, setCamp] = useState({
    fname: null,
    lname: null,
    age: null,
    sex: null,
    disease: null,
    description: null,
    amt: null,
  });

  const handleChange = (eve) => {
    console.log(camp);
    setCamp({ ...camp, [eve.target.name]: eve.target.value });
  };

  const postCampData = async (eve) => {
    eve.preventDefault();
    try {
      const { fname, lname, age, sex, disease, description, amt } = camp;

      const fullname = fname + " " + lname;

      const res = await axios
        .post(
          "http://localhost:8080/newcampaign",
          {
            name: fullname,
            age: age,
            sex: sex,
            disease: disease,
            description: description,
            amt: amt,
          },
          {
            withCredentials: true,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "8vh",
        }}
      >
        <Typography
          sx={{
            fontSize: "2.5vw",
            fontWeight: 500,
            letterSpacing: 1,
            margin: "1% 0%",
          }}
          color="#fff"
          variant="h1"
        >
          <span style={{ color: "#8E5BEB" }}>Start</span> a new fundraiser
          campaign.
        </Typography>
        <Card
          sx={{
            width: "65%",
            backgroundColor: "#2a2727",
            padding: 5,
            borderRadius: 7,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <CardContent>
            <form>
              <Grid container spacing={2}>
                <Grid xs={12} sm={12} item>
                  <Typography color="#777777" sx={{ letterSpacing: 1 }}>
                    PERSONAL DETAILS
                  </Typography>
                </Grid>
                <Grid xs={12} sm={12} item>
                  <Divider color="#444444" />
                </Grid>
                <Grid xs={6} sm={6} item>
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
                    name="fname"
                    onChange={handleChange}
                    value={camp.fname}
                    label="First Name"
                    variant="filled"
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
                      //   marginLeft:1
                    }}
                    inputMode="dark"
                    size="small"
                    name="lname"
                    onChange={handleChange}
                    value={camp.lname}
                    label="Last Name"
                    variant="filled"
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
                    onChange={handleChange}
                    value={camp.age}
                    inputProps={{ min: 0 }}
                    label="Age"
                    variant="filled"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={6} sm={6} item>
                  <FormControl
                    name="sex"
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
                    <InputLabel size="small" id="select-sex-label">
                      Sex
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
                      variant="filled"
                      name="sex"
                      onChange={handleChange}
                      value={camp.sex}
                      labelId="select-sex-label"
                      label="sex"
                    >
                      <MenuItem value={"F"}>Female</MenuItem>
                      <MenuItem value={"M"}>Male</MenuItem>
                      <MenuItem value={"O"}>Others</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid xs={12} sm={12} item>
                  <Typography
                    color="#777777"
                    sx={{ letterSpacing: 1, marginTop: 4 }}
                  >
                    DISEASE/DISABILITY DETAILS
                  </Typography>
                </Grid>
                <Grid xs={12} sm={12} item>
                  <Divider color="#444444" />
                </Grid>
                <Grid xs={12} sm={12} item>
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
                    name="disease"
                    label="Disease/Disability suffering from"
                    variant="filled"
                    onChange={handleChange}
                    value={camp.disease}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={12} item>
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
                      "& .MuiFormHelperText-root": {
                        color: "#dadada !important",
                      },
                    }}
                    inputMode="dark"
                    size="small"
                    name="description"
                    label="Description"
                    value={camp.description}
                    onChange={handleChange}
                    variant="filled"
                    inputProps={{ style: { color: "#fff" } }}
                    helperText="Atleast 200 characters."
                    multiline
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={12} item>
                  <Typography
                    color="#777777"
                    sx={{ letterSpacing: 1, marginTop: 4 }}
                  >
                    MONETARY DETAILS
                  </Typography>
                </Grid>
                <Grid xs={12} sm={12} item>
                  <Divider color="#444444" />
                </Grid>
                <Grid xs={12} sm={12} item>
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
                      //   marginLeft:1
                    }}
                    inputMode="dark"
                    size="small"
                    type="number"
                    value={camp.amt}
                    onChange={handleChange}
                    inputProps={{ min: 0 }}
                    name="amt"
                    label="Donation required (in ₹)"
                    variant="filled"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={12} item>
                  {camp.fname &&
                  camp.lname &&
                  camp.age &&
                  camp.sex &&
                  camp.disease &&
                  camp.description &&
                  camp.description.length > 199 &&
                  camp.amt &&
                  camp.amt > 0 ? (
                    <Button
                      sx={{ borderRadius: 0, fontWeight: 600 }}
                      type="submit"
                      variant="contained"
                      onClick={postCampData}
                      color="primary"
                      fullWidth
                    >
                      Create➜
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
                      Create➜
                    </Button>
                  )}
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default NewCampaign;
