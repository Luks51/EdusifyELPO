import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useParams } from "react-router-dom";

function ProfilePublicSection() {
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

  const [error, setError] = useState({
    status: false,
    message: "",
  });

  let { username } = useParams();

  useEffect(() => {
    axios
      .post(
        `http://localhost:3001/projects/byUsername/${username}`,
        { loaded: loaded },
        { withCredentials: true }
      )
      .then((res) => {
        if (!res.data.error) {
          setListOfProjects(res.data.rows);
          setLoaded(loaded + 24);
          if (res.data.rows.length < 3) {
            setLoadBtn(false);
          }
        } else {
          setError({
            status: true,
            message: res.data.error,
          });
        }
      });
  }, []);
  return (
    <>
      {" "}
      {!error.status ? (
        <section className="public-profile-section">
          <div className="container">
            <p className="project-section-label">Autor</p>
            <h3 className="learning-material-main-text">{username}</h3>
            {!(listOfProjects == "") ? (
              <div className="learning-material-grid">
                {listOfProjects.map((value, key) => {
                  if (value.visible == "1") {
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
                              src={`../img/single-item-img${value.photo}.svg`}
                            />
                          </div>
                          <div className="learning-material-single-item-content">
                            <h5 className="learning-material-single-item-heading">
                              {value.title}
                            </h5>
                            <p className="learning-material-single-item-description">
                              {value.description}
                            </p>
                          </div>
                        </a>
                      </div>
                    );
                  }
                })}
              </div>
            ) : (
              <div className="my-projects-empty">
                <p className="my-projects-empty-text">
                  Korisnik nije kreirao nijedan materijal
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
      ) : (
        <section className="project-section">
          <div className="container">
            <p className="page-error">{error.message}</p>
          </div>
        </section>
      )}
    </>
  );
}

export default ProfilePublicSection;
