import React from 'react'
import {Link} from 'react-router-dom'
import { FormGroup,Input,Label,Col,Button} from 'reactstrap'
import NavbarComponent from "./NavbarComponent"
const Home = () => {
    return (
        <div>
            <NavbarComponent />
            <div style={{textAlign:"center",width:"100%",height:"250px",display:"flex",alignItems:"center",justifyContent:"center"}} className="homebg">
            <Link to="/prescription" style={{margin:"8px"}} ><Button  color="info" >Prescription Generator</Button></Link>
            <Link to="/autism-score"  style={{margin:"8px"}}><Button color="info" >Autism Score Predictor</Button></Link>
            </div>

        </div>
    )
}

export default Home
