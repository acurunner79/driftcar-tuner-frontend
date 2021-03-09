import React from 'react'
import Form from './Form'


const CarDisplay = ({user,engine, clutch, differential, handBrake, rollcage, suspension}) => {
    // console.log("this is car", engine)

const loaded = () => {
    return (
        <>
           {user.map((owner) => {

    return (
        <div>
            <h1>This is CarDisplay</h1>
            <h2>{owner?.name}</h2>
               <Form engine={engine} clutch={clutch} differential={differential} handBrake={handBrake} rollcage={rollcage} suspension={suspension}/>
        </div>
    )
           })}
        </>
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
