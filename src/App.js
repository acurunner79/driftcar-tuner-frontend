import logo from './logo.svg';
import { Route, Switch } from "react-router-dom"
import React, { useState, useEffect } from 'react'
import Garage from './components/Garage'
import CarDisplay from './components/CarDisplay'
import Nav from './navbar/Nav'
import Test from'./components/Test'
import Form from './components/Form'
import './App.css';

function App() {

  const [user, setUser] = useState(null)
  const [car, setCar] = useState(null)
  const [engine, setEngine] = useState(null)
  const [clutch, setClutch] = useState(null)
  const [differential, setDifferential] = useState(null)
  const [handBrake, setHandBrake] = useState(null)
  const [rollcage, setRollcage] = useState(null)
  const [suspension, setSuspension] = useState(null)

  const getData = async () => {

    try{
      const userCall = await fetch("http://localhost:3000/users/")
      const userData = await userCall.json()
      setUser(userData)

      const carCall = await fetch("http://localhost:3000/cars/")
      const carData = await carCall.json()
      setCar(carData)
      
      const engineCall = await fetch("http://localhost:3000/engines/")
      const engineData = await engineCall.json()
      setEngine(engineData)
      
      const clutchCall = await fetch("http://localhost:3000/clutches/")
      const clutchData = await clutchCall.json()
      setClutch(clutchData)
      
      const differentialCall = await fetch("http://localhost:3000/differentials/")
      const differentialData = await differentialCall.json()
      setDifferential(differentialData)
      
      const handBrakeCall = await fetch("http://localhost:3000/hand_brakes/")
      const handBrakeData = await handBrakeCall.json()
      setHandBrake(handBrakeData)
      
      const rollcageCall = await fetch("http://localhost:3000/rollcages/")
      const rollcageData = await rollcageCall.json()
      setRollcage(rollcageData)
      
      const suspensionCall = await fetch("http://localhost:3000/suspensions/")
      const suspensionData = await suspensionCall.json()
      setSuspension(suspensionData)
      
      // console.log('This is user data', userData)
      // console.log('This is car data', carData)
      // console.log('This is engine data', engineData)
      // console.log('This is clutch data', clutchData)
      // console.log('This is differential data', differentialData)
      // console.log('This is hand brake data', handBrakeData)
      // console.log('This is rollcage data', rollcageData)
      // console.log('This is suspension data', suspensionData)
    } catch (error){
      console.log(error)
    }

  }
      useEffect(() => {
        getData()
      }, [])
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/garage">
          <Garage user={user} car={car} engine={engine} clutch={clutch} differential={differential} handBrake={handBrake} rollcage={rollcage} suspension={suspension}/>
        </Route>
        <Route>
          <CarDisplay user={user} car={car} engine={engine} clutch={clutch} differential={differential} handBrake={handBrake} rollcage={rollcage} suspension={suspension}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
