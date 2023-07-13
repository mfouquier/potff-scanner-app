import { AppBar, CssBaseline, ThemeProvider, Toolbar, Typography, createTheme } from "@mui/material";
import './styles/NavBar.css'
import React from "react";
import { Link } from "react-router-dom";
import logo from './images/soccent.png'
import './images/soccent.png'

const defaultTheme = createTheme()

export const NavBar = () => {

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Link to={`/`}>
            <img alt="" src={logo} style={{ width: "100px", height: "120px" }} />
          </Link>

          <Typography variant="h3" color="inherit" noWrap sx={{ paddingLeft: "1em" }}>
            POTFF Tracking Application
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>


  )
}