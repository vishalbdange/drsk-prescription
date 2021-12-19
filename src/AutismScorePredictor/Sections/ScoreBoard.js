import React,{useState,useEffect,createRef} from 'react'
import { Card,CardBody,CardTitle,CardSubtitle,CardText,Button,Table} from 'reactstrap'
import { useScreenshot } from 'use-react-screenshot'
import { saveAs } from 'file-saver'

const ScoreBoard = ({finalScore,patientForm}) => {
    const [text,setText] = useState("No Autism");
    const [criteria,setCriteria] = useState("");

    console.log(finalScore)
    useEffect(() =>{
        if(finalScore >= 20 && finalScore <=35){
            setText("No Autism")
            setCriteria("20 - 35");
        }
        else if(finalScore >= 30 && finalScore <=43){
            setText("Likely Autism")
            setCriteria("20 - 35");
        }
        else if( finalScore >= 44){
            setText("Severe Autism")
            setCriteria("20 - 35");
        }
    },[])
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
            <section ref={ref}>
            <CardTitle>
                <b>Patient Info : </b>
            </CardTitle>
            <Table
            >
            <thead>
                <tr>
                <th>
                    Name
                </th>
                <th>
                    Age
                </th>
                <th>
                    Sex
                </th>
                <th>
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
                </td>
                <td>
                {patientForm.Age}
                </td>
                <td>
                {patientForm.Sex}
                </td>
                <td>
                {patientForm.City}
                </td>
                <td>
                {patientForm.Mob_Number}
                </td>
                </tr>
            </tbody>
            </Table>
            <Card
            ref={ref}
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
                Happy to have a <b>no</b> label, have lots of hopes. Score can change 3 monthly and some issues which you may find to answer as sometimes or often....
                Till then work on what is lacking in the child, beyond the label. This score is based on old classification DSM IV, <b>do confirm what u scored is same with the dr scoring same for your kid.</b>
                </p>

<hr  style={{ width:"0%",outline:"0"} }/>
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
                    </Table>
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
                <img style={{width:"1000px",position:"relative",border:"2px solid orange",borderRadius:"30px"}} src={image} alt={'Screenshot Will Come Here'} />
                </div>
            </section>
        </div>
    )
}

export default ScoreBoard
