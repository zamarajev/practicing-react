import React from "react";
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import logo from '../logo.svg';

function Header() {

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <img src={logo} className="App-logo" alt="logo" />
            <Button color="inherit">About us</Button>
            <Button color="inherit">Contact</Button>
        </Grid>
    );
}


export default Header;
