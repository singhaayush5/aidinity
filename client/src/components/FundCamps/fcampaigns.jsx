import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Navbar from "../Navbar/navbar";
import CampCard from "./campcard";
import axios from "axios";

const FCampaigns = () => {
  const [camps, setCamps] = useState([]);
  console.log(camps);

  useEffect(() => {
    axios
      .get("http://localhost:8080/allcamps", {
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => setCamps(res.data));
  },[]);

  return (
    <>
      <Navbar />
      <Grid sx={{ padding: "2%", marginTop: "8vh" }} container spacing={2}>
      {
        camps.map((camp) => (
          <CampCard 
            key={camp._id}
            title={camp.title}
            holder={camp.campaignHolder}
            age={camp.age}
            gender={camp.gender}
            state={camp.state}
            city={camp.city}
            amtRequested={camp.amountRequested}
            amtRaised={camp.amountRaised}
            description={camp.description}
          />
        ))
      }
        
      </Grid>
    </>
  );
};

export default FCampaigns;
