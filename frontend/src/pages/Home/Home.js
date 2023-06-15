import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// styling and material UI
import Button from "@mui/material/Button";
import "./Home.css";

function Home() {
  const [books, setBooks] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get(
          `http://localhost:${process.env.REACT_APP_PORT}/books`
        );
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:${process.env.REACT_APP_PORT}/books/${id}`
      );
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="list">
      {books.map((book) => (
        <div className="book" key={book.id}>
          <img className="book-photo" src={book.photo} alt={book.title} />

          <section className="title-author">
            <h3>{book.title}</h3>

            <span className="author">by {book.author}</span>
          </section>

          <p className="desc">{book.desc}</p>

          <div className="options">
            <Button onClick={() => handleDelete(book.id)}>Delete</Button>
            <Button onClick={() => navigate(`/update/${book.id}`)}>Edit</Button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Home;
