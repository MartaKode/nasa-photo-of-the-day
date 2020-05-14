import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Post from "./WorkFile";


function App() {
// Workspace``````````````


const [nasaData,setNasaData] = useState({});

useEffect( () => {
  
  axios.get("https://api.nasa.gov/planetary/apod?api_key=pWpgfjxi1nYC0saBotYn7f0MzZZ0eF70Eyxp9VHW")

  .then(response => {

    // displaying data from api for inspection
    console.log(response.data)
    
    setNasaData(response.data)

    console.log(`${nasaData} is the data`);

  })

  .catch(err => {

    console.log('error encountered');

  });

  // return () => {
  // console.log('Trying to clean up')
  // }


},[]);



// ````````````````
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>

      <Post title = {nasaData.title} date = {nasaData.date} url = {nasaData.url} />
    </div>
  );
}

export default App;
