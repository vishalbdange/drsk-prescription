import React,{useState,useEffect,createRef} from 'react'
import { Card,CardBody,CardTitle,CardSubtitle,CardText,Button,Table} from 'reactstrap'
import {Paper} from "@material-ui/core"
import { useScreenshot } from 'use-react-screenshot'
import { saveAs } from 'file-saver'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import moment from 'moment';
import aakar from "../aakar.jpg"
import Draggable from 'react-draggable'; // The default


const ScoreBoard = ({finalScore,patientForm,allQs,ans}) => {
    const [text,setText] = useState("No Autism");
    const [criteria,setCriteria] = useState("");
    const mapScore = {
        'Never' : 0,
        'Sometimes' : 4,
        'Often' : 8,
        'Always' : 12
    }
    console.log(ans)
    useEffect(() =>{
        if(finalScore >= 0 && finalScore <=20){
            setText("No Autism")
            setCriteria("0 - 20");
        }
        else if(finalScore >= 21 && finalScore <=40){
            setText("Independent Autism")
            setCriteria("21 - 40");
        }
        else if(finalScore >= 41 && finalScore <=60){
            setText("Nearly Independent Autism")
            setCriteria("41 - 60");
        }
        else if(finalScore >= 61 && finalScore <=80){
            setText("Partly Independent Autism")
            setCriteria("61 - 80");
        }
        else if( finalScore >= 81){
            setText("Dependent Autism")
            setCriteria(" > 80");
        }
    },[])

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
        <div  ref={ref}>            
            
            <section  id="Page" className="page" ref={ref}>
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
                    Name
                    &nbsp;  &nbsp;  &nbsp;  &nbsp;
                    &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;
                    Age
                </th>
                <th>
                &nbsp;  &nbsp;&nbsp; Sex
                    &nbsp;  &nbsp;  &nbsp;  &nbsp;
                      &nbsp;  &nbsp;
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
                    {patientForm.Name}
                    &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;
                {patientForm.Age}
                </td>
                <td>
                &nbsp;  &nbsp; {patientForm.Sex}
                &nbsp;  &nbsp;  &nbsp;  &nbsp;
                     &nbsp;  &nbsp;
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
            <Card
            >
                <CardBody>
                <CardTitle tag="h5">
                    Result : {text}
                  
                   
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    Autism Score : {finalScore}
                   
                </CardSubtitle>
                <hr  style={{ width:"0%",outline:"0"} }/>
                <p>
                Dr Kondekars quantitative objective DSM V AUTISM SCORE
                This scoring system is based on DSM V autism criteria. First ever quantitative objective scoring system based on DSM V autism criteria since it's inception 2013.
                Key rule for selecting score is age inappropriateness, that is the deficit in development of given parameter or symptoms.
                </p>
                <p>
                The scores are graded as following : 
                </p>

<hr style={{ width:"0%",outline:"0"} }/>
                <Table
                    style={{fontSize:"15px "}}
                    >
                    <thead>
                        <tr>
                        <th>
                            Autism Score 
                        </th>
                        <th>
                            Result
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">
                            Level 0 : 0 - 20
                        </th>
                        <td>
                            No Autism
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">
                            Level 1 : 21 - 40
                        </th>
                        <td>
                             Independent Autism
                        </td>
                        </tr>          <tr>
                        <th scope="row">
                            Level 2 : 41 - 60
                        </th>
                        <td>
                             Nearly Independent Autism
                        </td>
                        </tr>          <tr>
                        <th scope="row">
                            Level 3 : 61 - 80
                        </th>
                        <td>
                             Partly Independent Autism
                        </td>
                        </tr>
                        
                        <tr>
                        <th scope="row">
                            Level 4 : More than 80
                        </th>
                        <td>
                             Dependent Autism
                        </td>
                        </tr>
                    </tbody>
                    </Table>
                <CardText>
                    <b>Note : </b> 
                    <p>Repeat to the same test every 3 months.  <br />If any doubts or issues regarding the score or confirmation of he dignosis and its advice related to treatment , contact &nbsp; Dr.Kondekar <b>9869405747</b> .</p>
                </CardText>
                <br />
                <div  >
                <hr />
                    <div style={{textAlign:"center"}}><p style={{fontSize:"24px"}}>Form2  Report</p ></div>
                    <hr />
                    
                    <table  >
                         <thead>
                         <th style={{textAlign:"center"}}>Questions</th> &nbsp;
                         <th> Answers </th> 
                         </thead>
                            {
                  
                                allQs.map((q,index)=>{
                                     if([mapScore[ans[parseInt(q.id.slice(1))]]] !== undefined && ans[parseInt(q.id.slice(1))] != 'Never'){
                                        return(
                                            <tr style={{fontSize:"9px"}}>
                                                <td>{q.name}</td>
                                                &nbsp;
                                                <td>  {ans[parseInt(q.id.slice(1))]} ( {mapScore[ans[parseInt(q.id.slice(1))]]} ) </td>
                                       </tr>
                                        )
                                     }
                                })
                            }
                         
                    </table>
                    </div>
                </CardBody>

            </Card>
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
