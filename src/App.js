import React,{useRef} from 'react';
import './App.css';
import Form from './Form'
import Preview from './Preview';
import PdfTemplate from './PdfTemplate';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import TestPDF from "./TestPDF.js";
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
  const ref = useRef();
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Form />} />
        <Route  exact path="/view" element={<Preview />} />
  
      </Routes>
    </Router>

  );
}

export default App;
