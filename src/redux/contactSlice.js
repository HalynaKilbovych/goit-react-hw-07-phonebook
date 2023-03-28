import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const handleAsyncAction = (state, action, callback) => {
  state.isLoading = action.meta.requestStatus === 'pending';
  state.error = action.meta.requestStatus === 'rejected' ? action.payload : null;
  if (action.meta.requestStatus === 'fulfilled') {
    callback(state, action);
  }
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { 
    items: [], 
    isLoading: false, 
    error: null 
  },
  extraReducers: {
    [fetchContacts.pending]: handleAsyncAction,
    [fetchContacts.fulfilled]: (state, action) => {
      state.item = action.payload;
    },
    [fetchContacts.rejected]: handleAsyncAction,
    [addContact.pending]: handleAsyncAction,
    [addContact.fulfilled]: (state, action) => {
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleAsyncAction,
    [deleteContact.pending]: handleAsyncAction,
    [deleteContact.fulfilled]: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleAsyncAction,
  },
});

export const contactsReducer = contactsSlice.reducer;