import { useState, useEffect } from "react";
import axios from "axios";

// styling and material UI
import Button from "@mui/material/Button";

function Home() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get(`http://localhost:${process.env.REACT_APP_PORT}/books`)
                console.log(res.data);
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
        <div>
            <h1>Books</h1>

            {books.map(book => (
                <div className="book" key={book.id}>
                    <h3>{book.title} by {book.author}</h3>
                    <p>{book.desc}</p>
                    <Button onClick={() => handleDelete(book.id)}>Delete</Button>
                    <Button>Edit</Button>
                </div>
            ))}

            <a href="/add">Add New Book</a>
        </div>
    )
}

export default Home;