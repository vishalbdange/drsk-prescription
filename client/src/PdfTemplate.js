// import React,{ useRef } from 'react'
// import Pdf from "react-to-pdf";

// const pdfTemplate = () => {
//     const ref = useRef();
//     const  {date,Visit_No,Case_Serial_No,Name,Address,Age,Sex,Diagnosis} = JSON.parse(localStorage.getItem('state'));
//     return (
//         <div ref={ref} style={{width:"40vw !important",visibility:"hidden"}}>
//             <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/29841/dog.jpg" alt="logo" />
//             <section class="doctor-info">
//                 <div class="doctor-name">
//                 <span>Dr Santosh <surname>Kandekar</surname></span>
//                 <p>Reg N:86230 ,MD DNB DCH FCPS FAIMER</p>
//                 </div>
//                 <div class="profession">
//                 <span>Neuro-Developmental <surname>Pediatrician</surname></span>
//                 <p>aakaarclinic@gmail.com <num>M:9869405747</num></p>
//                 </div>
//             </section>
//             <section class="patient-profile">
//                 <div class="patient-profile--1">{date}</div>
//                 <div class="patient-profile--2">{Visit_No}</div>
//                 <div class="patient-profile--3">{Case_Serial_No}:</div>
//                 <div class="patient-profile--4">{Name}</div>
//                 <div class="patient-profile--5">{Address}</div>
//                 <div class="patient-profile--6">{Age}</div>
//                 <div class="patient-profile--7">{Sex}</div>
//                 <div class="patient-profile--8">{Diagnosis}</div>
//             </section>
//             <Pdf targetRef={ref} filename="prescription.pdf" >
//                     {({ toPdf }) => <button onClick={()=>{toPdf()}} >Generate Pdf</button>}
//             </Pdf>
//         </div>
//     )
// }

// export default pdfTemplate
