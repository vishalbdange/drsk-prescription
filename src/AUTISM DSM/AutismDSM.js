import React,{useState,useEffect} from 'react'
import { Alert,Button,FormGroup,Input,Label,Col,Collapse,UncontrolledCollapse,Badge, CardTitle,Card,UncontrolledAlert} from 'reactstrap'
import  ScoreBoard  from './ScoreBoard'
import AppContext from '../AppContext';
import { initializeApp,RecaptchaVerifier  } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import  {getAuth} from "firebase/auth"
// import Firebase from './firebase';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import aakar from "../aakar.jpg"

const AutismDSM = () => {


    // const firebaseConfig = {
    //     apiKey: "AIzaSyAcODvBHsFSBnyl31zCQaYtuaTngEqL8EU",
    //     authDomain: "aakarclinic-51421.firebaseapp.com",
    //     projectId: "aakarclinic-51421",
    //     storageBucket: "aakarclinic-51421.appspot.com",
    //     messagingSenderId: "414140524527",
    //     appId: "1:414140524527:web:ba9435449e97806232b81a",
    //     measurementId: "G-8Z6GG21XXJ"
    //   };
      
      // Initialize Firebase
    //   const app = initializeApp(firebaseConfig);
    //   const analytics = getAnalytics(app);
    
    //   const auth = firebase.auth();
      const [viewOtpForm, setViewOtpForm] = useState(false);

      const loginSubmit = (e) => {
        // e.preventDefault();
        // setSendOtp(true)
        // let phone_number = 9960855675;
        // const appVerifier = window.recaptchaVerifier;
    
        // getAuth()
        //     .signInWithPhoneNumber(phone_number, appVerifier)
        //     .then((confirmationResult) => {
        //         // SMS sent. Prompt user to type the code from the message, then sign the
        //         // user in with confirmationResult.confirm(code).
        //         console.log("otp sent");
        //         setViewOtpForm(true);
        //         window.confirmationResult = confirmationResult;
        //         // ...
        //     })
        //     .catch((error) => {
        //         // Error; SMS not sent
        //         // ...
        //         alert(error.message);
        //     });
    };
    const [otp,setOtp] = useState(0);

    const otpSubmit = () => {

    
        // window.confirmationResult
        //     .confirm(otp)
        //     .then((confirmationResult) => {
        //         console.log(confirmationResult);
        //         console.log("success");
        //         window.open("/", "_self");
        //     })
        //     .catch((error) => {
        //         // User couldn't sign in (bad verification code?)
        //         alert(error.message);
        //     });
    };












    const [section,setSection] = useState(1);
     let score = 0;
     const [finalScore,setFinalScore] = useState(0);
    const [scoreBoard,setScoreBoard] = useState(false);
    const [patientForm,setPatientForm] = useState({
        Name: '',
        Age:'',
        Sex:'',
        City:'',
        Mob_Number:''
    })

    const goBack = () => {
        window.scroll(0,0);
        if(section > 1){
            setSection(section-1);
        }
        if(scoreBoard){
            setSection(1);
            setScoreBoard(false)
        }
    }
    const goNext = () => {
        window.scroll(0,0);
        if(section >= 4){
            setSection(4);
        }else{
            setSection(section + 1)
        }
   
    }

    const calcScore = ( ) => {
        gotoAutismScorer(0);
    }
    const gotoAutismScorer = (ans) => {
        
        console.log(ans)
        // setScore(score + Number(ans));
        // console.log("Your current Score")
        // console.log(score)
        // setScoreBoard(false);
   
    }
    const processScore = (value) => {
        console.log(value)
        if(value == "Never"){
            console.log("Never")
            console.log(score)
            score = score + 1;
            console.log(score)
        }else if(value == "Sometimes"){
            score += 2;
        }else if(value == "Often"){
            score += 3;
        }else if(value == "Always"){
            score += 4;
        }
    }
    
    var A = [];
    var ATrue = false;
    var B = [];
    var BTrue = false;
    const [result,setResult] = useState(false)
    const getVal = () => {
            
            var A11 = document.getElementsByName("a1-1-0").value ;
            var A12 = document.getElementsByName("a1-2-0").value;
            var A13 = document.getElementsByName("a1-3-0").value;
            var A14 = document.getElementsByName("a1-4-0").value;
            if(A11 == "Yes"|| A12  == "Yes"|| A13 == "Yes" || A14 == "Yes"){
                A[0] = true;
            }
           console.log(A[0])
       
            var A21 = document.getElementsByName("a2-1-0").value;
            var A22 = document.getElementsByName("a2-2-0").value;
            var A23 = document.getElementsByName("a2-3-0").value;
            var A24 = document.getElementsByName("a2-4-0").value;
            if(A21  == "Yes" || A22  == "Yes"|| A23  == "Yes"|| A24){
                A[1] = true;
            }
            console.log(A[1])
            var A31 = document.getElementsByName("a3-1-0").value;
            var A32 = document.getElementsByName("a3-2-0").value;
            var A33 = document.getElementsByName("a3-3-0").value;
            var A34 = document.getElementsByName("a3-4-0").value ;
            if(A31 || A32 || A33 || A34){
                A[2] = true;
            }
           console.log(A[2])

            if(A[0] && A[1] && A[2]){
                ATrue = true;
            }

            // var B1 = document.getElementByName("b1-1-0").value;
            // if(B1 != "No"){ B[0] = true}
            // var B2 = document.getElementById("B2").value;
            // if(B2 != "None"){ B[1] = true}
            // var B3 = document.getElementById("B3").value;
            // if(B3 != "None"){ B[2] = true}
            // var B4 = document.getElementById("B4").value;
            // if(B4 != "None"){ B[3] = true}

            // if((B[1] && B[2] ) || (B[1] || B[3]) || (B[1] && B[4] ) || (B[2] || B[3]) || (B[2] && B[4] ) || (B[4] || B[3])){
                BTrue = true;
            // }
        
        }

    const handleSubmit = (e) => {  
            e.preventDefault();

            getVal();
            console.log(ATrue)
            console.log(BTrue)
            console.log(result)
            if(ATrue && BTrue){
                setResult(true)
            }else{
                setResult(false)
            }
            setScoreBoard(true);
    }

      const [password,setPassword] = useState("");
      const [submitPswd,setSubmitPswd] = useState(false);
      const [forgotPswd,setForgotPswd] = useState(false);
      const [sendOtp,setSendOtp] = useState(false);
      const [atHome,setAtHome] = useState(true)
      const handleChangePassword = (e) => {
            setPassword(e.target.value);
      }

      const handlesubmitPassword = () =>{
            setSubmitPswd(true)
      }
      const handleforgotPassword = () => {
            setForgotPswd(true);
      }
      const handleChangeMobNumber = () => {

      }
      const handleSendOTP = () => {
        setSendOtp(true)
      }
      useEffect(() => {
        // window.recaptchaVerifier  = new getAuth().RecaptchaVerifier(
        //     "recaptcha-container", {
        //         size: "invisible",
        //         callback: function(response) {
        //             console.log("Captcha Resolved");
        //         },
        //         defaultCountry: "IN",
        //     }
        // );
    }, [sendOtp]);
    const [validationAlert,setValidationAlert] = useState(false);

    const handleChangeForm = (e) =>{ 

        var name = e.target.name;
        var value = e.target.value;
        setPatientForm({ ...patientForm, [name]: value })
    }
    const gotoAssesment = (e) => {
        e.preventDefault();
        console.log(document.getElementById('Name'))
        console.log(document.getElementById('Age'))
        console.log(document.getElementById('Sex'))
        console.log(document.getElementById('City'))
        console.log(document.getElementById('Mob_Number'))
        if(document.getElementById('Name') === null || document.getElementById('Age') === null || document.getElementById('Sex') === null || document.getElementById('City ') === null || document.getElementById('Mob_Number') === null){

            setValidationAlert(true);
            setAtHome(false)
        }else{
            setAtHome(false)
            setValidationAlert(false)
        }
    }
    return (
        <div >
                <div style={{textAlign:"center",margin:"20px"}} >
                        <img src={aakar} alt="aakar" className="aakar-logo"/>
                </div>
                {
                    scoreBoard ? 
                    (
                    <>
                    <ScoreBoard result={result}  patientForm={patientForm}/>
                    <Button onClick={() => {setScoreBoard(false)}} style={{margin:"20px",float:"right"}}> Check  Again ?</Button> 
                    </> ) :
                    (   
                        <>
                        {
                            atHome  ? (<>
                            <div style={{textAlign:"center",fontSize:"22px"}}>
                              <Card color="info" >
                                  <CardTitle style={{margin:"20px 10px !important"}}> 
                                    Neuro Developmental Pediatrician Dr Kondekar Treatment for Autism ADHD Learning disability Epilepsy
                              </CardTitle>
                                </Card>
                                </div> <br />
                                <div style={{textAlign:"center",fontSize:"20px"}}>
                                <Badge color="danger" >
                                    Check AUTISM DSM 5 
                                </Badge>
                                </div>  
                            <form onSubmit={gotoAssesment} style={{padding:"20px 100px"}}>
                            <FormGroup>

                            <Label for="exampleName" sm-2>
                                                    Enter Name : 
                                                   </Label>
                                                   <Col sm-10>
                                                       <input
                                                      
                                                           id="Name"
                                                           name="Name"
                                                           type="text"
                                                           className="autInp"
                                                           onChange={handleChangeForm}
                                                           required
                                                            style={{padding:"5px",border:"none",outline:"none",boxShadow:"1px 1px 5px grey",borderRadius:"8px"}}
                                                           
                                                       />
                                                   </Col>
                            </FormGroup>
                            <FormGroup>
                            <Label for="exampleAge" sm-2>
                                                    Enter Age : 
                                                   </Label>
                                                   <Col sm-10>
                                                       <input
                                                           id="Age"
                                                           name="Age"
                                                           type="number"
                                                           className="autInp"
                                                           onChange={handleChangeForm}
                                                           required
                                                            style={{padding:"5px",border:"none",outline:"none",boxShadow:"1px 1px 5px grey",borderRadius:"8px"}}
                                                       />
                                                   </Col>
                            </FormGroup>
                            <FormGroup>
                            <Label for="exampleSex" sm-2>
                                                    Enter Sex : 
                                                   </Label>
                                                   <Col sm-10>
                                                       <input
                                                           id="Sex"
                                                           name="Sex"
                                                           type="text"
                                                           className="autInp"
                                                           onChange={handleChangeForm}
                                                           required
                                                            style={{padding:"5px",border:"none",outline:"none",boxShadow:"1px 1px 5px grey",borderRadius:"8px"}}
                                                       />
                                                   </Col>
                            </FormGroup>
                            <FormGroup>
                            <Label for="exampleSex" sm-2>
                                                    Enter City : 
                                                   </Label>
                                                   <Col sm-10>
                                                       <input
                                                           id="City"
                                                           name="City"
                                                           type="text"
                                                           className="autInp"
                                                           onChange={handleChangeForm}
                                                           required
                                                            style={{padding:"5px",border:"none",outline:"none",boxShadow:"1px 1px 5px grey",borderRadius:"8px"}}
                                                       />
                                                   </Col>
                            </FormGroup>
                            <FormGroup>
                            <Label for="example" sm-2>
                                                    Enter Mobile Number : 
                                                   </Label>
                                                   <Col sm-10>
                                                       <input
                                                        
                                                           id="Mob_Number"
                                                           name="Mob_Number"
                                                           type="number"
                                                           className="autInp"
                                                           onChange={handleChangeForm}
                                                           required
                                                           style={{padding:"5px",border:"none",outline:"none",boxShadow:"1px 1px 5px grey",borderRadius:"8px"}}
                                                       />
                                                   </Col>
                            </FormGroup>
                            
                            <Button type="submit">Go To Assesment</Button> 
                            </form>
                            </>) :
                        <>

                       {
                          ( password  != "wwwpedneuroin" || !submitPswd) ?
                            (
                                <>
                                    {
                                       !forgotPswd ?    
                                            <div style={{padding:"60px 90px"}}>
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
                                                           style={{padding:"5px",border:"none",outline:"none",boxShadow:"1px 1px 5px grey",borderRadius:"8px"}}
                                                           onChange={handleChangePassword}
                                                       />
                                                   </Col>
                                               </FormGroup>
                                               <div style={{display:"flex",justifyContent:"space-between"}}>
                                               <Button onClick={handlesubmitPassword}>Submit</Button>
                                               <Button onClick={() => {setAtHome(true)}}>Back</Button>
                                               </div>
                                            </div>
                                            :  (
                                            <>
                                              {
                                                  sendOtp ? (
                                                  <>

                                                        <FormGroup>
                                                            <Label for="exampleSex" sm-2>
                                                            Enter OTP   : 
                                                        </Label>
                                                        <Col sm-10>
                                                            <Input
                                                                id="Otp_number"
                                                                name="Otp_number"
                                                                type="number"
                                                                className="inp"
                                                                onChange={(e) => setOtp(e.target.value) }
                                                            />
                                                        </Col>
                                                    </FormGroup>
                                                    <Button onClick={otpSubmit}>Verify OTP</Button>
                                                  </>
                                                  ):(
                                                      <>
                                               <FormGroup>
                                                <Label for="exampleSex" sm-2>
                                                    Enter Mobile Number : 
                                                   </Label>
                                                   <Col sm-10>
                                                       <Input
                                                           id="Mob_number"
                                                           name="Mob_number"
                                                           type="number"
                                                           className="inp"
                                                           onChange={handleChangeMobNumber}
                                                       />
                                                   </Col>
                                               </FormGroup>
                                                <Button onClick={loginSubmit}> Send OTP</Button>
                                                </>
                                                )
                                              }
                                            </>)
                                    }          
 
                                </>
                            )   
                            :    
                        (
                            <>     
                       <br /> <br /> <br />  
                        <div style={{textAlign:"center",margin:"15px"}}><Button color="info" id="section1">Section A :  SOCIAL COMMUNICATION AND INTERACTION: PERSISTENT DEFICIT  </Button></div>
                        <form style={{textAlign:"center"}} onSubmit={handleSubmit}>
                        <UncontrolledCollapse  toggler="#section1">
                            
                        <FormGroup row   p-0 >
                            <Label for="exampleSex" sm-2 id="A1">
                            <b>A1.  SOCIAL EMOTIONAL RECIPROCITY \/</b> 
                            </Label>
                            <UncontrolledCollapse  toggler="#A1">
                            <Col sm-10>
                                <FormGroup tag="fieldset">
                                    <h6>
                                        1. SOCIAL APPROACH ABNORMAL
                                    </h6>
                                    <FormGroup >
                                    <Input
                                        name="a1-1-0"
                                        type="radio"
                                        value="Yes"
                                    />
                                    {' '}
                                    
                                    <Label>Yes</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a1-1-0"
                                        type="radio"
                                        value="No"
                                    />
                                    {' '}
                                    <Label>No</Label>
                                
                                    </FormGroup>
                                    <FormGroup >
                                    <Input
                                        name="a1-1-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>0-25</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a1-1-1"
                                        type="radio"
                                        value="25-50"
                                    />
                                    {' '}
                                    <Label>25-30</Label>
                                    <Input
                                        name="a1-1-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>50-75</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a1-1-1"
                                        type="radio"
                                        value="75-100"
                                    />
                                    {' '}
                                    <Label>75-100</Label>
                                    </FormGroup>
                                
                                </FormGroup>
                                <FormGroup tag="fieldset">
                                    <h6>
                                        2. ABNORMAL BACK FORTH CONVERSATION
                                    </h6>
                                    <FormGroup >
                                    <Input
                                        name="a1-2-0"
                                        type="radio"
                                        value="Yes"
                                    />
                                    {' '}
                                    
                                    <Label>Yes</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a1-2-0"
                                        type="radio"
                                        value="No"
                                    />
                                    {' '}
                                    <Label>No</Label>
                                
                                    </FormGroup>
                                    <FormGroup >
                                    <Input
                                        name="a1-2-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>0-25</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a1-2-1"
                                        type="radio"
                                        value="25-50"
                                    />
                                    {' '}
                                    <Label>25-30</Label>
                                    <Input
                                        name="a1-2-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>50-75</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a1-2-1"
                                        type="radio"
                                        value="75-100"
                                    />
                                    {' '}
                                    <Label>75-100</Label>
                                    </FormGroup>
                                
                                </FormGroup>
                                <FormGroup tag="fieldset">
                                    <h6>
                                      3.
                                    </h6>
                                    <FormGroup >
                                    <Input
                                        name="a1-3-0"
                                        type="radio"
                                        value="Yes"
                                    />
                                    {' '}
                                    
                                    <Label>Yes</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a1-3-0"
                                        type="radio"
                                        value="No"
                                    />
                                    {' '}
                                    <Label>No</Label>
                                
                                    </FormGroup>
                                    <FormGroup >
                                    <Input
                                        name="a1-3-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>0-25</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a1-3-1"
                                        type="radio"
                                        value="25-50"
                                    />
                                    {' '}
                                    <Label>25-30</Label>
                                    <Input
                                        name="a1-3-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>50-75</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a1-3-1"
                                        type="radio"
                                        value="75-100"
                                    />
                                    {' '}
                                    <Label>75-100</Label>
                                    </FormGroup>
                                
                                </FormGroup>
                                <FormGroup tag="fieldset">
                                    <h6>
                                        2. ABNORMAL BACK FORTH CONVERSATION
                                    </h6>
                                    <FormGroup >
                                    <Input
                                        name="a1-4-0"
                                        type="radio"
                                        value="Yes"
                                    />
                                    {' '}
                                    
                                    <Label>Yes</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a1-4-0"
                                        type="radio"
                                        value="No"
                                    />
                                    {' '}
                                    <Label>No</Label>
                                
                                    </FormGroup>
                                    <FormGroup >
                                    <Input
                                        name="a1-4-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>0-25</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a1-4-1"
                                        type="radio"
                                        value="25-50"
                                    />
                                    {' '}
                                    <Label>25-30</Label>
                                    <Input
                                        name="a1-4-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>50-75</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a1-4-1"
                                        type="radio"
                                        value="75-100"
                                    />
                                    {' '}
                                    <Label>75-100</Label>
                                    </FormGroup>
                                
                                </FormGroup>
                            </Col>
                            </UncontrolledCollapse>
                           
                        </FormGroup>
                        <FormGroup row   p-0 >
                            <Label for="exampleSex" sm-2 id="A2">
                            <b>A2. DEFICIT IN NONVERBAL COMMUNICATION  \/</b>
                            </Label>
                            <UncontrolledCollapse  toggler="#A2">
                            <Col sm-10>
                                <FormGroup tag="fieldset">
                                    <h6>
                                        1. POOR VERBAL / NON VERBAL COMMUNICATION, POOR EYE CONTACT
                                    </h6>
                                    <FormGroup >
                                    <Input
                                        name="a2-1-0"
                                        type="radio"
                                        value="Yes"
                                    />
                                    {' '}
                                    
                                    <Label>Yes</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a2-1-0"
                                        type="radio"
                                        value="No"
                                    />
                                    {' '}
                                    <Label>No</Label>
                                
                                    </FormGroup>
                                    <FormGroup >
                                    <Input
                                        name="a2-1-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>0-25</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a2-1-1"
                                        type="radio"
                                        value="25-50"
                                    />
                                    {' '}
                                    <Label>25-30</Label>
                                    <Input
                                        name="a2-1-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>50-75</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a2-1-1"
                                        type="radio"
                                        value="75-100"
                                    />
                                    {' '}
                                    <Label>75-100</Label>
                                    </FormGroup>
                                
                                </FormGroup>
                                <FormGroup tag="fieldset">
                                    <h6>
                                        2. POOR BODY LANGUAGE
                                    </h6>
                                    <FormGroup >
                                    <Input
                                        name="a2-2-0"
                                        type="radio"
                                        value="Yes"
                                    />
                                    {' '}
                                    
                                    <Label>Yes</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a2-2-0"
                                        type="radio"
                                        value="No"
                                    />
                                    {' '}
                                    <Label>No</Label>
                                
                                    </FormGroup>
                                    <FormGroup >
                                    <Input
                                        name="a2-2-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>0-25</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a2-2-1"
                                        type="radio"
                                        value="25-50"
                                    />
                                    {' '}
                                    <Label>25-30</Label>
                                    <Input
                                        name="a2-2-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>50-75</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a2-2-1"
                                        type="radio"
                                        value="75-100"
                                    />
                                    {' '}
                                    <Label>75-100</Label>
                                    </FormGroup>
                                
                                </FormGroup>
                                <FormGroup tag="fieldset">
                                    <h6>
                                      3. DEFICIT IN GESTURE USE
                                    </h6>
                                    <FormGroup >
                                    <Input
                                        name="a2-3-0"
                                        type="radio"
                                        value="Yes"
                                    />
                                    {' '}
                                    
                                    <Label>Yes</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a2-3-0"
                                        type="radio"
                                        value="No"
                                    />
                                    {' '}
                                    <Label>No</Label>
                                
                                    </FormGroup>
                                    <FormGroup >
                                    <Input
                                        name="a2-3-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>0-25</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a2-3-1"
                                        type="radio"
                                        value="25-50"
                                    />
                                    {' '}
                                    <Label>25-30</Label>
                                    <Input
                                        name="a2-3-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>50-75</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a2-3-1"
                                        type="radio"
                                        value="75-100"
                                    />
                                    {' '}
                                    <Label>75-100</Label>
                                    </FormGroup>
                                
                                </FormGroup>
                                <FormGroup tag="fieldset">
                                    <h6>
                                       4.TOTAL LACK OF FACIAL EXPRESSIONS OR NON VERBAL COMMUNICATION
                                    </h6>
                                    <FormGroup >
                                    <Input
                                        name="a2-4-0"
                                        type="radio"
                                        value="Yes"
                                    />
                                    {' '}
                                    
                                    <Label>Yes</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a2-4-0"
                                        type="radio"
                                        value="No"
                                    />
                                    {' '}
                                    <Label>No</Label>
                                
                                    </FormGroup>
                                    <FormGroup >
                                    <Input
                                        name="a2-4-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>0-25</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a2-4-1"
                                        type="radio"
                                        value="25-50"
                                    />
                                    {' '}
                                    <Label>25-30</Label>
                                    <Input
                                        name="a2-4-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>50-75</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a2-4-1"
                                        type="radio"
                                        value="75-100"
                                    />
                                    {' '}
                                    <Label>75-100</Label>
                                    </FormGroup>
                                
                                </FormGroup>
                            </Col>
                           </UncontrolledCollapse>
                        </FormGroup>

                        <FormGroup row   p-0 >
                            <Label for="exampleSex" sm-2 id="A3" >
                            <b>A3 \/</b>
                            </Label>
                            <UncontrolledCollapse  toggler="#A3">
                            <Col sm-10>
                                <FormGroup tag="fieldset">
                                    <h6>
                                        1. DEFICIT IN DEVELOPING, MAINTAINING AND UNDERSTANDING RELATIONSHIPS
                                    </h6>
                                    <FormGroup >
                                    <Input
                                        name="a3-1-0"
                                        type="radio"
                                        value="Yes"
                                    />
                                    {' '}
                                    
                                    <Label>Yes</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a3-1-0"
                                        type="radio"
                                        value="No"
                                    />
                                    {' '}
                                    <Label>No</Label>
                                
                                    </FormGroup>
                                    <FormGroup >
                                    <Input
                                        name="a3-1-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>0-25</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a3-1-1"
                                        type="radio"
                                        value="25-50"
                                    />
                                    {' '}
                                    <Label>25-30</Label>
                                    <Input
                                        name="a3-1-1"
                                        type="radio"
                                        value="50-75"
                                    />
                                    {' '}
                                    
                                    <Label>50-75</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a3-1-1"
                                        type="radio"
                                        value="75-100"
                                    />
                                    {' '}
                                    <Label>75-100</Label>
                                    </FormGroup>
                                
                                </FormGroup>
                                <FormGroup tag="fieldset">
                                    <h6>
                                        2. DIFFICULTY IN ADJUSTING BEHAVIOR TO SUIT VARIOUS SOCIAL CONTEXT
                                    </h6>
                                    <FormGroup >
                                    <Input
                                        name="a3-2-0"
                                        type="radio"
                                        value="Yes"
                                    />
                                    {' '}
                                    
                                    <Label>Yes</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a3-2-0"
                                        type="radio"
                                        value="No"
                                    />
                                    {' '}
                                    <Label>No</Label>
                                
                                    </FormGroup>
                                    <FormGroup >
                                    <Input
                                        name="a3-2-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>0-25</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a3-2-1"
                                        type="radio"
                                        value="25-50"
                                    />
                                    {' '}
                                    <Label>25-30</Label>
                                    <Input
                                        name="a3-2-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>50-75</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a3-2-1"
                                        type="radio"
                                        value="75-100"
                                    />
                                    {' '}
                                    <Label>75-100</Label>
                                    </FormGroup>
                                
                                </FormGroup>
                                <FormGroup tag="fieldset">
                                    <h6>
                                      3. DIFFICULTY IN SHARING IMAGINATIVE PLAY OR MAKING FRIENDS
                                    </h6>
                                    <FormGroup >
                                    <Input
                                        name="a3-3-0"
                                        type="radio"
                                        value="Yes"
                                    />
                                    {' '}
                                    
                                    <Label>Yes</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a3-3-0"
                                        type="radio"
                                        value="No"
                                    />
                                    {' '}
                                    <Label>No</Label>
                                
                                    </FormGroup>
                                    <FormGroup >
                                    <Input
                                        name="a3-3-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>0-25</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a3-3-1"
                                        type="radio"
                                        value="25-50"
                                    />
                                    {' '}
                                    <Label>25-30</Label>
                                    <Input
                                        name="a3-3-1"
                                        type="radio"
                                        value="50-75"
                                    />
                                    {' '}
                                    
                                    <Label>50-75</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a3-3-1"
                                        type="radio"
                                        value="75-100"
                                    />
                                    {' '}
                                    <Label>75-100</Label>
                                    </FormGroup>
                                
                                </FormGroup>
                                <FormGroup tag="fieldset">
                                    <h6>
                                       4.ABSENCE OF INTEREST IN PEER
                                    </h6>
                                    <FormGroup >
                                    <Input
                                        name="a3-4-0"
                                        type="radio"
                                        value="Yes"
                                    />
                                    {' '}
                                    
                                    <Label>Yes</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a3-4-0"
                                        type="radio"
                                        value="No"
                                    />
                                    {' '}
                                    <Label>No</Label>
                                
                                    </FormGroup>
                                    <FormGroup >
                                    <Input
                                        name="a3-4-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>0-25</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a3-4-1"
                                        type="radio"
                                        value="25-50"
                                    />
                                    {' '}
                                    <Label>25-30</Label>
                                    <Input
                                        name="a3-4-1"
                                        type="radio"
                                        value="50-75"
                                    />
                                    {' '}
                                    
                                    <Label>50-75</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a3-4-1"
                                        type="radio"
                                        value="75-100"
                                    />
                                    {' '}
                                    <Label>75-100</Label>
                                    </FormGroup>
                                
                                </FormGroup>
                            </Col>
                           </UncontrolledCollapse>
                        </FormGroup>        
                       
                        </UncontrolledCollapse>

                        <div style={{textAlign:"center",margin:"15px"}}><Button color="info" id="section2">Section B : RESTRICTED, REPITIVE PATTERNS OF BEHAVIOUR, OR INTEREST, OR ACTIVITIES</Button></div>
                        <UncontrolledCollapse  toggler="#section2" >


                                                        
                        <FormGroup row   p-0 >
                            <Label for="exampleSex" sm-2 id="A1">
                            <b>B1. STEREOTYPED OR REPITITVE MOTOR MOVEMENTS \/</b> 
                            </Label>
                            <UncontrolledCollapse  toggler="#A1">
                            <Col sm-10>
                                <FormGroup tag="fieldset">
                                    <h6>
                                        1. USE OF OBJECTS
                                    </h6>
                                    <FormGroup >
                                    <Input
                                        name="b1-1-0"
                                        type="radio"
                                        value="Yes"
                                    />
                                    {' '}
                                    
                                    <Label>Yes</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="b1-1-0"
                                        type="radio"
                                        value="No"
                                    />
                                    {' '}
                                    <Label>No</Label>
                                
                                    </FormGroup>
                                    <FormGroup >
                                    <Input
                                        name="b1-1-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>0-25</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="b1-1-1"
                                        type="radio"
                                        value="25-50"
                                    />
                                    {' '}
                                    <Label>25-30</Label>
                                    <Input
                                        name="b1-1-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>50-75</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="b1-1-1"
                                        type="radio"
                                        value="75-100"
                                    />
                                    {' '}
                                    <Label>75-100</Label>
                                    </FormGroup>
                                
                                </FormGroup>
                                <FormGroup tag="fieldset">
                                    <h6>
                                        2. SIMPLE MOTOR STEREOTYPES
                                    </h6>
                                    <FormGroup >
                                    <Input
                                        name="b1-2-0"
                                        type="radio"
                                        value="Yes"
                                    />
                                    {' '}
                                    
                                    <Label>Yes</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="b1-2-0"
                                        type="radio"
                                        value="No"
                                    />
                                    {' '}
                                    <Label>No</Label>
                                
                                    </FormGroup>
                                    <FormGroup >
                                    <Input
                                        name="b1-2-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>0-25</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="b1-2-1"
                                        type="radio"
                                        value="25-50"
                                    />
                                    {' '}
                                    <Label>25-30</Label>
                                    <Input
                                        name="b1-2-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>50-75</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="b1-2-1"
                                        type="radio"
                                        value="75-100"
                                    />
                                    {' '}
                                    <Label>75-100</Label>
                                    </FormGroup>
                                
                                </FormGroup>
                                <FormGroup tag="fieldset">
                                    <h6>
                                      3. LINING UP TOYS
                                    </h6>
                                    <FormGroup >
                                    <Input
                                        name="b1-3-0"
                                        type="radio"
                                        value="Yes"
                                    />
                                    {' '}
                                    
                                    <Label>Yes</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="b1-3-0"
                                        type="radio"
                                        value="No"
                                    />
                                    {' '}
                                    <Label>No</Label>
                                
                                    </FormGroup>
                                    <FormGroup >
                                    <Input
                                        name="b1-3-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>0-25</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="b1-3-1"
                                        type="radio"
                                        value="25-50"
                                    />
                                    {' '}
                                    <Label>25-30</Label>
                                    <Input
                                        name="b1-3-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>50-75</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="b1-3-1"
                                        type="radio"
                                        value="75-100"
                                    />
                                    {' '}
                                    <Label>75-100</Label>
                                    </FormGroup>
                                
                                </FormGroup>
                                <FormGroup tag="fieldset">
                                    <h6>
                                        4. FLIPPING OBJECTS
                                    </h6>
                                    <FormGroup >
                                    <Input
                                        name="b1-4-0"
                                        type="radio"
                                        value="Yes"
                                    />
                                    {' '}
                                    
                                    <Label>Yes</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="b1-4-0"
                                        type="radio"
                                        value="No"
                                    />
                                    {' '}
                                    <Label>No</Label>
                                
                                    </FormGroup>
                                    <FormGroup >
                                    <Input
                                        name="b1-4-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>0-25</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="b1-4-1"
                                        type="radio"
                                        value="25-50"
                                    />
                                    {' '}
                                    <Label>25-30</Label>
                                    <Input
                                        name="b1-4-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>50-75</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="b1-4-1"
                                        type="radio"
                                        value="75-100"
                                    />
                                    {' '}
                                    <Label>75-100</Label>
                                    </FormGroup>
                                
                                </FormGroup>
                                <FormGroup tag="fieldset">
                                    <h6>
                                        5. ECHOLALIA
                                    </h6>
                                    <FormGroup >
                                    <Input
                                        name="b1-5-0"
                                        type="radio"
                                        value="Yes"
                                    />
                                    {' '}
                                    
                                    <Label>Yes</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="b1-5-0"
                                        type="radio"
                                        value="No"
                                    />
                                    {' '}
                                    <Label>No</Label>
                                
                                    </FormGroup>
                                    <FormGroup >
                                    <Input
                                        name="b1-5-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>0-25</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="b1-5-1"
                                        type="radio"
                                        value="25-50"
                                    />
                                    {' '}
                                    <Label>25-30</Label>
                                    <Input
                                        name="b1-5-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>50-75</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="b1-5-1"
                                        type="radio"
                                        value="75-100"
                                    />
                                    {' '}
                                    <Label>75-100</Label>
                                    </FormGroup>
                                
                                </FormGroup>
                                <FormGroup tag="fieldset">
                                    <h6>
                                        5. IDIOSYNCHRATIC PHRASES
                                    </h6>
                                    <FormGroup >
                                    <Input
                                        name="b1-6-0"
                                        type="radio"
                                        value="Yes"
                                    />
                                    {' '}
                                    
                                    <Label>Yes</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="b1-6-0"
                                        type="radio"
                                        value="No"
                                    />
                                    {' '}
                                    <Label>No</Label>
                                
                                    </FormGroup>
                                    <FormGroup >
                                    <Input
                                        name="b1-6-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>0-25</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="b1-6-1"
                                        type="radio"
                                        value="25-50"
                                    />
                                    {' '}
                                    <Label>25-30</Label>
                                    <Input
                                        name="b1-6-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>50-75</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="b1-6-1"
                                        type="radio"
                                        value="75-100"
                                    />
                                    {' '}
                                    <Label>75-100</Label>
                                    </FormGroup>
                                
                                </FormGroup>
                            </Col>
                            </UncontrolledCollapse>
                           
                        </FormGroup>
                        {/* 
                        <FormGroup row   p-0 >
                            <Label for="exampleSex" sm-2 id="A2">
                            <b>A2. DEFICIT IN NONVERBAL COMMUNICATION  \/</b>
                            </Label>
                            <UncontrolledCollapse  toggler="#A2">
                            <Col sm-10>
                                <FormGroup tag="fieldset">
                                    <h6>
                                        1. POOR VERBAL / NON VERBAL COMMUNICATION, POOR EYE CONTACT
                                    </h6>
                                    <FormGroup >
                                    <Input
                                        name="a2-1-0"
                                        type="radio"
                                        value="Yes"
                                    />
                                    {' '}
                                    
                                    <Label>Yes</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a2-1-0"
                                        type="radio"
                                        value="No"
                                    />
                                    {' '}
                                    <Label>No</Label>
                                
                                    </FormGroup>
                                    <FormGroup >
                                    <Input
                                        name="a2-1-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>0-25</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a2-1-1"
                                        type="radio"
                                        value="25-50"
                                    />
                                    {' '}
                                    <Label>25-30</Label>
                                    <Input
                                        name="a2-1-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>50-75</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a2-1-1"
                                        type="radio"
                                        value="75-100"
                                    />
                                    {' '}
                                    <Label>75-100</Label>
                                    </FormGroup>
                                
                                </FormGroup>
                                <FormGroup tag="fieldset">
                                    <h6>
                                        2. POOR BODY LANGUAGE
                                    </h6>
                                    <FormGroup >
                                    <Input
                                        name="a2-2-0"
                                        type="radio"
                                        value="Yes"
                                    />
                                    {' '}
                                    
                                    <Label>Yes</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a2-2-0"
                                        type="radio"
                                        value="No"
                                    />
                                    {' '}
                                    <Label>No</Label>
                                
                                    </FormGroup>
                                    <FormGroup >
                                    <Input
                                        name="a2-2-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>0-25</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a2-2-1"
                                        type="radio"
                                        value="25-50"
                                    />
                                    {' '}
                                    <Label>25-30</Label>
                                    <Input
                                        name="a2-2-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>50-75</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a2-2-1"
                                        type="radio"
                                        value="75-100"
                                    />
                                    {' '}
                                    <Label>75-100</Label>
                                    </FormGroup>
                                
                                </FormGroup>
                                <FormGroup tag="fieldset">
                                    <h6>
                                      3. DEFICIT IN GESTURE USE
                                    </h6>
                                    <FormGroup >
                                    <Input
                                        name="a2-3-0"
                                        type="radio"
                                        value="Yes"
                                    />
                                    {' '}
                                    
                                    <Label>Yes</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a2-3-0"
                                        type="radio"
                                        value="No"
                                    />
                                    {' '}
                                    <Label>No</Label>
                                
                                    </FormGroup>
                                    <FormGroup >
                                    <Input
                                        name="a2-3-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>0-25</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a2-3-1"
                                        type="radio"
                                        value="25-50"
                                    />
                                    {' '}
                                    <Label>25-30</Label>
                                    <Input
                                        name="a2-3-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>50-75</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a2-3-1"
                                        type="radio"
                                        value="75-100"
                                    />
                                    {' '}
                                    <Label>75-100</Label>
                                    </FormGroup>
                                
                                </FormGroup>
                                <FormGroup tag="fieldset">
                                    <h6>
                                       4.TOTAL LACK OF FACIAL EXPRESSIONS OR NON VERBAL COMMUNICATION
                                    </h6>
                                    <FormGroup >
                                    <Input
                                        name="a2-4-0"
                                        type="radio"
                                        value="Yes"
                                    />
                                    {' '}
                                    
                                    <Label>Yes</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a2-4-0"
                                        type="radio"
                                        value="No"
                                    />
                                    {' '}
                                    <Label>No</Label>
                                
                                    </FormGroup>
                                    <FormGroup >
                                    <Input
                                        name="a2-4-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>0-25</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a2-4-1"
                                        type="radio"
                                        value="25-50"
                                    />
                                    {' '}
                                    <Label>25-30</Label>
                                    <Input
                                        name="a2-4-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>50-75</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a2-4-1"
                                        type="radio"
                                        value="75-100"
                                    />
                                    {' '}
                                    <Label>75-100</Label>
                                    </FormGroup>
                                
                                </FormGroup>
                            </Col>
                           </UncontrolledCollapse>
                        </FormGroup>

                        <FormGroup row   p-0 >
                            <Label for="exampleSex" sm-2 id="A3" >
                            <b>A3 \/</b>
                            </Label>
                            <UncontrolledCollapse  toggler="#A3">
                            <Col sm-10>
                                <FormGroup tag="fieldset">
                                    <h6>
                                        1. DEFICIT IN DEVELOPING, MAINTAINING AND UNDERSTANDING RELATIONSHIPS
                                    </h6>
                                    <FormGroup >
                                    <Input
                                        name="a3-1-0"
                                        type="radio"
                                        value="Yes"
                                    />
                                    {' '}
                                    
                                    <Label>Yes</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a3-1-0"
                                        type="radio"
                                        value="No"
                                    />
                                    {' '}
                                    <Label>No</Label>
                                
                                    </FormGroup>
                                    <FormGroup >
                                    <Input
                                        name="a3-1-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>0-25</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a3-1-1"
                                        type="radio"
                                        value="25-50"
                                    />
                                    {' '}
                                    <Label>25-30</Label>
                                    <Input
                                        name="a3-1-1"
                                        type="radio"
                                        value="50-75"
                                    />
                                    {' '}
                                    
                                    <Label>50-75</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a3-1-1"
                                        type="radio"
                                        value="75-100"
                                    />
                                    {' '}
                                    <Label>75-100</Label>
                                    </FormGroup>
                                
                                </FormGroup>
                                <FormGroup tag="fieldset">
                                    <h6>
                                        2. DIFFICULTY IN ADJUSTING BEHAVIOR TO SUIT VARIOUS SOCIAL CONTEXT
                                    </h6>
                                    <FormGroup >
                                    <Input
                                        name="a3-2-0"
                                        type="radio"
                                        value="Yes"
                                    />
                                    {' '}
                                    
                                    <Label>Yes</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a3-2-0"
                                        type="radio"
                                        value="No"
                                    />
                                    {' '}
                                    <Label>No</Label>
                                
                                    </FormGroup>
                                    <FormGroup >
                                    <Input
                                        name="a3-2-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>0-25</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a3-2-1"
                                        type="radio"
                                        value="25-50"
                                    />
                                    {' '}
                                    <Label>25-30</Label>
                                    <Input
                                        name="a3-2-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>50-75</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a3-2-1"
                                        type="radio"
                                        value="75-100"
                                    />
                                    {' '}
                                    <Label>75-100</Label>
                                    </FormGroup>
                                
                                </FormGroup>
                                <FormGroup tag="fieldset">
                                    <h6>
                                      3. DIFFICULTY IN SHARING IMAGINATIVE PLAY OR MAKING FRIENDS
                                    </h6>
                                    <FormGroup >
                                    <Input
                                        name="a3-3-0"
                                        type="radio"
                                        value="Yes"
                                    />
                                    {' '}
                                    
                                    <Label>Yes</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a3-3-0"
                                        type="radio"
                                        value="No"
                                    />
                                    {' '}
                                    <Label>No</Label>
                                
                                    </FormGroup>
                                    <FormGroup >
                                    <Input
                                        name="a3-3-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>0-25</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a3-3-1"
                                        type="radio"
                                        value="25-50"
                                    />
                                    {' '}
                                    <Label>25-30</Label>
                                    <Input
                                        name="a3-3-1"
                                        type="radio"
                                        value="50-75"
                                    />
                                    {' '}
                                    
                                    <Label>50-75</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a3-3-1"
                                        type="radio"
                                        value="75-100"
                                    />
                                    {' '}
                                    <Label>75-100</Label>
                                    </FormGroup>
                                
                                </FormGroup>
                                <FormGroup tag="fieldset">
                                    <h6>
                                       4.ABSENCE OF INTEREST IN PEER
                                    </h6>
                                    <FormGroup >
                                    <Input
                                        name="a3-4-0"
                                        type="radio"
                                        value="Yes"
                                    />
                                    {' '}
                                    
                                    <Label>Yes</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a3-4-0"
                                        type="radio"
                                        value="No"
                                    />
                                    {' '}
                                    <Label>No</Label>
                                
                                    </FormGroup>
                                    <FormGroup >
                                    <Input
                                        name="a3-4-1"
                                        type="radio"
                                        value="0-25"
                                    />
                                    {' '}
                                    
                                    <Label>0-25</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a3-4-1"
                                        type="radio"
                                        value="25-50"
                                    />
                                    {' '}
                                    <Label>25-30</Label>
                                    <Input
                                        name="a3-4-1"
                                        type="radio"
                                        value="50-75"
                                    />
                                    {' '}
                                    
                                    <Label>50-75</Label>
                                
                                    &nbsp; &nbsp;
                                    <Input
                                        name="a3-4-1"
                                        type="radio"
                                        value="75-100"
                                    />
                                    {' '}
                                    <Label>75-100</Label>
                                    </FormGroup>
                                
                                </FormGroup>
                            </Col>
                           </UncontrolledCollapse>
                        </FormGroup>  
 */}













{/* 
                        <FormGroup   >
                            <Label for="exampleInp" sm-2>
                           <b>B1.  STEREOTYPED OR REPITITVE MOTOR MOVEMENTS </b>
                            </Label>
                            <Col sm-10>
                                <select
                                    id="B1"
                                    name="Q1"
                                    type="select"
                                    multiple
                                    className="inp"
                                    required
                                     
                                     style={{padding:"15px",border:"none",outline:"none",overflow:"auto"}}

                                
                                >
                                    <option>
                                    None
                                    </option>
                                    <option>
                                    USE OF OBJECTS
                                    </option>
                                    <option>
                                    SIMPLE MOTOR STEREOTYPES
                                    </option>
                                    <option>
                                    LINING UP TOYS
                                    </option>
                                    <option>
                                    FLIPPING OBJECTS
                                    </option>
                                    <option>
                                    ECHOLALIA
                                    </option>
                                    <option>
                                    IDIOSYNCHRATIC PHRASES
                                    </option>
                                </select>
                            </Col>
                        </FormGroup>
                        <FormGroup row  >
                            <Label for="exampleInp" sm-2>
                            <b>B2. SAMENESS / RIGIDNESS/ INFLEXIBILITY/ RITUALITY VERBAL OR NON VERBAL </b>

                            </Label>
                            <Col sm-10>
                                <select
                                    id="B2"
                                    name="Q1"
                                    type="select"
                                    multiple
                                    className="inp"
                                    required
                                     
                                     style={{padding:"15px",border:"none",outline:"none"}}

                                
                                >
                                    <option>
                                        None
                                    </option>
                                    <option>
                                        EXTREME DISTRESS AT SMALL CHANGES 
                                    </option>
                                    <option>
                                        DIFFICULTY ITH CHANGE OR TRANSITION
                                    </option>
                                    <option>
                                        RIGID THINKING PATTERN 
                                    </option>
                                    <option>
                                        GREETING RITUALS
                                    </option>
                                    <option>
                                    NEED TO TAKE SAME ROUTE 6. EAT SAME FOOD EVERY DAY
                                    </option>
                                </select>
                            </Col>
                        </FormGroup>
                        <FormGroup row  >
                            <Label for="exampleInp" sm-2>
                           <b> B3. RESTRICTED FIXATD INTEREST OF ABNORMAL INTENSITY / FOCUS</b>
                            </Label>
                            <Col sm-10>
                                <select
                                    id="B3"
                                    name="Q1"
                                    type="select"
                                    multiple
                                    className="inp"
                                    required
                                     
                                     style={{padding:"15px",border:"none",outline:"none"}}

                                
                                >
                                    <option>
                                        None
                                    </option>
                                    <option>
                                        STRONG ATTACHMENT / PREOCCUPATION WITH UNUSUAL OBJECTS 
                                    </option>
                                    <option>
                                        EXCESSIVE CIRCUMSCRIBED OR PERSERVATIVE INTERESTS
                                    </option>
                                </select>
                            </Col>
                        </FormGroup>
                        <FormGroup row  >
                            <Label for="exampleInp" sm-2>
                        <b>B4. HYPER OR HYPO REACTIVITY TO SENSORY INPUT OR UNUSUAL INTEREST IN SENSORY ASPECTS AROUND </b>

                            </Label>
                            <Col sm-10>
                                <select
                                    id="B4"
                                    name="Q1"
                                    type="select"
                                    multiple
                                    className="inp"
                                    required
                                     
                                     style={{padding:"15px",border:"none",outline:"none"}}

                                
                                >
                                    <option>
                                        None
                                    </option>
                                    <option>
                                        APPARENT INDIFFERRENCE TO PAIN AND TEMPERATURE
                                    </option>
                                    <option>
                                        ADVERSE RESPONSE TO SOUND OR TEXTURE 
                                    </option>
                                    <option>
                                        EXCESSIVE SMELLING OR TOUCHING OF OBJECTS
                                    </option>
                                    <option>
                                        VISUAL FASCINATION WITH LIGHT OR MOVEMENT
                                    </option>
                                    
                                </select>
                            </Col>
                        </FormGroup>
                             */}
                        </UncontrolledCollapse>
            

                        <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}} >
                            <Button color="success" type="submit">Check Autism DSM 5 </Button>  
                        </div> 
                        </form>
                         </>) }
                        </>
                        }
                        </>
                    )
                
                }
        </div>
    )
}

export default AutismDSM












// import React,{useState,useEffect} from 'react'
// import { Alert,Button,FormGroup,Input,Label,Col,Collapse,UncontrolledCollapse,Badge, CardTitle,Card,UncontrolledAlert} from 'reactstrap'
// import  ScoreBoard  from './ScoreBoard'
// import AppContext from '../AppContext';
// import { initializeApp,RecaptchaVerifier  } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import  {getAuth} from "firebase/auth"
// // import Firebase from './firebase';
// import aakar from "../aakar.jpg"

// const AutismDSM = () => {


//     // const firebaseConfig = {
//     //     apiKey: "AIzaSyAcODvBHsFSBnyl31zCQaYtuaTngEqL8EU",
//     //     authDomain: "aakarclinic-51421.firebaseapp.com",
//     //     projectId: "aakarclinic-51421",
//     //     storageBucket: "aakarclinic-51421.appspot.com",
//     //     messagingSenderId: "414140524527",
//     //     appId: "1:414140524527:web:ba9435449e97806232b81a",
//     //     measurementId: "G-8Z6GG21XXJ"
//     //   };
      
//       // Initialize Firebase
//     //   const app = initializeApp(firebaseConfig);
//     //   const analytics = getAnalytics(app);
    
//     //   const auth = firebase.auth();
//       const [viewOtpForm, setViewOtpForm] = useState(false);

//       const loginSubmit = (e) => {
//         // e.preventDefault();
//         // setSendOtp(true)
//         // let phone_number = 9960855675;
//         // const appVerifier = window.recaptchaVerifier;
    
//         // getAuth()
//         //     .signInWithPhoneNumber(phone_number, appVerifier)
//         //     .then((confirmationResult) => {
//         //         // SMS sent. Prompt user to type the code from the message, then sign the
//         //         // user in with confirmationResult.confirm(code).
//         //         console.log("otp sent");
//         //         setViewOtpForm(true);
//         //         window.confirmationResult = confirmationResult;
//         //         // ...
//         //     })
//         //     .catch((error) => {
//         //         // Error; SMS not sent
//         //         // ...
//         //         alert(error.message);
//         //     });
//     };
//     const [otp,setOtp] = useState(0);

//     const otpSubmit = () => {

    
//         // window.confirmationResult
//         //     .confirm(otp)
//         //     .then((confirmationResult) => {
//         //         console.log(confirmationResult);
//         //         console.log("success");
//         //         window.open("/", "_self");
//         //     })
//         //     .catch((error) => {
//         //         // User couldn't sign in (bad verification code?)
//         //         alert(error.message);
//         //     });
//     };












//     const [section,setSection] = useState(1);
//      let score = 0;
//      const [finalScore,setFinalScore] = useState(0);
//     const [scoreBoard,setScoreBoard] = useState(false);
//     const [patientForm,setPatientForm] = useState({
//         Name: '',
//         Age:'',
//         Sex:'',
//         City:'',
//         Mob_Number:''
//     })

//     const goBack = () => {
//         window.scroll(0,0);
//         if(section > 1){
//             setSection(section-1);
//         }
//         if(scoreBoard){
//             setSection(1);
//             setScoreBoard(false)
//         }
//     }
//     const goNext = () => {
//         window.scroll(0,0);
//         if(section >= 4){
//             setSection(4);
//         }else{
//             setSection(section + 1)
//         }
   
//     }

//     const calcScore = ( ) => {
//         gotoAutismScorer(0);
//     }
//     const gotoAutismScorer = (ans) => {
        
//         console.log(ans)
//         // setScore(score + Number(ans));
//         // console.log("Your current Score")
//         // console.log(score)
//         // setScoreBoard(false);
   
//     }
//     const processScore = (value) => {
//         console.log(value)
//         if(value == "Never"){
//             console.log("Never")
//             console.log(score)
//             score = score + 1;
//             console.log(score)
//         }else if(value == "Sometimes"){
//             score += 2;
//         }else if(value == "Often"){
//             score += 3;
//         }else if(value == "Always"){
//             score += 4;
//         }
//     }
    
//     var A = [];
//     var ATrue = false;
//     var B = [];
//     var BTrue = false;
//     const [result,setResult] = useState(false)
//     const getVal = () => { 
//             var A1 = document.getElementById("A1").value;
//             if(A1 != "None"){ A[0] = true}
//             var A2 = document.getElementById("A2").value;
//             if(A2 != "None"){ A[1] = true}
//             var A3 = document.getElementById("A3").value;
//             if(A3 != "None"){ A[2] = true}

//             if(A[0] && A[1] && A[2]){
//                 ATrue = true;
//             }

//             var B1 = document.getElementById("B1").value;
//             if(B1 != "None"){ B[0] = true}
//             var B2 = document.getElementById("B2").value;
//             if(B2 != "None"){ B[1] = true}
//             var B3 = document.getElementById("B3").value;
//             if(B3 != "None"){ B[2] = true}
//             var B4 = document.getElementById("B4").value;
//             if(B4 != "None"){ B[3] = true}

//             if((B[1] && B[2] ) || (B[1] || B[3]) || (B[1] && B[4] ) || (B[2] || B[3]) || (B[2] && B[4] ) || (B[4] || B[3])){
//                 BTrue = true;
//             }
        
//         }

//     const handleSubmit = (e) => {  
//             e.preventDefault();

//             getVal();
//             console.log(ATrue)
//             console.log(BTrue)
//             console.log(result)
//             if(ATrue && BTrue){
//                 setResult(true)
//             }else{
//                 setResult(false)
//             }
//             setScoreBoard(true);
//     }

//       const [password,setPassword] = useState("");
//       const [submitPswd,setSubmitPswd] = useState(false);
//       const [forgotPswd,setForgotPswd] = useState(false);
//       const [sendOtp,setSendOtp] = useState(false);
//       const [atHome,setAtHome] = useState(true)
//       const handleChangePassword = (e) => {
//             setPassword(e.target.value);
//       }

//       const handlesubmitPassword = () =>{
//             setSubmitPswd(true)
//       }
//       const handleforgotPassword = () => {
//             setForgotPswd(true);
//       }
//       const handleChangeMobNumber = () => {

//       }
//       const handleSendOTP = () => {
//         setSendOtp(true)
//       }
//       useEffect(() => {
//         // window.recaptchaVerifier  = new getAuth().RecaptchaVerifier(
//         //     "recaptcha-container", {
//         //         size: "invisible",
//         //         callback: function(response) {
//         //             console.log("Captcha Resolved");
//         //         },
//         //         defaultCountry: "IN",
//         //     }
//         // );
//     }, [sendOtp]);
//     const [validationAlert,setValidationAlert] = useState(false);

//     const handleChangeForm = (e) =>{ 

//         var name = e.target.name;
//         var value = e.target.value;
//         setPatientForm({ ...patientForm, [name]: value })
//     }
//     const gotoAssesment = (e) => {
//         e.preventDefault();
//         console.log(document.getElementById('Name'))
//         console.log(document.getElementById('Age'))
//         console.log(document.getElementById('Sex'))
//         console.log(document.getElementById('City'))
//         console.log(document.getElementById('Mob_Number'))
//         if(document.getElementById('Name') === null || document.getElementById('Age') === null || document.getElementById('Sex') === null || document.getElementById('City ') === null || document.getElementById('Mob_Number') === null){

//             setValidationAlert(true);
//             setAtHome(false)
//         }else{
//             setAtHome(false)
//             setValidationAlert(false)
//         }
//     }
//     return (
//         <div >
//                 <div style={{textAlign:"center",margin:"20px"}} >
//                         <img src={aakar} alt="aakar" className="aakar-logo"/>
//                 </div>
//                 {
//                     scoreBoard ? 
//                     (
//                     <>
//                     <ScoreBoard result={result}  patientForm={patientForm}/>
//                     <Button onClick={() => {setScoreBoard(false)}} style={{margin:"20px",float:"right"}}> Check  Again ?</Button> 
//                     </> ) :
//                     (   
//                         <>
//                         {
//                             atHome  ? (<>
//                             <div style={{textAlign:"center",fontSize:"22px"}}>
//                               <Card color="info" >
//                                   <CardTitle style={{margin:"20px 10px !important"}}> 
//                                     Neuro Developmental Pediatrician Dr Kondekar Treatment for Autism ADHD Learning disability Epilepsy
//                               </CardTitle>
//                                 </Card>
//                                 </div> <br />
//                                 <div style={{textAlign:"center",fontSize:"20px"}}>
//                                 <Badge color="danger" >
//                                     Check AUTISM DSM 5 
//                                 </Badge>
//                                 </div>  
//                             <form onSubmit={gotoAssesment} style={{padding:"20px 100px"}}>
//                             <FormGroup>

//                             <Label for="exampleName" sm-2>
//                                                     Enter Name : 
//                                                    </Label>
//                                                    <Col sm-10>
//                                                        <input
                                                      
//                                                            id="Name"
//                                                            name="Name"
//                                                            type="text"
//                                                            className="autInp"
//                                                            onChange={handleChangeForm}
//                                                            required
//                                                             style={{padding:"5px",border:"none",outline:"none",boxShadow:"1px 1px 5px grey",borderRadius:"8px"}}
                                                           
//                                                        />
//                                                    </Col>
//                             </FormGroup>
//                             <FormGroup>
//                             <Label for="exampleAge" sm-2>
//                                                     Enter Age : 
//                                                    </Label>
//                                                    <Col sm-10>
//                                                        <input
//                                                            id="Age"
//                                                            name="Age"
//                                                            type="number"
//                                                            className="autInp"
//                                                            onChange={handleChangeForm}
//                                                            required
//                                                             style={{padding:"5px",border:"none",outline:"none",boxShadow:"1px 1px 5px grey",borderRadius:"8px"}}
//                                                        />
//                                                    </Col>
//                             </FormGroup>
//                             <FormGroup>
//                             <Label for="exampleSex" sm-2>
//                                                     Enter Sex : 
//                                                    </Label>
//                                                    <Col sm-10>
//                                                        <input
//                                                            id="Sex"
//                                                            name="Sex"
//                                                            type="text"
//                                                            className="autInp"
//                                                            onChange={handleChangeForm}
//                                                            required
//                                                             style={{padding:"5px",border:"none",outline:"none",boxShadow:"1px 1px 5px grey",borderRadius:"8px"}}
//                                                        />
//                                                    </Col>
//                             </FormGroup>
//                             <FormGroup>
//                             <Label for="exampleSex" sm-2>
//                                                     Enter City : 
//                                                    </Label>
//                                                    <Col sm-10>
//                                                        <input
//                                                            id="City"
//                                                            name="City"
//                                                            type="text"
//                                                            className="autInp"
//                                                            onChange={handleChangeForm}
//                                                            required
//                                                             style={{padding:"5px",border:"none",outline:"none",boxShadow:"1px 1px 5px grey",borderRadius:"8px"}}
//                                                        />
//                                                    </Col>
//                             </FormGroup>
//                             <FormGroup>
//                             <Label for="example" sm-2>
//                                                     Enter Mobile Number : 
//                                                    </Label>
//                                                    <Col sm-10>
//                                                        <input
                                                        
//                                                            id="Mob_Number"
//                                                            name="Mob_Number"
//                                                            type="number"
//                                                            className="autInp"
//                                                            onChange={handleChangeForm}
//                                                            required
//                                                            style={{padding:"5px",border:"none",outline:"none",boxShadow:"1px 1px 5px grey",borderRadius:"8px"}}
//                                                        />
//                                                    </Col>
//                             </FormGroup>
                            
//                             <Button type="submit">Go To Assesment</Button> 
//                             </form>
//                             </>) :
//                         <>

//                        {
//                           ( password  != "wwwpedneuroin" || !submitPswd) ?
//                             (
//                                 <>
//                                     {
//                                        !forgotPswd ?    
//                                             <div style={{padding:"60px 90px"}}>
//                                                    <FormGroup row p-0 >
//                                                    <Label for="exampleSex" sm-2>
//                                                         Enter Password :
//                                                    </Label>
//                                                    <Col sm-10>
//                                                        <Input
//                                                            id="password"
//                                                            name="password"
//                                                            type="text"
//                                                            className="inp"
//                                                            style={{padding:"5px",border:"none",outline:"none",boxShadow:"1px 1px 5px grey",borderRadius:"8px"}}
//                                                            onChange={handleChangePassword}
//                                                        />
//                                                    </Col>
//                                                </FormGroup>
//                                                <div style={{display:"flex",justifyContent:"space-between"}}>
//                                                <Button onClick={handlesubmitPassword}>Submit</Button>
//                                                <Button onClick={() => {setAtHome(true)}}>Back</Button>
//                                                </div>
//                                             </div>
//                                             :  (
//                                             <>
//                                               {
//                                                   sendOtp ? (
//                                                   <>

//                                                         <FormGroup>
//                                                             <Label for="exampleSex" sm-2>
//                                                             Enter OTP   : 
//                                                         </Label>
//                                                         <Col sm-10>
//                                                             <Input
//                                                                 id="Otp_number"
//                                                                 name="Otp_number"
//                                                                 type="number"
//                                                                 className="inp"
//                                                                 onChange={(e) => setOtp(e.target.value) }
//                                                             />
//                                                         </Col>
//                                                     </FormGroup>
//                                                     <Button onClick={otpSubmit}>Verify OTP</Button>
//                                                   </>
//                                                   ):(
//                                                       <>
//                                                <FormGroup>
//                                                 <Label for="exampleSex" sm-2>
//                                                     Enter Mobile Number : 
//                                                    </Label>
//                                                    <Col sm-10>
//                                                        <Input
//                                                            id="Mob_number"
//                                                            name="Mob_number"
//                                                            type="number"
//                                                            className="inp"
//                                                            onChange={handleChangeMobNumber}
//                                                        />
//                                                    </Col>
//                                                </FormGroup>
//                                                 <Button onClick={loginSubmit}> Send OTP</Button>
//                                                 </>
//                                                 )
//                                               }
//                                             </>)
//                                     }          
 
//                                 </>
//                             )   
//                             :    
//                         (
//                             <>     
//                        <br /> <br /> <br />  
//                         <div style={{textAlign:"center",margin:"15px"}}><Button color="info" id="section1">Section A :  SOCIAL COMMUNICATION AND INTERACTION: PERSISTENT DEFICIT  </Button></div>
//                         <form style={{textAlign:"center"}} onSubmit={handleSubmit}>
//                         <UncontrolledCollapse  toggler="#section1">
                            
//                         <FormGroup row   p-0 >
//                             <Label for="exampleSex" sm-2>
//                             <b>A1.  SOCIAL EMOTIONAL RECIPROCITY</b>
//                             </Label>
//                             <Col sm-10>
//                                 <select
//                                     id="A1"
//                                     name="A1"
//                                     type="select"
//                                     multiple 
//                                     className="inp"
                                     
//                                      required
//                                      style={{padding:"15px",border:"none",outline:"none"}}
                                    
//                                 >
//                                     <option >
//                                    None
//                                     </option>
//                                     <option>
//                                     SOCIAL APPROACH ABNORMAL
//                                     </option>
//                                     <option>
//                                     ABNORMAL BACK FORTH CONVERSATION
//                                     </option>
//                                     <option>
//                                     REDUCED SHARING OF INTEREST EMOTION/ AFFECT
//                                     </option>
//                                     <option>
//                                     FAILURE TO INITIATE OR RESPOND TO SOCIAL INRTERACTIONS
//                                     </option>
//                                 </select>
//                             </Col>
//                         </FormGroup>
//                         <FormGroup row  >
//                             <Label for="exampleSex" sm-2>
//                             <b>A2. DEFICIT IN NONVERBAL COMMUNICATION </b>
//                             </Label>
//                             <Col sm-10>
//                                 <select
//                                     id="A2"
//                                     name="A2"
//                                     type="select"
//                                     multiple
//                                     className="inp"
                                     
//                                      style={{padding:"15px",border:"none",outline:"none"}}
//                                 >
//                                     <option>
//                                     None
//                                     </option>
//                                     <option>
//                                     POOR VERBAL / NON VERBAL COMMUNICATION, POOR EYE CONTACT
//                                     </option>
//                                     <option>
//                                     POOR BODY LANGUAGE
//                                     </option>
//                                     <option>
//                                     DEFICIT IN GESTURE USE 
//                                     </option>
//                                     <option>
//                                     TOTAL LACK OF FACIAL EXPRESSIONS OR NON VERBAL COMMUNICATION
//                                     </option>
//                                 </select>
//                             </Col>
//                         </FormGroup>
//                         <FormGroup row  >
//                             <Label for="exampleSex" sm-2>
//                           <b> A3</b>
//                             </Label>
//                             <Col sm-10>
//                                 <select
//                                     id="A3"
//                                     name="A3"
//                                     type="select"
//                                     multiple
//                                     className="inp"
//                                     required
                                     
//                                      style={{padding:"15px",border:"none",outline:"none"}}

                                    
//                                 >
//                                     <option>
//                                     None
//                                     </option>
//                                     <option>
//                                     DEFICIT IN DEVELOPING MAINTAINING AND UNDERSTANDING RELATIONSHIPS
//                                     </option>
//                                     <option>
//                                     DIFFICUTY ADJUSTING BEHAVIOR TO SUIT VARIOUS SOCIAL CONTEXT
//                                     </option>
//                                     <option>
//                                     DIFFICULTY IN SHARING IMAGINATIVE PLAY OR MAKING FRIENDS 
//                                     </option>
//                                     <option>
//                                     ABSENCE OF INTEREST IN PEERS
//                                     </option>
//                                 </select>
//                             </Col>
//                         </FormGroup>
                       
//                         </UncontrolledCollapse>


//                         <div style={{textAlign:"center",margin:"15px"}}><Button color="info" id="section2">Section B : RESTRICTED, REPITIVE PATTERNS OF BEHAVIOUR, OR INTEREST, OR ACTIVITIES</Button></div>
//                         <UncontrolledCollapse  toggler="#section2" >

//                         <FormGroup   >
//                             <Label for="exampleInp" sm-2>
//                            <b>B1.  STEREOTYPED OR REPITITVE MOTOR MOVEMENTS </b>
//                             </Label>
//                             <Col sm-10>
//                                 <select
//                                     id="B1"
//                                     name="Q1"
//                                     type="select"
//                                     multiple
//                                     className="inp"
//                                     required
                                     
//                                      style={{padding:"15px",border:"none",outline:"none",overflow:"auto"}}

                                
//                                 >
//                                     <option>
//                                     None
//                                     </option>
//                                     <option>
//                                     USE OF OBJECTS
//                                     </option>
//                                     <option>
//                                     SIMPLE MOTOR STEREOTYPES
//                                     </option>
//                                     <option>
//                                     LINING UP TOYS
//                                     </option>
//                                     <option>
//                                     FLIPPING OBJECTS
//                                     </option>
//                                     <option>
//                                     ECHOLALIA
//                                     </option>
//                                     <option>
//                                     IDIOSYNCHRATIC PHRASES
//                                     </option>
//                                 </select>
//                             </Col>
//                         </FormGroup>
//                         <FormGroup row  >
//                             <Label for="exampleInp" sm-2>
//                             <b>B2. SAMENESS / RIGIDNESS/ INFLEXIBILITY/ RITUALITY VERBAL OR NON VERBAL </b>

//                             </Label>
//                             <Col sm-10>
//                                 <select
//                                     id="B2"
//                                     name="Q1"
//                                     type="select"
//                                     multiple
//                                     className="inp"
//                                     required
                                     
//                                      style={{padding:"15px",border:"none",outline:"none"}}

                                
//                                 >
//                                     <option>
//                                         None
//                                     </option>
//                                     <option>
//                                         EXTREME DISTRESS AT SMALL CHANGES 
//                                     </option>
//                                     <option>
//                                         DIFFICULTY ITH CHANGE OR TRANSITION
//                                     </option>
//                                     <option>
//                                         RIGID THINKING PATTERN 
//                                     </option>
//                                     <option>
//                                         GREETING RITUALS
//                                     </option>
//                                     <option>
//                                     NEED TO TAKE SAME ROUTE 6. EAT SAME FOOD EVERY DAY
//                                     </option>
//                                 </select>
//                             </Col>
//                         </FormGroup>
//                         <FormGroup row  >
//                             <Label for="exampleInp" sm-2>
//                            <b> B3. RESTRICTED FIXATD INTEREST OF ABNORMAL INTENSITY / FOCUS</b>
//                             </Label>
//                             <Col sm-10>
//                                 <select
//                                     id="B3"
//                                     name="Q1"
//                                     type="select"
//                                     multiple
//                                     className="inp"
//                                     required
                                     
//                                      style={{padding:"15px",border:"none",outline:"none"}}

                                
//                                 >
//                                     <option>
//                                         None
//                                     </option>
//                                     <option>
//                                         STRONG ATTACHMENT / PREOCCUPATION WITH UNUSUAL OBJECTS 
//                                     </option>
//                                     <option>
//                                         EXCESSIVE CIRCUMSCRIBED OR PERSERVATIVE INTERESTS
//                                     </option>
//                                 </select>
//                             </Col>
//                         </FormGroup>
//                         <FormGroup row  >
//                             <Label for="exampleInp" sm-2>
//                         <b>B4. HYPER OR HYPO REACTIVITY TO SENSORY INPUT OR UNUSUAL INTEREST IN SENSORY ASPECTS AROUND </b>

//                             </Label>
//                             <Col sm-10>
//                                 <select
//                                     id="B4"
//                                     name="Q1"
//                                     type="select"
//                                     multiple
//                                     className="inp"
//                                     required
                                     
//                                      style={{padding:"15px",border:"none",outline:"none"}}

                                
//                                 >
//                                     <option>
//                                         None
//                                     </option>
//                                     <option>
//                                         APPARENT INDIFFERRENCE TO PAIN AND TEMPERATURE
//                                     </option>
//                                     <option>
//                                         ADVERSE RESPONSE TO SOUND OR TEXTURE 
//                                     </option>
//                                     <option>
//                                         EXCESSIVE SMELLING OR TOUCHING OF OBJECTS
//                                     </option>
//                                     <option>
//                                         VISUAL FASCINATION WITH LIGHT OR MOVEMENT
//                                     </option>
                                    
//                                 </select>
//                             </Col>
//                         </FormGroup>
                            
//                         </UncontrolledCollapse>
                        
// {/* 
//                         <div style={{textAlign:"center",margin:"15px"}}><Button color="info"  id="section3">Section 3 : BEHAVIOURAL CHARACTERISTICS </Button></div>
                        
//                         <UncontrolledCollapse  toggler="#section3">

//                         <FormGroup row   p-0 >
//                             <Label for="exampleSex" sm-2>
//                             Q 10.  Likes sameness in everyday routine
//                             </Label>
//                             <Col sm-10>
//                                 <Input
//                                     id="Q10"
//                                     name="Q1"
//                                     type="select"
//                                     multiple
//                                     className="inp"
//                                     required
                                     
                                   

                                    
//                                 >
//                                     <option>
//                                     Never
//                                     </option>
//                                     <option>
//                                     Sometimes
//                                     </option>
//                                     <option>
//                                         Often
//                                     </option>
//                                     <option>
//                                         Always
//                                     </option>
//                                 </Input>
//                             </Col>
//                         </FormGroup>
//                         <FormGroup row  >
//                             <Label for="exampleSex" sm-2>
//                             Q 11. Inappropriate attachment to objects

//                             </Label>
//                             <Col sm-10>
//                                 <Input
//                                     id="Q11"
//                                     name="Q1"
//                                     type="select"
//                                     className="inp"
                                    
//                                 >
//                                     <option>
//                                     Never
//                                     </option>
//                                     <option>
//                                     Sometimes
//                                     </option>
//                                     <option>
//                                         Often
//                                     </option>
//                                     <option>
//                                         Always
//                                     </option>
//                                 </Input>
//                             </Col>
//                         </FormGroup>
//                         <FormGroup row  >
//                             <Label for="exampleSex" sm-2>
//                             Q 12. Unsual body movements such as flapping hands or rocking or jumping

//                             </Label>
//                             <Col sm-10>
//                                 <Input
//                                     id="Q12"
//                                     name="Q1"
//                                     type="select"
//                                     className="inp"
                                    
//                                 >
//                                     <option>
//                                     Never
//                                     </option>
//                                     <option>
//                                     Sometimes
//                                     </option>
//                                     <option>
//                                         Often
//                                     </option>
//                                     <option>
//                                         Always
//                                     </option>
//                                 </Input>
//                             </Col>
//                         </FormGroup>
//                         <FormGroup row style={{margin:"0px 300px"}} >
//                             <Label for="exampleSex" sm-2>
//                         Q 13. Extreme restlessness,hyperactivity/overpassivity or prefers to be alone all the time 

//                             </Label>
//                             <Col sm-10>
//                                 <Input
//                                     id="Q13"
//                                     name="Q1"
//                                     type="select"
//                                     className="inp"
                                    
//                                 >
//                                     <option>
//                                     Never
//                                     </option>
//                                     <option>
//                                     Sometimes
//                                     </option>
//                                     <option>
//                                         Often
//                                     </option>
//                                     <option>
//                                         Always
//                                     </option>
//                                 </Input>
//                             </Col>
//                         </FormGroup>
//                         <FormGroup row>
//                             <Label for="exampleSex" sm-2>
//                             Q 14. Not responsive to normal teaching methods
//                             </Label>
//                             <Col sm-10>
//                                 <Input
//                                     id="Q14"
//                                     name="Q1"
//                                     type="select"
//                                     className="inp"
                                    
//                                 >
//                                     <option>
//                                     Never
//                                     </option>
//                                     <option>
//                                     Sometimes
//                                     </option>
//                                     <option>
//                                         Often
//                                     </option>
//                                     <option>
//                                         Always
//                                     </option>
//                                 </Input>
//                             </Col>
//                         </FormGroup>

//                         </UncontrolledCollapse>


//                         <div style={{textAlign:"center",margin:"15px"}}><Button color="info" id="section4">Section 4:  SENSORY INTEGRATION </Button></div>
                        
//                         <UncontrolledCollapse  toggler="#section4">

//                         <FormGroup row p-0 >
//                             <Label for="exampleSex" sm-2>
//                             Q 15.  Doesn’t like to be hugged or or touched/apparent insensitivity to pain
//                             </Label>
//                             <Col sm-10>
//                                 <Input
//                                     id="Q15"
//                                     name="Q1"
//                                     type="select"
//                                     className="inp"
                                    
//                                 >
//                                     <option>
//                                     Never
//                                     </option>
//                                     <option>
//                                     Sometimes
//                                     </option>
//                                     <option>
//                                         Often
//                                     </option>
//                                     <option>
//                                         Always
//                                     </option>
//                                 </Input>
//                             </Col>
//                         </FormGroup>
//                         <FormGroup row>
//                             <Label for="exampleSex" sm-2>
//                             Q 16. Intolerance/addiction to certain sounds,tastes,odours,visuals
//                             </Label>
//                             <Col sm-10>
//                                 <Input
//                                     id="Q16"
//                                     name="Q2"
//                                     type="select"
//                                     className="inp"
                                    
//                                 >
//                                     <option>
//                                     Never
//                                     </option>
//                                     <option>
//                                     Sometimes
//                                     </option>
//                                     <option>
//                                         Often
//                                     </option>
//                                     <option>
//                                         Always
//                                     </option>
//                                 </Input>
//                             </Col>
//                         </FormGroup>
//                         <FormGroup row>
//                             <Label for="exampleSex" sm-2>
//                             Q 17. No understanding or fear of real dangers /Excessive fear for heights,change in position
//                             </Label>
//                             <Col sm-10>
//                                 <Input
//                                     id="Q17"
//                                     name="Q3"
//                                     type="select"
//                                     className="inp"
                                    
//                                 >
//                                     <option>
//                                     Never
//                                     </option>
//                                     <option>
//                                     Sometimes
//                                     </option>
//                                     <option>
//                                         Often
//                                     </option>
//                                     <option>
//                                         Always
//                                     </option>
//                                 </Input>
//                             </Col>
//                         </FormGroup>
//                         <FormGroup row>
//                             <Label for="exampleSex" sm-2>
//                         Q 18. Enjoys spinning or rotating objects
//                             </Label>
//                             <Col sm-10>
//                                 <Input
//                                     id="Q18"
//                                     name="Q4"
//                                     type="select"
//                                     className="inp"
                                    
//                                 >
//                                     <option>
//                                     Never
//                                     </option>
//                                     <option>
//                                     Sometimes
//                                     </option>
//                                     <option>
//                                         Often
//                                     </option>
//                                     <option>
//                                         Always
//                                     </option>
//                                 </Input>
//                             </Col>
//                         </FormGroup>
//                         <FormGroup row>
//                             <Label for="exampleSex" sm-2>
//                             Q 19. Inappropriate laughing and giggling/crying spells with extreme distress for no apparent reason

//                             </Label>
//                             <Col sm-10>
//                                 <Input
//                                     id="Q19"
//                                     name="Q5"
//                                     type="select"
//                                     className="inp"
                                    
//                                 >
//                                     <option>
//                                     Never
//                                     </option>
//                                     <option>
//                                     Sometimes
//                                     </option>
//                                     <option>
//                                         Often
//                                     </option>
//                                     <option>
//                                         Always
//                                     </option>
//                                 </Input>
//                             </Col>
//                         </FormGroup>
//                         <FormGroup row>
//                             <Label for="exampleSex" sm-2>
//                             Q 20. Difficulty in fine motor skills/a tendency to fall/clumsiness/resistance to motor movement activities 

//                             </Label>
//                             <Col sm-10>
//                                 <Input
//                                     id="Q20"
//                                     name="Q6"
//                                     type="select"
//                                     className="inp"
                                    
//                                 >
//                                     <option>
//                                     Never
//                                     </option>
//                                     <option>
//                                     Sometimes
//                                     </option>
//                                     <option>
//                                         Often
//                                     </option>
//                                     <option>
//                                         Always
//                                     </option>
//                                 </Input>
//                             </Col>
//                         </FormGroup>
           
//                         </UncontrolledCollapse> */}

//                         <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}} >
//                             <Button color="success" type="submit">Check Autism DSM 5 </Button>  
//                         </div> 
//                         </form>
//                          </>) }
//                         </>
//                         }
//                         </>
//                     )
                
//                 }
//         </div>
//     )
// }

// export default AutismDSM


















