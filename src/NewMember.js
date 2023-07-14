import React, { useState } from "react";
import { NavBar } from "./NavBar";
import { Select, FormControl, InputLabel, Input, MenuItem, Button } from "@mui/material";
import './styles/NewMember.css'



export const NewMember = () => {

  const [formData, setFormData] = useState({
    barcode: '',
    fname: '',
    lname: '',
    dodid: '',
    directorate: '',
    org: ''
  })

  const handleFormData = (event) => {
    console.log(event)
    let newData = { ...formData };
    newData[event.target.name] = event.target.value;
    setFormData(newData);
  };

  const handleSubmit = (event) => {
    let newData = { ...formData };
    newData[event.target.id] = event.target.value;
    setFormData(newData);
    console.log(formData)
  }

  return (
    <>
      <NavBar />
      <div className="newuser-form">
        <div className="row1">
          <FormControl id="barcodeBox">
            <InputLabel>Barcode</InputLabel>
            <Input name='barcode' id="barcode" onChange={(e) => handleFormData(e)} value={formData.barcode} required />
          </FormControl>
          <FormControl id="fnameBox">
            <InputLabel>First Name</InputLabel>
            <Input name='fname' id="fname" onChange={(e) => handleFormData(e)} value={formData.fname} required></Input>
          </FormControl>
          <FormControl id="lnameBox">
            <InputLabel>Last Name</InputLabel>
            <Input name='lname' id="lname" onChange={(e) => handleFormData(e)} value={formData.lname} required></Input>
          </FormControl>
        </div>
        <div className="row2">
          <FormControl id="dodidBox">
            <InputLabel>DoD ID</InputLabel>
            <Input name='dodid' id="dodid" onChange={(e) => handleFormData(e)} value={formData.dodid} required></Input>
          </FormControl>
          <FormControl id="directorateBox">
            <InputLabel>Directorate</InputLabel>
            <Input name='directorate' id="directorate" onChange={(e) => handleFormData(e)} value={formData.directorate}></Input>
          </FormControl>
          <FormControl id="orgBox">
            <InputLabel>Organization</InputLabel>
            <Select name='org' id='org' onChange={(e) => handleFormData(e)} value={formData.org}>
              <MenuItem id='org' value="soccent">SOCCENT</MenuItem>
              <MenuItem id='org' value="socom">SOCOM</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div>
          <FormControl sx={{ margin: '1em 0 1em 0' }}>
            <Button variant="contained" onClick={(e) => handleSubmit(e)}>Submit</Button>
          </FormControl>
        </div>


      </div>



    </>

  )
}