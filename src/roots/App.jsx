import { useSelector } from "react-redux";
import { Routes, Route } from "react-router";
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
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/account" element={<AccountPage />}/>
    </Routes>
      
    </>
  );
}

export default App;
