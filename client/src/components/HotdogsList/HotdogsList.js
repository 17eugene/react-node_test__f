import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import operations from "../../redux/hotdog/operations";
import { getHotdogsInfo } from "../../redux/selectors/hotdogs-selector";

import AddBtn from "../../components/AddBtn/AddBtn";
import AddForm from "../AddForm/AddForm";
import HotdogItem from "../HotdogItem/HotdogItem";

import styles from "./HotdogList.module.css";

function HotdogsList() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const dispatch = useDispatch();
  const hotdogs = useSelector(getHotdogsInfo);

  const notify = () =>
    toast("A hot-dog with that name already exists!", {
      autoClose: 2500,
      hideProgressBar: false,
      newestOnTop: false,
      closeOnClick: true,
      rtl: false,
      pauseOnFocusLoss: true,
      draggable: true,
      pauseOnHover: true,
    });

  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  const submitEditForm = (updatedCard) => {
    dispatch(operations.updateHotdog(updatedCard));
  };

  const submitAddForm = (data) => {
    dispatch(operations.addHotdog(data));

    if (
      hotdogs.find(
        (hotdog) => hotdog.name.toUpperCase() === data.name.toUpperCase()
      )
    ) {
      notify();
      return;
    }
  };

  const selectedCardHandle = (card) => {
    setSelectedCard(card);
  };

  const deleteCard = (id) => {
    dispatch(operations.deleteHotdog(id));
  };

  return (
    <>
      {showAddForm && (
        <AddForm closeForm={toggleAddForm} submitForm={submitAddForm} />
      )}

      <AddBtn openForm={toggleAddForm} />
      <section className={styles.section}>
        <ToastContainer />
        <div className={styles.listContainer}>
          <ul className={styles.cardList}>
            {hotdogs &&
              hotdogs.map(({ id, name, title, description, url }) => (
                <li key={id} className={styles.item}>
                  <HotdogItem
                    selectedCard={selectedCard}
                    selectedCardHandle={() =>
                      selectedCardHandle({ id, name, title, description, url })
                    }
                    name={name}
                    title={title}
                    descr={description}
                    image={url}
                    submitEditForm={submitEditForm}
                    deleteCard={deleteCard}
                  />
                </li>
              ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default HotdogsList;
