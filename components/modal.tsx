import React from 'react'

interface ModalProps {
    show: boolean;
    children: React.ReactNode;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, children, onClose }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-4 rounded shadow-lg max-w-sm w-full z-50">
                <button onClick={onClose} className="float-right">Close</button>
                {children}
            </div>
        </div>
    )
}

export default Modal;
