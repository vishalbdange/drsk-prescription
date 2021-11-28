import React, { useRef, useState } from 'react'
import Pdf from "react-to-pdf";
import TestPDF from './TestPDF';
import {Link} from "react-router-dom"
import './Form.css'
const Form = () => {
    const ref = useRef();

    const [state, setState] = useState({
        date: new Date(),
        Visit_No: '',
        Case_Serial_No: '',
        Name: '',
        Address: '',
        Age: '',
        Sex: '',
        Diagnosis: '',
        Prescription: ''
    });

    localStorage.setItem('state',JSON.stringify(state));



    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setState({...state, [name]: value })
    }
    return (
        <div className="Form">
            <h1 className="Title">Prescription Template Generator</h1>
            <input type="date" placeholder="Date" name="date" onChange={handleChange} />
            <input type="text" placeholder="Visit No" name="Visit_No" onChange={handleChange} />
            <input type="text" placeholder="Case Serial No" name="Case_Serial_No" onChange={handleChange} />
            <input type="text" placeholder="Name" name="Name" onChange={handleChange} />
            <input type="text" placeholder="Address" name="Address" onChange={handleChange} />
            <input type="text" placeholder="Age" name="Age" onChange={handleChange} />
            <input type="text" placeholder="Sex" name="Sex" onChange={handleChange} />
            <textarea type="text" className="textarea" placeholder="Diagnosis" name="Diagnosis" onChange={handleChange} />
            <textarea type="text" className="textarea" placeholder="Prescription" name="Prescription" onChange={handleChange} />
            
            <Link to="/view" className="view-data-button">View data</Link>

           

        </div>
    )
}

export default Form

{/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/29841/dog.jpg" alt="logo" />
<section class="doctor-info">
    <div class="doctor-name">
        <span>Dr Santosh <surname>Kandekar</surname></span>
        <p>Reg N:86230 ,MD DNB DCH FCPS FAIMER</p>
    </div>
    <div class="profession">
        <span>Neuro-Developmental <surname>Pediatrician</surname></span>
        <p>aakaarclinic@gmail.com <num>M:9869405747</num></p>
    </div>
</section>
<section class="patient-profile">
    <div class="patient-profile--1">{date}</div>
    <div class="patient-profile--2">{Visit_No}</div>
    <div class="patient-profile--3">{Case_Serial_No}:</div>
    <div class="patient-profile--4">{Name}</div>
    <div class="patient-profile--5">{Address}</div>
    <div class="patient-profile--6">{Age}</div>
    <div class="patient-profile--7">{Sex}</div>
    <div class="patient-profile--8">{Diagnosis}</div>
</section> */}