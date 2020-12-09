import React from "react";

function Hello(props) {
  console.log(props);
  const { color, name, isSpecial } = props;
  return (
    <div
      style={{
        color: color,
      }}
    >
      <b>{isSpecial ? "스페셜 하다 !" : "낫스페셜하다"}</b>
      안녕하세요{name}
    </div>
  );
}

Hello.defaultProps = {
  name: "이름없음",
};






export default Hello;
