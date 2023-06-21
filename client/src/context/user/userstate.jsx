import { useEffect, useState } from "react";
import axios from "axios";
import UserContext from "./usercontext";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const UserStateProvider = (props) => {
  const [state, setState] = useState({
    id: null,
    name: null,
    age: null,
    gender: null,
    email: null,
  });

  const getCurrUser = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/checkuser`, {
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      

      if (res.status !== 200) {
        const err = new Error(res.error);
        throw err;
      } else {
        const { _id, name, gender, age, email } = res.data;
        setState({
          ...state,
          id: _id,
          name: name,
          gender: gender,
          age: age,
          email: email,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCurrUser();
  }, []);

  return (
    <UserContext.Provider value={{state, getCurrUser}}>{props.children}</UserContext.Provider>
  );
};

export default UserStateProvider;
