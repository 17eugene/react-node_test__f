import { useState, useEffect } from "react";

import styles from "./EditForm.module.css";

function EditForm({ selectedCard, submitForm, closeForm, deleteCard }) {
  const [collapsed, setCollapsed] = useState(true);
  const [updName, setUpdName] = useState(selectedCard.name);
  const [updTitle, setUpdTitle] = useState(selectedCard.title);
  const [updDescription, setUpdDescription] = useState(
    selectedCard.description
  );
  const [updImageURL, setUpdImageURL] = useState(selectedCard.url);

  const inputChangeHandler = (e) => {
    switch (e.currentTarget.name) {
      case "name":
        setUpdName(e.currentTarget.value);
        break;

      case "title":
        setUpdTitle(e.currentTarget.value);
        break;

      case "description":
        setUpdDescription(e.currentTarget.value);
        break;

      case "imageURL":
        setUpdImageURL(e.currentTarget.value);
        break;

      default:
        return;
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    submitForm({
      id: selectedCard.id,
      name: updName,
      title: updTitle,
      description: updDescription,
      url: updImageURL,
    });

    closeForm();
  };

  const deleteCardHandler = (e) => {
    e.preventDefault();

    deleteCard(selectedCard.id);

    closeForm();
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

  return (
    <>
      <div className={styles.editFormContainer}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={selectedCard.url}
            alt={selectedCard.name}
          />
        </div>

        <form className={styles.editForm} onSubmit={formSubmitHandler}>
          <input
            className={styles.editField}
            type="text"
            name="imageURL"
            value={updImageURL}
            placeholder="image URL"
            onChange={inputChangeHandler}
          />

          <input
            className={styles.editField}
            type="text"
            name="name"
            value={updName}
            placeholder="name"
            onChange={inputChangeHandler}
          />

          <input
            className={styles.editField}
            type="text"
            name="title"
            value={updTitle}
            placeholder="Title"
            onChange={inputChangeHandler}
          />

          <textarea
            className={styles.editArea}
            name="description"
            value={updDescription}
            placeholder="Description"
            onChange={inputChangeHandler}
            wrap="soft"
          ></textarea>

          <div className={styles.btnContainer}>
            <button className={styles.editFormBtn} type="submit">
              Update
            </button>
            <button
              className={styles.editFormBtn}
              type="button"
              onClick={deleteCardHandler}
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditForm;
