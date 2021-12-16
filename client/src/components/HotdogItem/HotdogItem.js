import { useState } from "react";

import HotdogCard from "../HotdogCard/HotdogCard";
import EditForm from "../EditForm/EditForm";

const HotdogItem = ({
  selectedCard,
  selectedCardHandle,
  name,
  title,
  descr,
  image,
  submitEditForm,
  deleteCard,
}) => {
  const [showEditForm, setShowEditForm] = useState(false);

  const toggleEditForm = () => {
    setShowEditForm(!showEditForm);
  };

  const openEditForm = () => {
    selectedCardHandle();
    toggleEditForm();
  };

  return (
    <>
      {showEditForm ? (
        <EditForm
          selectedCard={selectedCard}
          submitForm={submitEditForm}
          closeForm={toggleEditForm}
          deleteCard={deleteCard}
        />
      ) : (
        <HotdogCard
          openEditForm={openEditForm}
          selectedCardHandle={selectedCardHandle}
          name={name}
          title={title}
          descr={descr}
          image={image}
        />
      )}
    </>
  );
};

export default HotdogItem;
