import React, {useState} from 'react';
import ImageUploading from 'react-images-uploading';
import axios from "axios";
import {Box, Button, Container, TextField} from "@mui/material";

export default function Image() {
    const [descriptions, setDescriptions] =useState(null);
    const [images, setImages] =useState(null);

    const descriptionChangeHandler= (event) =>{
        event.preventDefault();
        const formData = new FormData();
        formData.append('description', descriptions);

        axios
            .post('http://localhost:8080/api/createpost04', formData)
            .then((response) => {
                // Assuming the response contains the image data
                setImages(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    return (
        <div>
            <h1>Description</h1>
            <Container>
                <Box component="form" onSubmit={descriptionChangeHandler} noValidate>
                    <TextField
                        id="txtName"
                        required
                        name="description"
                        label="description"
                        type="text"
                        value={descriptions}
                        onChange={(e) => setDescriptions(e.target.value)}
                    />
                    <Button type="submit">Add</Button>
                </Box>
            </Container>
            <div>
                {images && <img src={`data:image/png;base64,${images}`} alt="Image" />}
            </div>
        </div>
    );
}