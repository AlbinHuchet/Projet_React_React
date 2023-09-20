import '../App.css';
import {useEffect, useState} from "react";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    Container,
    Grid,
    Stack, TextField,
    Typography
} from "@mui/material";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import * as React from "react";

export default function ListPosts02() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [selectedObject, setSelectedObject] = useState(null);


    useEffect(() => {
        fetch('http://localhost:8080/api/allposts')
            .then(res => res.json())
            .then(posts=>
                setPosts(posts));
        console.table(posts);
    }, []);
    const like = (p) =>{
        setSelectedObject(p);
        axios.post('http://localhost:8080/api/likepost', selectedObject)
            .then(newPost  => console.log(newPost))
            .catch(error => console.error(error));
        // return navigate("/listposts");
    };

    const dislike = (p) =>{
        setSelectedObject(p);
        axios.post('http://localhost:8080/api/dislikepost', selectedObject)
            .then(newPost  => console.log(newPost))
            .catch(error => console.error(error));
        // return navigate("/listposts");
    };

    const comment = (p) =>{
        setSelectedObject(p);
        selectedObject.comment = p.comment; // Assuming p.comment contains the new comment value

        axios.post('http://localhost:8080/api/commentpost', selectedObject)
            .then(newPost  => console.log(newPost))
            .catch(error => console.error(error));
        // return navigate("/listposts");
    };


    return (
        <>
            <h2>Publications</h2>
            <h2>Double cliquez et rafraichissez pour avoir les nombres de likes à jour</h2>

            <Container sx={{py: 8}}>
                <Grid container spacing={4}>

                    {posts.map((p) => (

                            <Grid item key={p.id}>
                                <Card sx={{maxWidth: 345}}>
                                    <CardMedia
                                        sx={{height: 140}}
                                        image={p.image}
                                        title="image"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Publication {p.id}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {p.description}
                                        </Typography>
                                        <Typography variant="body3" color="text.secondary">
                                            Likes {p.likes}
                                        </Typography>
                                        <Typography variant="body4" color="text.secondary">
                                            Commentaire : {p.comment}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" key={p.id} onClick={() => like(p)}>Like</Button>
                                        <Button size="small" key={p.id} onClick={() => dislike(p)}>DisLike</Button>
                                    </CardActions>
                                    <Container>
                                        <Box component='form' onSubmit={() => like(p)} noValidate>
                                            <TextField id="txtName" required name="comment" label="Commentaire" type="text"></TextField>
                                            <Button type="submit">Add</Button>
                                        </Box>
                                    </Container>
                                </Card>
                            </Grid>
                        )
                    )}
                </Grid>
            </Container>
        </>
    );
}
