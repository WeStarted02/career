import "./index.css";
import { useSelector } from "react-redux";

function WorksListCard({title, stafka, company, image, actionType}) {
  const bgColor = useSelector((state) => state.changeBgColor);
  const color = useSelector((state) => state.changeColor);

  return (
    <div
      className="worsListCard"
      style={
        bgColor == "black" ? { background: "#333" } : { background: "#d9d9d9" }
      }
    >
      <section className="card-image">
        <img src={image} alt="career icon" />
        <span style={color == 'white' ? {color:'#ccc'}: {color:'#333'}}>{stafka}</span>
      </section>
      <section className="card-about">
        <h2 className={color == 'white' && "h2"}>{title}</h2>
        <p style={color !== 'white' ? {color:''} : {color:"#ccc"}}>{company}</p>
        <span style={color == 'white' ? {color:'#ccc'}: {color:'#333'}}>{actionType}</span>
      </section>
    </div>
  );
}

export default WorksListCard;
