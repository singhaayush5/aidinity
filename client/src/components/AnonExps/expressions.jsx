import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Navbar from "../Navbar/navbar";
import ExpCard from "./expcard";
import axios from "axios";

const Expressions = () => {
  const [exps, setExps] = useState([]);
  console.log(exps);

  useEffect(() => {
    axios
      .get("http://localhost:8080/allexps", {
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => setExps(res.data));
  },[]);

  return (
    <>
      <Navbar />
      <Grid sx={{ padding: "2%", marginTop: "8vh" }} container spacing={2}>
      {
        exps.map((exp) => (
          <ExpCard 
            key={exp._id}
            id={exp._id}
            title={exp.title}
            age={exp.age}
            gender={exp.gender}
            state={exp.state}
            city={exp.city}
            expression={exp.expression}
            comments={exp.comments}
          />
        ))
      }
        
      </Grid>
    </>
  );
};

export default Expressions;
