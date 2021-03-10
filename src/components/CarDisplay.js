import React from 'react'
import Form from './Form'


const CarDisplay = ({user, engine, clutch, differential, handBrake, rollcage, suspension}) => {
    // console.log("this is car", engine)

const loaded = () => {
    return (
        <>
        <h1>Welcome to Drift Car Tuner Garage</h1>
        {user?.map((item) => {
              return (
               <div>
              <h2>Name: {item?.name}</h2>
                   {item?.cars.map(car => (
                       <>
                       <img key={car} src={car.img}></img>
                       <h3 key={car}>{car?.year} {car?.make} {car?.model}</h3>
                      </>
                   ))}
                </div>
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
