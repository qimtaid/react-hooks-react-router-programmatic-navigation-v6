import { Outlet, useNavigate, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useEffect,useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = () =>{
    setIsLoggedIn(true);
  }

  const logout = () => {
    setIsLoggedIn(false);
  }

  useEffect(()=>{
    if(isLoggedIn){
      navigate("/");
    } else{
      navigate("/login");
    };
  },[isLoggedIn]);

  return (
    <div className="app">
      <NavBar logout={logout} />
      {isLoggedIn? <NavBar logout={logout}/>: <Navigate to="/login"/>}}
      <Outlet context={login}/>
    </div>
  );
}

export default App;
