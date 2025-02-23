import { useMyContext } from "../hooks/useMyContext"


export const SlotContent = () => {
    const {setValue} = useMyContext()
  return (
    <button className="bg-black text-white" onClick={()=> setValue('New value form slot content component')}>Update Context Value</button>
  )
}

export default SlotContent