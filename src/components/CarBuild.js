import React from 'react'
import styles from './CarBuild.module.css'

const CarBuild = ({car, engine, clutch, differential, handBrake, rollcage, suspension}) => {
    return (
        <form className={styles.container}>
            <div className={styles.form_group}>
                Drift Car:
                <select className={styles.form_control}>
                   {car?.map(vehicle => <option key={vehicle} value={vehicle.year}>{vehicle.year} {vehicle.make} {vehicle.model} </option>)}
                </select>
            </div>
            <br></br>
            <h3>Step Three:Configure your Drift Car</h3>
            <div className={styles.form_group}>
                Engine:
                <select className={styles.form_control}>
                   {engine?.map(motor => <option key={motor.engine_code} value={motor.engine_code}>{motor.engine_code} {motor.horsepower} </option>)}
                </select>
            </div>
            <div className={styles.form_group}>
                Clutch:
                <select className={styles.form_control}>
                  {clutch?.map(trans => <option key={trans.stage} value={trans.stage} >{trans.stage} {trans.brand}</option>)}
                </select>
            </div>
            <div className={styles.form_group}>
                Differential:
                <select className={styles.form_control}>
                  {differential?.map(rearend => <option key={rearend.name} value={rearend.brand} >{rearend.name} {rearend.brand}</option>)}
                </select>
            </div> 
            <div className={styles.form_group}>
                Hand Brake:
                <select className={styles.form_control}>
                  {handBrake?.map(brake => <option key={brake.name} value={brake.brand} >{brake.name} {brake.brand}</option>)}
                </select>
            </div> 
            <div className={styles.form_group}>
                Rollcage:
                <select className={styles.form_control}>
                  {rollcage?.map(cage => <option key={cage.name} value={cage.brand} >{cage.name} {cage.brand}</option>)}
                </select>
            </div>
            <div className={styles.form_group}>
                Suspension:
                <select className={styles.form_control}>
                  {suspension?.map(spring => <option key={spring.name} value={spring.brand} >{spring.name} {spring.brand}</option>)}
                </select>
            </div> 
            <button className={styles.button}>Create</button>         
        </form>
    )
}

export default CarBuild
