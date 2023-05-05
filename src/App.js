 
import "./App.css";
import SignUp from "./components/Pages/Signup/SignUp";
import Login from "./components/Pages/Login/Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "./components/Pages/Home";
import UserList from "./components/Pages/userList/UserList";
import TopBar from "./components/Pages/TopBar/TopBar";
import Sidebar from "./components/Pages/Sidebar/Sidebar";
import {userData} from './dummyData';
import { useSelector } from "react-redux";
import Charts from "./components/Charts/Charts";
import Product from "./components/Pages/product/Product"; 
import User from "./components/Pages/userList/User";
import NewUser from "./components/Pages/NewUser/NewUser";

function App() {
  const isAuthenticate = useSelector((state) => state.auth.idToken);

  let routes = (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );

  if (isAuthenticate) {
    routes = (
      <Routes> 
        <Route path="/" element={<Home />} exact />
        <Route path="/analytics" element={<Charts  data={userData} title="User Analytics" grid dataKey="Active User"  />} />
        <Route path="/users" element={<UserList />} exact/>
        <Route path="/products" element={<Product />} />
        <Route path="/users/:userId" element={<User />} /> 
        <Route path="/newuser" element={<NewUser />} />
      </Routes>
    );
  }
  return (
    <div className="App">
      <BrowserRouter>
      {!isAuthenticate && 
      <>{routes}</>
      }
     {isAuthenticate && 
     <div>
      <TopBar />
        <div className="wrapper">
          <Sidebar />
          <div className="others">{routes}</div>
        </div>
        </div>
        }  
      </BrowserRouter>
    </div>
  );
}

export default App;
