import React from 'react'



const CarDisplay = ({user, engine, clutch, differential, handBrake, rollcage, suspension}) => {
    // console.log("this is car", engine)

const loaded = () => {
    return (
        <>
        <h1>Welcome to Drift Car Tuner Garage</h1>
        {user?.map((item, index) => {
              return (
               <div>
              <h2 key={index}>Name: {item?.name}</h2>
                   {item?.cars.map((car, index) => (
                       <>
                       <img key={index} src={car.img}></img>
                       <h3 key={index}>{car?.year} {car?.make} {car?.model}</h3>
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
