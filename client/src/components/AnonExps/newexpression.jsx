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

const NewExpression = () => {
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

  const [exp, setExp] = useState({
    title: null,
    state: null,
    city: null,
    expression: null,
  });

  const handleChange = (eve) => {
    setExp({ ...exp, [eve.target.name]: eve.target.value });
  };

  const postExpData = async (eve) => {
    eve.preventDefault();
    try {
      const token = cookies.get("jwebtoken");
      const { title, state, city, expression } = exp;

      const res = await axios
        .post(
          `${BASE_URL}/newexpression`,
          {
            title: title,
            state: state,
            city: city,
            expression: expression,
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
          if (response.status === 200) navigate("/expressions");
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

    document.title = "New Expression | Aidinity";
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
          minHeight: "92vh",
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
          Add a new{" "}
          <span style={{ color: "#FF7F50", fontWeight: 700 }}>anonymous</span>{" "}
          expression now
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
              marginTop: "1vh",
              padding: 5,
              borderRadius: 7,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              boxShadow: "10px 10px 0px 0px #000",
              marginBottom: "5vh",
            }}
          >
            <CardContent>
              <form>
                <Grid container spacing={2}>
                  <Grid xs={12} sm={12} item>
                    <Typography color="#777777" sx={{ letterSpacing: 1 }}>
                      HEADERS
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
                      name="title"
                      onChange={handleChange}
                      value={exp.title}
                      label="Title"
                      variant="filled"
                      fullWidth
                      required
                    />
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
                        value={exp.state}
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
                      value={exp.city}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid xs={12} sm={12} item>
                    <Typography
                      color="#777777"
                      sx={{ letterSpacing: 1, marginTop: 4 }}
                    >
                      CONTENT
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
                        "& .MuiFormHelperText-root": {
                          color: "#dadada !important",
                        },
                      }}
                      inputMode="dark"
                      size="small"
                      name="expression"
                      label="Expression"
                      value={exp.expression}
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
                    {exp.title &&
                    exp.state &&
                    exp.city &&
                    exp.expression &&
                    exp.expression.length > 399 ? (
                      <Button
                        sx={{ borderRadius: 2, fontWeight: 600 }}
                        type="submit"
                        variant="contained"
                        onClick={postExpData}
                        color="primary"
                        fullWidth
                      >
                        Add➜
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
                        Add➜
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

export default NewExpression;
