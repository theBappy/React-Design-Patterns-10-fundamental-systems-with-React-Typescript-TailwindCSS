import { ReactNode } from "react"
import CardButton from "./CardButton"
import CardContent from "./CardContent"
import CardTitle from "./CardTitle"


const CompoundCardSlot = ({children}:{children:ReactNode}) => {
  return (
    <>
        {children}
    </>
  )
}

CompoundCardSlot.Title = CardTitle
CompoundCardSlot.Content = CardContent
CompoundCardSlot.Button = CardButton

export default CompoundCardSlot