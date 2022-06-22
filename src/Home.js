import React from 'react'
import {Link} from 'react-router-dom'
import { FormGroup,Input,Label,Col,Button} from 'reactstrap'
import NavbarComponent from "./NavbarComponent"
import UseFulLinks from './UseFulLinks'
const Home = () => {
    return (
        <div className='home'>
            <NavbarComponent />
            <div style={{textAlign:"center",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}} className="homebg">
                <Link to="/prescription" style={{margin:"68px"}} ><Button  color="info" >Prescription Generator</Button></Link>
                <Link to="/autism-score"  style={{margin:"68px"}}><Button color="info" >Autism Score Predictor</Button></Link>
            </div>
            <div>
                <UseFulLinks />
            </div>

        </div>
    )
}   
export default Home
