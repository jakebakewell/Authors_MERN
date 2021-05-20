import React, { useState } from 'react';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import { Link, navigate } from '@reach/router';

const NewAuthor = () => {
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState("");
    const createAuthor = e => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/authors/new`, {name})
            .then(res=>{
                console.log(res);
                console.log("RES STATUS-->", res.status);
                if (res.status == 200) {
                    navigate("/");
                }
            })
            .catch(err=>{
                console.log("we in the catch!!", errors)
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }
    return (
        <div>
            <Link to="/">Home</Link>
            <h4>Add a new author:</h4>
            {errors.map((err, idx) => <p className="text-danger" key={idx}>{err}</p>)}
            <AuthorForm onSubmitProp={createAuthor} name={name} setName={setName}/>
        </div>
    );
};

export default NewAuthor;