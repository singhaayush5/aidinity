import { Card, Typography, IconButton } from "@mui/material";
import { useState, useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import UserContext from "../../context/user/usercontext";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;
import Cookies from "universal-cookie";
const cookies = new Cookies();

const CommentBubble = (props) => {
  const [isPresent, setPresent] = useState(true);
  const authUser = useContext(UserContext);

  const delComment = async (eve) => {
    eve.preventDefault();
    const token = cookies.get("jwebtoken");
    const res = await axios
      .post(
        `${BASE_URL}/deletecomment`,
        {
          eid: props.eid,
          uid: props.uid,
          age: props.age,
          gender: props.gender,
          comment: props.comment,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {})
      .catch((err) => {
        console.log(err);
      });

    setPresent(false);
  };

  return (
    isPresent && (
      <>
        <Card
          sx={{
            width: "100%",
            height: "2px",
            marginTop: "5vh",
            marginLeft: "-12vw",
            backgroundColor: "#888888",
            zIndex: 0,
            borderRadius: 0,
          }}
        ></Card>

        <Card
          sx={{
            width: "80%",
            marginTop: "-3vh",
            marginLeft: "20%",
            backgroundColor: "#333",
            padding: "2.5%",
            borderRadius: 3,
            zIndex: 3,
            boxShadow: "7px 7px #000",
          }}
        >
          {authUser.state.id && authUser.state.id === props.uid && (
            <IconButton
              sx={{ display: "inline", float: "right" }}
              aria-label="delete"
            >
              <DeleteIcon
                onClick={delComment}
                sx={{ display: "inline", float: "right", color: "#555555" }}
              />
            </IconButton>
          )}
          <Typography color="#777" sx={{ fontSize: "15px" }} variant="h6">
            {props.gender}/{props.age}
          </Typography>
          <Typography color="#bbb" sx={{ fontSize: "18px" }} variant="h6">
            {props.comment}
          </Typography>
        </Card>
      </>
    )
  );
};

export default CommentBubble;
