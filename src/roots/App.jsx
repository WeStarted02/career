import { useSelector } from "react-redux";
import Home from "../pages/Home";
import "../styles/index.css"

function App() {
  const bgColor = useSelector((state) => state.changeBgColor);

  if (bgColor == "black") {
    document.getElementById('body').style.background = '#797878'
  } else {
    document.getElementById('body').style.background = '#e7e7e7'
  }
  return (
    <>
      <Home />
    </>
  );
}

export default App;
