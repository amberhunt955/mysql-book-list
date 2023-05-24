import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

// styling and material UI
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./UpdateBook.css"

function UpdateBook() {
  const navigate = useNavigate();
  const params = useParams();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    desc: "",
    photo: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      await axios.put(`http://localhost:${process.env.REACT_APP_PORT}/books/${params.id}`, formData);
      navigate("/")
    } catch (err) {
        console.log(err);
    }
  };

  return (
    <div class="form-page">
      <h1>Edit Book</h1>
      <form>
        <div className="title-and-author">
        <TextField
          label="Title"
          name="title"
          fullWidth
          onChange={handleChange}
        />

        <TextField
          label="Author"
          name="author"
          fullWidth
          onChange={handleChange}
        />
        </div>

        <TextField
          label="Description"
          name="desc"
          multiline
          rows={8}
          fullWidth
          onChange={handleChange}
        />

        <TextField
          label="Photo URL"
          name="photo"
          fullWidth
          onChange={handleChange}
        />

        <Button variant="contained" onClick={handleClick}>
          Submit Changes
        </Button>
      </form>
      <a href="/">Back Home</a>
    </div>
  );
}

export default UpdateBook;