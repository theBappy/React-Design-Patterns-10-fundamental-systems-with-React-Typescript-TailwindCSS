import { useState } from "react"


const ControlledForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subscribe: false,
    message: '',
  });

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(formData)
  }

  const handleChange = (e:any) => {
    const {name, value, type, checked}  = e.target;
    setFormData(prevData => ({
       ...prevData, 
       [name]: type === 'checkbox' ? checked : value,
       
    }))
  }


  return (
    <form onSubmit={handleSubmit}>
        <input type="text" 
        name="firstName" 
        value={formData.firstName} 
        onChange={handleChange} 
        placeholder="first name" 
        />

        <input type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="last name"
        />

        <input type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="your email"
        />

        <label>
            <input type="checkbox"
            name="subscribe"
            checked={formData.subscribe}
            onChange={handleChange}
            />

            Subscribe to newsletter
        </label>

        <textarea 
        name="message" 
        value={formData.message} 
        onChange={handleChange}
        placeholder="message"
        ></textarea>

        <button type="submit">submit</button>

    </form>
  )
}

export default ControlledForm