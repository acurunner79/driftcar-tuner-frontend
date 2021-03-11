import { Route, Switch } from "react-router-dom"
import React, { useState, useEffect } from 'react'
import Garage from './components/Garage'
import CarDisplay from './components/CarDisplay'
import CarBuild from './components/CarBuild'
import Form from './components/Form'
import Nav from './navbar/Nav'
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
    
    
    const userCall = await fetch("http://localhost:3000/users")
    const userData = await userCall.json()
    setUser(userData)
    
    const carCall = await fetch("http://localhost:3000/cars")
    const carData = await carCall.json()
    setCar(carData)
    
    const engineCall = await fetch("http://localhost:3000/engines")
    const engineData = await engineCall.json()
    setEngine(engineData)
    
    const clutchCall = await fetch("http://localhost:3000/clutches")
    const clutchData = await clutchCall.json()
    setClutch(clutchData)
    
    const differentialCall = await fetch("http://localhost:3000/differentials")
    const differentialData = await differentialCall.json()
    setDifferential(differentialData)
    
    const handBrakeCall = await fetch("http://localhost:3000/hand_brakes")
    const handBrakeData = await handBrakeCall.json()
    setHandBrake(handBrakeData)
    
    const rollcageCall = await fetch("http://localhost:3000/rollcages")
    const rollcageData = await rollcageCall.json()
    setRollcage(rollcageData)
    
    const suspensionCall = await fetch("http://localhost:3000/suspensions")
    const suspensionData = await suspensionCall.json()
    setSuspension(suspensionData)
    
  }
  
  const getUser = () => {
    fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((userInfo) => {
      setUser(userInfo)
      console.log(userInfo)
    })
  }
  
  const emptyUser = {
    name: " "
  }
  const [selectedUser, setSelectedUser] = useState({emptyUser})
  const handleCreate =(newCar) => {
    console.log("handleCreate", newCar)
    const vehicleArray = newCar.vehicle.split(' ')
    const year = vehicleArray.shift()
    const make = vehicleArray.shift()
    const model = vehicleArray.join(' ')
    delete newCar.make
    const revisedCar = {...newCar, year, make, model}
    const getCars = () => {
       fetch("http://localhost:3000/cars", {
         method: "post",
         headers: {"Content-Type": "application/json"},
           body: JSON.stringify(revisedCar),
       }).then(() => {
       })
     }
    getCars()
  }
  
  const handleUpdate = (user) => {
    const getUsers = () => {
      fetch("http://localhost:3000/users/user._id", {
        method: "put",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
      }).then(() => {
      })
    }
    getUsers()
  }
    
    const deleteUser = (user) => {
      const grabUser = () => {
        fetch ("http://localhost:3000/users/user._id", {
          method: "delete"
        }).then(() => {
        })
      }
      grabUser()
    }
    
    const selectUser = (user) => {
      setSelectedUser(user)
    }
    
    useEffect(() => getUser(), [])  
    useEffect(() => getData(), [])
    return (
      <div className="App">
      <Nav />
      <Switch>
        <Route path="/my_garage" render={(rp) => <Garage {...rp} selectUser={selectUser} deleteUser={deleteUser} handleSubmit={handleUpdate} user={user}/>}/>
        <Route path="/build_a_car">
          <Form selectedUser={selectedUser} handleSubmit={handleCreate}/>
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
