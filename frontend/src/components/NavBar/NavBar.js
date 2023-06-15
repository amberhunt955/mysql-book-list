import { useNavigate } from "react-router-dom";

import "./NavBar.css";

import { Button } from "@mui/material";

function NavBar() {
  const navigate = useNavigate();
  
  return (
    <nav>
      <h1>Amber's Library</h1>
      <Button onClick={() => navigate(`/add`)}>Add New Book</Button>
    </nav>
  );
}

export default NavBar;
