import '../App.css';
import * as React from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {Box, Button, Container, TextField} from "@mui/material";
import Image from "./Image";
export default function CreatePost() {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            image: data.get('image'),
            description: data.get('description')
        });
        let newPost = {
            image: data.get('image'),
            description: data.get('description')
        };

        axios.post('http://localhost:8080/api/createpost', newPost)
            .then(newPost  => console.log(newPost))
            .catch(error => console.error(error));

        return navigate("/listposts");
    };

    return(
        <Container>
            <Box component='form' onSubmit={handleSubmit} noValidate>
                <TextField id="txtName" required name="image" label="Description" type="text"></TextField>
                <TextField id="txtName" required name="description" label="Description" type="text"></TextField>
                <Button type="submit">Add</Button>
            </Box>
        </Container>
    )
}
