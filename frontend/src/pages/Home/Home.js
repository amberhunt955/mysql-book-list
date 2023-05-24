import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// styling and material UI
import Button from "@mui/material/Button";
import "./Home.css";

function Home() {
    const [books, setBooks] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get(`http://localhost:${process.env.REACT_APP_PORT}/books`)
                setBooks(res.data)
            } catch (err) {
                console.log(err);
            }
        }

        fetchAllBooks();
    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:${process.env.REACT_APP_PORT}/books/${id}`)
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <div className="home">
            <h1>Books</h1>

            {books.map(book => (
                <div className="book" key={book.id}>
                    <h3>{book.title}</h3>
                    <span id="author">by {book.author}</span>
                    <p>{book.desc}</p>
                    <div className="options">
                    <Button onClick={() => handleDelete(book.id)}>Delete</Button>
                    <Button onClick={() => navigate(`/update/${book.id}`)}>Edit</Button>
                    </div>
                </div>
            ))}

            <a href="/add">Add New Book</a>
        </div>
    )
}

export default Home;