import { Card, Divider, Typography, Button, TextField } from "@mui/material";
import React, { useState, useContext, useEffect } from "react";
import UserContext from "../../context/user/usercontext";
import Navbar from "../Navbar/navbar";
import dummyman from "../../assets/dummyman.png"
import CommentBubble from "./commentbubble";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ExpressionPage = (props) => {
    const navigate = useNavigate();
  const [expression, setExpression] = useState({});
  const authUser = useContext(UserContext);
  const [cmmnt, setCmmnt] = useState(null);
  const { id } = useParams();
 

  const getExpression = async () => {
    axios
      .get(`http://localhost:8080/findexpression/${id}`, {
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => setExpression(res.data));
  }

  useEffect(() => {
    getExpression();

  }, []);

  const addComment = async (eve) => {
    eve.preventDefault();

    // setExpression(expression.comments.push({
    //     eid: id,
    //     uid: authUser.state.id,
    //     age: authUser.state.age,
    //     gender: authUser.state.gender,
    //     comment: cmmnt,
    //   }));

    const res = await axios
      .post(
        "http://localhost:8080/addcomment",
        {
          eid: id,
          uid: authUser.state.id,
          age: authUser.state.age,
          gender: authUser.state.gender,
          comment: cmmnt,
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

    setCmmnt(null);
      
    getExpression();
      
    console.log(res);
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          width: "70vw",
          minHeight: "92vh",
          display: "flex",
          flexDirection: "column",
          padding: "3vw 15vw 0vw 15vw",
          marginTop: "8vh",
        }}
      >
      <div style={{display: "flex", justifyContent:"space-between", justifyItems:"center", alignItems:"center"}}>
        <Typography
          sx={{
            textAlign: "left",
            color: "#fff",
            fontWeight: 600,
            display:"inline",
            float: "left"
            
          }}
          variant="h3"
        >
          {expression.title}
        </Typography>
        
        <img style={{width:"80px", display: "inline", float:"right"}}
            src={dummyman}
            alt=""
          ></img>
          </div>
        <Card sx={{ backgroundColor: "#000" }}>
          <Typography
            sx={{
              fontWeight: 400,
              marginTop: "1.5%",
              display: "inline",
              float: "left",
            }}
            color="#666666"
            variant="h5"
          >
            {expression.gender}/{expression.age} ({expression.city},{" "}
            {expression.state})
          </Typography>
          <Typography
            sx={{
              textAlign: "right",
              fontWeight: 400,
              marginTop: "1.5%",
              display: "inline",
              float: "right",
            }}
            color="secondary"
            variant="h5"
          >
            {expression.comments ? expression.comments.length : 0} comments
          </Typography>
        </Card>
        <Divider color="#dadada" sx={{ margin: "2% 0%" }} />
        <Typography
          sx={{ fontWeight: 400, margin: "2% 4%" }}
          color="#aaaaaa"
          variant="h6"
        >
          {expression.expression}
        </Typography>

        <Divider color="#dadada" sx={{ margin: "2% 0%" }} />

        <div style={{ margin: "1% 5%" }}>
          {authUser.state.id && (
            <>
              <Card
                sx={{
                  backgroundColor: "#000",
                  paddingTop: "1%",
                  borderRadius: 0,
                  marginBottom: "5%",
                }}
              >
                <div style={{ display: "inline", float: "left", width: "78%" }}>
                  <TextField
                    sx={{
                      "& input": {
                        color: "#fff",
                      },
                      "& .MuiInputLabel-root": { color: "white" },
                      "& .MuiOutlinedInput-root": {
                        "& > fieldset": {
                          borderColor: "#fff",
                          borderRadius: 2,
                        },
                      },
                      "& .MuiOutlinedInput-root:hover": {
                        "& > fieldset": {
                          borderColor: "#fff",
                          borderRadius: 2,
                          color: "white",
                        },
                      },
                      "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                          borderColor: "#fff",
                          borderRadius: 2,
                        },
                      },
                    }}
                    inputMode="dark"
                    size="small"
                    name="comment"
                    value={cmmnt}
                    onChange={(eve) => setCmmnt(eve.target.value)}
                    label="Comment"
                    variant="outlined"
                    inputProps={{ style: { color: "#fff" } }}
                    multiline
                    fullWidth
                  />
                </div>

                {cmmnt ? (
                  <Button
                    sx={{
                      marginTop: "0.2%",
                      fontWeight: 600,
                      borderRadius: 2,
                      display: "inline",
                      float: "right",
                      width: "20%",
                    }}
                    color="secondary"
                    variant="contained"
                    onClick={addComment}
                  >
                    Add +
                  </Button>
                ) : (
                  <Button
                    sx={{
                      marginTop: "0.2%",
                      fontWeight: 600,
                      borderRadius: 2,
                      display: "inline",
                      float: "right",
                      width: "20%",
                      "&.Mui-disabled": {
                        background: "#4f4f4f",
                        color: "#9b9e9e",
                      },
                    }}
                    variant="contained"
                    disabled
                    fullWidth
                  >
                    Add +
                  </Button>
                )}
              </Card>
            </>
          )}
          {expression.comments &&
            expression.comments.map((comm,idx) => (
                <CommentBubble key={idx} age={comm.age} gender={comm.gender} comment={comm.comment} uid={comm.uid} eid={id} num={idx+1}/>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default ExpressionPage;
