import React,{useState,useEffect} from 'react'
import { Alert,Button,FormGroup,Input,Label,Col,Collapse,UncontrolledCollapse,Badge, CardTitle,Card,UncontrolledAlert} from 'reactstrap'
import Section1  from './Sections/Section1'
import Section2  from './Sections/Section2'
import Section3  from './Sections/Section3'
import Section4  from './Sections/Section4'
import  ScoreBoard  from './Sections/ScoreBoard'
import AppContext from '../AppContext';
import { initializeApp,RecaptchaVerifier  } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import  {getAuth} from "firebase/auth"
// import Firebase from './firebase';
import aakar from "../aakar.jpg"

const Form = () => {


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
    
    const renderSwitch = (param) => {
        switch(param) {
            case  1 :
                return <Section1    />;
            case  2 :
                return <Section2    />;
            case  3 :
                return <Section3    />;
            case  4 :
                return <Section4     />;
            default:
                return <Section1    />;
        }
      }
    const getVal = () => { 
            var val = document.getElementById("Q1").value;
            processScore(val);
         
            val = document.getElementById("Q2").value;
            processScore(val);
       
            val = document.getElementById("Q3").value;
            processScore(val);
            
            val = document.getElementById("Q4").value;
            processScore(val);
            
            val = document.getElementById("Q5").value;
            processScore(val);

            val = document.getElementById("Q6").value;
            processScore(val);
       
            val = document.getElementById("Q7").value;
            processScore(val);
            
            val = document.getElementById("Q8").value;
            processScore(val);
            
            val = document.getElementById("Q9").value;
            processScore(val);
            val = document.getElementById("Q10").value;
            processScore(val);
       
            val = document.getElementById("Q11").value;
            processScore(val);
            
            val = document.getElementById("Q12").value;
            processScore(val);
            
            val = document.getElementById("Q13").value;
            processScore(val);
            val = document.getElementById("Q14").value;
            processScore(val);
       
            val = document.getElementById("Q15").value;
            processScore(val);
            
            val = document.getElementById("Q16").value;
            processScore(val);
            
            val = document.getElementById("Q17").value;
            processScore(val);

            val = document.getElementById("Q18").value;
            processScore(val);
            
            val = document.getElementById("Q19").value;
            processScore(val);
            
            val = document.getElementById("Q20").value;
            processScore(val);
        }
    const handleSubmit = () => {  

            getVal();
            console.log("Total Score is : ",score);
            setFinalScore(score);
            score = 0;
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
                    <ScoreBoard finalScore={finalScore}  patientForm={patientForm}/>
                    <Button onClick={() => {setScoreBoard(false)}} style={{margin:"20px",float:"right"}}> Check Score Again ?</Button> 
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
                                    Autism Assesment : 
                                </Badge>
                                </div>
                            <form onSubmit={gotoAssesment}>
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
                                            <>
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
                                               <div style={{display:"flex",justifyContent:"space-between"}}>
                                               <Button onClick={handlesubmitPassword}>Submit</Button>
                                               <Button onClick={() => {setAtHome(true)}}>Back</Button>
                                               </div>
                                            </>
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
                        <div style={{textAlign:"center",margin:"15px"}}><Button color="info" id="section1">Section 1 :  SOCIAL INTERACTION  </Button></div>
                        <UncontrolledCollapse  toggler="#section1">
                        <FormGroup row p-0 >
                            <Label for="exampleSex" sm-2>
                            Q1.  Inability to establish and/or maintain eye contact
                            </Label>
                            <Col sm-10>
                                <Input
                                    id="Q1"
                                    name="Q1"
                                    type="select"
                                    className="inp"
                                    
                                >
                                    <option>
                                    Never
                                    </option>
                                    <option>
                                    Sometimes
                                    </option>
                                    <option>
                                        Often
                                    </option>
                                    <option>
                                        Always
                                    </option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleSex" sm-2>
                            Q2. Child does not respond when called,sometimes appears to be deaf
                            </Label>
                            <Col sm-10>
                                <Input
                                    id="Q2"
                                    name="Q2"
                                    type="select"
                                    className="inp"
                                    
                                >
                                    <option>
                                    Never
                                    </option>
                                    <option>
                                    Sometimes
                                    </option>
                                    <option>
                                        Often
                                    </option>
                                    <option>
                                        Always
                                    </option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleSex" sm-2>
                            Q3. Difficulty in mixing and playing with other children of same age
                            </Label>
                            <Col sm-10>
                                <Input
                                    id="Q3"
                                    name="Q3"
                                    type="select"
                                    className="inp"
                                    
                                >
                                    <option>
                                    Never
                                    </option>
                                    <option>
                                    Sometimes
                                    </option>
                                    <option>
                                        Often
                                    </option>
                                    <option>
                                        Always
                                    </option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleSex" sm-2>
                        Q4. Lack of appropriate emotional response

                            </Label>
                            <Col sm-10>
                                <Input
                                    id="Q4"
                                    name="Q4"
                                    type="select"
                                    className="inp"
                                    
                                >
                                    <option>
                                    Never
                                    </option>
                                    <option>
                                    Sometimes
                                    </option>
                                    <option>
                                        Often
                                    </option>
                                    <option>
                                        Always
                                    </option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleSex" sm-2>
                            Q5. Can do certain tasks well,but not the tasks involving social undestanding
                            </Label>
                            <Col sm-10>
                                <Input
                                    id="Q5"
                                    name="Q5"
                                    type="select"
                                    className="inp"
                                    
                                >
                                    <option>
                                    Never
                                    </option>
                                    <option>
                                    Sometimes
                                    </option>
                                    <option>
                                        Often
                                    </option>
                                    <option>
                                        Always
                                    </option>
                                </Input>
                            </Col>
                        </FormGroup>

                        </UncontrolledCollapse>


                        <div style={{textAlign:"center",margin:"15px"}}><Button color="info" id="section2">Section 2 : COMMUNICATION </Button></div>
                        <UncontrolledCollapse  toggler="#section2">
                        <FormGroup row p-0 >
                            <Label for="exampleInp" sm-2>
                            Q6.  Difficulty in comprehension/communication
                            </Label>
                            <Col sm-10>
                                <Input
                                    id="Q6"
                                    name="Q1"
                                    type="select"
                                    className="inp"
                                
                                >
                                    <option>
                                    Never
                                    </option>
                                    <option>
                                    Sometimes
                                    </option>
                                    <option>
                                        Often
                                    </option>
                                    <option>
                                        Always
                                    </option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleInp" sm-2>
                            Q7. May/may not indicate needs by gestures or leading adults by the hand

                            </Label>
                            <Col sm-10>
                                <Input
                                    id="Q7"
                                    name="Q1"
                                    type="select"
                                    className="inp"
                                
                                >
                                    <option>
                                    Never
                                    </option>
                                    <option>
                                    Sometimes
                                    </option>
                                    <option>
                                        Often
                                    </option>
                                    <option>
                                        Always
                                    </option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleInp" sm-2>
                            Q8. Echolalia/using nonsensical words and muttering to self
                            </Label>
                            <Col sm-10>
                                <Input
                                    id="Q8"
                                    name="Q1"
                                    type="select"
                                    className="inp"
                                
                                >
                                    <option>
                                    Never
                                    </option>
                                    <option>
                                    Sometimes
                                    </option>
                                    <option>
                                        Often
                                    </option>
                                    <option>
                                        Always
                                    </option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleInp" sm-2>
                        Q9. Lack of Pretend play 

                            </Label>
                            <Col sm-10>
                                <Input
                                    id="Q9"
                                    name="Q1"
                                    type="select"
                                    className="inp"
                                
                                >
                                    <option>
                                    Never
                                    </option>
                                    <option>
                                    Sometimes
                                    </option>
                                    <option>
                                        Often
                                    </option>
                                    <option>
                                        Always
                                    </option>
                                </Input>
                            </Col>
                        </FormGroup>
                
                        </UncontrolledCollapse>

                        <div style={{textAlign:"center",margin:"15px"}}><Button color="info"  id="section3">Section 3 : BEHAVIOURAL CHARACTERISTICS </Button></div>
                        
                        <UncontrolledCollapse  toggler="#section3">

                        <FormGroup row p-0 >
                            <Label for="exampleSex" sm-2>
                            Q 10.  Likes sameness in everyday routine
                            </Label>
                            <Col sm-10>
                                <Input
                                    id="Q10"
                                    name="Q1"
                                    type="select"
                                    className="inp"
                                    
                                >
                                    <option>
                                    Never
                                    </option>
                                    <option>
                                    Sometimes
                                    </option>
                                    <option>
                                        Often
                                    </option>
                                    <option>
                                        Always
                                    </option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleSex" sm-2>
                            Q 11. Inappropriate attachment to objects

                            </Label>
                            <Col sm-10>
                                <Input
                                    id="Q11"
                                    name="Q1"
                                    type="select"
                                    className="inp"
                                    
                                >
                                    <option>
                                    Never
                                    </option>
                                    <option>
                                    Sometimes
                                    </option>
                                    <option>
                                        Often
                                    </option>
                                    <option>
                                        Always
                                    </option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleSex" sm-2>
                            Q 12. Unsual body movements such as flapping hands or rocking or jumping

                            </Label>
                            <Col sm-10>
                                <Input
                                    id="Q12"
                                    name="Q1"
                                    type="select"
                                    className="inp"
                                    
                                >
                                    <option>
                                    Never
                                    </option>
                                    <option>
                                    Sometimes
                                    </option>
                                    <option>
                                        Often
                                    </option>
                                    <option>
                                        Always
                                    </option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleSex" sm-2>
                        Q 13. Extreme restlessness,hyperactivity/overpassivity or prefers to be alone all the time 

                            </Label>
                            <Col sm-10>
                                <Input
                                    id="Q13"
                                    name="Q1"
                                    type="select"
                                    className="inp"
                                    
                                >
                                    <option>
                                    Never
                                    </option>
                                    <option>
                                    Sometimes
                                    </option>
                                    <option>
                                        Often
                                    </option>
                                    <option>
                                        Always
                                    </option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleSex" sm-2>
                            Q 14. Not responsive to normal teaching methods
                            </Label>
                            <Col sm-10>
                                <Input
                                    id="Q14"
                                    name="Q1"
                                    type="select"
                                    className="inp"
                                    
                                >
                                    <option>
                                    Never
                                    </option>
                                    <option>
                                    Sometimes
                                    </option>
                                    <option>
                                        Often
                                    </option>
                                    <option>
                                        Always
                                    </option>
                                </Input>
                            </Col>
                        </FormGroup>

                        </UncontrolledCollapse>


                        <div style={{textAlign:"center",margin:"15px"}}><Button color="info" id="section4">Section 4:  SENSORY INTEGRATION </Button></div>
                        
                        <UncontrolledCollapse  toggler="#section4">

                        <FormGroup row p-0 >
                            <Label for="exampleSex" sm-2>
                            Q 15.  Doesn’t like to be hugged or or touched/apparent insensitivity to pain
                            </Label>
                            <Col sm-10>
                                <Input
                                    id="Q15"
                                    name="Q1"
                                    type="select"
                                    className="inp"
                                    
                                >
                                    <option>
                                    Never
                                    </option>
                                    <option>
                                    Sometimes
                                    </option>
                                    <option>
                                        Often
                                    </option>
                                    <option>
                                        Always
                                    </option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleSex" sm-2>
                            Q 16. Intolerance/addiction to certain sounds,tastes,odours,visuals
                            </Label>
                            <Col sm-10>
                                <Input
                                    id="Q16"
                                    name="Q2"
                                    type="select"
                                    className="inp"
                                    
                                >
                                    <option>
                                    Never
                                    </option>
                                    <option>
                                    Sometimes
                                    </option>
                                    <option>
                                        Often
                                    </option>
                                    <option>
                                        Always
                                    </option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleSex" sm-2>
                            Q 17. No understanding or fear of real dangers /Excessive fear for heights,change in position
                            </Label>
                            <Col sm-10>
                                <Input
                                    id="Q17"
                                    name="Q3"
                                    type="select"
                                    className="inp"
                                    
                                >
                                    <option>
                                    Never
                                    </option>
                                    <option>
                                    Sometimes
                                    </option>
                                    <option>
                                        Often
                                    </option>
                                    <option>
                                        Always
                                    </option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleSex" sm-2>
                        Q 18. Enjoys spinning or rotating objects
                            </Label>
                            <Col sm-10>
                                <Input
                                    id="Q18"
                                    name="Q4"
                                    type="select"
                                    className="inp"
                                    
                                >
                                    <option>
                                    Never
                                    </option>
                                    <option>
                                    Sometimes
                                    </option>
                                    <option>
                                        Often
                                    </option>
                                    <option>
                                        Always
                                    </option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleSex" sm-2>
                            Q 19. Inappropriate laughing and giggling/crying spells with extreme distress for no apparent reason

                            </Label>
                            <Col sm-10>
                                <Input
                                    id="Q19"
                                    name="Q5"
                                    type="select"
                                    className="inp"
                                    
                                >
                                    <option>
                                    Never
                                    </option>
                                    <option>
                                    Sometimes
                                    </option>
                                    <option>
                                        Often
                                    </option>
                                    <option>
                                        Always
                                    </option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleSex" sm-2>
                            Q 20. Difficulty in fine motor skills/a tendency to fall/clumsiness/resistance to motor movement activities 

                            </Label>
                            <Col sm-10>
                                <Input
                                    id="Q20"
                                    name="Q6"
                                    type="select"
                                    className="inp"
                                    
                                >
                                    <option>
                                    Never
                                    </option>
                                    <option>
                                    Sometimes
                                    </option>
                                    <option>
                                        Often
                                    </option>
                                    <option>
                                        Always
                                    </option>
                                </Input>
                            </Col>
                        </FormGroup>
           
                        </UncontrolledCollapse>

                        <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}} >
                            <Button color="success" onClick={handleSubmit}>Show Autism Score </Button>  
                        </div> 
                         </>) }
                        </>
                        }
                        </>
                    )
                
                }
        </div>
    )
}

export default Form
