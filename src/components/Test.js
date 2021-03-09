import React from 'react'
import Select from "react-select"



    const options = [
        { value: "apple", label: "Apple" },
        { value: "orange", label: "Orange" },
        { value: "grape", label: "Grape" }
    ]

    export default function Test(user) {
    return (
        <div>
           <Select options={user.name} />
        </div>
    )
}

