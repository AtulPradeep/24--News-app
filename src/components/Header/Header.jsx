import React, { useState } from "react";
import "./Header.css";
// import "bootstrap/dist/css/bootstrap.min.css";
function Header({ handle, handlecategory }) {
  const [search, setSearch] = useState("");
  const [input, setInput] = useState("");

  // Categories to fetch news
  const data = [
    "Home",
    "Top Live Headlines",
    "technology",
    "science",
    "buisness",
    "entertainment",
    "health",
    "sports",
  ];
  //Handling choosing news
  const handlesubmit = (e) => {
    e.preventDefault();
    setSearch(input);
  };

  //Handling search
  const change = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    handlecategory();
    handle(input);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
        <div className="container-fluid">
          <button className="navbar-brand" onClick={() => handle("general")}>
            AT News 24/7
          </button>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarDark"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse show" id="navbarDark">
            <ul className="navbar-nav me-auto mb-2 mb-xl-0">
              {data.map((item, index) => {
                let type = "";
                if (item === "Home" || index === 1) {
                  type = "general";
                } else {
                  type = item;
                }
                return (
                  <li key={index} className="nav-item">
                    <button
                      className="nav-link"
                      onClick={() => {
                        handle(type);
                      }}
                    >
                      {item}
                    </button>
                  </li>
                );
              })}
            </ul>

            <form onSubmit={handlesubmit} className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search eg-sports"
                aria-label="Search "
                value={input}
                onChange={change}
              ></input>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
