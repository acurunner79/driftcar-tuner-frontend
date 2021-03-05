import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import Garage from './components/Garage'
import './App.css';

function App() {

  const [user, setUser] = useState(null)

  const getData = async () => {

    try{
      const userCall = await fetch("http://localhost:3000/users/")
      const userData = await userCall.json()

      const carCall = await fetch("http://localhost:3000/cars/")
      const carData = await carCall.json()

      const engineCall = await fetch("http://localhost:3000/engines/")
      const engineData = await engineCall.json()

      const clutchCall = await fetch("http://localhost:3000/clutches/")
      const clutchData = await clutchCall.json()

      const differentialCall = await fetch("http://localhost:3000/differentials/")
      const differentialData = await differentialCall.json()

      const handBrakeCall = await fetch("http://localhost:3000/hand_brakes/")
      const handBrakeData = await handBrakeCall.json()

      const rollcageCall = await fetch("http://localhost:3000/rollcages/")
      const rollcageData = await rollcageCall.json()

      const suspensionCall = await fetch("http://localhost:3000/suspensions/")
      const suspensionData = await suspensionCall.json()

      console.log('This is user data', userData)
      console.log('This is car data', carData)
      console.log('This is engine data', engineData)
      console.log('This is clutch data', clutchData)
      console.log('This is differential data', differentialData)
      console.log('This is hand brake data', handBrakeData)
      console.log('This is rollcage data', rollcageData)
      console.log('This is suspension data', suspensionData)
    } catch (error){
      console.log(error)
    }

  }
      useEffect(() => {
        getData()
      }, [])
  return (
    <div className="App">
        <Garage />
    </div>
  );
}

export default App;
