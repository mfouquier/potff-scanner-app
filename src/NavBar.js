import { AppBar, CssBaseline, ThemeProvider, Toolbar, Typography, createTheme } from "@mui/material";
import './styles/NavBar.css'
import React from "react";

const defaultTheme = createTheme()

export const NavBar = () => {

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <img alt="" src="./images/soccent.png" style={{ width: "40px", height: "40px" }} />
          <Typography variant="h6" color="inherit" noWrap sx={{ paddingLeft: "10px" }}>
            POTFF Tracking Application
          </Typography>
        </Toolbar>

      </AppBar>
    </ThemeProvider>


  )
}