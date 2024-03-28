import React from "react";
import useModals from "./hooks/useModals";
import { modals } from "./components/Modals";

function App() {
  const { openModal } = useModals();

  const handleClickOpen = () => {
    openModal(modals.myModal, {
      onSubmit: () => {
        console.log("로직 처리부");
      },
    });
  };

  return (
    <div className="App">
      <button onClick={handleClickOpen}>모달 열기</button>
    </div>
  );
}

export default App;
