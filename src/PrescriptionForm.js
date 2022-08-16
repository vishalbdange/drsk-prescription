import React, { useRef, useState, useMemo, useCallback } from 'react'
import Pdf from "react-to-pdf";
import TestPDF from './TestPDF';
import { Link, useNavigate } from "react-router-dom"
import './Form.css'
import aakar from "./aakar.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormGroup, Form, Input, Label, Button, Col, Alert, Badge } from 'reactstrap'
import ImageCapture from "react-image-data-capture";

const PrescriptionForm = ({ changeImgURL }) => {

    const navigate = useNavigate();
    const [state, setState] = useState({
        DOB: new Date(Date.now()),
        file: null,
        Visit_No: '',
        Name: '',
        Address: '',
        Age: '',
        Sex: '',
        Diagnosis: '',
        Goal: '',
        MoblieNo: '',
        Prescription: [],
        Receipt: ' ',
        Description: "For neurodevelopmental disorders and delays Daily Occupational Therapy,behaviour Therapy and Speech therapy is important to achieve milestones needed for activities of daily living and later control and regulation of sensory and motor issues related to development and speech,so that concrete operations can be taught and further complex skills can be achieved.Its like tutions."
    });
    var prescription = [];
    var ImageURL = null;
    var imageSource = null;
    const [emptyStates, setEmptyStates] = useState({
        isName: true,
        isAddress: true,
        isAge: true,
        isSex: true,
        isDOB: true,
        isMobileNo: true,
        isReceipt: true,

    })
    localStorage.setItem('state', JSON.stringify(state))
    localStorage.setItem('prescription', JSON.stringify(prescription))
    // const csvDOB = state.DOB.toString();
    // const csvPrescription = prescription.toString();

    // const csvState = {
    //     "csvDOB" : "","Visit_No" : "","Name" : "", "csvPrescription" :" ","Address " : "","Age" : "", "Sex" : "", "Diagnosis":  "","Goal":"","MobileNo":"","Receipt":"","Description" :""
    // }
    // localStorage.setItem('prescription_data', JSON.stringify([csvState]))
    const validateForm = () => {
        // console.log("Validating")
        // if(state.Name == ""){
        //     setEmptyStates({...emptyStates,isName:false})
        //     validateContent(emptyStates)
        // }
        // else   if(state.Address == ""){
        //     setEmptyStates({...emptyStates,isAddress:false})
        //     validateContent(emptyStates)
        // }
        // else   if(state.Age == ""){
        //     setEmptyStates({...emptyStates,isAge:false})
        //     validateContent(emptyStates)
        // }
        // else{
        prescription = values.val;
        setState({ ...state, Prescription: values.val })
        localStorage.setItem('prescription', JSON.stringify(prescription))

        navigate("/prescription-view")
        // }
    }
    const [values, setValues] = useState({ val: [] });

    function createInputs() {
        return values.val.map((el, i) =>
            <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Input type="text" value={el || ''} style={{ margin: "10px", width: "720px" }} onChange={e => { handleChangeList(e, i) }} />
                <Input type='button' style={{ width: "60px", borderRadius: "10%", margin: "10px" }} value='X' onClick={() => removeClick(i)} />
            </div>
        );
    }

    const handleImageFile = (e) => {
        // console.log(e.target.files[0]);
        ImageURL = URL.createObjectURL(e.target.files[0]);
        console.log(ImageURL)
        changeImgURL(ImageURL);
    }

    function handleChangeList(e, i) {
        let vals = [...values.val];
        vals[i] = e.target.value;
        setValues({ val: vals });
    }
    const addClick = () => {
        setValues({ val: [...values.val, ''] })
    }

    const removeClick = (i) => {
        let vals = [...values.val];
        vals.splice(i, 1);
        console.log(vals)
        setValues({ val: vals });
    }

    const handleSubmit = event => {
        alert('A name was submitted: ' + values.val.join(', '));
        event.preventDefault();
    }

    const handleChange = (e) => {
        console.log(state.Description)
        const name = e.target.name;
        if (name == "Name") {
            setEmptyStates({ ...emptyStates, isName: true })
        } else if (name == "Address") {
            setEmptyStates({ ...emptyStates, isAddress: true })
        } else if (name == "Age") {
            setEmptyStates({ ...emptyStates, isAge: true })
        } else if (name == "DOB") {
            setEmptyStates({ ...emptyStates, isDOB: true })
        } else if (name == "MobileNo") {
            setEmptyStates({ ...emptyStates, isMobileNo: true })
        } else if (name == "Receipt") {
            setEmptyStates({ ...emptyStates, isReceipt: true })
        } else if (name == "ImageFile") {
            setEmptyStates({ ...emptyStates, isImageFile: true })
        }
        const value = name == "ImageFile" ? e.target.files[0] : e.target.value;

        setState({ ...state, [name]: value })

    }
    const [enterPswd, setEnterPswd] = useState(true);
    const [pswd, setPswd] = useState('');
    const onHandleChangePswd = (e) => {
        const value = e.target.value;
        setPswd(value);

    }
    const submitPswd = () => {
        if (pswd == '9064') {
            setEnterPswd(false);
        }
    }
    const [imageOpen, setImageOpen] = useState(false)
    const [showImgCapture, setShowImgCapture] = useState(true);
    const [imageTaken, setImageTaken] = useState(false)
    const config = useMemo(() => ({ video: true }), []);
    /*
      { video: true } - Default Camera View
      { video: { facingMode: environment } } - Back Camera
      { video: { facingMode: "user" } } - Front Camera
    */
    const [imgSrc, setImgSrc] = useState(null);
    const [imgFile, setImgFile] = useState(null);
    const onCapture = (imageData) => {
        // read as webP

        // Unmount component to stop the video track and release camera

        console.log(imageData.webP)
        imageSource = imageData.webP;
        // read as file
        setImgFile(imageData.file);

        console.log(imageSource)
        // setTimeout(()=>{
        setState(
            { ...state, file: imageSource }
        )
        // },2000)
        setImageTaken(true)
        setImageOpen(false);
        setShowImgCapture(false);
    };
    const onError = useCallback((error) => {

        console.log(error);
    }, []);
    //   const handleKeyDown = (e) => {
    //     console.log("HII")
    //     if (e.key === 'Enter') {
    //         console.log("HII")
    //          submitPswd();
    //       }
    //  }


    // imgFile can be used as a file upload form submission
    const formData = new FormData();
    formData.append("file", imgFile);
    return (


        <div className="PreForm">
            <div style={{ textAlign: "center", display: "flex", justifyContent: "center", padding: "20px" }}><img src={aakar} className="aakar-logo" alt="Aakar Clinic" /> </div>
            {/* {validateContent} */}
            {
                enterPswd ? (<div className="password-container">
                    <div style={{ textAlign: "center", fontSize: "26px", fontWeight: "200 !important", margin: "20px", padding: "10px" }}>
                        <Badge color="success" style={{ padding: "20px" }} >
                            Prescription Form  :
                        </Badge>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", cborder: "2px solid black" }}>
                        <FormGroup floating style={{ width: "400px", margin: "4px" }}>
                            <Input
                                id="examplepswd"
                                name="pswd"
                                placeholder="pswd"
                                type="password"
                                onChange={onHandleChangePswd}
                                className="inp"
                                required
                            />
                            <Label for="exampleDate" >
                                Enter Password :
                            </Label>
                        </FormGroup>

                        <Button onClick={submitPswd} style={{ width: "400px", margin: "4px" }} >Go To Prescription Form</Button>
                    </div>

                </div>) : (<>

                    <Form className="prescription-form" >
                        {/* <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",cborder:"2px solid black"}}> */}
                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center" }}>
                            <FormGroup floating style={{ width: "400px", margin: "4px" }}>
                                <Input
                                    id="exampleDOB"
                                    name="DOB"
                                    placeholder="DOB"
                                    type="date"
                                    onChange={handleChange}
                                    className="inp"
                                    required
                                />
                                <Label for="exampleDOB" >
                                    DOB
                                </Label>
                            </FormGroup>


                            {' '}
                            <FormGroup floating style={{ width: "400px", margin: "4px" }}>
                                <Input
                                    id="Visit_No"
                                    name="Visit_No"
                                    placeholder="Visit_No"
                                    type="text"
                                    onChange={handleChange}
                                    className="inp"
                                    required
                                />
                                <Label for="exampleVisit_No">
                                    Visit_No
                                </Label>
                            </FormGroup>

                            <FormGroup floating style={{ width: "400px", margin: "4px" }}>
                                <Input
                                    id="Name"
                                    name="Name"
                                    placeholder="Name"
                                    type="text"
                                    onChange={handleChange}
                                    className="inp"
                                    required
                                />
                                <Label for="exampleName">
                                    Name
                                </Label>
                            </FormGroup>
                        </div>
                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center" }}>
                            <FormGroup floating style={{ width: "400px", margin: "4px", margin: "4px" }}>
                                <Input
                                    id="Address"
                                    name="Address"
                                    placeholder="Address"
                                    type="text"
                                    onChange={handleChange}
                                    className="inp"
                                    required
                                />
                                <Label for="exampleAddress">
                                    Address
                                </Label>
                            </FormGroup>
                            <FormGroup floating style={{ width: "400px", margin: "4px", margin: "4px" }}>
                                <Input
                                    id="Age"
                                    name="Age"
                                    placeholder="Age"
                                    type="text"
                                    onChange={handleChange}
                                    className="inp"
                                    required
                                />
                                <Label for="exampleAge">
                                    Age
                                </Label>
                            </FormGroup>


                            <FormGroup floating style={{ width: "400px", margin: "4px" }}>

                                <Input
                                    id="exampleSelect"
                                    name="Sex"
                                    type="select"
                                    placeholder="Select Gender"
                                    className="inp"
                                    required
                                    onChange={handleChange}
                                >
                                    <option>
                                        Male
                                    </option>
                                    <option>
                                        Female
                                    </option>
                                    <option>
                                        Other
                                    </option>
                                </Input>
                                <Label for="exampleSex">
                                    Sex
                                </Label>
                            </FormGroup>
                        </div>
                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center" }}>
                            <FormGroup floating style={{ width: "400px", margin: "4px", margin: "4px" }}>
                                <Input
                                    id="MobileNo"
                                    name="MobileNo"
                                    placeholder="MobileNo"
                                    type="text"
                                    onChange={handleChange}
                                    className="inp"
                                    required
                                />
                                <Label for="exampleMobileNo">
                                    Mobile No.
                                </Label>
                            </FormGroup>
                            <FormGroup floating style={{ width: "400px", margin: "4px" }}>
                                <Input
                                    id="exampleDiagnosis"
                                    name="Diagnosis"
                                    type="textarea"
                                    placeholder="Diagnosis"
                                    style={{ height: "70px" }}
                                    className="inp"
                                    required
                                    onChange={handleChange}
                                />
                                <Label for="exampleDiagnosis">
                                    Diagnosis
                                </Label>
                            </FormGroup>
                            <FormGroup floating style={{ width: "400px", margin: "4px" }}>
                                <Input
                                    id="exampleGoal"
                                    name="Goal"
                                    type="textarea"
                                    placeholder="Goal"
                                    style={{ height: "70px" }}
                                    className="inp"
                                    required
                                    onChange={handleChange}
                                />
                                <Label for="exampleGoal">
                                    Goal for Next Month
                                </Label>
                            </FormGroup>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            {createInputs()}
                            <Input type='button' value='+ Add Prescription ' onClick={addClick} style={{ marginBottom: "10px", width: "800px" }} />
                            <FormGroup floating style={{ width: "400px", margin: "4px" }}>
                                <Input
                                    id="exampleReceipt"
                                    name="Receipt"
                                    type="textarea"
                                    placeholder="Write Payement Receipt"
                                    defaultValue={"Rs  Payment received."}
                                    style={{ height: "70px" }}
                                    className="inp"
                                    required
                                    onChange={handleChange}
                                />
                                <Label for="exampleReceipt">
                                    Payment Receipt  :
                                </Label>
                            </FormGroup>
                            <FormGroup floating style={{ width: "800px" }}>
                                <Input
                                    id="exampleDescription"
                                    name="Description"
                                    type="textarea"
                                    placeholder="Description"
                                    defaultValue="For neurodevelopmental disorders and delays Daily Occupational Therapy,behaviour Therapy and Speech therapy is important to achieve milestones needed for activities of daily living and later control and regulation of sensory and motor issues related to development and speech,so that concrete operations can be taught and further complex skills can be achieved.Its like tutions. Read www.pedneuro.in for Dr kondekar's Protocol of managing Autism. For basic health queries  visit  www.aakaarclinic.com or www.kondekar.com. F/u on whatsapp every 07 days to titrate doses and physical follow up one monthly or as needed"
                                    style={{ height: "160px" }}
                                    className="inp"
                                    onChange={handleChange}

                                />
                                <Label for="exampleDescription">
                                    Description
                                </Label>
                            </FormGroup>
                            <Label >
                                Upload Image
                            </Label>
                            <FormGroup style={{ width: "800px" }}>
                                <Input

                                    id="ImageFile"
                                    name="ImageFile"
                                    type="file"
                                    accept=".png,.jpeg"
                                    className="inp"
                                    onChange={handleImageFile}

                                />

                            </FormGroup>
                            <Button onClick={() => { setImageOpen(true); setShowImgCapture(true) }} style={{ marginBottom: "10px" }} >Take Photo</Button>
                            {showImgCapture && imageOpen && (
                                <>
                                    <ImageCapture
                                        onCapture={onCapture}
                                        onError={onError}
                                        width={300}
                                        userMediaConfig={config}
                                    />

                                </>
                            )}
                            {/* { imageTaken ? (
                        <div>
                            <p>Image Taken</p>
                            <img style={{width:"60px"}} src={imageSource} alt="Patient's Photo" />
                       </div>
                    ) : null} */}

                            <Button
                                color="success"
                                onClick={validateForm}
                            >Submit
                            </Button>
                        </div>


                    </Form>
                </>
                )
            }
        </div>


    )
}

export default PrescriptionForm
