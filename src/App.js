import React from "react";
import MyModal from "./components/MyModal";
import useModals from "./hooks/useModals";

function App() {
  const { openModal } = useModals();

  const handleClickOpen = () => {
    openModal(MyModal, { foo: "bar" });
  };

  return (
    <div className="App">
      <button onClick={handleClickOpen}>모달 열기</button>
    </div>
  );
}

export default App;
