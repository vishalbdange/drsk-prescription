import React,{useRef} from 'react';
import './App.css';
import PrescriptionForm from './PrescriptionForm'
import Preview from './Preview';
import PdfTemplate from './PdfTemplate';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import TestPDF from "./TestPDF.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './AutismScorePredictor/Form'
import NavbarComponent from "./NavbarComponent"

import Home from "./Home"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});


function App() {

  
 
  

  return (
    <Router>
      <Routes>
        
        <Route exact path="/" element={ <Home />} />
        <Route exact path="/prescription" element={ <PrescriptionForm />} />
        <Route  exact path="/prescription-view" element={<Preview />} />
        <Route  exact path="/autism-score" element={<Form />} />
      </Routes>
    </Router>

  );
}

export default App;
