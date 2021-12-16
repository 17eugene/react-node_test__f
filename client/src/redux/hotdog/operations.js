import axios from "axios";

import actions from "./actions";

axios.defaults.baseURL = "http://localhost:2222/api";

//===============Get all items======================================
const getHotdogs = () => (dispatch) => {
  dispatch(actions.getHotdogsRequest());

  axios
    .get("/")
    .then((response) => dispatch(actions.getHotdogsSuccess(response.data)))
    .catch((error) => dispatch(actions.getHotdogsError(error)));
};
//=================================================================

//===================get one item==================================
const getOneHotdog = (id) => (dispatch) => {
  dispatch(actions.getOneHotdogRequest());

  axios
    .get(`/hotdog/${id}`)
    .then(({ data }) => dispatch(actions.getOneHotdogSuccess(data)))
    .catch((error) => dispatch(actions.getOneHotdogError(error)));
};
//==================================================================

//======================add item===================================
const addHotdog = (info) => (dispatch) => {
  const hotdog = info;
  dispatch(actions.addHotdogRequest());

  axios
    .post("/hotdog", hotdog)
    .then((response) => dispatch(actions.addHotdogSuccess(response.data)))
    .catch((error) => dispatch(actions.addHotdogError(error.message)));
};
//=================================================================

//====================edit item====================================
const updateHotdog =
  ({ id, name, title, description, url }) =>
  (dispatch) => {
    const updateHotdog = { name, title, description, url };
    dispatch(actions.updateHotdogRequest());

    axios
      .put(`/hotdog/${id}`, updateHotdog)
      .then(({ data }) => dispatch(actions.updateHotdogSuccess(data)))
      .catch((error) => dispatch(actions.updateHotdogError(error)));
  };
//=================================================================

//===============delete item=======================================
const deleteHotdog = (id) => (dispatch) => {
  dispatch(actions.deleteHotdogRequest());

  axios
    .delete(`/hotdog/${id}`)
    .then(() => dispatch(actions.deleteHotdogSuccess(id)))
    .catch((error) => dispatch(actions.deleteHotdogError(error)));
};
//=================================================================

const operations = {
  getHotdogs,
  getOneHotdog,
  addHotdog,
  updateHotdog,
  deleteHotdog,
};

export default operations;
