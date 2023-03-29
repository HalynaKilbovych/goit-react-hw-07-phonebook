import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contact/contactSlice";
import { filterReducer } from "./contact/filterSlice";


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
