import React, { useRef, useState ,useMemo,useCallback} from 'react'
import Pdf from "react-to-pdf";
import TestPDF from './TestPDF';
import { Link ,useNavigate} from "react-router-dom"
import './Form.css'
import aakar from "./aakar.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormGroup, Form, Input, Label, Button, Col,Alert ,Badge} from 'reactstrap'
import ImageCapture from "react-image-data-capture"; 

const PrescriptionForm = () => {
  
    const navigate = useNavigate();
    const [state, setState] = useState( {
        date: new Date(Date.now()).toLocaleString(),
        Visit_No: '',
        file : null,
        Name: '',
        Address: '',
        Age: '',
        Sex: '',
        Diagnosis: '',
        Goal:'',
        Prescription : [],
        Description:"For neurodevelopmental disorders and delays Daily Occupational Therapy,behaviour Therapy and Speech therapy is important to achieve milestones needed for activities of daily living and later control and regulation of sensory and motor issues related to development and speech,so that concrete operations can be taught and further complex skills can be achieved.Its like tutions."
    });
    var prescription = [];

    const [emptyStates,setEmptyStates] = useState({
        isName:true,
        isAddress:true,
        isAge:true,
        isSex:true
    })
    localStorage.setItem('state',JSON.stringify(state))
    localStorage.setItem('prescription',JSON.stringify(prescription))
    const validateForm  = () => {
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
            console.log(values.val)
            prescription = values.val;
            setState({...state,Prescription:values.val})
            localStorage.setItem('prescription',JSON.stringify(prescription))
            console.log(state)
          
            navigate("/prescription-view")
        // }
    }
    const [values, setValues] = useState({ val: []});

    function createInputs() {
      return values.val.map((el, i) =>
        <div key={i} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <Input type="text" value={el||''}  style={{margin:"10px",width:"700px"}} onChange={e => {handleChangeList(e,i)}} />
          <Input type='button' style={{width:"60px",borderRadius:"10%",margin:"10px"}} value='X' onClick={() => removeClick(i)} />
        </div>
      );
    }

    function handleChangeList(e,i) {
        let vals = [...values.val];
        vals[i] = e.target.value;
        setValues({ val: vals });
    }
    const addClick = () => {
        setValues({ val: [...values.val, '']})
    }

    const removeClick = (i) => {
        let vals = [...values.val];
        vals.splice(i,1);
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
        if(name == "Name"){
            setEmptyStates({...emptyStates,isName:true})
        }else   if(name == "Address"){
            setEmptyStates({...emptyStates,isAddress:true})
        }else  if(name == "Age"){
            setEmptyStates({...emptyStates,isAge:true})
        } 
        const value = e.target.value;
        setState({ ...state, [name]: value })
    }
    const handleChangeImage  =  (event) => {
        setState(
          {...state,file: URL.createObjectURL(event.target.files[0])}
        )
      }
    const [enterPswd,setEnterPswd] = useState(true);
    const [pswd,setPswd] = useState('');
    const onHandleChangePswd = (e) => {
        const value = e.target.value;
        setPswd(value);
         
    }
    const submitPswd = () => {
        if(pswd == '9064'){
            setEnterPswd(false);
        }
    }   
    const [imageOpen,setImageOpen] = useState(false)
    const [showImgCapture, setShowImgCapture] = useState(true);
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
        setTimeout(()=>{
            setImgSrc(imageData.webP);
            // read as file
            setImgFile(imageData.file);
        } ,5000);
        console.log(imgSrc)
        // setTimeout(()=>{
            setState(
                {...state,file: imgSrc}
              )
        // },2000)
        
        setImageOpen(false);
        setShowImgCapture(false);
      };
      const onError = useCallback((error) => {
        
        console.log(error);
      }, []);

    
      // imgFile can be used as a file upload form submission
      const formData = new FormData();
      formData.append("file", imgFile);
    return (


        <div className="PreForm">
            <div style={{textAlign:"center",display:"flex",justifyContent:"center"}}><img src={aakar} className="aakar-logo" alt="Aakar Clinic" /> </div>
            {/* {validateContent} */}
            {
                enterPswd ? (<div className="password-container">
                            <div style={{textAlign:"center",fontSize:"22px", fontWeight : "300 !important",margin:"20px",padding:"20px"}}>
                                <Badge color="danger" >
                                    Prescription Form  : 
                                </Badge>
                            </div>
                            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                            <FormGroup floating  style={{width:"400px"}}>
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
                                
                             <Button onClick={submitPswd} style={{width:"400px"}}>Go To Prescription Form</Button>
                             </div>

                </div> ) : (<> 

            <Form className="prescription-form" >
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",cborder:"2px solid black"}}>
                <FormGroup floating style={{width:"400px"}}>
                    <Input
                        id="exampleDate"
                        name="date"
                        placeholder="Date"
                        type="date"
                        onChange={handleChange}
                        className="inp"
                        required    
                    />
                    <Label for="exampleDate" >
                        Date
                    </Label>
                </FormGroup>
    
                <FormGroup floating style={{width:"400px"}}>
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
                <FormGroup floating style={{width:"400px"}}>
                    <Input
                        id="UploadImage"
                        name="UploadImage"
                        placeholder="UploadImage"
                        type="file"
                        onChange={handleChangeImage}
                        className="inp"
                        required
                    />
                    <Label for="exampleUploadImage">
                         UploadImage
                    </Label>
                </FormGroup>
                   <span> OR  &nbsp;  &nbsp; <Button onClick={() => {setImageOpen(true); setShowImgCapture(true)}} >Take Photo</Button> </span>
                {showImgCapture && imageOpen &&(
                    <ImageCapture
                    onCapture={onCapture}
                    onError={onError}
                    width={300}
                    userMediaConfig={config}
                    />
                )} 
                
                <FormGroup floating style={{width:"400px"}}>
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
                <FormGroup floating style={{width:"400px"}}>
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

                <FormGroup floating style={{width:"400px"}}>
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
                </FormGroup >

                <FormGroup floating style={{width:"400px"}}>

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
                <FormGroup floating style={{width:"400px"}}>
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
                <FormGroup floating style={{width:"400px"}}>
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
                <Label for="exampleDiagnosis">
                       Prescription
                </Label>
                {createInputs()}
                <FormGroup  style={{width:"800px !important",marginBottom:"10px"}}>
                <Input type='button' value='+ Add Prescription '  onClick={addClick}   />
                </FormGroup>
                <FormGroup floating style={{width:"800px"}}>
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
                <Button
                    color="success"
                    outline
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

