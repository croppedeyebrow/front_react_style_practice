import "./App.css";
import Clock from "./usestate/시각업데이트";
import UserName from "./usestate/회원정보";
// import StyledComponent from "./StyledComponent";

function App() {
  return (
    <>
      {/* <StyledComponent /> */}
      <Clock />
      <br></br>
      <br></br>
      <UserName />
    </>
  );
}

export default App;
