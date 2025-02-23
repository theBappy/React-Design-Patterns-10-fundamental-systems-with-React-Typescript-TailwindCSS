// import { useState } from "react"
import Modal from "./components/ModalHooks/Modal"
import useModal from "./components/ModalHooks/useModal"


const App = () => {

 const {isOpen, openModal, closeModal}  = useModal()

//   const [isModalOpen, setIsModalOpen] = useState(false)

//   const openModal = () => setIsModalOpen(true)
//   const closeModal = () => setIsModalOpen(false)

   
  return (
    <div>
        <h1>My amazing modal</h1>
        <button onClick={openModal}>Open Modal</button>
        <Modal isOpen={isOpen} onClose={closeModal} />
    </div>
  )
}

export default App