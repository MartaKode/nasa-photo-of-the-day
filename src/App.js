import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Post from "./WorkFile";
import styled from 'styled-components'


export function makeStyles(count) {
  return {
    demoParagraph: {
      fontSize: `1.3em`,
      color: `${count % 2 === 0 ? 'green' : 'red'}`
    },
    whiteText: {
      color: 'white',
      textShadow: '2px 2px 1px green'
    }
  }
}


const AppStyled = styled.div`
background-color: black;
`

function App() {
  // Workspace``````````````

  const [count, setCount] = useState(0)
  const [nasaData, setNasaData] = useState({});

  const onCountIncrease = () => setCount(count + 1)

  useEffect(() => {

    axios.get("https://api.nasa.gov/planetary/apod?api_key=pWpgfjxi1nYC0saBotYn7f0MzZZ0eF70Eyxp9VHW")

      .then(response => {

        // displaying data from api for inspection
        console.log(response.data)

        setNasaData(response.data)

        console.log(`${nasaData} is the data`);

      })

      .catch(error => {

        console.log('error encountered');

      })

  }, [])

  // ````````````````
  return (
    <AppStyled>
      <div className="App">
        <p style={makeStyles(count).demoParagraph} onClick={onCountIncrease}>
          Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀{count}</span>!
      </p>

        <Post title={nasaData.title} date={nasaData.date} url={nasaData.url} explanation={nasaData.explanation} />

      </div>
      <div className='App-logo'>Weee</div>
    </AppStyled>
  );
}

export default App;
