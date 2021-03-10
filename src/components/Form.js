import React from 'react'
import styles from './CarBuild.module.css'




const Form = ({user}) => {
    // console.log('This is user in form', engine )
    // console.log('This is clutch in form', differential )
    const [formData, setFormData] = React.useState({user})

    const handleSubmit = (event) => {
      event.preventDefault();
      user.handleSubmit(formData)
      user.history.push("/")
    }

    const handleChange = (event) => {
      setFormData({...formData, [event.target.name]: event.target.value})
      console.log(formData)
    }

      
    return (
          <div className={styles.form_group}>
            <h3>Step One: Name your build</h3>
          <form onSubmit={handleSubmit}>
            <input 
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              />
            <div>
              <br></br>
              <h3>Step Two: Select you year, make, and model</h3>
            </div>
            <input type="submit" value={user.label}/>
            </form>
          </div>
            
    )
}

    


export default Form
