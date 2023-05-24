import { useState, useEffect } from "react";
import axios from "axios";

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


    return (
        <div>
            <h1>Books</h1>

            {books.map(book => (
                <div className="book" key={book.id}>
                    <h3>{book.title}</h3>
                    <p>{book.desc}</p>
                </div>
            ))}

            <a href="/add">Add New Book</a>
        </div>
    )
}

export default Home;