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
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import axios from "axios";
import { motion } from "framer-motion";
import Footer from "../Footer/footer";
const BASE_URL = import.meta.env.VITE_BASE_URL;
import Cookies from "universal-cookie";
const cookies = new Cookies();


const NewCampaign = () => {
  const navigate = useNavigate();

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "AN Island",
    "Chandigarh",
    "D&NH/D&D",
    "Delhi",
    "Ladakh",
    "Lakshadweep",
    "J&K",
    "Puducherry",
  ];

  const [camp, setCamp] = useState({
    fname: null,
    lname: null,
    age: null,
    gender: null,
    disease: null,
    description: null,
    amt: null,
    state: null,
    city: null,
    accno: null,
    accholder: null,
    ifsc: null,
  });

  const handleChange = (eve) => {
    setCamp({ ...camp, [eve.target.name]: eve.target.value });
  };

  const postCampData = async (eve) => {
    eve.preventDefault();
    try {
      const token = cookies.get("jwebtoken");
      const {
        fname,
        lname,
        age,
        gender,
        disease,
        description,
        amt,
        state,
        city,
        accno,
        accholder,
        ifsc,
      } = camp;

      const fullname = fname + " " + lname;

      const res = await axios
        .post(
          `${BASE_URL}/newcampaign`,
          {
            name: fullname,
            age: age,
            gender: gender,
            disease: disease,
            description: description,
            amt: amt,
            state: state,
            city: city,
            accno: accno,
            accholder: accholder,
            ifsc: ifsc,
          },
          {
            
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          if (response.status === 200) navigate("/fundcampaigns");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

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
        if (res.status != 200) navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        navigate("/login");
      });

    document.title = "New Campaign | Aidinity";
  });

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
            fontWeight: 600,
            letterSpacing: 1,
            margin: "1% 0%",
            textShadow: "4px 4px #000",
          }}
          color="#fff"
          variant="h1"
        >
          <span style={{ color: "#0BDA51", fontWeight: 700 }}>Start</span> a new
          fundraiser campaign.
        </Typography>
        <Typography color="#777777" variant="h6" sx={{ letterSpacing: 1 }}>
          Filling in all the details is mandatory.
        </Typography>
        <motion.div
          className="buttondiv"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Card
            sx={{
              width: "65%",
              backgroundColor: "#222222",
              padding: 5,
              borderRadius: 7,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginBottom: "4vh",
              marginTop: "3vh",
              boxShadow: "10px 10px 0px 0px #000",
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
                        variant="filled"
                        name="gender"
                        onChange={handleChange}
                        value={camp.gender}
                        labelId="select-gender-label"
                        label="Gender"
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
                      DOMICILE DETAILS
                    </Typography>
                  </Grid>
                  <Grid xs={12} sm={12} item>
                    <Divider color="#444444" />
                  </Grid>
                  <Grid xs={6} sm={6} item>
                    <FormControl
                      name="state"
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
                        State/UT
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
                        name="state"
                        onChange={handleChange}
                        value={camp.state}
                        labelId="select-state-label"
                        label="state"
                      >
                        {states.map((state, idx) => (
                          <MenuItem key={idx + 1} value={state}>
                            {state}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
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
                      name="city"
                      label="City"
                      variant="filled"
                      onChange={handleChange}
                      value={camp.city}
                      fullWidth
                      required
                    />
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
                      helperText="Atleast 400 characters."
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
                    <Typography
                      color="#777777"
                      sx={{ letterSpacing: 1, marginTop: 1, fontSize: "13px" }}
                    >
                      (Please fill carefully. These are immutable.)
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
                      value={camp.accno}
                      onChange={handleChange}
                      name="accno"
                      label="Bank Account no. (for disbursing collections)"
                      variant="filled"
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
                      value={camp.accholder}
                      onChange={handleChange}
                      name="accholder"
                      label="Account holder"
                      variant="filled"
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
                      value={camp.ifsc}
                      onChange={handleChange}
                      name="ifsc"
                      label="Branch IFSC Code"
                      variant="filled"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid xs={12} sm={12} item>
                    {camp.fname &&
                    camp.lname &&
                    camp.age &&
                    camp.gender &&
                    camp.disease &&
                    camp.state &&
                    camp.city &&
                    camp.description &&
                    camp.description.length > 399 &&
                    camp.amt &&
                    camp.amt > 0 &&
                    camp.accno &&
                    camp.accno.length > 0 &&
                    camp.accholder &&
                    camp.accholder.length > 0 &&
                    camp.ifsc &&
                    camp.ifsc.length === 11 ? (
                      <Button
                        sx={{ borderRadius: 2, fontWeight: 600 }}
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
                          borderRadius: 2,
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
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default NewCampaign;
