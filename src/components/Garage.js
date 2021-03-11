import React from 'react'

const Garage = ({user, deleteUser, selectUser}) => {
// console.log('This is garage user', user)


const loaded = () => {
    return (
        <div>
            {user?.map((info, index) => {
                // console.log('this is mapped info', info)
                return (
                    <div key={index}>
                        <h3>{info.name}</h3>
                        <button onClick={() => deleteUser(info)}>Delete</button>
                        <button onClick={() => {selectUser(info)
                        user?.history?.push("/build_a_car")}}>Modify</button>
                    </div>
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
