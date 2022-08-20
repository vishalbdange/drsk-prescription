import React from 'react'
import {Link} from 'react-router-dom'
import { FormGroup,Input,Label,Col,Button} from 'reactstrap'
import NavbarComponent from "./NavbarComponent"
import UseFulLinks from './UseFulLinks'
const Home = () => {
    return (
        <div className='home'>
            <NavbarComponent />
            <div  className="homebg">
                <Link to="/prescription"  style={{margin:"10px"}}><Button  color="info" >Prescription Generator</Button></Link>
                <Link to="/short-prescription"  style={{margin:"10px"}}><Button  color="info" >Certificate </Button></Link>
                <Link to="/autism-score"  style={{margin:"10px"}}><Button color="info" >Autism Score Predictor</Button></Link>
                <Link to="/form2"  style={{margin:"10px"}}><Button color="info" >Form2</Button></Link>
                <Link to="/form1"  style={{margin:"10px"}}><Button color="info" >Form1</Button></Link>
            </div>
            <div>
                <UseFulLinks />
            </div>

        </div>
    )
}   
export default Home
