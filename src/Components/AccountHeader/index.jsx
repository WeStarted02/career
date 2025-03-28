import { useSelector } from "react-redux";
import "./index.css";

function AccountHeader({name, email}) {
  const bgColor = useSelector((state) => state.changeBgColor);
  const color = useSelector((state) => state.changeColor);

  return (
    <div style={bgColor == "black" ? {background:"linear-gradient(to top, #333, #5f5f5f)"} : {background:"linear-gradient(to top right, #e0e0e0, #fff)"}} className="account-header ">
      <div className="container account-container">
      <div className="account-user">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-person-circle profile-phote"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
          <path
            fill-rule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
          />
        </svg>
        <div className="account-username">
          <h3 style={{color}}>{name}</h3>
          <p style={{color}} className="p-mail">{email}</p>
        </div>
      </div>
      <button style={bgColor == "black" ? {background:"#f0efef"} : {background:"#fff"}} className="btn-account">Tuzatish</button>
      </div>
    </div>
  );
}
export default AccountHeader;
