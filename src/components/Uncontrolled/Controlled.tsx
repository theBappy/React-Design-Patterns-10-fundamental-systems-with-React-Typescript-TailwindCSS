import { useEffect, useState } from "react"


const Controlled = () => {
  const [name, setName] = useState('')
  const [ age, setAge] = useState('')
  const [hairColor, setHairColor] = useState('')
  const [nameInputError, setNameInputError] = useState('')

  useEffect(()=>{
    // if(name.length < 2){
    //    setNameInputError('name must be atleast 2 characters or  long') 
    // }else{
    //     setNameInputError("")
    // }

    name.length < 2 ? 
    setNameInputError('name must be atleast 2 characters or  long') 
    : setNameInputError("")
  }, [name])

  return (
    <form>
        {nameInputError && <p className="text-red-500">{nameInputError}</p>}
        <input  className="border m-2" onChange={e => setName(e.target.value)} type="text" name="name" placeholder="name" value={name} />
        

        <input type="number" name="age" placeholder="age" value={age} onChange={e=> setAge(Number(e.target.value))} className="border m-2"/>

        <input type="text" name="haircolor" placeholder="hair color" value={hairColor} onChange={e => setHairColor(e.target.value)} className="border m-2" />

         <button>submit</button>
    </form>
  )
}

export default Controlled