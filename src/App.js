import logo from './logo.svg';
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
    
    
    const userCall = await fetch("https://driftcar-tuner.herokuapp.com//users")
    const userData = await userCall.json()
    setUser(userData)
    
    const carCall = await fetch("https://driftcar-tuner.herokuapp.com//cars")
    const carData = await carCall.json()
    setCar(carData)
    
    const engineCall = await fetch("https://driftcar-tuner.herokuapp.com//engines")
    const engineData = await engineCall.json()
    setEngine(engineData)
    
    const clutchCall = await fetch("https://driftcar-tuner.herokuapp.com//clutches")
    const clutchData = await clutchCall.json()
    setClutch(clutchData)
    
    const differentialCall = await fetch("https://driftcar-tuner.herokuapp.com//differentials")
    const differentialData = await differentialCall.json()
    setDifferential(differentialData)
    
    const handBrakeCall = await fetch("https://driftcar-tuner.herokuapp.com//hand_brakes")
    const handBrakeData = await handBrakeCall.json()
    setHandBrake(handBrakeData)
    
    const rollcageCall = await fetch("https://driftcar-tuner.herokuapp.com//rollcages")
    const rollcageData = await rollcageCall.json()
    setRollcage(rollcageData)
    
    const suspensionCall = await fetch("https://driftcar-tuner.herokuapp.com//suspensions")
    const suspensionData = await suspensionCall.json()
    setSuspension(suspensionData)
    
  }
  
  const getUser = () => {
    fetch(getData + "/users")
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
    const getCars = () => {
      fetch(getData + "/cars", {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newCar),
      }).then(() => {
        getCars()
      })
    }
  }
  
  const handleUpdate = (user) => {
    const getUsers = () => {
      fetch(getData + "/users/update-user/" + "user._id", {
        method: "put",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)}).then(() => {getUsers()})
      }
    }
    
    const deleteUser = (user) => {
      const grabUser = () => {
        fetch (getData + "/users/" + user._id, {method: "delete"}).then(() => {grabUser()})
      }
    }
    
    const selectUser = (user) => {
      setSelectedUser(user)
    }
    
    useEffect(() => getUser(), [])  
    useEffect(() => {getData()}, [])
    return (
      <div className="App">
      <Nav />
      <Switch>
        <Route path="/my_garage" render={(rp) => <Garage {...rp} selectUser={selectUser} deleteUser={deleteUser} handleSubmit={handleUpdate} user={user}/>}/>
        <Route exact path="/build_a_car" render={(rp) => ( <Form {...rp} label="Create" emptyUser={emptyUser} selectedUser={selectedUser}handleSubmit={handleCreate}/>)}/>
          <CarBuild user={user} car={car} engine={engine} clutch={clutch} differential={differential} handBrake={handBrake} rollcage={rollcage} suspension={suspension}/>
        <Route path="/">
          <CarDisplay user={user} car={car} engine={engine} clutch={clutch} differential={differential} handBrake={handBrake} rollcage={rollcage} suspension={suspension}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
