import { useSelector } from "react-redux";
import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import "../styles/index.css"
import AccountPage from "../pages/Account"
import WorkDetailPage from "../pages/WorkDetail";
import AddWorkPage from "../pages/AddWork";
import CompanyAccPage from "../pages/CompanyAccPage";
import SignUp from "../Components/SignUp";
import SignIn from "../Components/SignIn";

function App() {
  const bgColor = useSelector((state) => state.changeBgColor);

  if (bgColor == "black") {
    document.getElementById('body').style.background = '#797878'
  } else {
    document.getElementById('body').style.background = '#fff'
  }
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/account" element={<AccountPage />}/>
      <Route path="/elon" element={<WorkDetailPage />}/>
      <Route path="/add" element={<AddWorkPage />}/>
      <Route path="/com" element={<CompanyAccPage />}/>
      <Route path="/signin" element={<SignIn />}/>
      <Route path="/signup" element={<SignUp />}/>
    </Routes>
      
    </>
  );
}

export default App;
