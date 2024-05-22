import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function MyProjects() {
  const [listOfProjects, setListOfProjects] = useState([]);
  const { auth, setAuth } = useContext(AuthContext);
  const [loaded, setLoaded] = useState(0);
  const [loadBtn, setLoadBtn] = useState(true);
  const navigate = useNavigate();

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
        "http://localhost:3001/projects/my",
        { loaded: loaded },
        { withCredentials: true }
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
    <section className="my-projects-section">
      <div className="container">
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
        {!(listOfProjects == "") ? (
          <div className="learning-material-grid">
            {listOfProjects.map((value, key) => {
              return (
                <div
                  key={key}
                  className="learning-material-single-item-wrapper"
                >
                  <a
                    className="learning-material-single-item"
                    onClick={() => {
                      auth.status
                        ? navigate(`/project/${value.id}`)
                        : navigate("/login");
                    }}
                  >
                    <div className="single-item-img-wrapper">
                      <img
                        className="single-item-img"
                        src={`img/single-item-img${value.photo}.svg`}
                      />
                    </div>
                    <div className="learning-material-single-item-content">
                      <h5 className="learning-material-single-item-heading">
                        {value.title}
                      </h5>
                      <p className="learning-material-single-item-description">
                        {value.description}
                      </p>
                      {value.visible == "1" ? <p>Javno</p> : <p>Privatno</p>}
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="my-projects-empty">
            <p className="my-projects-empty-text">
              Ovdje nema ničega, napravite svoj prvi materijal sada s gumbom
              iznad
            </p>
          </div>
        )}
        {loadBtn && (
          <div>
            <a className="profile-data-make-changes-btn" onClick={loadMore}>
              Učitaj više
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export default MyProjects;
