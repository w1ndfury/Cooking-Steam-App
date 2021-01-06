import React from 'react'
import '../../../App.css'

import Footer from '../../Footer/Footer'

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { Button } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));




function Home() {

    const classes = useStyles();

    return (
        <div>
        <div className={classes.root} style={{ padding: 20 }}>
            {/* I am a container Grid with 1 (8px) spacing*/}
            <Grid container spacing={1}>
                
                <Grid item xs={2} sm={2} md={2}>
                    <Button>7</Button>
                    <Button>7</Button>
                    <Button>7</Button>
                    <Button>7</Button>                  
                </Grid>

                
                    
            </Grid>
           
            </div>
            <div>
                <Footer />
            </div>
        </div>
        
    );
}

export default Home