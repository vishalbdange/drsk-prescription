import React,{ createRef, useState } from 'react'
import './Preview.css'
import aakar from "./aakar.jpg"
import TestPDF from './TestPDF'
import { useScreenshot } from 'use-react-screenshot'
import { saveAs } from 'file-saver'
import {Button} from "@material-ui/core"


const Preview = () => {


    const state = JSON.parse(localStorage.getItem('state'));
    console.log(state);

    const ref = createRef(null)
    const [image, takeScreenshot] = useScreenshot();

    const getImage = () => takeScreenshot(ref.current)

    const downloadImage = () => {
        saveAs(image, 'image.jpg') // Put your image url here.
      }


    const { date, Visit_No, Case_Serial_No, Name, Address, Age, Sex, Diagnosis, Prescription } = state;
    return (
        <div className="prescription-view" ref={ref}>
            <img src={aakar} className="aakar-logo" alt="Aakar Clinic" />
            <section class="doctor-info">
                <div class="doctor-name">
                    <span>Dr Santosh <surname>Kondekar</surname></span>
                    <p>Reg N:86230 ,MD DNB DCH FCPS FAIMER</p>
                </div>
                <div class="profession">
                    <span>Neuro-Developmental <surname>Pediatrician</surname></span>
                    <p>aakaarclinic@gmail.com <num>M:9869405747</num></p>
                </div>
            </section>
            <h2 class="prescription-heading">Prescription</h2>
            <section class="patient-profile" >
            
            
                <div class="patient-profile--1">
                    <b>Date  &#160;&#160;&#160;&#160;&#160;&#160;&#160; &#160;&#160;&#160;&#160;&#160;&#160; &#160;&#160;&#160;&#160;&#160;  : </b> &#160; {date}</div>
                <hr style={{ border: "none", height: "0px" }} />

                <div class="patient-profile--2"><b>Visit No &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; :</b>&#160;  {Visit_No}</div>
                <hr style={{ border: "none", height: "0px" }} />

                <div class="patient-profile--3"><b>Case Serial No &#160;&#160; :</b> &#160; {Case_Serial_No}</div>
                <hr style={{ border: "none", height: "0px" }} />

                <div class="patient-profile--4"><b>Name &#160;&#160; &#160;&#160;&#160;&#160; &#160;&#160;&#160; &#160;&#160;&#160;&#160;&#160; : </b>&#160; {Name}</div>
                <hr style={{ border: "none", height: "0px" }} />

                <div class="patient-profile--5"><b>Address &#160;&#160;&#160; &#160;&#160;&#160;&#160; &#160;&#160; &#160; : </b>&#160; {Address}</div>
                <hr style={{ border: "none", height: "0px" }} />

                <div class="patient-profile--6"><b>Age  &#160;&#160;&#160;&#160; &#160;&#160;&#160;&#160; &#160; &#160;&#160; &#160;&#160; &#160;&#160; : </b>&#160; {Age}</div>
                <hr style={{ border: "none", height: "0px" }} />

                <div class="patient-profile--7"><b>Sex &#160; &#160;&#160;&#160;&#160; &#160;&#160;&#160;&#160;&#160; &#160;&#160; &#160;&#160; &#160;&#160; :</b> &#160; {Sex} </div>
                <hr style={{ border: "none", height: "0px" }} />

                <div class="patient-profile--8"><b>Diagnosis &#160;&#160;&#160; &#160;&#160; &#160; &#160; :</b> &#160; {Diagnosis}</div>
                <hr style={{ border: "none", height: "0px" }} />

                <div class="patient-profile--8"><b>Prescription &#160;&#160; &#160;&#160;&#160; :</b> &#160; {Prescription}</div>
            </section>
            <section className="screenshot-capture">
                <div>
                    <button style={{ position:"relative",top:"20px",cursor:"pointer",boxShadow:"1px 2px 5px grey",marginBottom: '10px' ,padding:"10px",borderRadius:"10px",margin:"5px",backgroundColor:"cyan"}} onClick={getImage}>
                        Take screenshot
                    </button><br /><br />
                    <p style={{textAlign:"center",fontSize:"15px"}} onClick={downloadImage}>If  Download doesn't start  : Right Click on image and Click Save image as..</p>
                    <br />
                    <h4 style={{textAlign:"center"}}>Find Screenshot below</h4>
                    <br />
                    
                </div>
                <img style={{width:"700px",height:"400px",position:"relative"}} src={image} alt={'Screenshot'} />
            </section>
            {/* <TestPDF state={state} /> */}

        </div>
    )
}

export default Preview
