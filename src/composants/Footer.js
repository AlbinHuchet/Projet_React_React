import '../App.css';
import {Link} from "@mui/material";
import {NavLink, useParams} from "react-router-dom";


// export default function Footer() {
//     return(
//         <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
//             <div className="btn-group">
//                 <NavLink to="/listposts" className="btn btn-outline-dark bg-light">  Bouton Liste posts  </NavLink>
//                 <NavLink to="/createpost" className="btn btn-outline-dark bg-light">  Créer post  </NavLink>
//             </div>
//         </footer>
//     );
// }
import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "secondary.main",
                paddingTop: "1rem",
                paddingBottom: "1rem",

            }}
        >
            <Container maxWidth="lg">
                <Grid container direction="column" alignItems="center">
                    <Grid item xs={12}>
                        <Typography color="black" variant="h5">
                            <NavLink to="/listposts" className="btn btn-outline-dark bg-light">  Bouton Liste posts  </NavLink>
                            <NavLink to="/listposts02" className="btn btn-outline-dark bg-light">  Bouton Liste posts 02 </NavLink>
                            <NavLink to="/createpost" className="btn btn-outline-dark bg-light">  Créer post  </NavLink>                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color="textSecondary" variant="subtitle1">
                            {`${new Date().getFullYear()} | React | Material UI | React Router`}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};



