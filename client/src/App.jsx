import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import Home from "./components/Home/home";
import Login from "./components/Auth/login";
import Register from "./components/Auth/register";
import Fcampaign from "./components/FundCamps/fcampaigns";
import NewCampaign from "./components/FundCamps/newcampaign";
import NewExpression from "./components/AnonExps/newexpression";
import Expressions from "./components/AnonExps/expressions";
import ExpressionPage from "./components/AnonExps/expressionpage";
import CampPage from "./components/FundCamps/camppage";


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="register" element={<Register/>}></Route>
        <Route path="fundcampaigns" element={<Fcampaign/>}></Route>
        <Route path="fundcampaign/:id" element={<CampPage/>}></Route>
        <Route path="newcampaign" element={<NewCampaign/>}></Route>
        <Route path="expressions" element={<Expressions/>}></Route>
        <Route path="expression/:id" element={<ExpressionPage/>}></Route>
        <Route path="newexpression" element={<NewExpression/>}></Route>

      </Route>
    )
  );

  return (
      <RouterProvider router={router}/>
    
  )
}

export default App