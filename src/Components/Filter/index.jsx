import "./index.css";
import city from "../../assets/city.svg";
import { useState } from "react";
import { useSelector } from "react-redux";

function Filter() {
  const [modalSearch, setModalSearch] = useState(false);
  const [dropdownCity, setDropdownCity] = useState(false);
  const [dropdownJobs, setDropdownJobs] = useState(false);
  const [dropdownHistoria, setDropdownHistoria] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const bgColor = useSelector((state) => state.changeBgColor);
  const color = useSelector((state) => state.changeColor);

  return (
    <div
      className="filter-bg position-relative d-flex justify-content-center"
      style={
        bgColor == "black"
          ? { background: "#333" }
          : { background: "#fff" }
      }
    >
      <div className="container d-flex gap-4 justify-content-center">
        {/* Search */}
        <div className="filter-box search">
          <span>Search</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
            onClick={() => {
              setModalSearch(true);
            }}
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </div>
        {/* City */}
        <div className="position-relative">
          <div className="filter-box">
            <span>Shahar</span>
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
            <div className="dropdown position-absolute">
              <ul>
                <li>New York</li>
                <li>London</li>
                <li>Parij</li>
                <li>Tashkent</li>
              </ul>
            </div>
          )}
        </div>
        {/* Work Type */}
        <div className="position-relative">
          <div className="filter-box">
            <span>Ish turi</span>
            {!dropdownJobs ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                color={color}
                fill="currentColor"
                className="bi bi-chevron-down"
                onClick={() => {
                  setDropdownJobs(!dropdownJobs);
                }}
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                color={color}
                fill="currentColor"
                className="bi bi-chevron-up"
                onClick={() => {
                  setDropdownJobs(!dropdownJobs);
                }}
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                />
              </svg>
            )}
          </div>
          {/* DROPDOWN */}
          {dropdownJobs && (
            <div className="dropdown position-absolute">
              <ul>
                <li>Remote</li>
                <li>Half office</li>
                <li>Office</li>
              </ul>
            </div>
          )}
        </div>
        {/* Annotations Historiya */}
        <div className="position-relative">
          <div className="filter-box">
            <span>E'lon tarixi</span>
            {!dropdownHistoria ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                color={color}
                fill="currentColor"
                className="bi bi-chevron-down"
                onClick={() => {
                  setDropdownHistoria(!dropdownHistoria);
                }}
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                color={color}
                className="bi bi-chevron-up"
                onClick={() => {
                  setDropdownHistoria(!dropdownHistoria);
                }}
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                />
              </svg>
            )}
          </div>
          {/* DROPDOWN */}
          {dropdownHistoria && (
            <div className="dropdown position-absolute">
              <ul>
                <li>Last 1 day</li>
                <li>Last 1 week</li>
                <li>Last 1 month</li>
                <li>Last 1 year</li>
              </ul>
            </div>
          )}
        </div>
        {/* Search loading */}
        <div className="position-relative">
          <div className="filter-box">
            <span>Qidirasizmi?</span>
            {!dropdown ? (
              <div
                className="loader"
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
            <div className="dropdown position-absolute">
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

      {modalSearch && (
        // MODAL SEARCH
        <div
          className="position-absolute sticky-top modal-search w-50"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Search
                </h5>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x-lg"
                  onClick={() => {
                    setModalSearch(false);
                  }}
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group mb-2">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Key words:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setModalSearch(false);
                  }}
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Filter;
