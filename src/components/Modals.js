import { useContext } from "react";
import {
  ModalDispatchContext,
  ModalStateContext,
} from "../contexts/ModalsContext";

const Modals = () => {
  const openedModals = useContext(ModalStateContext);
  const { close } = useContext(ModalDispatchContext);

  return openedModals.map((modal, index) => {
    const { Component, props } = modal;
    const onClose = () => {
      close(Component);
    };

    return <Component key={index} {...props} onClose={onClose} />;
  });
};

export default Modals;
