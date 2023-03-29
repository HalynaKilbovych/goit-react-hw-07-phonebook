import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const handleAsyncAction = (state, action) => {
  if (action.meta.requestStatus === 'pending') {
    return {
      ...state,
      isLoading: true,
      error: null,
    };
  }
  if (action.meta.requestStatus === 'rejected') {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }
  if (action.meta.requestStatus === 'fulfilled') {
    return {
      ...state,
      isLoading: false,
      items: action.payload,
    };
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
      state.items = action.payload;
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