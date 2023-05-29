import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import Home from "./components/Home/home";
import Login from "./components/Auth/login";
import Register from "./components/Auth/register";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="register" element={<Register/>}></Route>
      </Route>
    )
  );

  return (
    <RouterProvider router={router}/>
  )
}

export default App