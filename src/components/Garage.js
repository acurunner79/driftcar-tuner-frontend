import React from 'react'
import styled from 'styled-components'

const  Ul = styled.ul`
background: white;
width: 275px;
border-radius: 4px;
`
const Div = styled.div`
display: grid;
align-items: center;
justify-content: space-around;
`
const Button = styled.button`
display: inline-block;
margin-right: 10px;
border: 1px solid black;
background: #ef3b7d;
border-radius: 4px;
padding: 10px;
width: 100px;
`

const Garage = ({user, deleteUser, selectUser}) => {
// console.log('This is garage user', user)


const loaded = () => {
    return (
        <div>
        <Ul/>
            {user?.map((info, index) => {
                return (
                    <Div>
                    <div key={index}>
                        <h3>{info.name}</h3>
                           {info?.cars?.map((car, index) => (
                              <Ul>
                                  <li>{car.year} {car.make} {car.model}</li>
                              </Ul> 
                           ))}
                    <div className="garage-buttons">
                        <Button onClick={() => deleteUser(info)}>Delete</Button>
                        <Button onClick={() => {selectUser(info)
                        user?.history?.push("/build_a_car")}}>Modify</Button>
                    </div>
                    </div>
                    </Div>
                )
            })}
        </div>
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
