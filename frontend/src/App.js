import { Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import UpdateBook from "./pages/UpdateBook";

// import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />

        <Route path="/add" element={ <AddBook /> } />
        
        <Route path="/update" element={ <UpdateBook /> } />
      </Routes>
    </div>
  );
}

export default App;
