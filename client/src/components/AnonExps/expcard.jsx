import { Card, Typography, Grid, Divider, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";


const CampCard = (props) => {
  
  const navigate = useNavigate();
  console.log(props);

  const expr = props.expression.substring(0,500) + "...";
  const titl = (props.title.length > 17) ? props.title.substring(0,17) + "..." : props.title;

  const openExpression = async (eve) => {
    try{
        navigate(`/expression/${props.id}`);
    }catch(err){
        console.log(err);
    }
  }



  return (
    <>
      
        <Grid xs={12} sm={4} item>
          <Card
            sx={{
              backgroundColor: "#2a2727",
              padding: "5%",
              minHeight: 380,
              borderRadius: 3,
              boxShadow: "10px 10px #000"
            }}
          >
            <Typography className="titlefont" sx={{ fontWeight: 500 }} variant="h4" color="#fff">
              {titl}
            </Typography>
            <Typography className="underfont" variant="h6" color="#797979">
              {props.age}/{props.gender}&nbsp;-&nbsp;{props.city},&nbsp;{props.state}
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
              <Button
                sx={{ fontWeight: 600, borderRadius: 2 }}
                fullWidth
                color="secondary"
                variant="contained"
                onClick={openExpression}
              >
                Read More➜
              </Button>
            </div>
          </Card>
        </Grid>
        
    </>
  );
};

export default CampCard;
