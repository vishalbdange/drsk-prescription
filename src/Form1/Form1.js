import React, { useState, useEffect } from 'react'
import { Button, FormGroup, Input, Label, Col, Collapse, UncontrolledCollapse, Badge, CardTitle, Card, UncontrolledAlert } from 'reactstrap'
import { TextField } from '@material-ui/core'
import ScoreBoard from './ScoreBoard'
// import Firebase from './firebase';
import aakar from "../aakar.jpg"

const Form1 = () => {


    const [patientForm, setPatientForm] = useState({
        Name: '',
        Age: '',
        Sex: '',
        City: '',
        Mob_Number: ''
    })
    const [state, setState] = useState({
        /* Chief Complaints */
        Diagnosis: '',
        Neuro_Issues: '',
        Epilipsy: '',
        Develoement: '',
        Nutrition: '',
        Movements: '',
        Clothing: '',
        Feeding: '',
        Behaviour: '',
        Medical_Issues: '',
        Immunity: '',
        Poor_Weight: '',
        Obesity: '',
        Constipated: '',
        Cold_cough: '',
        
        /* Birth History*/

        first_child: '',
        birth_insult: '',
        normal_d: '',
        forceps: '',
        vaccum_d: '',
        caeserian: '',
        ivf: '',
        baby_move: '',
        liquor_f: '',
        passed_m: '',
        premature_b: '',
        low_b: '',
        no_cry: '',
        nicu: '',
        convulsions: '',
        contractures: '',
        splints: '',
        spects: '',
        h_v: '',
        squint: '',
        imp_history_b: '',
    })
  

    const [password, setPassword] = useState("");

    const [scoreBoard, setScoreBoard] = useState(false);
    const [submitPswd, setSubmitPswd] = useState(false);
    const [forgotPswd, setForgotPswd] = useState(false);
    const [sendOtp, setSendOtp] = useState(false);
    const [atHome, setAtHome] = useState(true)
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handlesubmitPassword = () => {
        setSubmitPswd(true)
    }

    const handleSubmitForm1 = () => {
        setScoreBoard(true);
    }

    const handleChangeForm = (e) => {

        var name = e.target.name;
        var value = e.target.value;
        setPatientForm({ ...patientForm, [name]: value })
    }
    const handleChangefomr2 = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        console.log(state);
        setState({ ...state, [name]: value });

    }
    const gotoAssesment = (e) => {
        e.preventDefault();
        console.log(document.getElementById('Name'))
        console.log(document.getElementById('Age'))
        console.log(document.getElementById('Sex'))
        console.log(document.getElementById('City'))
        console.log(document.getElementById('Mob_Number'))
        if (document.getElementById('Name') === null || document.getElementById('Age') === null || document.getElementById('Sex') === null || document.getElementById('City ') === null || document.getElementById('Mob_Number') === null) {

            setAtHome(false)
        } else {
            setAtHome(false)
        }
    }
    return (
        <div>
            <div style={{ textAlign: "center", margin: "20px" }} >
                <img src={aakar} alt="aakar" className="aakar-logo" />
            </div>
            {
                scoreBoard ?
                    (
                        <>
                            <ScoreBoard state={state} patientForm={patientForm}  />
                            <Button onClick={() => { setScoreBoard(false) }} style={{ margin: "20px", float: "right" }}> Fill Again ?</Button>
                        </>) :
                    (
                        <>
                            {
                                atHome ? (<>
                        <div style={{textAlign:"center",fontSize:"22px"}}>
                              <Card color="info" >
                                  <CardTitle style={{margin:"20px 10px !important"}}> 
                                    Neuro Developmental Pediatrician Dr Kondekar Treatment for Autism ADHD Learning disability Epilepsy
                              </CardTitle>
                                </Card>
                                </div> <br />
                                    <div style={{ textAlign: "center", fontSize: "30px" }}>
                                        <Badge color="danger" >
                                            Form 1 Neuro-Develoopmental History ( In Progress)
                                        </Badge>
                                    </div>
                                    <form onSubmit={gotoAssesment} style={{ padding: "20px 100px" }}>
                                        <FormGroup>

                                            <Label for="exampleName" sm-2>
                                                Enter Name :
                                            </Label>
                                            <Col sm-10>
                                                <Input
                                                    id="Name"
                                                    name="Name"
                                                    type="text"

                                                    onChange={handleChangeForm}


                                                />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleAge" sm-2>
                                                Enter Age :
                                            </Label>
                                            <Col sm-10>
                                                <Input
                                                    id="Age"
                                                    name="Age"
                                                    type="number"

                                                    onChange={handleChangeForm}
                                                />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleSex" sm-2>
                                                Enter Sex :
                                            </Label>
                                            <Col sm-10>
                                                <Input
                                                    id="Sex"
                                                    name="Sex"
                                                    type="text"

                                                    onChange={handleChangeForm}
                                                />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleSex" sm-2>
                                                Enter City :
                                            </Label>
                                            <Col sm-10>
                                                <Input
                                                    id="City"
                                                    name="City"
                                                    type="text"

                                                    onChange={handleChangeForm}
                                                />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="example" sm-2>
                                                Enter Mobile Number :
                                            </Label>
                                            <Col sm-10>
                                                <Input

                                                    id="Mob_Number"
                                                    name="Mob_Number"
                                                    type="number"

                                                    onChange={handleChangeForm}
                                                />
                                            </Col>
                                        </FormGroup>

                                        <Button type="submit">Go To Assesment Form1</Button>
                                    </form>
                                </>) :
                                    <>

                                        {
                                            (password != "www.pedneuro.in" || !submitPswd) ?
                                                (
                                                    <>
                                                        {
                                                            !forgotPswd ?
                                                                <div style={{ padding: "20px 100px" }}>
                                                                     <p>Password is : www.pedneuro.in</p>
                                                                    <FormGroup row p-0 >
                                                                        <Label for="exampleSex" sm-2>
                                                                            Enter Password :
                                                                        </Label>
                                                                        <Col sm-10>
                                                                            <Input
                                                                                id="password"
                                                                                name="password"
                                                                                type="text"
                                                                                className="inp"
                                                                                onChange={handleChangePassword}
                                                                            />
                                                                        </Col>
                                                                    </FormGroup>
                                                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                                        <Button onClick={handlesubmitPassword}>Submit</Button>
                                                                        <Button onClick={() => { setAtHome(true) }}>Back</Button>
                                                                    </div>
                                                                </div>
                                                                : (
                                                                    <>

                                                                    </>)
                                                        }

                                                    </>
                                                )
                                                :
                                                (
                                                    <>
                                                        <br /> <br /> <br />
                                                        <div style={{ margin: "15px" }}>
                                                            <div style={{ textAlign: "center" }}>
                                                                <Button color="info" id="diagnosis" >Diagnosis</Button> </div>
                                                            <UncontrolledCollapse toggler="#diagnosis">
                                                                <FormGroup>

                                                                    <Label>Diagnosis in one line and one major concern or change u wish to see on priority</Label>
                                                                    <Input type="text" name="Diagnosis" onChange={handleChangefomr2} />
                                                                </FormGroup>
                                                            </UncontrolledCollapse>
                                                            <div style={{ textAlign: "center", margin: "15px" }}><Button color="info" id="chiefComplaints">Chief complaints</Button></div>
                                                            <div style={{ margin: "30px" }}>
                                                                <UncontrolledCollapse toggler="#chiefComplaints">
                                                                    <div className='container'>


                                                                        <strong>What are the problems in managing your child</strong> <hr />
                                                                        <div className='row'>
                                                                            <div className='col-sm-4'>
                                                                                <FormGroup>
                                                                                    <Label>Neurology Issues</Label>
                                                                                    <Input name="Neuro_Issues" onChange={handleChangefomr2} type="text" />
                                                                                </FormGroup> </div>
                                                                            <div className='col-sm-4'>
                                                                                <FormGroup>
                                                                                    <Label>Epilipsy</Label>
                                                                                    <Input name='Epilipsy' onChange={handleChangefomr2} type="text" />
                                                                                </FormGroup> </div>
                                                                            <div className='col-sm-4'>
                                                                                <FormGroup>
                                                                                    <Label>Development</Label>
                                                                                    <Input name='Development' onChange={handleChangefomr2} type="text" />
                                                                                </FormGroup> </div>
                                                                        </div>
                                                                        <div className='row'>
                                                                            <div className='col-sm-4'>
                                                                                <FormGroup>
                                                                                    <Label>Nutrition</Label>
                                                                                    <Input name="Nutrition" onChange={handleChangefomr2} type="text" />
                                                                                </FormGroup> </div>
                                                                            <div className='col-sm-4'>
                                                                                <FormGroup>
                                                                                    <Label>Movements</Label>
                                                                                    <Input name="Movements" onChange={handleChangefomr2} type="text" />
                                                                                </FormGroup> </div>
                                                                            <div className='col-sm-4'>
                                                                                <FormGroup>
                                                                                    <Label>Clothing</Label>
                                                                                    <Input name="Clothing" onChange={handleChangefomr2} type="text" />
                                                                                </FormGroup> </div>
                                                                        </div>
                                                                        <div className='row'>
                                                                            <div className='col-sm-4'>
                                                                                <FormGroup>
                                                                                    <Label>Feeding</Label>
                                                                                    <Input name='Feeding' onChange={handleChangefomr2} type="text" />
                                                                                </FormGroup> </div>
                                                                            <div className='col-sm-4'>
                                                                                <FormGroup>
                                                                                    <Label>Behaviour</Label>
                                                                                    <Input name="Behaviour" onChange={handleChangefomr2} type="text" />
                                                                                </FormGroup> </div>
                                                                            <div className='col-sm-4'>
                                                                                <FormGroup>
                                                                                    <Label>Medical Issues</Label>
                                                                                    <Input name="Medical_Issues" onChange={handleChangefomr2} type="text" />
                                                                                </FormGroup> </div>
                                                                        </div>
                                                                        <div className='row'>
                                                                            <div className='col-sm-4'>
                                                                                <FormGroup>
                                                                                    <Label>Immunity</Label>
                                                                                    <Input name="Immunity" onChange={handleChangefomr2} type="text" />
                                                                                </FormGroup> </div>
                                                                            <div className='col-sm-4'>
                                                                                <FormGroup>
                                                                                    <Label>Poor Weight</Label>
                                                                                    <Input name="Poor_Weight" onChange={handleChangefomr2} type="text" />
                                                                                </FormGroup> </div>
                                                                            <div className='col-sm-4'>
                                                                                <FormGroup>
                                                                                    <Label>Obesity</Label>
                                                                                    <Input name="Obesity" onChange={handleChangefomr2} type="text" />
                                                                                </FormGroup> </div>
                                                                        </div>
                                                                        <div className='row'>
                                                                            <div className='col-sm-6'>
                                                                                <FormGroup>
                                                                                    <Label>Constipated</Label>
                                                                                    <Input name="Constipated" onChange={handleChangefomr2} type="text" />
                                                                                </FormGroup> </div>
                                                                            <div className='col-sm-6'>
                                                                                <FormGroup>
                                                                                    <Label>Repeated Cough Cold</Label>
                                                                                    <Input name="Cold_Cough" onChange={handleChangefomr2} type="text" />
                                                                                </FormGroup> </div>
                                                                        </div>
                                                                    </div>
                                                                </UncontrolledCollapse>
                                                            </div>
                                                            <div style={{ textAlign: "center", margin: "15px" }}><Button color="info" id="birth">Birth History </Button></div>
                                                            <div style={{ margin: "30px" }}>
                                                                <UncontrolledCollapse toggler="#birth" style={{ margin: "15px" }}>
                                                                    <div className='container'>
                                                                        <strong>Explain</strong> <hr />
                                                                        <div className='row'>
                                                                            <div className='col-sm-4'>
                                                                                <FormGroup>
                                                                                    <Label>First Child</Label>
                                                                                    <Input name="first_child" onChange={handleChangefomr2} type="text" />
                                                                                </FormGroup> </div>
                                                                            <div className='col-sm-4'>
                                                                                <FormGroup>
                                                                                    <Label>Birth insult</Label>
                                                                                    <Input name='birth_insult' onChange={handleChangefomr2} type="text" />
                                                                                </FormGroup> </div>
                                                                            <div className='col-sm-4'>
                                                                                <FormGroup>
                                                                                    <Label>Normal Delivery</Label>
                                                                                    <Input name='normal_d' onChange={handleChangefomr2} type="text" />
                                                                                </FormGroup> </div>
                                                                        </div>
                                                                        <div className='row'>
                                                                            <div className='col-sm-4'>
                                                                                <FormGroup>
                                                                                    <Label>forceps</Label>
                                                                                    <Input name="forceps" onChange={handleChangefomr2} type="text" />
                                                                                </FormGroup> </div>
                                                                            <div className='col-sm-4'>
                                                                                <FormGroup>
                                                                                    <Label>Vaccum Delivery</Label>
                                                                                    <Input name="vaccum_d" onChange={handleChangefomr2} type="text" />
                                                                                </FormGroup> </div>
                                                                            <div className='col-sm-4'>
                                                                                <FormGroup>
                                                                                    <Label>Caeserian section</Label>
                                                                                    <Input name="caeserian" onChange={handleChangefomr2} type="text" />
                                                                                </FormGroup> </div>
                                                                        </div>
                                                                        <div className='row'>
                                                                            <div className='col-sm-4'>
                                                                                <FormGroup>
                                                                                    <Label> IVF / twin baby</Label>  
                                                                                    <Input name='ivf' onChange={handleChangefomr2} type="text" />
                                                                                </FormGroup> </div>
                                                                            <div className='col-sm-4'>
                                                                                <FormGroup>
                                                                                    <Label>Baby movements reduced before birth</Label>
                                                                                    <Input name="baby_move" onChange={handleChangefomr2} type="text" />
                                                                                </FormGroup> </div>
                                                                            <div className='col-sm-4'>
                                                                                <FormGroup>
                                                                                    <Label>Liquor fluid reduced before birth</Label>
                                                                                    <Input name="liquor_f" onChange={handleChangefomr2} type="text" />
                                                                                </FormGroup> </div>
                                                                        </div>
                                                                        <div className='row'>
                                                                            <div className='col-sm-4'>
                                                                                <FormGroup>
                                                                                    <Label>Passed motion inside uterus</Label>
                                                                                    <Input name="passed_m" onChange={handleChangefomr2} type="text" />
                                                                                </FormGroup> </div>
                                                                            <div className='col-sm-4'>
                                                                                <FormGroup>
                                                                                    <Label>Premature baby</Label>
                                                                                    <Input name="premature_b" onChange={handleChangefomr2} type="text" />
                                                                                </FormGroup> </div>
                                                                            <div className='col-sm-4'>
                                                                                <FormGroup>
                                                                                    <Label>Low birth weight</Label>
                                                                                    <Input name="low_b" onChange={handleChangefomr2} type="text" />
                                                                                </FormGroup> </div>
                                                                        </div>
                                                                        <div className='row'>
                                                                            <div className='col-sm-4'>
                                                                                <FormGroup>
                                                                                    <Label>Did not cry after birth</Label>
                                                                                    <Input name="no_cry" onChange={handleChangefomr2} type="text" />
                                                                                </FormGroup> </div>
                                                                            <div className='col-sm-4'>
                                                                                <FormGroup>
                                                                                    <Label>Was in nicu or ventilator</Label>
                                                                                    <Input name="nicu" onChange={handleChangefomr2} type="text" />
                                                                                </FormGroup> </div>
                                                                            <div className='col-sm-4'>
                                                                                <FormGroup>
                                                                                    <Label>Had convulsions</Label>
                                                                                    <Input name="convulsions" onChange={handleChangefomr2} type="text" />
                                                                                </FormGroup> </div>
                                                                        </div>
                                                                        <div className='row'>
                                                                            <div className='col-sm-4'>
                                                                                <FormGroup>
                                                                                    <Label>contractures</Label>
                                                                                    <Input name="contractures" onChange={handleChangefomr2} type="text" />
                                                                                </FormGroup> </div>
                                                                            <div className='col-sm-4'>
                                                                                <FormGroup>
                                                                                    <Label>Splints</Label>
                                                                                    <Input name="splints" onChange={handleChangefomr2} type="text" />
                                                                                </FormGroup> </div>
                                                                            <div className='col-sm-4'>
                                                                                <FormGroup>
                                                                                    <Label>Spects</Label>
                                                                                    <Input name="spects" onChange={handleChangefomr2} type="text" />
                                                                                </FormGroup> </div>
                                                                        </div>
                                                                        <div className='row'>
                                                                            <div className='col-sm-4'>
                                                                                <FormGroup>
                                                                                    <Label>Hearing and vision issues</Label>
                                                                                    <Input name="h_v" onChange={handleChangefomr2} type="text" />
                                                                                </FormGroup> </div>
                                                                            <div className='col-sm-4'>
                                                                                <FormGroup>
                                                                                    <Label>Squint</Label>
                                                                                    <Input name="squint" onChange={handleChangefomr2} type="text" />
                                                                                </FormGroup> </div>
                                                                            <div className='col-sm-4'>
                                                                                <FormGroup>
                                                                                    <Label>Any other important history</Label>
                                                                                    <Input name="imp_history_b" onChange={handleChangefomr2} type="text" />
                                                                                </FormGroup> </div>
                                                                        </div>
                                                                    </div>

                                                                </UncontrolledCollapse>
                                                            </div>
                                                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }} >
                                                                <Button color="success" onClick={handleSubmitForm1}>Show Autism Form1 Response </Button>
                                                            </div>
                                                        </div>
                                                    </>)}
                                    </>
                            }
                        </>
                    )}
        </div>
    )
}

export default Form1
