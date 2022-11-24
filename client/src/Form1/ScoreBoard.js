import React,{useState,createRef,useEffect} from 'react'
import { Card,CardBody,CardTitle,CardSubtitle,CardText,Button,Table,UncontrolledCollapse,Badge} from 'reactstrap'
import {Paper} from "@material-ui/core"
import { useScreenshot } from 'use-react-screenshot'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import aakar from "../aakar.jpg"
import moment from 'moment';
import Draggable from 'react-draggable'; // The default


const ScoreBoard = ({state,patientForm}) => {
    const [text,setText] = useState("No Autism");
    const [pdfContent,setPdfContent] = useState(true);
 

    const [form1srNo,setForm1srNo] = useState(0);
    useEffect(()=>{
        setForm1srNo(JSON.parse(localStorage.getItem('form1SrNo') || 0));
        console.log(form1srNo)
        setForm1srNo(form1srNo+1);
        localStorage.setItem('form1SrNo', form1srNo)
    },[ScoreBoard])

    const exportPDF = () => {
        
        const input = document.getElementById("Page");

        html2canvas(input,{logging:true,letterRendering:1,useCORS:true,}).then(canvas =>{
            const imgWidth = 0;
            const imgHeight = canvas.height * imgWidth / canvas.width;
          
            const imgData = canvas.toDataURL('img/png');
            const pdf = new jsPDF('p','mm','a4');
            let width = pdf.internal.pageSize.getWidth();
            let height = pdf.internal.pageSize.getHeight();
            pdf.addImage(imgData,'JPEG',0,0,width,height);
            // if(state.name !== null){
            //     // var pdfname = `${state.Name}.pdf`;
            //     var pdfname = "certificate.pdf";
            //     pdf.save(pdfname);
            // }
            // else{
                // pdf.save(`${state.Visit_No}.pdf`);
                pdf.save("certificate.pdf");
            // }
        })
    }
    const showElement = (element) => {
         if(element == ''){
            return (<>No</>);
         }else{
            return (<>{element}</>);
         }
    }
    console.log(state);
    const ref = createRef(null)
    const [image, takeScreenshot] = useScreenshot();
    var isSS = false;
    const getImage = () => {
        // ssBtnStyle.assign({},ssBtnStyle,vis);
        isSS = true;
        takeScreenshot(ref.current)
        console.log(isSS)
        

    }
    const [report,setReport] = useState(false);
  const handleShowReport = () => {
        setReport(!report);
  }
  var date = moment().format('LLLL');

    return (
        <div  >
   
            <section  className="page"  id="Page" ref={ref} >
 
            <Badge color='warning'> In progress</Badge>
            <div style={{textAlign:"center"}}>
                 <img src={aakar}  style={{width:"350px"}} alt="Aakar Clinic Image"/>
            </div> <br/>
            <CardTitle>
                <b>Patient Info : </b>
            </CardTitle>
            <Table
            >
        <thead>
                <tr>
                <th>
                    No.   &nbsp;  &nbsp;  &nbsp;  &nbsp;   &nbsp;  &nbsp;                 Name
                    
                </th>
                <th>
                  

                     &nbsp;  &nbsp;  &nbsp;
                    Age  

                </th>
                <th>
                    Sex
                    &nbsp;  &nbsp;  &nbsp;  &nbsp;
                    
                    City
                </th>
                <th>
                    Mob.Number
                </th>
                <th>
                   Date
                </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td scope="row">
                    {form1srNo}&nbsp;  &nbsp;  &nbsp;  &nbsp; 
                    {patientForm.Name}
                    &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
                {patientForm.Age}
                </td>
                <td>
                &nbsp;  &nbsp;  {patientForm.Sex}
                &nbsp;  &nbsp;  &nbsp;  &nbsp;
                    
                {patientForm.City}
                </td>
                <td>
                {patientForm.Mob_Number}
                </td>
                <td>
                {date}
                </td>
                </tr>
            </tbody>
            </Table>

            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12'>FORM 1  RESPONSE  </div>
                </div>
               <div style={{textAlign:"center",marginTop:"12px"}}> <h6 style={{padding:"2px",backgroundColor:"cyan", borderRadius:"8px"}} id="diagnosis">Diagnosis</h6 > </div>
               <Paper elevation={2} style={{padding:"5px"}}> 
                <div className='row' >
                    <div className='col-sm-12'><b>Diagnosis : </b>{showElement(state.Diagnosis)}</div>
                </div>
                </Paper>
                
               <div style={{textAlign:"center",marginTop:"12px"}}> <h6 style={{padding:"2px",backgroundColor:"cyan", borderRadius:"8px"}} id="chief">Chief complaints</h6 > </div>
                <Paper elevation={2} style={{padding:"5px"}}>
                <div className='row'>
                    <div className='col-sm-12'><b>Neurological Issues : </b>{showElement(state.Neuro_Issues)} </div>
                       
                </div>
                <div className='row'>
                    <div className='col-sm-12'><b>Epilipsy : </b> {showElement(state.Epilipsy)} </div>
                </div>  
                <div className='row'>
                    <div className='col-sm-12'><b>Development : </b>{showElement(state.Development)}</div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'><b>Nutrition : </b>{showElement(state.Nutrition)}</div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'><b>Movements : </b>{showElement(state.Movements)}</div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'><b>Clothing : </b>{showElement(state.Clothing)}</div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'><b>Feeding : </b>{showElement(state.Feeding)}</div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'><b>Behaviour : </b>{showElement(state.Behaviour)}</div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'><b>Medical Issues : </b>{showElement(state.Medical_Issues)}</div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'><b>Immunity : </b>{showElement(state.Immunity)}</div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'><b>Poor Weight : </b>{showElement(state.Poor_Weight)}</div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'><b>Obesity : </b>{showElement(state.Obesity)}</div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'><b>Constipated : </b>{showElement(state.Constipated)}</div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'><b>Cold Cough : </b>{showElement(state.Cold_cough)}</div>
                </div>
                </Paper>
               <div style={{textAlign:"center",marginTop:"12px"}}> <h6 style={{padding:"2px",backgroundColor:"cyan", borderRadius:"8px"}} id="birth">Birth History</h6 > </div>
               <Paper elevation={2} style={{padding:"5px"}}> 
                <div className='row'>
                    <div className='col-sm-12'><b>First Child </b>{showElement(state.first_child)} </div>
                       
                </div>
                <div className='row'>
                    <div className='col-sm-12'><b>Epilipsy : </b> {showElement(state.Epilipsy)} </div>
                </div>  
                <div className='row'>
                    <div className='col-sm-12'><b>Birth Insult : </b>{showElement(state.birth_insult)}</div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'><b>Normal Delivery : </b>{showElement(state.normal_d)}</div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'><b>Forceps : </b>{showElement(state.forceps)}</div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'><b>Vaccum Delivery : </b>{showElement(state.vaccum_d)}</div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'><b>Feeding : </b>{showElement(state.Feeding)}</div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'><b>Caeserian : </b>{showElement(state.caeserian)}</div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'><b>IVF / twin baby : </b>{showElement(state.ivf)}</div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'><b>Baby movements reduced before birth : </b>{showElement(state.baby_move)}</div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'><b>Liquor fluid reduced before birtht : </b>{showElement(state.liquor_f)}</div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'><b>Passed motion inside uterus : </b>{showElement(state.passed_m)}</div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'><b>Premature Baby : </b>{showElement(state.premature_b)}</div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'><b>Low birth weight : </b>{showElement(state.low_b)}</div>
                </div>                <div className='row'>
                    <div className='col-sm-12'><b>No Cry after birth : </b>{showElement(state.no_cry)} </div>
                       
                </div>
                <div className='row'>
                    <div className='col-sm-12'><b>Was in nicu or ventilator : </b> {showElement(state.nicu)} </div>
                </div>  
                <div className='row'>
                    <div className='col-sm-12'><b>Had Convulsions : </b>{showElement(state.convulsions)}</div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'><b>Contractures : </b>{showElement(state.contractures)}</div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'><b>Splints : </b>{showElement(state.splints)}</div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'><b>Spects : </b>{showElement(state.spects)}</div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'><b>Hearing and Vision Issues : </b>{showElement(state.h_v)}</div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'><b>Squint : </b>{showElement(state.squint)}</div>
                </div>
                 
                </Paper>
               <div style={{textAlign:"center",marginTop:"12px"}}> <h6 style={{padding:"2px",backgroundColor:"cyan", borderRadius:"8px"}} id="milestone">Milestone recall</h6 > </div>
            
                
            </div>
  
            </section>
            <section className="screenshot-capture">
                <Button color="primary" onClick={exportPDF} style= {{margin:"10px"}}>
                        Download Certificate PDF
                </Button> <br />
                <Button color="primary" onClick={getImage} style= {{margin:"10px"}}>
                        Download Certificate Image
                </Button> <br />
                <span><b>Certificate : </b> </span>
                <div>
                <br />
                <img style={{width:"1000px",position:"relative",border:"2px solid orange",borderRadius:"30px"}} src={image} alt={'Screenshot Will Come Here'} />
                </div>
            </section>

        </div>
    )
}

export default ScoreBoard
