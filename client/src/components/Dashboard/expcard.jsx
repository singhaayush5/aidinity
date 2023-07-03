import { Card, Typography, Grid, Divider, Button, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
const BASE_URL = import.meta.env.VITE_BASE_URL;
import Cookies from "universal-cookie";
const cookies = new Cookies();

const CampCard = (props) => {
  const navigate = useNavigate();

  const [exp, setExp] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/findexpression/${props.id}`, {
        
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setExp(res.data);
      }).then(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1);
      });
  }, []);

  const deleteExp = async () => {
    try {
      const token = cookies.get("jwebtoken");
      const result = await axios
        .get(`${BASE_URL}/deleteexpression/${props.id}`, {
          
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {});

      navigate(0);
    } catch (err) {
      console.log(err);
    }
  };

  let expr, titl;

  if (exp.expression) expr = exp.expression.substring(0, 500) + "...";
  if (exp.title)
    titl =
      exp.title.length > 17 ? exp.title.substring(0, 17) + "..." : exp.title;

  const openExpression = async (eve) => {
    eve.preventDefault();
    try {
      navigate(`/expression/${props.id}`);
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
            delay: 0.3,
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
          {loading ? (
              <>
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    marginTop:170,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CircularProgress />
                </div>
              </>
            ) :
            <>
            <Typography
              className="titlefont"
              sx={{ fontWeight: 500 }}
              variant="h4"
              color="#fff"
            >
              {titl}
            </Typography>
            <Typography className="underfont" variant="h6" color="#797979">
              {exp.age}/{exp.gender}&nbsp;-&nbsp;{exp.city},&nbsp;{exp.state}
            </Typography>
            <Divider color="#000" sx={{ margin: "2% 0%" }} />
            <Typography
              color="#dadada"
              sx={{ fontSize: "15px", marginBottom: "4%" }}
              variant="h6"
            >
              {expr}
            </Typography>

            <div style={{ marginTop: "2%" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {" "}
                <Button
                  sx={{ fontWeight: 600, borderRadius: 2, width: "48%" }}
                  onClick={openExpression}
                  color="secondary"
                  variant="contained"
                >
                  Review➜
                </Button>{" "}
                <Button
                  sx={{
                    fontWeight: 600,
                    borderRadius: 2,
                    width: "48%",
                    background:
                      "linear-gradient(60deg, #FF6666 30%, #FF3B3B 100%, #FF6666 70%)",
                  }}
                  onClick={deleteExp}
                  color="secondary"
                  variant="contained"
                >
                  Delete➜
                </Button>{" "}
              </div>
            </div>
            </>}
          </Card>
        </motion.div>
      </Grid>
    </>
  );
};

export default CampCard;
