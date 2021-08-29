
import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Form from './form/Form.js'
import NavBar from './NavBar.js'
import Speech from './speech_bubbles/Speech.js'


function App() {
  const [getMessage, setGetMessage] = useState({})

  useEffect(()=>{
    axios.get('http://localhost:5000/hello').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])

  return (
    <div class="something-different">
      <NavBar />
      <Form />
      <Speech />
    </div>
  );
}

export default App;