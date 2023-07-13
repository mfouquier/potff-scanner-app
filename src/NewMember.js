import React, { useState } from "react";
import { NavBar } from "./NavBar";
import { Select, FormControl, InputLabel, Input, MenuItem } from "@mui/material";
import './styles/NewMember.css'



export const NewMember = () => {

  const [formData, setFormData] = useState({})

  const handleFormData = (event) => {
    let newData = { ...formData };
    newData[event.target.id] = event.target.value;
    setFormData(newData);
  };

  {
    console.log("I am Form Data " + formData.barcode
    )
  }


  return (
    <>
      <NavBar />
      <div className="newuser-form">
        <div className="row1">
          <FormControl id="barcodeBox">
            <InputLabel>Barcode</InputLabel>
            <Input id="barcode" onChange={(e) => handleFormData(e)} value={formData.barcode} required />
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