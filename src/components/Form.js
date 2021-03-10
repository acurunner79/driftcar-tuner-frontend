import React from 'react'
import styles from './CarBuild.module.css'




const Form = (props) => {
    // console.log('This is user in form', engine )
    // console.log('This is clutch in form', differential )
    const [formData, setFormData] = React.useState(props.user)

    const handleSubmit = (event) => {
      event.preventDefault();
      props.handleSubmit(formData)
      props.history.push("/")
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
              value={formData?.name}
              onChange={handleChange}
              />

            </form>
          </div>
            
    )
}

    


export default Form
