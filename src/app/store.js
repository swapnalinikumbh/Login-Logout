import { configureStore } from "@reduxjs/toolkit";

import useReducer from "../featurs/userSlice";

export default configureStore({
  reducer: {
    user: useReducer
  }
});
