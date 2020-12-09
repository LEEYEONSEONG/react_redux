import React, { useState, useRef } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    LLLL: "",
    nickname: "",
  });

  const nameInput = useRef();
  const { LLLL, nickname } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      LLLL: "",
      nickname: "",
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name="LLLL"
        placeholder="이름"
        onChange={onChange}
        value={LLLL}
        ref={nameInput}
        autoComplete="off"
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
        autoComplete="off"
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {LLLL}({nickname})
      </div>
    </div>
  );
}

export default InputSample;
