import '../App.css';
import {useEffect, useState} from "react";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ListPosts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/allposts')
            .then(res => res.json())
            .then(posts=>
                setPosts(posts));
        console.table(posts);
    }, []);

    function like(){}
    function dislike(){}

    return (
        <ul className="list-group m-3">
        {posts.map (p => (
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={p.image}
                    title={p.description}
                />
                <CardContent>
                    {/*<Typography gutterBottom variant="h5" component="div">*/}
                    {/*    Lizard*/}
                    {/*</Typography>*/}
                    <Typography variant="body2" color="text.secondary">
                        {p.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onclick={like}>Like</Button>
                    <Button size="small" onclick={dislike}>Dislike</Button>
                </CardActions>
            </Card>))}
            </ul>

        );
    }
