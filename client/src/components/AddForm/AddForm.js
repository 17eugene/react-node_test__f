import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import styles from "./AddForm.module.css";

function AddForm({ closeForm, submitForm }) {
  const [collapsed, setCollapsed] = useState(true);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");

  const formRoot = document.querySelector("#form-root");

  const inputChangeHandler = (e) => {
    switch (e.currentTarget.name) {
      case "name":
        setName(e.currentTarget.value);
        break;

      case "title":
        setTitle(e.currentTarget.value);
        break;

      case "description":
        setDescription(e.currentTarget.value);
        break;

      case "image":
        setImageURL(e.currentTarget.value);
        break;

      default:
        return;
    }
  };

  useEffect(() => {
    if (collapsed) {
      const handleEscape = (e) => {
        if (e.code === "Escape") {
          setCollapsed(true);
          closeForm();
        }
      };

      window.addEventListener("keyup", handleEscape);
      return () => {
        window.removeEventListener("keyup", handleEscape);
      };
    }
  }, [collapsed, closeForm]);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    submitForm({
      name: name,
      title: title,
      description: description,
      url: imageURL,
    });

    setName("");
    setTitle("");
    setDescription("");
    setImageURL("");

    closeForm();
  };

  return createPortal(
    <>
      <div className={styles.overlay}>
        <div className={styles.addFormContainer}>
          <p className={styles.formTitle}>Add new hot-dog</p>

          <form onSubmit={formSubmitHandler} className={styles.form}>
            <input
              className={styles.inputField}
              placeholder="Name"
              autoComplete="off"
              type="text"
              name="name"
              value={name}
              onChange={inputChangeHandler}
            />

            <input
              className={styles.inputField}
              placeholder="Title"
              autoComplete="off"
              type="text"
              name="title"
              value={title}
              onChange={inputChangeHandler}
            />

            <input
              className={styles.inputField}
              placeholder="Description"
              autoComplete="off"
              type="text"
              name="description"
              value={description}
              onChange={inputChangeHandler}
            />

            <input
              className={styles.inputField}
              placeholder="image URL"
              autoComplete="off"
              type="text"
              name="image"
              onChange={inputChangeHandler}
            />

            <div className={styles.btnContainer}>
              <button
                onClick={closeForm}
                className={styles.formBtn}
                type="button"
              >
                Cancel
              </button>
              <button className={styles.formBtn} type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>,
    formRoot
  );
}

export default AddForm;
