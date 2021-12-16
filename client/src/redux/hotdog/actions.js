import { createAction } from "@reduxjs/toolkit";

const addHotdogRequest = createAction("hotdogs/addHotdogRequest");
const addHotdogSuccess = createAction("hotdogs/addHotdogSuccess");
const addHotdogError = createAction("hotdogs/addHotdogError");

const getHotdogsRequest = createAction("hotdogs/getHotdogsRequest");
const getHotdogsSuccess = createAction("hotdogs/getHotdogsSuccess");
const getHotdogsError = createAction("hotdogs/getHotdogsError");

const getOneHotdogRequest = createAction("hotdogs/getOneHotdogRequest");
const getOneHotdogSuccess = createAction("hotdogs/getOneHotdogSuccess");
const getOneHotdogError = createAction("hotdogs/getOneHotdogError");

const updateHotdogRequest = createAction("hotdogs/updateHotdogRequest");
const updateHotdogSuccess = createAction("hotdogs/updateHotdogSuccess");
const updateHotdogError = createAction("hotdogs/updateHotdogError");

const deleteHotdogRequest = createAction("hotdogs/deleteHotdogRequest");
const deleteHotdogSuccess = createAction("hotdogs/deleteHotdogSuccess");
const deleteHotdogError = createAction("hotdogs/deleteHotdogError");

const actions = {
  addHotdogRequest,
  addHotdogSuccess,
  addHotdogError,
  getHotdogsRequest,
  getHotdogsSuccess,
  getHotdogsError,
  getOneHotdogRequest,
  getOneHotdogSuccess,
  getOneHotdogError,
  updateHotdogRequest,
  updateHotdogSuccess,
  updateHotdogError,
  deleteHotdogRequest,
  deleteHotdogSuccess,
  deleteHotdogError,
};

export default actions;
