import { Button } from "@mui/material";
import React, { useEffect,useState } from "react";
import "./styles/Navbar.css";
import { useNavigate } from "react-router-dom";
import { TryRounded } from "@mui/icons-material";

export const Navbar = () => {
  const navigate = useNavigate();
const [isAdmin,setisAdmin]=useState(false)
  const handlesubmit = () => {
    navigate("/Register");
  };


useEffect(()=>{
if(localStorage.getItem("isAdmin") === "true"){
  setisAdmin(true)
}
},[])

  

  return (
    <div className="navbar">
      <h1 onClick={() => navigate("/")}>Allen</h1>
      {isAdmin ?   <Button
        variant="contained"
        className="button"
        sx={{ marginTop: "20px", marginRight: "-550px" }}
        onClick={() => navigate("/admin")}
      >
        Admin
      </Button> : ""}
    
      <Button
        variant="contained"
        className="button"
        sx={{ marginTop: "20px", marginRight: "-550px" }}
        onClick={() => navigate("/Admission")}
      >
        Apply
      </Button>

      <Button
        variant="contained"
        className="button"
        sx={{ marginTop: "20px", marginRight: "50px" }}
        onClick={() => navigate("/Login")}
      >
        LogIn
      </Button>
      
    </div>
  );
};
