import { Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home/Home";
import AddBook from "./pages/AddBook/AddBook";
import UpdateBook from "./pages/UpdateBook/UpdateBook";

// import components
import NavBar from "./components/NavBar/NavBar";

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <Routes>
        <Route path="/" element={ <Home /> } />

        <Route path="/add" element={ <AddBook /> } />
        
        <Route path="/update/:id" element={ <UpdateBook /> } />
      </Routes>
    </div>
  );
}

export default App;
