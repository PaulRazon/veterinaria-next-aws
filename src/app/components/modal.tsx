import ModalLibrary  from "react-modal";
import { useTienda } from "../hooks/useTienda";
import ConformationModal from "./confirmationModal";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

ModalLibrary.setAppElement('body');

function Modal() {
    const {modal} = useTienda()
    return (
        <>
            {modal && 
                <ModalLibrary
                isOpen={modal}
                style={customStyles}
                >
                    <ConformationModal/>
                </ModalLibrary>
            }
        </>
    
  )
}

export default Modal