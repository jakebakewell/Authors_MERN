import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';
import DeleteButton from '../components/deleteAuthor';

export default () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                setAuthors(res.data.authors);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    },[authors]);
    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id != authorId))
    }
    return (
        <div>
            <Link to="/new">Add an Author</Link>
            <div className="container">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loaded ?
                        authors.map( (author, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{author.name}</td>
                                    <td><Link to={`/edit/${author._id}`} className="btn btn-warning">Edit</Link> <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/></td>
                                </tr>
                            )
                        }
                        )
                        : <tr>
                        <td>Loading...</td>
                        <td>Loading...</td>
                        </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}