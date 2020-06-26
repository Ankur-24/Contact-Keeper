import React, { useReducer } from 'react';
import { v1 as uuid } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jill',
        email: 'Jill@gmail.com',
        phone: '111-111-1111',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Wiliam',
        email: 'willam@gmail.com',
        phone: '222-222-222',
        type: 'professional',
      },
      {
        id: 3,
        name: 'Sara',
        email: 'sara@gmail.com',
        phone: '333-333-3333',
        type: 'personal',
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add Contact
  const addContact = contact => {
    contact.id = uuid;
    dispatch({
      type: ADD_CONTACT,
      payload: contact,
    });
  };

  //Delete contact

  //Set Current Contact

  //Clear Current Contact

  //Update Contact

  //Filter Contact

  //Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
