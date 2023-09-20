import '../App.css';
import {useEffect, useState} from "react";
import * as React from 'react';
import axios, {get} from "axios";
import {useNavigate} from "react-router-dom";
import {getAllByTestId} from "@testing-library/react";

export default function ListPosts() {
    const navigate = useNavigate();

    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedDescription, setSelectedDescription] = useState('');

    const fileSelectedHandler = (event) =>{
        if (event.target && event.target.files && event.target.files.length > 0) {
            setSelectedImage(event.target.files[0]);
        } else {
            // Handle the case when there are no selected files or the event structure is unexpected.
            // You can display an error message or perform other appropriate actions.
            console.error('No files selected or unexpected event structure');
        }
    };
    const descriptionChangeHandler = (event) =>{
        setSelectedDescription(event.target.value)
    }
    const fileUploadHandler= () =>{
        if (!selectedImage || !selectedDescription) {
            // Handle validation or display an error message here
            return;
        }
        const formData = new FormData();
        formData.append('image', selectedImage);
        formData.append('description', selectedDescription);


        axios.post('http://localhost:8080/api/createpost', formData)
            .then(response  => {
                console.log('New post created:', response.data);
                // navigate('/listposts');
            })
            .catch((error) => {
                console.error('Error creating post:', error);
            });
    }

    return (
        <form onSubmit={fileUploadHandler}>
            <div>
                <label htmlFor="image">Image:</label>
                <input type="file" id="image" name="image" onChange={fileSelectedHandler} />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Description"
                    value={selectedDescription}
                    onChange={descriptionChangeHandler}
                />
            </div>
            <div>
                <input type="submit" value="Submit" />
            </div>
        </form> )
}