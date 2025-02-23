import { FormEvent, useRef } from "react"


const Uncontrolled = () => {

  const nameInput = useRef<HTMLInputElement>(null);
  const ageInput = useRef<HTMLInputElement>(null);
  const hairColorInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (e:FormEvent<HTMLFormElement>): void => {
  e.preventDefault();


  if(nameInput.current && ageInput.current && hairColorInput.current){
    console.log(nameInput.current.value)
    console.log(ageInput.current.value)
    console.log(hairColorInput.current.value)
  }

  
  }

  return (
    <form onSubmit={handleSubmit}>
        <input ref={nameInput} type="text" className="border" placeholder="name" name="name" />
        <input ref={ageInput} type="text" className="border" placeholder="age" name="age" />
        <input ref={hairColorInput} type="text" className="border" placeholder="hair color" name="hair color"  />
        <input type="submit" name="submit" placeholder="submit" />

    </form>
  )
}

export default Uncontrolled