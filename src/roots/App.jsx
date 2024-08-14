import { useSelector } from "react-redux";
import Home from "../pages/Home";
import "../styles/index.css"
import AccountPage from "../pages/Account"

function App() {
  const bgColor = useSelector((state) => state.changeBgColor);

  if (bgColor == "black") {
    document.getElementById('body').style.background = '#797878'
  } else {
    document.getElementById('body').style.background = '#e7e7e7'
  }
  return (
    <>
      <AccountPage />
    </>
  );
}

export default App;
