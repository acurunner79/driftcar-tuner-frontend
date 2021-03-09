import React from 'react'
import styles from './form.module.css'
import makeAnimated from "react-select/animated"

const animatedComponents = makeAnimated()

const Form = ({engine, clutch, differential, handBrake, rollcage, suspension}) => {
    // console.log('This is user in form', engine )
    // console.log('This is clutch in form', differential )

      
    return (
        <form className={styles.container}>
            <div className={styles.form_group}>
                Engine:
                <select className={styles.form_control}>
                   {engine.map(motor => <option key={motor.engine_code} value={motor.engine_code}>{motor.engine_code} {motor.horsepower} </option>)}
                </select>
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
            </div>
        </form>
    )
      
    
}

    


export default Form
