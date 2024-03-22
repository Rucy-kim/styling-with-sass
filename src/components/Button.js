import React from "react";
import "./Button.scss";
import classNames from "classnames";

// ...rest는 다음 링크 참고
// https://learnjs.vlpt.us/useful/07-spread-and-rest.html es6의 spread와rest문법
function Button({ children, size, color, outline, fullwidth, ...rest }) {
  return (
    // classNames의 파라메터를 객체에 포함시켜서 전달할 경우 값이 true일때만 클래스가 적용됨 ex) { outline, fullwidth }
    <button
      className={classNames("Button", size, color, { outline, fullwidth })}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: "medium",
  color: "blue",
};

export default Button;
