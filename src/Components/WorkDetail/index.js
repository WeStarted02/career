import "./index.css";
import img from "../../assets/career.jpg"
function WorkDeatil() {
    return (
        <div className="workDetail">
            <div >
                <img  src={img} />
                <div >
                    <h2>Marchal company</h2>
                    <p>-Frontend developer</p>
                </div>
            </div>
            <p className="jobName">-Frontend developer</p>
            <p>-Ofline</p>
            <p>-Yarim stavfka</p>
            <p>-Location ankara</p>
            <p>-1000$</p>
            <p className="aboutJob">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </div>
    );
}

export default WorkDeatil;