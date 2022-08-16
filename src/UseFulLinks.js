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
            linkName : "Autism Dr.Mumbai",
            link : "https://www.autismdrmumbai.com",
            desc : "",
        },
        {
            linkName : "Pay Here",
            link : "https://www.payumoney.com/webfronts/#/index/autism",
            desc : "Pay Your Fees Here",
        },
        {
            linkName : "www.neuropediatrician.com",
            link : "http://pedneuro.weebly.com/",
            desc : "Learning material on autism (Download)",
        },
        {
            linkName : "http://pedneuro.in",
            link : " https://pedneuromumbai.blogspot.com/2020/05/pediatric-learning-disability-autism.html",
            desc : "For Online Appointment Procedure",
        },
        {
            linkName : "www.aaakaarclinic.com",
            link : "https://kondekar.weebly.com/aakaar.html",
            desc : "For Clinic Address and Map",
        },
        {
            linkName : "www.kondekar.com",
            link : "http://kondekar.weebly.com",
            desc : "About   Us",
        },
        {
            linkName : "www.breathingdiary.com",
            link : "http://childasthma.weebly.com/",
            desc : "Breathing Diary",
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
    const resources = [
        {
            name : "Weekly autism monitoring chart",
            link : "http://bit.ly/monitoringautism",
        },
        {
            name : "For clinic address and map ",
            link : "https://kondekar.weebly.com/aakaar.html",
        },
        {
            name : "To Download Lectures,Videos,Learning material on Autism",
            link : "https://chat.whatsapp.com/K3FFLSwvgMcEbLn1ciLWJ6",
        },
        {
            name:"For General Child Health Advice",
            link :" https://kondekar.weebly.com/topics-ask-a-pediatrician-in-mumbai.html#.YrLLPnZByM8"
        }
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
        color:"green    "
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
        flexWrap:"wrap",
        justifyContent : "space-around",
        margin:"10px",
        
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
            <Paper style={styles.PaperHead} elevation={3}>Our Websites Sites</Paper>
        </div>  
        <Box sx={{ width: '100%' }}>
            <div style={{display:"flex",flexWrap:"wrap",background:"white",margin:"20px",boxShadow:"grey 2px 5px 10px",borderRadius:"20px"}}>
                {
                    links.map((link)=>{ 
                        return(
                            <div style={{margin:"20px"}}>
                            <Paper style={{padding:"10px"}}>
                                <div > <b style={{fontSize:"20px "}}>{link.desc} </b> &nbsp;&nbsp;<Button variant="outlined"><Link  href={link.link}  target="_blank">{link.linkName}</Link></Button></div>
                            </Paper>
                            </div>
                        )
                    })
                }
            </div>
            
        </Box>
        <div style={{display:"flex",justifyContent:"center"}}>
            <Paper style={styles.PaperHead} elevation={3}>Social Media Sites</Paper>
        </div>  
        <Box sx={{ width: '100%' }}>
            <div style={{display:"flex",flexWrap:"wrap",background:"white",margin:"20px",boxShadow:"grey 2px 5px 10px",borderRadius:"20px"}}>
                {
                    socials.map((social)=>{ 
                        return(
                            <div style={{margin:"20px"}}>
                            <Paper style={{padding:"10px"}}>
                                <div> <b style={{fontSize:"20px "}}>{social.linkName} </b> &nbsp;&nbsp;<Link  href={social.link}  target="_blank">Visit here</Link></div>
                            </Paper>
                            </div>
                        )
                    })
                }
            </div>
        </Box>
        <div style={{display:"flex",justifyContent:"center"}}>
            <Paper style={styles.PaperHead} elevation={3}>Resources </Paper>
        </div>  
        <Box sx={{ width: '100%' }}>
            <div style={{display:"flex",flexWrap:"wrap",background:"white",margin:"20px",boxShadow:"grey 2px 5px 10px",borderRadius:"20px"}}>
                {
                    resources.map((resource)=>{
                        return(
                            <div style={{margin:"20px"}}>
                            <Paper style={{padding:"10px"}}>
                                <div> <b style={{fontSize:"20px "}}>{resource.name} </b> &nbsp;&nbsp;<Link  href={resource.link}  target="_blank">Visit here</Link></div>
                            </Paper>
                            </div>
                        )
                    })
                }
            </div>
        </Box>  
        <div style={{display:"flex",justifyContent:"center"}}>
            <Paper style={styles.PaperHead} elevation={3}>Testinomials </Paper>
        </div>  
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
                
                <Paper style={{padding:"10px"}}>
                    <iframe width="360" height="215" src="https://www.youtube.com/embed/-2APXN8AV6M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Paper>
                <Paper style={{padding:"10px"}}>
                <iframe width="360" height="215" src="https://www.youtube.com/embed/Dz-7Ypmb1jk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Paper>
                &nbsp;  &nbsp;  &nbsp;  &nbsp;
                <Link href="http://bit.ly/autismtalks"> View More.. </Link>
        </div>
    </div>
  )
}

export default UseFulLinks