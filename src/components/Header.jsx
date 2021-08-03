import React from "react"

// #### MATERIAL-UI ####

import { AppBar, Toolbar } from "@material-ui/core"
import {  IconButton } from "@material-ui/core"
import { Home } from "@material-ui/icons"
import { List, ListItem, ListItemText } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import { Container } from "@material-ui/core"



const useStyles = makeStyles({navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
    navDisplayFlex: {
      display: `flex`,
      justifyContent: `space-around`
    },
    linkText: {
      textDecoration: `none`,
      textTransform: `uppercase`,
      color: `white`
    }
  });
 


const navLinks = [
  //  { title: `add evaluation`, path: `/add-evaluation` },
  //  { title: `add`, path: `/add` },
  //  { title: `history`, path: `/history` },
    { title: `log in`, path: `/login`},
   
  ]
 

 const Header = () => {

    const classes = useStyles();
    return (
    <AppBar position="static">
       <Toolbar>

       
            <Container maxWidth="xl" className={classes.navbarDisplayFlex}>
                <IconButton edge="start" color="inherit" aria-label="home">
                    <Home fontSize="large" onClick={event =>  window.location.href='/Menu'}/>
                </IconButton>
                <IconButton edge="start" color="inherit" aria-label="home">
                
               </IconButton>
           
          {/*
           <div>
               <a href="/menu">
                  <img src="http://www.kipro-projekt.de/dateien/bik_logo.svg" width="auto" height = "60" alt="BIK">
                  </img>
                 </a>  
               </div>
          */}
          
                <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
                    {navLinks.map(({ title, path }) => (
                    <a href={path} key={title} className={classes.linkText}>
                    <ListItem button>
                       <ListItemText primary={title} />
                    </ListItem>
                    </a>
                    ))}
                </List>
            </Container>
        </Toolbar>
    </AppBar>
    )
  }

  




  export default Header