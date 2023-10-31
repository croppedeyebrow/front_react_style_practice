import { useState } from "react";
//useState는 const[state,setState]=useStaete(초기값)형태로, state와 setState를 배열 형태로 나열한다!
const UserName = () => {
  const [names, setNames] = useState(["홍길동", "김민수"]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleUpload = () => {
    setNames((prevState) => {
      return [input, ...prevState];
    });
  };
  console.log(input);

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>Upload</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </div>
  );
};

export default UserName;
