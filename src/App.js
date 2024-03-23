import React, { useCallback, useState } from "react";
import "./App.scss";
import Button from "./components/Button";
import SlideSwitch from "./components/SlideSwitch";
import Modal from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    console.log('버킅 클릭!');
      setIsOpen(true);
  };

  const closeModal = () => {
      setIsOpen(false);
  };

  return (
    <div className="App">
      <div className="buttons">
        <Button size="large" onClick={() => console.log("클릭!")}>
          Button
        </Button>
        <Button>Button</Button>
        <Button size="small">Button</Button>
      </div>
      <div className="buttons">
        <Button size="large" color="gray">
          Button
        </Button>
        <Button color="gray">Button</Button>
        <Button size="small" color="gray">
          Button
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" color="pink">
          Button
        </Button>
        <Button color="pink">Button</Button>
        <Button size="small" color="pink">
          Button
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" color="blue" outline>
          Button
        </Button>
        <Button color="gray" outline>
          Button
        </Button>
        <Button size="small" color="pink" outline>
          Button
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" fullwidth color="blue">
          Button
        </Button>
        <Button size="large" fullwidth color="gray">
          Button
        </Button>
        <Button size="large" fullwidth color="pink">
          Button
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" fullwidth color="blue" outline>
          Button
        </Button>
        <Button size="large" fullwidth color="gray" outline>
          Button
        </Button>
        <Button size="large" fullwidth color="pink" outline>
          Button
        </Button>
      </div>
      <div className="slideSwitch">
        <h1>Slide Switch Example</h1>
        <SlideSwitch />
      </div>
      <div className="Modal">
        <h1>Model Example</h1>
        <button onClick={openModal}>모달 열기</button>
        <Modal isOpen={isOpen} onClose={closeModal}>
          <h2>모달 내용</h2>
          <p>이곳에 모달 내용을 입력하세요.</p>
        </Modal>
      </div>
    </div>
  );
}

export default App;
