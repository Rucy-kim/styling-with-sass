import { useMemo, useState } from "react";
import { ModalDispatchContext, ModalStateContext } from "./ModalsContext";
import Modals from "../components/Modals";

const ModalsProvider = ({ children }) => {
  const [openedModals, setOpenedModals] = useState([]);

  const open = (Component, props) => {
    setOpenedModals((modals) => {
      return [...modals, { Component, props }];
    });
  };

  const close = (Component) => {
    setOpenedModals((modals) => {
      return modals.filter((modal) => {
        return modal.Component !== Component;
      });
    });
  };

  const dispatch = useMemo(
    () => ({
      open,
      close,
    }),
    []
  );
  return (
    <ModalStateContext.Provider value={openedModals}>
      <ModalDispatchContext.Provider value={dispatch}>
        {children}
        <Modals />
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
};

export default ModalsProvider;
