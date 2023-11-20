import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'

type ContactsState = {
  items: Contact[]
}

const initialState: ContactsState = {
  items: [
    {
      name: 'JavaScript',
      phone: 12345678910,
      email: 'javascript@gmail.com',
      id: 1
    },
    {
      name: 'React',
      phone: 12345678910,
      email: 'react@gmail.com',
      id: 2
    },
    {
      name: 'TypeScript',
      phone: 12345678910,
      email: 'typescript@hotmail.com',
      id: 3
    }
  ]
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      )
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.items.findIndex(
        (c) => c.id === action.payload.id
      )

      if (contactIndex >= 0) {
        state.items[contactIndex] = action.payload
      }
    },
    createNewContact: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const contactAlreadyExist = state.items.find(
        (c) => c.name.toLowerCase() === action.payload.name.toLowerCase()
      )

      if (contactAlreadyExist) {
        alert('Já existe uma tarefa com esse nome')
      } else {
        const lastContact = state.items[state.items.length - 1]

        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }
        state.items.push(newContact)
      }
    }
  }
})

export const { remove, edit, createNewContact } = contactsSlice.actions
export default contactsSlice.reducer
