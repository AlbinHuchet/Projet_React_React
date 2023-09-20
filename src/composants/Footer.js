import '../App.css';
import {Link} from "@mui/material";
import {NavLink, useParams} from "react-router-dom";


export default function Footer() {
    return(
        <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
            <div className="btn-group">
                <NavLink to="/listposts" className="btn btn-outline-dark bg-light">  Bouton Liste posts  </NavLink>
                <NavLink to="/createpost" className="btn btn-outline-dark bg-light">  Créer post  </NavLink>
            </div>
        </footer>
    );
}

