import React,{useState,useEffect,createRef} from 'react'
import { Card,CardBody,CardTitle,CardSubtitle,CardText,Button,Table} from 'reactstrap'
import { useScreenshot } from 'use-react-screenshot'
import { saveAs } from 'file-saver'
import aakar from "../aakar.jpg"
import './style.css'
const ScoreBoard = ({result,patientForm}) => {
    const [text,setText] = useState("No Autism");
    const [criteria,setCriteria] = useState("");

    // console.log(finalScore)
    // useEffect(() =>{
    //     if(finalScore >= 20 && finalScore <=35){
    //         setText("No Autism")
    //         setCriteria("20 - 35");
    //     }
    //     else if(finalScore >= 30 && finalScore <=43){
    //         setText("Likely Autism")
    //         setCriteria("20 - 35");
    //     }
    //     else if( finalScore >= 44){
    //         setText("Severe Autism")
    //         setCriteria("20 - 35");
    //     }
    // },[])
    // const ref = createRef(null)
    // const [image, takeScreenshot] = useScreenshot();
    // var isSS = false;
    // const getImage = () => {
    //     // ssBtnStyle.assign({},ssBtnStyle,vis);
    //     isSS = true;
    //     takeScreenshot(ref.current)
    //     console.log(isSS)
        

    // }
    const ref = createRef(null)
    const [image, takeScreenshot] = useScreenshot();
    var isSS = false;
    const getImage = () => {
        // ssBtnStyle.assign({},ssBtnStyle,vis);
        isSS = true;
        takeScreenshot(ref.current)
        console.log(isSS)
        

    }


    return (
        <div >
            <section  className="page" ref={ref} >
            <div style={{textAlign:"center",margin:"0px"}} >
                        <img src={aakar} alt="aakar" style={{height:"80px"}}/>
                </div>
                <br /> <br />
            <CardTitle style={{fontSize:"16px"}}><strong>Patient's Info : </strong></CardTitle>
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
                    Sex
                    &nbsp;  &nbsp;  &nbsp;  &nbsp;
                    &nbsp;  &nbsp;  &nbsp;  &nbsp;
                City
                </th>
                <th>
                Mob.Number
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
                {patientForm.Sex}
                &nbsp;  &nbsp;  &nbsp;  &nbsp;
                    &nbsp;  &nbsp;  &nbsp;  &nbsp;
                {patientForm.City}
                </td>
                <td>
                {patientForm.Mob_Number}
                </td>
                </tr>
            </tbody>
            </Table>
            <Card
          
            >
                <CardBody>
                <CardTitle tag="h5">
                    Result :   <b> {result ? ( <>AutismDSM 5 Satisfied</>) :  <>Autism DSM 5 not Satisfied </>}</b>
                  
                </CardTitle>
                <hr  style={{ width:"0%",outline:"0"} }/>
                {/* <p>
                Happy to have a <b>no</b> label, have lots of hopes. Score can change 3 monthly and some issues which you may find to answer as sometimes or often....
                Till then work on what is lacking in the child, beyond the label. This score is based on old classification DSM IV, <b>do confirm what u scored is same with the dr scoring same for your kid.</b>
                </p> */}

{/* <hr  style={{ width:"0%",outline:"0"} }/>
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
                            20 - 35
                        </th>
                        <td>
                            No Autism
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">
                            36 - 43
                        </th>
                        <td>
                             Likely Autism
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">
                            More than 44
                        </th>
                        <td>
                             Severe Autism
                        </td>
                        </tr>
                    </tbody>
                    </Table> */}
                <CardText>
                    <b>Note : </b> 
                    <p>Repeat to the same test every 3 months.  <br />If any doubts or issues regarding the score or confirmation of he dignosis and its advice related to treatment , contact &nbsp; Dr.Kondekar <b>9869405747</b> .</p>
                </CardText>
                </CardBody>

            </Card>

            </section>
            <section className="screenshot-capture">
                <Button color="primary" onClick={getImage} style= {{margin:"10px"}}>
                        Download Certificate 
                </Button> <br />
                <span><b>Certificate : </b> </span>
                <div>
                <br />
                <img style={{height:"300px",position:"relative",borderRadius:"30px",padding:"20px"}} src={image} alt={'Screenshot Will Come Here'} />
                </div>
            </section>
        
        </div>
    )
}

export default ScoreBoard
