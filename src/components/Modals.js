import { useContext } from "react";
import {
  ModalDispatchContext,
  ModalStateContext,
} from "../contexts/ModalsContext";
import loadable from "@loadable/component";

const Modals = () => {
  const openedModals = useContext(ModalStateContext);
  const { close } = useContext(ModalDispatchContext);

  return openedModals.map((modal, index) => {
    const { Component, props } = modal;
    const { onSubmit, ...restProps } = props;
    const onClose = () => {
      close(Component);
    };

    const handleSubmit = async () => {
      if (typeof onSubmit === "function") {
        await onSubmit();
      }
    };

    return (
      <Component
        key={index}
        {...restProps}
        onClose={onClose}
        onSubmit={handleSubmit}
      />
    );
  });
};

// 앱에서 사용할 modal을 여기에 매핑,
// dynamic import로 초기 로딩속도가 느려지는 현상 방지
export const modals = {
  myModal: loadable(() => import("./MyModal")),
};

export default Modals;
