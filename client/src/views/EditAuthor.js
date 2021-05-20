import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import AuthorForm from '../components/AuthorForm';

const EditAuthor = (props) => {
    const { id } = props;
    const [name, setName] =useState("");
    const [errors, setErrors] = useState("");
    let idCorrect = false;
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                setName(res.data.author.name);
            })
            .catch(err => console.log(err))
    }, []);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                setAuthors(res.data.authors);
            })
            .catch(err => console.log(err));
    },[authors]);
    const updateAuthor = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/update/${id}`, {name})
            .then(res => {console.log(res)
                if (res.data.author) {
                    navigate("/")
                }
                else {
                    setErrors(res.data.name.message)
                }
            })
            .catch(err => console.log(err));
    };
    const realAuthor = () => {
        for (let i = 0; i < authors.length; i++) {
            if (id == authors[i]._id) {
                return idCorrect = true;
            }
        }
        idCorrect = false;
    }
    realAuthor();
    if (idCorrect == true) {
        return (
            <div>
                <Link to="/">Home</Link>
                <h4>Edit this author:</h4>
                {errors ? <p className="text-danger">{errors}</p> : ""}
                <AuthorForm onSubmitProp={updateAuthor} name={name} setName={setName}/>
            </div>
        );
    }
    else {
        return (
            <div>
                <Link to="/">Home</Link>
                <h3>We're sorry, but we could not find the author you are looking for.</h3>
            </div>
        );
    }
};

export default EditAuthor;