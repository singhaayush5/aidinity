import { Card, Typography, Grid, Divider, Button, Box } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CampCard = (props) => {
  const [progress, setProgress] = useState(
    Math.trunc((props.amtRaised / props.amtRequested) * 100)
  );
  const navigate = useNavigate();

  const desc = props.description.substring(0, 500) + "...";
  const titl =
    props.title.length > 17
      ? props.title.substring(0, 17) + "..."
      : props.title;

  const openCamp = (eve) => {
    eve.preventDefault();
    try {
      navigate(`/fundcampaign/${props.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Grid xs={12} sm={4} item>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 1 }}
        >
          <Card
            sx={{
              backgroundColor: "#2a2727",
              padding: "5%",
              minHeight: 380,
              borderRadius: 3,
              boxShadow: "10px 10px #000",
            }}
          >
            <Typography sx={{ fontWeight: 500 }} variant="h4" color="#fff">
              {titl}
            </Typography>
            <Typography sx={{ fontSize: "15px" }} variant="h6" color="#797979">
              {props.holder}&nbsp;({props.age}/{props.gender})&nbsp;-&nbsp;
              {props.city},&nbsp;{props.state}
            </Typography>
            <Divider color="#000" sx={{ margin: "2% 0%" }} />
            <Typography
              color="#dadada"
              sx={{ fontSize: "15px", marginBottom: "4%" }}
              variant="h6"
            >
              {desc}
            </Typography>
            <Typography
              sx={{ fontSize: "15px", display: "inline", float: "left" }}
              variant="h6"
              color="#797979"
            >
              Raised{" "}
              <span style={{ color: "#dadada" }}>
                ₹{props.amtRaised}/₹{props.amtRequested}
              </span>
            </Typography>
            <Typography
              sx={{
                fontSize: "15px",
                textAlign: "right",
                display: "inline",
                float: "right",
              }}
              variant="h6"
              color="secondary"
            >
              {progress}%
            </Typography>
            <Box sx={{ width: "100%", display: "inline-block" }}>
              <LinearProgress
                sx={{ borderRadius: 2 }}
                color="secondary"
                variant="determinate"
                value={progress}
              />
            </Box>
            <div style={{ marginTop: "2%" }}>
              <Button
                sx={{ fontWeight: 600, borderRadius: 2 }}
                fullWidth
                onClick={openCamp}
                color="secondary"
                variant="contained"
              >
                Donate➜
              </Button>
            </div>
          </Card>
        </motion.div>
      </Grid>
    </>
  );
};

export default CampCard;
