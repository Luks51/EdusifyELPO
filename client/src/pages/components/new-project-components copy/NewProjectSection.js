import React, { useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";

function NewProjectSection() {
  const { auth, setAuth } = useContext(AuthContext);
  const editorRef = useRef(null);

  const changeVisibility = (e) => {
    setValues({ ...values, visible: parseInt(e.target.value) });
  };

  const changePhoto = (e) => {
    setValues({ ...values, photo: parseInt(e.target.value) });
  };

  const [error, setError] = useState({
    status: false,
    message: "",
  });

  const navigate = useNavigate();

  const save = (e) => {
    e.preventDefault();
    if (
      errorMessage.title == "" &&
      errorMessage.description == "" &&
      !(values.title == "") &&
      !(values.description == "")
    ) {
      axios
        .post(
          "http://localhost:3001/projects/create",
          {
            visible: values.visible,
            content: editorRef.current.getContent(),
            title: values.title,
            description: values.description,
            photo: values.photo,
            UserId: auth.id,
          },
          { withCredentials: true }
        )
        .then((res) => {
          if (!res.data.error) {
            navigate(`/project/${res.data.id}`);
            window.scrollTo(0, 0);
          } else {
            setError({
              status: true,
              message: res.data.error,
            });
          }
        });
    }
  };

  const config = {
    title: {
      required: true,
      minlength: 3,
      maxlength: 25,
      onlyalphanumericandspecial: true,
    },
    description: {
      required: true,
      minlength: 4,
      maxlength: 100,
      onlyalphanumericandspecial: true,
    },
  };

  const [values, setValues] = useState({
    title: "",
    description: "",
    visible: 1,
    photo: 1,
  });

  const [errorMessage, setErrorMessage] = useState({
    title: [],
    description: [],
  });

  const onChange = (e) => {
    setErrorMessage({ ...errorMessage, [e.target.name]: [] });
    let errors = [];
    setValues({ ...values, [e.target.name]: e.target.value });

    if (config[e.target.name].required) {
      if (e.target.value === "") {
        errors.push(<li key="1">Polje je prazno</li>);
      }
    }

    if (
      e.target.value.length < config[e.target.name].minlength ||
      e.target.value.length > config[e.target.name].maxlength
    ) {
      errors.push(
        <li key="4">
          Polje mora sadržavati minimalno {config[e.target.name].minlength} i
          maksimalno {config[e.target.name].maxlength} znakova
        </li>
      );
    }

    if (config[e.target.name].onlyalphanumericandspecial) {
      if (!onlyAlphanumericAndSpecial(e.target.value)) {
        errors.push(
          <li key="7">
            Polje mora sadržavati samo alfanumeričke i specijalne znakove
          </li>
        );
      }
    }

    setErrorMessage({ ...errorMessage, [e.target.name]: errors });
  };

  const onlyAlphanumericAndSpecial = (alphanumericandspecial) => {
    if (/^[ A-Za-z0-9_@.:;?!/<>'"$#&+-]*$/.test(alphanumericandspecial)) {
      return true;
    }
    return false;
  };

  return (
    <section className="new-project-section">
      <div className="container">
        <div className="new-project-menu">
          <div className="project-details">
            <div className="new-project-input-wrapper">
              <label>Naslov materijala</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Naslov..."
                onChange={onChange}
              />
              <ul className="form-validation">{errorMessage.title}</ul>
            </div>
            <div className="new-project-input-wrapper">
              <label>Opis materijala</label>
              <input
                type="text"
                id="description"
                name="description"
                placeholder="Opis..."
                onChange={onChange}
              />
              <ul className="form-validation">{errorMessage.description}</ul>
            </div>
            <div className="new-project-public-wrapper">
              <label className="new-project-public-label">Vidljivost</label>
              <select name="public" id="public" onChange={changeVisibility}>
                <option value="1">Javno</option>
                <option value="2">Privatno</option>
              </select>
            </div>
            <div className="new-project-photo-wrapper">
              <label className="new-project-photo-label">
                Odaberite sliku za prikaz
              </label>
              <div className="new-project-select-img-wrapper">
                <select name="photo" id="photo" onChange={changePhoto}>
                  <option value="1">Učenje</option>
                  <option value="2">Programiranje</option>
                  <option value="3">Matematika</option>
                  <option value="4">Online</option>
                </select>
                <img
                  className="new-project-photo"
                  src={`img/single-item-img${values.photo}.svg`}
                />
              </div>
            </div>
          </div>
        </div>
        <Editor
          apiKey="9voxr1fjue0tws96fgggyvqifkfoh0pjqg947er74m2x3ytq"
          onInit={(evt, editor) => (editorRef.current = editor)}
          init={{
            setup: (ed) => {
              ed.on("keydown", (event) => {
                if (event.key === "Tab") {
                  if (event.shiftKey) {
                    ed.execCommand("Outdent");
                  } else {
                    ed.execCommand("Indent");
                  }
                  event.preventDefault();
                  return false;
                }
                return true;
              });
            },
            min_height: 700,
            menubar: true,
            plugins: [
              "advlist",
              "anchor",
              "autolink",
              "autoresize",
              "charmap",
              "directionality",
              "emoticons",
              "fullscreen",
              "help",
              "importcss",
              "insertdatetime",
              "link",
              "lists",
              "nonbreaking",
              "pagebreak",
              "preview",
              "searchreplace",
              "table",
              "visualblocks",
              "visualchars",
              "wordcount",
            ],
            toolbar:
              "aligncenter alignjustify alignleft alignnone alignright| anchor | blockquote blocks | backcolor | bold | copy | cut | fontfamily fontsize forecolor h1 h2 h3 h4 h5 h6 hr indent | italic | language | lineheight | newdocument | outdent | paste pastetext | print | redo | remove removeformat | selectall | strikethrough | styles | subscript superscript underline | undo | visualaid | a11ycheck advtablerownumbering typopgraphy anchor restoredraft casechange charmap checklist code codesample addcomment showcomments ltr rtl fliph flipv rotateleft rotateright emoticons export footnotes footnotesupdate formatpainter fullscreen help insertdatetime link openlink unlink bullist numlist media mergetags mergetags_list nonbreaking pagebreak pageembed permanentpen preview quicklink quicktable cancel save searchreplace spellcheckdialog spellchecker | table tablecellprops tablecopyrow tablecutrow tabledelete tabledeletecol tabledeleterow tableinsertdialog tableinsertcolafter tableinsertcolbefore tableinsertrowafter tableinsertrowbefore tablemergecells tablepasterowafter tablepasterowbefore tableprops tablerowprops tablesplitcells tableclass tablecellclass tablecellvalign tablecellborderwidth tablecellborderstyle tablecaption tablecellbackgroundcolor tablecellbordercolor tablerowheader tablecolheader | tableofcontents tableofcontentsupdate | template typography | insertfile | visualblocks visualchars | wordcount",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
        {error.status && (
          <span className="form-validation-submit">{error.message}</span>
        )}
        <a className="new-project-save-btn" onClick={save}>
          Spremi materijal
        </a>
      </div>
    </section>
  );
}

export default NewProjectSection;
