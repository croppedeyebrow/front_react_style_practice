import { useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(1);

  const handleClick = () => {
    let newTime;
    if (time >= 24) {
      newTime = 1;
    } else {
      newTime = time + 1;
    }
    setTime(newTime);
  };

  return (
    <>
      <span>현재 시각: {time}시</span>
      <button onClick={handleClick}>Update</button>
    </>
  );
};

export default Clock;
