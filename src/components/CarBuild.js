import React from 'react'
import styles from './CarBuild.module.css'


const CarBuild = ({props, handleSubmit, car, engine, clutch, differential, handBrake, rollcage, suspension}) => {
    const [createCar, setCreateCar] = React.useState({'vehicle': '1992 Nissan 240SX', 'engine_id': 1, 'clutch_id':1, 'differential_id':1, 'hand_brake_id':4, 'rollcage_id':1, 'suspension_id':1, 'user_id': 2})

    // const [formData, setFormData] = React.useState({'user_id': 1})
    // const userSubmit = (event) => {
    //     event.preventDefault()
    //     props.userSubmit(formData)
    //     props.history.push("/")
    // }
    
    // const userChange = (event) => {
    //     setFormData({...formData, [event.target.name]: event.target.value})
    //     console.log('This is name input', formData)
    // }
    const handleChange = (event) => {
        console.log('event target name', event.target)
        if (event.target.name === 'vehicle') {
            setCreateCar({
                ...createCar,
                [event.target.name]: event.target.value})
            } else {
                setCreateCar({
                    ...createCar,
                    [event.target.name]: parseInt(event.target.value)
                })
            }
        }
        
        const submit = (event) => {
            event.preventDefault()
            handleSubmit(createCar)
        }
        return (
            <form className={styles.container} onSubmit={submit}>
            <div className={styles.form_group}>
                <div>
                    <h3>Step One: Name your buld</h3>
                {/* <input type="text" name="user_id" value={formData?.index} placeholder="Name" onChange={handleChange}/>    */}
                </div>
            <div>
              <h3>Step Two: Select you year, make, and model</h3>
            </div>
                Drift Car:
                <select className={styles.form_control} name="vehicle" onChange={handleChange}>
                   {car?.map((vehicle, index) => <option key={index} value={vehicle.car_id}>{vehicle.year} {vehicle.make} {vehicle.model} </option>)}
                </select>
            </div>
            <div></div>
            <br></br>
            <h3>Step Three:Configure your Drift Car</h3>
            <div className={styles.form_group}>
                Engine:
                <select className={styles.form_control} name="engine_id" onChange={handleChange}>
                   {engine?.map((motor, index) => <option key={index} value={index + 1}>{motor.engine_code} {motor.horsepower} </option>)}
                </select>
            </div>
            <div className={styles.form_group}>
                Clutch:
                <select className={styles.form_control} name="clutch_id" onChange={handleChange}>
                  {clutch?.map((trans, index) => <option key={index} value={index + 1} >{trans.stage} {trans.brand}</option>)}
                </select>
            </div>
            <div className={styles.form_group}>
                Differential:
                <select className={styles.form_control} name="differential_id" onChange={handleChange}>
                  {differential?.map((rearend, index) => <option key={index} value={index + 1} >{rearend.name} {rearend.brand}</option>)}
                </select>
            </div> 
            <div className={styles.form_group}>
                Hand Brake:
                <select className={styles.form_control} name="hand_brake_id" onChange={handleChange}>
                  {handBrake?.map((brake, index) => <option key={index} value={index + 1} >{brake.name} {brake.brand}</option>)}
                </select>
            </div> 
            <div className={styles.form_group}>
                Rollcage:
                <select className={styles.form_control} name="rollcage_id" onChange={handleChange}>
                  {rollcage?.map((cage, index) => <option key={index} value={index + 1} >{cage.name} {cage.brand}</option>)}
                </select>
            </div>
            <div className={styles.form_group}>
                Suspension:
                <select className={styles.form_control} name="suspension_id" onChange={handleChange}>
                  {suspension?.map((spring, index) => <option key={index} value={index + 1} >{spring.name} {spring.brand}</option>)}
                </select>
            </div> 
            <button className={styles.button} >Create</button>         
        </form>
    )
}

export default CarBuild
