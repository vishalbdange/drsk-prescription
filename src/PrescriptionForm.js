import React, { useRef, useState, useMemo, useCallback } from 'react'
// import axios from 'axios'
import Pdf from "react-to-pdf";
import TestPDF from './TestPDF';
import { Link, useNavigate } from "react-router-dom"
import './Form.css'
import aakar from "./aakar.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormGroup, Form, Input, Label, Button, Col, Alert } from 'reactstrap'
import {FormControlLabel,InputLabel,Select,MenuItem,Badge,Checkbox} from '@material-ui/core'
import ImageCapture from "react-image-data-capture";
import NavbarComponent from './NavbarComponent';
import Draggable from 'react-draggable';
import {ArrowCircleDown,ArrowCircleUp,ArrowCircleUp1} from '@mui/icons-material';
import {IconButton} from '@material-ui/core';
import {general_medicines,constipation_controller,control_medicines,cross_motor_medicines,epilepsy_medicines,fine_motor_medicines,cognitive_medicines} from './PrescriptionItems/ALL_MEDICINES'
import axios from 'axios'

const prescription_Items = require('./prescription_Items').prescription_Items;
const PrescriptionForm = ({ changeImgURL }) => {

    console.log(prescription_Items[0])     
    const navigate = useNavigate();
    const [state, setState] = useState({
        DOB: '',
        file: null,
        Visit_No: '',
        Name: '',
        Address: '',
        Age: '',
        Sex: 'Male',
        Diagnosis: '',
        Goal: '',
        m_num: '',
        Prescription: [],
        Receipt: '',
        Description: "For neurodevelopmental disorders and delays Daily Occupational Therapy,behaviour Therapy and Speech therapy is important to achieve milestones needed for activities of daily living and later control and regulation of sensory and motor issues related to development and speech,so that concrete operations can be taught and further complex skills can be achieved.Its like tutions.",
        EmptyTextArea1 : "",
        check1:false,
        check2:false,
        check3:false,
        check4:false,
        check5:false,
        check6:false,
        check7:false

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
        console.log(state)
        prescription = values.val;
        console.log(prescription)
        state.Prescription = prescription;
        // setState({ ...state, Prescription: prescription })
        console.log(state)
    
        localStorage.setItem('prescription', JSON.stringify(prescription))
        //Backend post request here
        console.log("Printing Prescription")
        // axios.post('http://localhost:5000/prescription,', state)
        // .then((response) => {
        //     console.log(response.data)
        //     console.log("Prescription posted sucessfully")
        // });
        axios({
            method: 'post',
            // url: 'https://aakar-clinic.onrender.com/prescription',
            url: 'https://aakar-clinic.onrender.com/prescription',
            data: state, // you are sending body instead
            headers: {
            'Content-Type': 'application/json'
            }, 
          })
        navigate("/prescription-view")
        // }
    }
    // const [values, setValues] = useState({ val: [
    //     "ALL MEDICINES THAT HAVE SINGLE DAILY DOSE WITHOUT TIME WRITTEN SHOULD BE GIVEN EARLY MORNING EMPTY STOMACH MIXED WITH ALL OTHER MORNING MEDICINES AS A MORNING HEALTHDRINK",
    //     "SYR BIQPLUS  10 ML A DAY FOR 1 MONTH",
    //     "SYR L CARNOSHINE 400 10 ML A DAY FOR 1 MONTH ",
    //     "SYR TENONTEN 10 ML 2 TIMES A DAY FOR 1 MONTH ",
    //     "SYR KRTSHINE 400 / ASP Carno 10 ML A DAY FOR 1 MONTH ",
    //     "TAB SHARPZ/AlphaGPC 1 TAB A DAY FOR 1 MONTH ",
    //     "SYR DOFOTIL/GutClear 10 ML------10 ML FOR 1 MONTH ",
    //     "ARISTOZYME DROPS  1ML DAILY FOR 1 MONTH ",
    //     "TAB KRAVIONQ10 1 TAB  A  DAY FOR 1 MONTH ",
    //     "TAB RISDONE/RPDONE 1MG TAB GIVE 1/8---------0-------1/4 8:00 PMFOR 1 MONTH ", // bold
    //     "TAB TOMKID 10 MG 1/4 AT 8 AM---------------1/4 AT 4PM FOR 1 MONTH ",   //bold
    //     "SYR Flunil 1ML--------1ML FOR 1 MONTH ",
    //     "SYR MEMTONE 2ML------------2ML 8:00 PM  FOR 1 MONTH ",
    // ] });
    const [values, setValues] = useState({ val: [
    ] });


    function createInputs() {
        return values.val.map((el, i) =>
            <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "center",maxWidth:"720px"}}>
                 <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={() => moveUp(i)}
                    color="inherit"
                    >
                    <ArrowCircleUp />
                    </IconButton>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => moveDown(i)}
                color="inherit"
                >
                <ArrowCircleDown />
                </IconButton>
                {/* <Input type='button' style={{ width: "60px", borderRadius: "10%", margin: "10px" }} value='Up' onClick={() => moveUp(i)} /> */}
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

    function moveUp(i){
        console.log(i)
        let vals = [...values.val]
        var temp = vals[i];
        console.log(vals[i])
        console.log(vals[i-1])
        if(i>0){
            vals[i]=vals[i-1];
            vals[i-1]=temp;
        }
        setValues({ val: vals });
    }
    function moveDown(i){
        console.log(i)
        let vals = [...values.val]
        let n = vals.length;
        var temp = vals[i];
        console.log(vals[i])
        console.log(vals[i+1])
        if(i<n-1){
            vals[i]=vals[i+1];
            vals[i+1]=temp;
        }
        setValues({ val: vals });
    }
    const addClick = (text) => {
        setValues({ val: [...values.val, text] })
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
        } else if (name == "m_num") {
            setEmptyStates({ ...emptyStates, isMobileNo: true })
        } else if (name == "Receipt") {
            setEmptyStates({ ...emptyStates, isReceipt: true })
        } else if (name == "ImageFile") {
            setEmptyStates({ ...emptyStates, isImageFile: true })
        }
        var  value ;
        value = (name == "ImageFile" ? e.target.files[0] : e.target.value);
        if(name == "check1" || name == "check2" ||name == "check3" || name == "check4" ||name == "check5" || name == "check6" ||name == "check7"){
            value = e.target.checked
        }
        setState({ ...state, [name]: value })
    }
    const [enterPswd, setEnterPswd] = useState(true);
    const [pswd, setPswd] = useState(''); 
    const onHandleChangePswd = (e) => {
        const value = e.target.value;
        if(value == '9064'){
            setEnterPswd(false);
        }
        // setPswd(value);
        // if(pswd == '9064'){
        //     setEnterPswd(false);
        // }

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


    /* Checkboxes  */
    // const [checkBoxes,setCheckBoxes] = useState({"check1":false,"check2":false,"check3":false,"check4":false,"check5":false,"check6":false,"check7":false})
    // const handleChangeCheckBox = (e) => {
    //     // console.log(e.target.name)
    //     // console.log(e.target.checked)
    //     setCheckBoxes({...checkBoxes,[e.target.name]:e.target.checked})
    // }

    return (


        <div className="PreForm">
            <NavbarComponent />
            {/* {validateContent} */}
            {
                enterPswd ? (<div className="password-container">
                    <div style={{ textAlign: "center", fontSize: "26px", fontWeight: "200 !important", margin: "20px", padding: "10px" }}>
                        <Button varient="contained" color="success" style={{ padding: "20px" }} >
                            Prescription Form  :
                        </Button>
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

                        {/* <Button onClick={submitPswd} style={{ width: "400px", margin: "4px" }} >Go To Prescription Form</Button> */}
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
                                    name="m_num"
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
                            <FormGroup floating style={{ width: "400px", margin: "4px" }}>
                                <Input
                                    id="exampleEmptyTextArea1"
                                    name="EmptyTextArea1"
                                    type="textarea"
                                    placeholder="EmptyTextArea1"
                                    style={{ height: "70px" }}
                                    className="inp"
                                    required
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            </div>
                            <div style={{backgroundColor:"white",padding:"25px",borderRadius:"8px"}}>
                            <FormGroup>                                
                                <FormControlLabel fontColor="white" control={<Checkbox name="check1" onChange={handleChange} />} label="Jumping/Running/Climbing/Roaming" />
                                <FormControlLabel fontColor="white" control={<Checkbox name="check2" onChange={handleChange} />} label="Hitting/Hurting/Biting/Throwing" />
                                <FormControlLabel fontColor="white" control={<Checkbox name="check3" onChange={handleChange} />} label="Stimming/Object Obsession" />
                                <FormControlLabel fontColor="white" control={<Checkbox name="check4" onChange={handleChange} />} label="Indigestion/Constipation" />
                                <FormControlLabel fontColor="white" control={<Checkbox name="check5" onChange={handleChange} />} label="Pointing/Imitation/Non-Verbal Communication" />
                                <FormControlLabel fontColor="white" control={<Checkbox name="check6" onChange={handleChange} />} label="Vocabulary/Speech/Comprehension/Composition" />
                                <FormControlLabel fontColor="white" control={<Checkbox name="check7" onChange={handleChange} />} label="Sleep" />
                            </FormGroup>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                           
                                <Input type='button' value='+ Add Prescription ' onClick={() => addClick('')} style={{ marginTop:"10px",marginBottom: "15px",marginRight:"15px", width: "500px" }} />
                                <div style={{display:"flex",alignItems:"center"}}>
                               <div>
                                <div style={{backgroundColor:"white",padding:"6px",marginRight:"10px"}}>
                                        GENERAL MEDICINES
                                </div>
                                <Select    
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select" 
                                    value="General All"
                                    label="General Medicines"
                                    style={{padding:"2px",backgroundColor:"white"}}
                                    
                                >
                                
                                    {general_medicines.map((p_item,key) => {
                                        return(<>
                                        
                                            <MenuItem style={{maxWidth:"650px"}} onClick={() => addClick({p_item}.p_item)}  >{p_item}</MenuItem>
                                       
                                        </>
                                        )                                        
                                    })}
                                </Select>     
                                </div>     
                                <div>
                                <div style={{backgroundColor:"white",padding:"6px",marginRight:"10px"}}>
                                    EPILEPSY MEDICINES 
                                </div>
                                <Select    
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select" 
                                    value="General All"
                                    label="General Medicines"
                                    style={{padding:"2px",backgroundColor:"white"}}
                                    
                                >
                                
                                    {epilepsy_medicines.map((p_item,key) => {
                                        return(<>
                                        
                                            <MenuItem style={{maxWidth:"650px"}} onClick={() => addClick({p_item}.p_item)}  >{p_item}</MenuItem>
                                       
                                        </>
                                        )                                        
                                    })}
                                </Select>     
                                </div> 
                                <div>
                                <div style={{backgroundColor:"white",padding:"6px",marginRight:"10px"}}>
                                    CONTROL MEDICINES
                                </div>
                                <Select    
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select" 
                                    value="General All"
                                    label="General Medicines"
                                    style={{padding:"2px",backgroundColor:"white"}}
                                    
                                >
                                
                                    {control_medicines.map((p_item,key) => {
                                        return(<>
                                        
                                            <MenuItem style={{maxWidth:"650px"}} onClick={() => addClick({p_item}.p_item)}  >{p_item}</MenuItem>
                                       
                                        </>
                                        )                                        
                                    })}
                                </Select>     
                                </div>   
                                <div>
                                <div style={{backgroundColor:"white",padding:"6px",marginRight:"10px"}}>
                                        COGNITIVE MEDICINES
                                </div>
                                <Select    
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select" 
                                    value="General All"
                                    label="Cognitive Medicines"
                                    style={{padding:"2px",backgroundColor:"white"}}
                                    
                                >
                                
                                    {cognitive_medicines.map((p_item,key) => {
                                        return(<>
                                        
                                            <MenuItem style={{maxWidth:"650px"}} onClick={() => addClick({p_item}.p_item)}  >{p_item}</MenuItem>
                                       
                                        </>
                                        )                                        
                                    })}
                                </Select>     
                                </div>  
                                <div>
                                <div style={{backgroundColor:"white",padding:"6px",marginRight:"10px"}}>
                                    FINE MOTOR MEDICINES
                                </div>
                                <Select    
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select" 
                                    value="General All"
                                    label="Fine Motor Medicines"
                                    style={{padding:"2px",backgroundColor:"white"}}
                                    
                                >
                                
                                    {fine_motor_medicines.map((p_item,key) => {
                                        return(<>
                                        
                                            <MenuItem style={{maxWidth:"650px"}} onClick={() => addClick({p_item}.p_item)}  >{p_item}</MenuItem>
                                       
                                        </>
                                        )                                        
                                    })}
                                </Select>     
                                </div> 
                                <div>
                                <div style={{backgroundColor:"white",padding:"6px",marginRight:"10px"}}>
                                    CROSS MOTOR MEDICINES
                                </div>
                                <Select    
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select" 
                                    value="General All"
                                    label="Cross Motor Medicines"
                                    style={{padding:"2px",backgroundColor:"white"}}
                                    
                                >
                                
                                    {cross_motor_medicines.map((p_item,key) => {
                                        return(<>
                                        
                                            <MenuItem style={{maxWidth:"650px"}} onClick={() => addClick({p_item}.p_item)}  >{p_item}</MenuItem>
                                       
                                        </>
                                        )                                        
                                    })}
                                </Select>     
                                </div> 
                                <div>
                                <div style={{backgroundColor:"white",padding:"6px",marginRight:"10px"}}>
                                  CONSTIPATION CONTROLLER
                                </div>
                                <Select    
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select" 
                                    value="General All"
                                    label="Constipation Controller"
                                    style={{padding:"2px",backgroundColor:"white"}}
                                    
                                >
                                
                                    {constipation_controller.map((p_item,key) => {
                                        return(<>
                                        
                                            <MenuItem style={{maxWidth:"650px"}} onClick={() => addClick({p_item}.p_item)}  >{p_item}</MenuItem>
                                       
                                        </>
                                        )                                        
                                    })}
                                </Select>     
                                </div> 
                            </div>
                            {createInputs()}
                            <FormGroup floating style={{ width: "400px", marginTop: "25px" ,marginBottom:"5px"}}>
                                <Input
                                    id="exampleReceipt"
                                    name="Receipt"
                                    type="textarea"
                                    placeholder="Write Payement Receipt"
                                    defaultValue={'Payment Received of Rs. '}
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
