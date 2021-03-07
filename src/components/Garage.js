import React from 'react'

const Garage = ({user}) => {
console.log('This is user', user)

const loaded = () => {
    return (
        <>
          {user.map((item) => {
            //   console.log('This is item', item.cars[1])
              return (

            <div>
               <h1>Welcome to your garage!</h1>
               <div>
              <h2>Name: {item.name}</h2>
                   {item.cars.map(car => (
                       <h3 key={car}>{car.year} {car.make} {car.model}</h3>
                   ))}
              </div>
            </div>
              )
            }) 
        }</>  
    )
}

const loading = () => {
    return (
        <div>
            <h2>Loading...</h2>
        </div>
    )
}

return user ? loaded() : loading()


}
export default Garage
