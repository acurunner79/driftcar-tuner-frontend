import React from 'react'
import styled from 'styled-components'
import './image.css'


const Div = styled.div`
margin: 100;
display: inline;
`
const H4 = styled.h4`
text-align: center;
margin: 0px 80px 0px 80px;
`
const H1 = styled.h1`

`


const CarDisplay = ({user, engine, clutch, differential, handBrake, rollcage, suspension}) => {
    // console.log("this is car", engine)

const loaded = () => {
    return (
        <>
        <H1>Welcome to Drift Car Tuner Garage</H1>
        <H4>Drift cars are usually light- to moderate-weight rear-wheel-drive coupes and sedans, offering a large range of power levels. There have also been all-wheel drive cars that have been converted to rear-wheel drive such as the Subaru WRX, Toyota Avensis, Scion tC, Mitsubishi Lancer Evolution, Dodge Charger, and Nissan GT-R. Early on, AWD cars without conversion were allowed in some drifting competitions, and usually the rules allowed only a certain percentage of power to be sent to the front wheels, but they are banned in most (if not all) drifting competitions today.</H4>
        <br></br>
        <H4>Some of the most desired makes for building a driftcar is the Nissan</H4>
        {user?.map((item, index) => {
              return (
               <Div>
              <h2 key={index}></h2>
                   {item?.cars.map((car, index) => (
                       <>
                       <h3 key={index}>{car?.year} {car?.make} {car?.model}</h3>
                       <img alt={car.make} key={index} src={car.img}></img>
                      </>
                   ))}
                </Div>
            )
        })
    }</>
    )
}

const loading = () => {
    return (
        <div>
            <h2>Loading your Driftcar...</h2>
        </div>
    )
}

return engine ? loaded() : loading()
   
}

export default CarDisplay
