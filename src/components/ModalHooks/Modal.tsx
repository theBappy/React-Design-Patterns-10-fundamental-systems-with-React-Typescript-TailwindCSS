interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;
  

  return <div 
  style={{
    background: 'rgba(0,0,0,0.5)'
  }}
  className="fixed left-0  right-0 top-0 bottom-0 flex justify-center items-center">

    <div className="bg-white p-[2-px]">
        <h2>Modal Title</h2>
        <p>This is a modal content</p>
        <button onClick={onClose}>Close</button>
    </div>
  </div>;
};

export default Modal;
