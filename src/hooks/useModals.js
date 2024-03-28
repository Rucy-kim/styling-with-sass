import { useContext } from "react";
import { ModalDispatchContext } from "../contexts/ModalsContext";

function useModals() {
  console.log("useModals");
  const { open, close } = useContext(ModalDispatchContext);

  const openModal = (Component, props) => {
    open(Component, props);
  };

  const closeModal = (Component) => {
    close(Component);
  };

  return { openModal, closeModal };
}

export default useModals;
