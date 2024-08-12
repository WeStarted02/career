import { useState } from "react";
import city from "../../assets/city.svg";
import "./index.css";
import { useSelector } from "react-redux";

function WorksFilter() {
  const [dropdownCity, setDropdownCity] = useState(false);
  const [dropdownCountry, setDropdownCountry] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const bgColor = useSelector((state) => state.changeBgColor);
  const color = useSelector((state) => state.changeColor);

  return (
    <div
      style={
        bgColor == "black" ? { background: "#333" } : { background: "#d9d9d9" }
      }
      className="worksFilter"
    >
      {/* city vs country  */}
      <div className="d-flex flex-column gap-2 align-items-center justify-content-center">
        <h3 style={{ color}}>Shahar\Davlat</h3>
        {/* City */}
        <div className="position-relative filter-work w-100">
          <div className="filter-box">
            <span style={{ color }}>Shahar</span>
            {!dropdownCity ? (
              <img
                src={city}
                width={32}
                height={32}
                alt="city icon"
                onClick={() => {
                  setDropdownCity(!dropdownCity);
                }}
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                color={color}
                className="bi bi-x-lg"
                onClick={() => {
                  setDropdownCity(!dropdownCity);
                }}
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            )}
          </div>
          {/* DROPDOWN */}
          {dropdownCity && (
            <div style={{ color }} className="dropdown position-absolute">
              <ul>
                <li>New York</li>
                <li>London</li>
                <li>Parij</li>
                <li>Tashkent</li>
              </ul>
            </div>
          )}
        </div>
        {/* Country */}
        <div className="position-relative filter-work w-100">
          <div className="filter-box">
            <span style={{ color }}>Davlat</span>
            {!dropdownCountry ? (
              <img
                src={city}
                width={32}
                height={32}
                alt="city icon"
                onClick={() => {
                  setDropdownCountry(!dropdownCountry);
                }}
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                color={color}
                className="bi bi-x-lg"
                onClick={() => {
                  setDropdownCountry(!dropdownCountry);
                }}
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            )}
          </div>
          {/* DROPDOWN */}
          {dropdownCountry && (
            <div style={{ color }} className="dropdown position-absolute">
              <ul>
                <li>New York</li>
                <li>London</li>
                <li>Parij</li>
                <li>Tashkent</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Jobs type */}
      <div className="d-flex flex-column gap-2 align-items-start justify-content-center">
        <h3 style={{ color }}>Ish turi</h3>
        <ul className="list-jobs-type">
          <li className="">
            <input type="checkbox" id="remote" className="checkbox" />
            <label style={{ color }} htmlFor="remote">
              Masofaviy
            </label>
          </li>
          <li className="">
            <input type="checkbox" id="halfoffice" className="checkbox" />
            <label style={{ color }} htmlFor="halfoffice">
              Yarim Office
            </label>
          </li>
          <li className="">
            <input type="checkbox" id="office" className="checkbox" />
            <label style={{ color }} htmlFor="office">
              Office
            </label>
          </li>
        </ul>
      </div>

      {/* Annotantions historiya */}
      <div className="d-flex flex-column gap-2 align-items-start justify-content-center">
        <h3 style={{ color }}>E'lon tarixi</h3>
        <ul className="list-jobs-type">
          <li className="">
            <input
              type="radio"
              name="radioButton"
              id="lastDay"
              className="radio"
            />
            <label style={{ color }} htmlFor="lastDay">
              Oxirgi 1 kun
            </label>
          </li>
          <li className="">
            <input
              type="radio"
              name="radioButton"
              id="lastWeek"
              className="radio"
            />
            <label style={{ color }} htmlFor="lastWeek">
              Oxirgi 1 hafta
            </label>
          </li>
          <li className="">
            <input
              type="radio"
              name="radioButton"
              id="lastMonth"
              className="radio"
            />
            <label style={{ color }} htmlFor="lastMonth">
              Oxirgi 1 oy
            </label>
          </li>
          <li className="">
            <input
              type="radio"
              name="radioButton"
              id="lastYear"
              className="radio"
            />
            <label style={{ color }} htmlFor="lastYear">
              Oxirgi 1 yil
            </label>
          </li>
        </ul>
      </div>

      {/* Work experement */}
      <div className="d-flex flex-column gap-2 align-items-start justify-content-center">
        <h3 style={{ color }}>Ish Stafkasi</h3>
        <ul className="list-jobs-type">
          <li className="">
            <input type="checkbox" id="yarimStafka" className="checkbox" />
            <label style={{ color }} htmlFor="yarimStafka">
              Yarim stafkali
            </label>
          </li>
          <li className="">
            <input type="checkbox" id="TamStafka" className="checkbox" />
            <label style={{ color }} htmlFor="TamStafka">
              Tam stafkali
            </label>
          </li>
          <li className="">
            <input type="checkbox" id="partTime" className="checkbox" />
            <label style={{ color }} htmlFor="partTime">
              Part Time
            </label>
          </li>
        </ul>
      </div>

      {/* Search loading */}
      <div className="position-relative filter-work">
        <div className="filter-box">
          <span style={{ color }}>Qidirasizmi?</span>
          {!dropdown ? (
            <div
              className="loader"
              style={
                color == "white"
                  ? {
                      background: "conic-gradient(#0000 10%, #fff) content-box",
                    }
                  : {
                      background: "conic-gradient(#0000 10%, #000) content-box",
                    }
              }
              onClick={() => {
                setDropdown(!dropdown);
              }}
            ></div>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              color={color}
              fill="currentColor"
              className="bi bi-x-lg"
              onClick={() => {
                setDropdown(!dropdown);
              }}
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          )}
        </div>
        {/* DROPDOWN */}
        {dropdown && (
          <div style={{ color }} className="dropdown position-absolute">
            <ul>
              <li>Last 1 day</li>
              <li>Last 1 week</li>
              <li>Last 1 month</li>
              <li>Last 1 year</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default WorksFilter;
