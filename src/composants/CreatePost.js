import '../App.css';
import * as React from 'react';

export default function CreatePost() {
    return(
        <form action="/action_page.php">
            <label htmlFor="image">Image:</label>
            <input type="text" id="image" name="image" value="Image"></input>
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" name="description" value="description"></input>
            <input type="submit" value="Submit"></input>
        </form> );
}
