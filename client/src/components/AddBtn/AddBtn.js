import styles from "./AddBtn.module.css";

function AddBtn({ openForm }) {
  return (
    <div className={styles.btnContainer}>
      <button className={styles.addBtn} type="button" onClick={openForm}>
        Add hot-dog
      </button>
    </div>
  );
}

export default AddBtn;
