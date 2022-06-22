import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import {Typography,Paper,Link,Stack} from '@mui/material';
import { styled } from '@mui/material/styles';

const UseFulLinks = () => {
  
    const links = [
        {
            linkName : "www.kondekar.com",
            link : "http://kondekar.weebly.com",
        },
        {
            linkName : "www.breathingdiary.com",
            link : "http://childasthma.weebly.com/",
        },
        {
            linkName : "www.neuropediatrician.com",
            link : "http://pedneuro.weebly.com/",
        },
        {
            linkName : "http://pedneuro.in",
            link : " https://pedneuromumbai.blogspot.com/2020/05/pediatric-learning-disability-autism.html",
        },
        {
            linkName : "www.aaakaarclinic.com",
            link : "https://kondekar.weebly.com/aakaar.html",
        },
    ]

    const socials = [
        {
            linkName : "Facebook CDC Mumbai Handle ",
            link : "http://facebook.com/cdcmumbai",
        },
        {
            linkName : "Join Parent Support groups on Whatsapp and Fix Appointment",
            link : "http://bit.ly/Autismgroup",
        },
        {
            linkName : "Facebook Page speech and senses tips for parents  ",
            link : "http://facebook.com/speechandsenses",
        },
        {
            linkName : "Join Mysore group",
            link : "https://chat.whatsapp.com/K3FFLSwvgMcEbLn1ciLWJ6",
        },
    ]

  const styles = {
    LinkComponent : {
        display:"flex",
        flexDirection : "column",
    },
    PaperHead : {
        margin:"20px",
        padding : "20px",
        textAlign : "center",
        fontWeight:"600",
        fontSize : "20px",
        color:"orange   "
    },
    PaperHead1 : {
        margin:"10px",
        padding : "10px",
        textAlign : "center",
        width:"100%",
        fontWeight:"600",
        fontSize : "22px",
        color:"black"
    },
    AllCards : {
        display:"flex",
        justifyContent : "space-around",
        margin:"10px"

    },
    card :{
        boxShadow : "grey 2px 1px 10px"
    }
  } 
 

  return (
    <div style={styles.LinkComponent}>
        <div style={{display:"flex",justifyContent:"center"}}>
            <Paper style={styles.PaperHead1} elevation={3}>Useful Links </Paper>
        </div>
        <div style={{display:"flex",justifyContent:"center"}}>
            <Paper style={styles.PaperHead} elevation={3}>Our Websites</Paper>
        </div>
        <div style={styles.AllCards}>
            {/* <h4>Websites : </h4> */}
            {
                links.map((link)=>{
                    return(<>
                        <Card style={styles.card}>
                            <CardContent>
                                <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
                                 {link.linkName} 
                                </Typography> <hr />
                                <Button variant="outlined"><Link  href= {link.link} style={{textDecoration:"none"}} target="_blank">Visit here</Link></Button>
                            </CardContent>
                        </Card>
                    </>)
                })
            }
        </div>
        <div style={{display:"flex",justifyContent:"center"}}>
            <Paper style={styles.PaperHead} elevation={3}>Social Media Sites</Paper>
        </div>  
        <Box sx={{ width: '100%' }}>
      <div style={{display:"flex",flexWrap:"wrap"}}>
        {
            socials.map((social)=>{
                return(
                    <div style={{margin:"20px"}}>
                    <Paper style={{padding:"10px"}}>
                        <div> <b style={{fontSize:"20px "}}>{social.linkName} </b> &nbsp;&nbsp;<Button variant="contained"><Link  href={social.link} style={{textDecoration:"none",color:"white"}} target="_blank">Visit here</Link></Button></div>
                    </Paper>
                    </div>
                )
            })
        }
        
        
      </div>
    </Box>
        
    </div>
  )
}

export default UseFulLinks