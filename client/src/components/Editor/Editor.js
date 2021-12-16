// import { useState } from "react";
// import { useDispatch } from "react-redux";

// import AddForm from "../AddForm/AddForm";
// import EditForm from "../EditForm/EditForm";

// import operations from "../../redux/hotdog/operations";

// function Editor() {
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [showEditForm, setShowEditForm] = useState(false);
//   const [name, setName] = useState("");
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [updName, setUpdName] = useState("");
//   const [updTitle, setUpdTitle] = useState("");
//   const [updDescription, setUpdDescription] = useState("");

//   const dispatch = useDispatch();

//   const inputChangeHandler = (e) => {
//     switch (e.currentTarget.name) {
//       case "name":
//         setName(e.currentTarget.value);
//         break;

//       case "updName":
//         setUpdName(e.currentTarget.value);
//         break;

//       case "title":
//         setTitle(e.currentTarget.value);
//         break;

//       case "updTitle":
//         setUpdTitle(e.currentTarget.value);
//         break;

//       case "description":
//         setDescription(e.currentTarget.value);
//         break;

//       case "updDescription":
//         setUpdDescription(e.currentTarget.value);
//         break;

//       default:
//         return;
//     }
//   };

//   const toggleAddForm = () => {
//     setShowAddForm(!showAddForm);
//   };

//   //   const toggleEditForm = () => {
//   //     setShowEditForm(!showEditForm);
//   //   };

//   const submitAddForm = (data) => {
//     dispatch(operations.addHotdog(data));
//   };

//   return (
//     <>
//       {showAddForm && (
//         <AddForm
//           inputChange={inputChangeHandler}
//           close={toggleAddForm}
//           submit={submitAddForm}
//           name={name}
//           setName={setName}
//           title={title}
//           setTitle={setTitle}
//           description={description}
//           setDescription={setDescription}
//         />
//       )}
//       {/* {showEditForm && <EditForm />} */}
//     </>
//   );
// }

// export default Editor;
