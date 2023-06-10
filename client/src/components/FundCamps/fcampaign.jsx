import { Card, Typography, Grid, Divider, Button,Box } from "@mui/material";
import Navbar from "../Navbar/navbar";
import LinearProgress from "@mui/material/LinearProgress";
import { useState } from "react";

const Fcampaign = () => {
  const [progress, setProgress] = useState(28);

  return (
    <>
      <Navbar />
      <Grid sx={{ padding: "2%", marginTop: "8vh" }} container spacing={2}>
        <Grid xs={12} sm={4} item>
          <Card
            sx={{
              backgroundColor: "#2a2727",
              padding: "5%",
              minHeight: 250,
              borderRadius: 3,
              
            }}
          >
            <Typography sx={{ fontWeight: 500 }} variant="h4" color="#fff">
              Thyroid Cancer
            </Typography>
            <Typography variant="h6" color="#797979">
              Mayuresh Jha (66/M) - Patna, Bihar
            </Typography>
            <Divider color="#000" sx={{ margin: "2% 0%" }} />
            <Typography color="#dadada" sx={{ fontSize: "15px", marginBottom:"4%" }} variant="h6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              facilisis mattis nulla, ut dignissim urna ultricies sed. In
              facilisis mi leo, quis efficitur turpis volutpat at. Sed pharetra
              fermentum est, quis placerat enim efficitur a. Inter ...
            </Typography>
            <Typography sx={{fontSize: "15px", display:"inline", float:"left"}} variant="h6" color="#797979">
              Raised ₹2000/₹10000
            </Typography>
            <Typography sx={{fontSize: "15px", textAlign:"right", display:"inline", float:"right"}} variant="h6" color="secondary">
              {progress}%
            </Typography>
            <Box sx={{ width: "100%" , display:"inline-block"}}>
              <LinearProgress sx={{borderRadius:2}} color="secondary" variant="determinate" value={progress} />
            </Box>
            <div style={{ marginTop: "2%" }}>
              <Button
                sx={{ fontWeight: 600, borderRadius:2 }}
                fullWidth
                onClick={() => setProgress(progress+1)}
                color="secondary"
                variant="contained"
              >
                Donate➜
              </Button>
            </div>
          </Card>
        </Grid>
        <Grid xs={12} sm={4} item>
          <Card
            sx={{
              backgroundColor: "#2a2727",
              padding: "3%",
              minHeight: 350,
              borderRadius: 3,
            }}
          >
            <Typography variant="h3" color="#fff">
              Title
            </Typography>
          </Card>
        </Grid>
        <Grid xs={12} sm={4} item>
          <Card
            sx={{
              backgroundColor: "#2a2727",
              padding: "3%",
              minHeight: 350,
              borderRadius: 3,
            }}
          >
            <Typography variant="h3" color="#fff">
              Title
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Fcampaign;
