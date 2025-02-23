import { ReactNode } from "react"
import ModalTitle from "./ModalTitle"
import ModalBody from "./ModalBody"
import ModalFooter from "./ModalFooter"




const Modal = ({children}:{children:ReactNode}) => {
  return (
    <div className="fixed inset-0 flex justify-center z-50 bg-black bg-opacity-50 items-center">
        <div className="bg-white p-6 rounded-lg w-[20rem]">{children}</div>
    </div>
  )
}
Modal.Title = ModalTitle
Modal.Body= ModalBody
Modal.Footer = ModalFooter

export default Modal