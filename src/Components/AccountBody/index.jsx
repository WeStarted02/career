import { useSelector } from "react-redux";
import "./index.css";

function AccountBody({about}) {
  const bgColor = useSelector((state) => state.changeBgColor);
  const color = useSelector((state) => state.changeColor);

  return (
    <div>
      <div className="container accountBody">
        <div className="col-1">
          <div
            style={
              bgColor == "black"
                ? { background: "#333" }
                : { background: "#fff" }
            }
          >
            <p style={{ color }}>Bugun sening kuning!</p>
            <button
              style={
                bgColor == "black"
                  ? { background: "#d9d9d9" }
                  : { background: "#fff" }
              }
              className="btn-elon"
            >
              E'lonlar
            </button>
          </div>
        </div>
        <div className="col-2">
          <div
            style={
              bgColor == "black"
                ? { background: "#333" }
                : { background: "#fff" }
            }
            className=""
          >
            <h2 style={{ color }}>Kechmishim</h2>
            <button
              style={
                bgColor == "black"
                  ? { background: "#d9d9d9" }
                  : { background: "#fff" }
              }
              className="btn-add"
            >
              Qo'shish
            </button>
            <p className="ochiqlama">
              Bu bo’limda kechmish ish hayotingizni tariflovchi fayl cv’lari
              yuklang{" "}
            </p>
            <div
              style={
                bgColor == "black"
                  ? { background: "#d9d9d9" }
                  : { background: "linear-gradient(to top right, #e0e0e0, #f9f9f9)" }
              }
              className="div-file"
            >
              <p>25.02.1099</p>
              <p className="ochiqlama">
                Yuklagan ajoyib CV’laringiz bilan ish e’lonlariga topshiring
              </p>
              <button>E'lonlar</button>
            </div>
            <button
              style={
                bgColor == "black"
                  ? { background: "#d9d9d9" }
                  : { background: "#fff" }
              }
              className="mt-2"
            >
              Barcha CV'lar
            </button>
          </div>

          <div
            style={
              bgColor == "black"
                ? { background: "#333" }
                : { background: "#fff" }
            }
          >
            <h2 style={{ color }}>O’zim haqimda</h2>
            <p className="ochiqlama">
              {about}
              {/*Bu bo’limda oz’zingizni anglatuvchi qisqa va tushunarli matn
              kiriting{" "}*/}
            </p>
            <div
              style={
                bgColor == "black"
                  ? { background: "#d9d9d9" }
                  : { background: "#fff" }
              }
              className="div-file "
            >
              <p>
                Yuklagan ajoyib CV’laringiz bilan ish el’lonlariga topshiring
              </p>
              <button>Qo'shish</button>
            </div>
          </div>

          <div
            style={
              bgColor == "black"
                ? { background: "#333" }
                : { background: "#fff" }
            }
          >
            <h2 style={{ color }}>Fayllarim</h2>
            <button
              style={
                bgColor == "black"
                  ? { background: "#d9d9d9" }
                  : { background: "#fff" }
              }
              className="btn-add"
            >
              Qo'shish
            </button>
            <p className="ochiqlama">
              Bu bo’limda sizni Kechmishingiz qo’llab quvatlovchi serfikatlarni
              va faylarni yuklang
            </p>
            <div>
              <ul>
                <li>
                  <div
                    style={
                      bgColor == "black"
                        ? { background: "#d9d9d9" }
                        : {background: "linear-gradient(to top right, #e0e0e0, #f9f9f9)"}
                    }
                    className="li-div"
                  >
                    <p>25.02.1099</p>
                    <p className="ochiqlama">
                      Yuklagan ajoyib CV’laringiz bilan ish el’lonlariga
                      topshiring
                    </p>
                    <button>Ko'rish</button>
                  </div>
                </li>
              </ul>
            </div>
            <button
              style={
                bgColor == "black"
                  ? { background: "#d9d9d9" }
                  : { background: "#fff" }
              }
              className="mt-1"
            >
              Barcha CV'lar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AccountBody;
