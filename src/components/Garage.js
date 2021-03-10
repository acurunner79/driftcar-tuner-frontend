import React from 'react'

const Garage = ({user}) => {
console.log('This is garage user', user)


const loaded = () => {
    return (
        <div>
            {user?.map((info) => {
                console.log('this is info', info)
                return (
                    <div key={info?.user_id}>
                        <h3>{info?.name}</h3>
                        <button onClick={() => {user.deleteUser()}}>Delete</button>
                        <button onClick={() => {user.selectUser()
                        user?.history.push("/build")}}>Modify</button>
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
