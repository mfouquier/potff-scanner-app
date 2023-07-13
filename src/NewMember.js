import React from "react";
import { NavBar } from "./NavBar";
import { Select, FormControl, InputLabel, Input, MenuItem } from "@mui/material";
import './styles/NewMember.css'



export const NewMember = () => {

  return (
    <>
      <NavBar />
      <div className="newuser-form">
        <div className="row1">
          <FormControl id="barcodeBox">
            <InputLabel>Barcode</InputLabel>
            <Input id="barcode" aria-describedby="barcode #"></Input>
          </FormControl>
          <FormControl id="fnameBox">
            <InputLabel>First Name</InputLabel>
            <Input id="fname" aria-describedby="fname"></Input>
          </FormControl>
          <FormControl id="lnameBox">
            <InputLabel>Last Name</InputLabel>
            <Input id="lname" aria-describedby="lname"></Input>
          </FormControl>
        </div>
        <div className="row2">
          <FormControl id="dodidBox">
            <InputLabel>DoD ID</InputLabel>
            <Input id="dodid" aria-describedby="dodid"></Input>
          </FormControl>
          <FormControl id="directorateBox">
            <InputLabel>Directorate</InputLabel>
            <Input id="directorate" aria-describedby="directorate"></Input>
          </FormControl>
          <FormControl id="orgBox">
            <InputLabel>Organization</InputLabel>
            <Select name='org' id="org">
              <MenuItem key="soccent">SOCCENT</MenuItem>
              <MenuItem key="socom">SOCOM</MenuItem>
            </Select>
          </FormControl>
        </div>


      </div>



    </>

  )
}