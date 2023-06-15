import { Card, Typography, IconButton } from '@mui/material'
import {useState, useContext} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import UserContext from "../../context/user/usercontext";
import axios from 'axios';

const CommentBubble = (props) => {
    const [isPresent, setPresent] = useState(true);
    const authUser = useContext(UserContext);

    const delComment = async (eve) => {
        eve.preventDefault();
    
    
    
        const res = await axios
          .post(
            "http://localhost:8080/deletecomment",
            {
              eid: props.eid,
              uid: props.uid,
              age: props.age,
              gender: props.gender,
              comment: props.comment,
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
    
          setPresent(false);
          
        console.log(res);
      };

  return (
    
        isPresent && <>
        <Card sx={{width: "90%", marginTop:"3%", marginLeft: "5%", backgroundColor: "#222222", padding: "2.5%", borderRadius: 3}}>
            {authUser.state.id && authUser.state.id === props.uid && <IconButton sx={{display: "inline", float: "right"}} aria-label="delete">
  <DeleteIcon onClick={delComment} sx={{display: "inline", float: "right", color:"#555555"}}/></IconButton>}
            <Typography color="#555555" sx={{fontSize:"15px"}} variant="h6">{props.gender}/{props.age}</Typography>
            <Typography color="#999999" sx={{fontSize:"18px"}} variant="h6">{props.comment}</Typography>
        </Card>
    </>
    
    
  )
}

export default CommentBubble