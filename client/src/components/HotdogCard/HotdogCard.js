import styles from "./HotdogCard.module.css";

function HotdogCard({ name, title, descr, image, openEditForm, disabled }) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <img src={image} alt={name} className={styles.image} />
        </div>
        <p className={styles.cardName}>{name}</p>
        <p className={styles.cardTitle}>
          {title}
          <span>$</span>
        </p>
        <p className={styles.descr}>{descr}</p>
        <button
          className={styles.editBtn}
          type="button"
          onClick={openEditForm}
          disabled={disabled}
        >
          Edit
        </button>
      </div>
    </>
  );
}

export default HotdogCard;
