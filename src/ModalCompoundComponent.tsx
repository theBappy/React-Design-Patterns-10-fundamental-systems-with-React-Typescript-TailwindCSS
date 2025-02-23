import { useState } from "react"
import Modal from "./components/CompoundComponents/Modal"




const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }


  return (
    <div>
        <button className="px-2 py-4 bg-green-400  text-white rounded-md" 
        onClick={openModal}
        >Open Modal</button>


        {isModalOpen && (
            <Modal>
                <Modal.Title>Modal Title</Modal.Title>
                <Modal.Body>This is the modal body</Modal.Body>
                <Modal.Footer>
                    <button onClick={closeModal} className="px-4 py-2 text-white bg-gray-500 rounded-md text-sm">Cancel</button>
                    <button onClick={closeModal} className="px-4 py-2 text-white bg-teal-500 ml-[0.3rem] rounded-md text-sm">Confirm</button>
                </Modal.Footer>
            </Modal>
        )}
    </div>
  )
}

export default App