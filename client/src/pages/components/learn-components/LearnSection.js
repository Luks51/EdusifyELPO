import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function LearnSection() {
  const [listOfProjects, setListOfProjects] = useState([]);
  const { auth, setAuth } = useContext(AuthContext);
  const [loaded, setLoaded] = useState(0);
  const [loadBtn, setLoadBtn] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  const search = () => {
    if (!(searchValue == "")) {
      navigate(`/search/${searchValue}`);
      window.scrollTo(0, 0);
    }
  };

  const loadMore = () => {
    axios
      .post(
        "http://localhost:3001/projects/",
        { loaded: loaded },
        { withCredentials: true }
      )
      .then((res) => {
        setListOfProjects([].concat(listOfProjects, res.data.rows));
        setLoaded(loaded + 24);
        if (res.data.rows.length < 3) {
          setLoadBtn(false);
        }
      });
  };

  useEffect(() => {
    axios
      .post(
        "http://localhost:3001/projects/",
        { loaded: loaded },
        { withCredentials: true, data: { loaded: loaded } }
      )
      .then((res) => {
        setListOfProjects(res.data.rows);
        setLoaded(loaded + 24);
        if (res.data.rows.length < 3) {
          setLoadBtn(false);
        }
      });
  }, []);

  return (
    <>
      <section className="filter-section">
        <div className="container">
          <div className="filter-block">
            <h5 className="filter-block-main-text">
              Odaberite materijal za učenje i počnite odmah
            </h5>
            <div className="search-content">
              <input
                type="text"
                id="search"
                name="search"
                placeholder="Pretraži..."
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    search();
                  }
                }}
              />
              <div className="search-icon-wrapper">
                <img
                  className="search-icon-img"
                  src="../img/search-icon.png"
                  onClick={search}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="learning-material-list">
        <div className="container">
          {auth.status && (
            <div className="create-new-project-wrapper">
              <a
                className="create-new-project-btn"
                onClick={() => {
                  navigate("/newproject");
                  window.scrollTo(0, 0);
                }}
              >
                <div className="create-new-project-wrapper-content">
                  <img className="plus-icon-img" src={"img/plus-icon.png"} />
                  <p className="create-new-project-text">Kreiraj materijal</p>
                </div>
              </a>
            </div>
          )}
          <h3 className="learning-material-main-text">Materijali za učenje</h3>
          <div className="learning-material-grid">
            {listOfProjects.map((value, key) => {
              if (value.visible == "1") {
                return (
                  <div
                    key={key}
                    className="learning-material-single-item-wrapper"
                  >
                    <div className="learning-material-single-item">
                      <div
                        className="single-item-img-wrapper"
                        onClick={() => {
                          auth.status
                            ? navigate(`/project/${value.id}`)
                            : navigate("/login");
                        }}
                      >
                        <img
                          className="single-item-img"
                          src={`img/single-item-img${value.photo}.svg`}
                        />
                      </div>
                      <div className="learning-material-single-item-content">
                        <a
                          onClick={() => {
                            auth.status
                              ? navigate(`/project/${value.id}`)
                              : navigate("/login");
                          }}
                        >
                          <h5 className="learning-material-single-item-heading">
                            {value.title}
                          </h5>
                        </a>
                        <a
                          onClick={() => {
                            auth.status
                              ? navigate(`/project/${value.id}`)
                              : navigate("/login");
                          }}
                        >
                          <span className="learning-material-single-item-description">
                            {value.description}
                          </span>
                        </a>
                        <a
                          onClick={() => {
                            auth.status
                              ? navigate(`/profile/${value.User.username}`)
                              : navigate("/login");
                          }}
                        >
                          <p>{value.User.username}</p>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          {loadBtn && (
            <div>
              <a className="profile-data-make-changes-btn" onClick={loadMore}>
                Učitaj više
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default LearnSection;
