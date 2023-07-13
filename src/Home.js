import React from "react";
import { NavBar } from "./NavBar";
import './styles/Home.css'
import { Button, OutlinedInput } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


export const Home = () => {

  return (
    <>
      <NavBar />
      <div className="search">
        <SearchIcon style={{ alignSelf: 'center' }} />
        <OutlinedInput className="searchbox" placeholder="Search..."></OutlinedInput>
      </div>

      <div className="home-buttons">
        <Button variant="contained">Add New Member</Button>
        <Button variant="contained">Reports</Button>
        <Button variant="contained">Members</Button>
      </div>

    </>
  )
}