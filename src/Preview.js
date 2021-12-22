import React,{ createRef, useState ,useEffect,useRef} from 'react'
import './Preview.css'
import aakar from "./aakar.jpg"
import TestPDF from './TestPDF'
import { useScreenshot } from 'use-react-screenshot'
import { saveAs } from 'file-saver'
import sign from "./sign.png"
import drskinfo from "./drskinfo.jpeg"
import doctorInfo from "./doctorInfo.jpeg"
import { FormGroup, Form, Input, Label, Button, Col,Alert ,Badge,Table,List} from 'reactstrap'
import Draggable from 'react-draggable'; // The default
import ReactToPrint from 'react-to-print';
import moment from 'moment';

const Preview = () => {


    const state = JSON.parse(localStorage.getItem('state'));
    const prescription = JSON.parse(localStorage.getItem('prescription'));
    // console.log(state)
    
    const ref = createRef(null)
    const [image, takeScreenshot] = useScreenshot();
    var isSS = false;
    const getImage = () => {
        // ssBtnStyle.assign({},ssBtnStyle,vis);
        isSS = true;
        takeScreenshot(ref.current)
        console.log(isSS)
    }

    const [textAreaStyle,setTextAreaStyle] = useState({width:"100%",border:"none",padding:"0%",margin:"0%"});
     useEffect (() => {
        var count = JSON.parse(localStorage.getItem('counter') || 0);
      
        localStorage.setItem('counter', ++count)
        console.log(JSON.parse(localStorage.getItem('counter')))
    },[window.unload])
 
   
    useEffect(() => {
        // console.log(Prescription)

        if(window.innerWidth > 900){
              
            setTextAreaStyle({width:"100%",border:"none",padding:"0%",margin:"0%",overflow:"hidden !important",maxHeight:"200px"})
        } 
        else if(window.innerWidth  < 900 &&  window.innerWidth > 510){  
            setTextAreaStyle({width:"100%",border:"none",padding:"0%",margin:"0%",overflow:"hidden !important",maxHeight:"400px"});
        } 
        
    })

    const downloadImage = () => {
        saveAs(image, 'image.jpg') // Put your image url here.
      }
    //  var vis = {visibility:"hidden"}
    const { date, file,Visit_No, Case_Serial_No,Name, Address, Age, Sex, Diagnosis,Goal,Prescription,Description} = state;
    function ChangeFormateDate(date){
        var p = date.split(/\D/g)
        return [p[2],p[1],p[0] ].join("/")
     }
     var displayDate = moment(date).format("Do MMM YYYY");




    return (
        <div className="prescription-view" >
            <section className ="page"  ref={ref} >
            <section>
            <Draggable>
            <div style={{textAlign:"center",display:"flex",justifyContent:"center"}}><img src={aakar} className="aakar-logo" alt="Aakar Clinic" /> </div>
            </Draggable>
        
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
             {/* <img   src={doctorInfo} className="doctor-logo" alt="doctor Info" /> */}
            {/* <section class="doctor-info">
                
                <div class="doctor-name">
                    <span>Dr Santosh <surname>Kondekar</surname></span>
                    <p>Reg N:86230 ,MD DNB DCH FCPS FAIMER</p>
                </div>
                <div class="profession">
                    <span>Neuro-Developmental <surname>Pediatrician</surname></span>
                    <p>aakaarclinic@gmail.com <num>M:9869405747</num></p>
                </div>
            </section> */}
            {/* <h2 class="prescription-heading">Prescription</h2> */}
            {/* <Draggable style={{textAlign:"center",border:"2px solid black"}}> */}
            
        <img src={file} style={{width:"144px",position:"absolute",top:"355px",right:"440px"}} alt="" /> 
           {/* </Draggable> */}
            <section class="patient-profile">
               
            <Table >
            <tbody>
                <tr>
                <td scope="row" >
                    Date &nbsp;  
                </td>
                <td >
               {/* {displayDate} &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Case_Serial_no  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;{JSON.parse(localStorage.getItem('counter')-2)}  */}
               {displayDate} &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Payment Receipt No. &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;W-{JSON.parse(localStorage.getItem('counter'))+2000}/2021

                </td>
                </tr>
                <tr>
                    <td scope="row">
                        Visit_No &nbsp;
                    </td>
                    <td >
                     {Visit_No}
                    </td>
                </tr>
                <tr>
                <td scope="row">
                    Name &nbsp;
                </td>
                <td >
                {Name}
                </td>
                </tr>
                <tr>
                <td scope="row">
                    Address &nbsp;
                </td>
                <td >
                {Address}
                </td>
                </tr>
                <tr>
                <td scope="row">
                    Age &nbsp;
                </td>
                <td >
                  {Age}
                </td>

                </tr>
                <tr>
                <td scope="row">
                    Sex &nbsp;
                </td>
                <td >
                {Sex}
                </td>
                </tr>
                <tr>
                <td scope="row" >
                    Diagnosis &nbsp;
                </td>
                <td style={{width:"100%"}}>
                {Diagnosis} 
                </td>
                </tr>
                <tr>
                <td scope="row" id="goal">
                    Goal for Next Month    &nbsp;
                </td>
                <td style={{width:"100%"}}>
               {Goal} 
                </td>
                </tr>
            </tbody>
            </Table>
           
            
            </section>
            {
                prescription.length === 0 ? (
                    <></>
                )  : (
                    <section>          
                    <div>
                       <p>PRESCRIPTION : &nbsp; ( Join parent support group and read more about Goal Directed Cognitive Approach at <a href="http://www.neuropediatrician.com">www.neuropediatrician.com</a> )</p>
       
                       <ul> {prescription?.map((p)=>{
                               return(
                                   <li>{p}</li>
                               )
                       })}</ul >
                   </div>
                       
                   <br />
                   </section>
                )
            }
          
<br />
            <section className="description">
                           

  
               <p className="textArea" >
               {Description}
               </p>

                <br /> 
                <Draggable style={{margin:"0px !important",padding:"0px !important",width:"100px !important"}}>
                <div style={{height:"100px",margin :"0px !important",paddingLeft:"50px",maxWidth:"100px !important"}}>
                <img  style={{height:"85px",margin:"0px !important",padding:"0px !important"}}  src={sign} alt='sign' />
                <img  style={{height:"85px",margin:"0px !important",padding:"0px !important"}}  src={drskinfo} alt='drskinfo' />
                 
                </div>
                </Draggable>
                <p className="textArea" style={{color:"#338BA8"}}>
               Read <b>www.pedneuro.in</b> for Dr kondekar's Protocol of managing Autism. For basic health queries  visit  <b>www.aakaarclinic.com</b> or <b>www.kondekar.com</b>. F/u on whatsapp every 07 days to titrate doses and physical follow up one monthly or as needed
               </p>
                <b style={{color:"#338BA8",textAlign:"center",margin:"0px",padding:"0px"}}>
                <p style={{margin:"0px",padding:"0px",fontSize:"12px"}}> DR KONDEKAR SANTOSH V. MD DNB DCH FCPS R NO  86230 MMC  </p>
                <p style={{margin:"0px",padding:"0px",fontSize:"12px"}}>WWW.AAKAARCLINIC.COM  </p>
                <p style={{margin:"0px",padding:"0px",fontSize:"12px"}}>AAKAAR CLINIC OPP BYCULLA STATION WEST MUMBAI 400024 INDIA   </p>
                 </b>

            </section>
            </section>
            </section>
            <section className="screenshot-capture" style={{padding:"4px"}}>
                <Button color="primary" onClick={getImage} style={{height:"35px",margin:"15px"}}>
                        Take screenshot
                </Button>
           
            <span><b>Image : </b></span>
            <div>
            <img style={{width:"400px",position:"relative",border:"2px solid orange",borderRadius:"30px"}} src={image} alt={'Screenshot Will Come Here'} />
            </div>
            </section>
            {/* <TestPDF state={state} /> */}

        </div>
    )
}

export default Preview