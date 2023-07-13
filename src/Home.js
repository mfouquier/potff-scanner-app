import React from "react";
import { NavBar } from "./NavBar";
import './styles/Home.css'
import { Button, OutlinedInput } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";


export const Home = () => {

  return (
    <>
      <NavBar />
      <div className="search">
        <SearchIcon style={{ alignSelf: 'center' }} />
        <OutlinedInput className="searchbox" placeholder="Search..."></OutlinedInput>
      </div>

      <div className="home-buttons">
        <Link to={`/newMember`}>
          <Button variant="contained" >Add New Member</Button>
        </Link>
        <Link to={`reports`}>
          <Button variant="contained">Reports</Button>
        </Link>
        <Link to={`members`}>
          <Button variant="contained">Members</Button>
        </Link>

      </div>

    </>
  )
}