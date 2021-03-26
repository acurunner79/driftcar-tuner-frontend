import { Route, Switch } from "react-router-dom"
import React, { useState, useEffect } from 'react'
import Garage from './components/Garage'
import CarDisplay from './components/CarDisplay'
import CarBuild from './components/CarBuild'
import Form from './components/Form'
import Nav from './navbar/Nav'
// import './App.css';
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body{
    text-align: center;
    background: gray;
    min-height: 100vh;
    margin: 0;
    color: black;
    font-family: 'Orbitron';
    background: linear-gradient(120deg, rgba(132, 128, 128, 1) 0%, rgba(183, 176, 176, 1) 35%, rgba(18, 218, 237, 1) 110%);
      }
  
`

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
    
    
    const userCall = await fetch("https://driftcar-tuner.herokuapp.com/users")
    const userData = await userCall.json()
    setUser(userData)
    
    const carCall = await fetch("https://driftcar-tuner.herokuapp.com/cars")
    const carData = await carCall.json()
    setCar(carData)
    
    const engineCall = await fetch("https://driftcar-tuner.herokuapp.com/engines")
    const engineData = await engineCall.json()
    setEngine(engineData)
    
    const clutchCall = await fetch("https://driftcar-tuner.herokuapp.com/clutches")
    const clutchData = await clutchCall.json()
    setClutch(clutchData)
    
    const differentialCall = await fetch("https://driftcar-tuner.herokuapp.com/differentials")
    const differentialData = await differentialCall.json()
    setDifferential(differentialData)
    
    const handBrakeCall = await fetch("https://driftcar-tuner.herokuapp.com/hand_brakes")
    const handBrakeData = await handBrakeCall.json()
    setHandBrake(handBrakeData)
    
    const rollcageCall = await fetch("https://driftcar-tuner.herokuapp.com/rollcages")
    const rollcageData = await rollcageCall.json()
    setRollcage(rollcageData)
    
    const suspensionCall = await fetch("https://driftcar-tuner.herokuapp.com/suspensions")
    const suspensionData = await suspensionCall.json()
    setSuspension(suspensionData)
    
  }
  
  const getUser = () => {
    fetch("https://driftcar-tuner.herokuapp.com/users")
    .then((response) => response.json())
    .then((userInfo) => {
      setUser(userInfo)
      console.log(userInfo)
    })
  }
  
  // const emptyUser = {
  //   name: " "
  // }
  const handleCreate =(newCar) => {
    console.log("handleCreate", newCar)
    const vehicleArray = newCar.vehicle.split(' ')
    console.log('split',newCar.vehicle.split(' '))
    const year = vehicleArray.shift()
    console.log('year', year)
    const make = vehicleArray.shift()
    console.log('make', make)
    const model = vehicleArray.join(' ')
    console.log('model', model)
    delete newCar.make
    const revisedCar = {...newCar, year, make, model}
    const getCars = () => {
      fetch("https://driftcar-tuner.herokuapp.com/cars", {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(revisedCar),
      }).then(() => {
      })
    }
    getCars()
  }
  
  const [selectedUser, setSelectedUser] = useState("")
  const selectUser = (user) => {
    setSelectedUser(user)
      console.log('Selected user', user)
    }

  const handleUpdate = (user) => {
    const getUsers = () => {
      fetch("https://driftcar-tuner.herokuapp.com/users/user._id", {
        method: "put",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
      }).then(() => {
      })
    }
    getUsers()
  }
  
  const deleteUser = (user) => {
    console.log('This is user to be deleted', user)
    const grabUser = () => {
      fetch ("https://driftcar-tuner.herokuapp.com/users/" + user.id, {
        method: "delete"
      }).then(() => {
      })
    }
    grabUser(user)
    console.log('this is grabbed user', user)
  }
  
    useEffect(() => getUser(), [])  
    useEffect(() => getData(), [])
    return (
      <div className="App">
        <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/my_garage" render={(rp) => <Garage {...rp} selectUser={selectUser} deleteUser={deleteUser} handleSubmit={handleUpdate} user={user}/>}/>
        <Route path="/build_a_car">
          {/* <Form /> */}
          <CarBuild user={user} car={car} engine={engine} clutch={clutch} differential={differential} handBrake={handBrake} rollcage={rollcage} suspension={suspension} handleSubmit={handleCreate}/>
          </Route>
        <Route exact path="/">
          <CarDisplay user={user} car={car} engine={engine} clutch={clutch} differential={differential} handBrake={handBrake} rollcage={rollcage} suspension={suspension}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
