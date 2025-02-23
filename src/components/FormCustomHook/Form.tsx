import useForm from "./useForm"


const Form = () => {
 const {values, handleChange, submitted, handleSubmit} = useForm({
    name: '',
    email: '',
  })

  const onSubmit = () => {
    console.log('Submitted', values);
  }

  return (
    <div>
        {submitted ? (
           <h2>Thank you for submitting your information!</h2> 
        ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Name: 
                        <input type="text" 
                        name="name"
                        value={values.name} 
                        onChange={handleChange} 
                        required 
                        className="border" 
                        />
                    </label>
                </div>

                <div>
                    <label>Email: 
                        <input 
                        type="email" 
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        required
                        className="border"
                        />

                    </label>
                </div>

                <button type="submit">submit</button>
            </form>
        )}
    </div>
  )
}

export default Form