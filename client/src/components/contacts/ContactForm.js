import React, { useState, useContext, useEffect } from 'react';
import crudContext from "../../context/crud/crudContext";

const ContactForm = () => {
  const CrudContext = useContext(crudContext);

  const { addContact, updateContact, clearCurrent, current } = CrudContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        type: 'personal'
      });
    }
  }, [CrudContext, current]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    type: 'personal'
  });

  const { name, email, type } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-danger'>
        {current ? 'Edit Meeting' : 'Add Meeting'}
      </h2>
      <input
        type='text'
        placeholder='Class Name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        type='email'
        placeholder='Class Id'
        name='email'
        value={email}
        onChange={onChange}
      />
      
      <h5>Meeting Type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === 'personal'}
        onChange={onChange}
      />{' '}
      Personal{' '}
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === 'professional'}
        onChange={onChange}
      />{' '}
      Professional
      <div>
        <input
          type='submit'
          value={current ? 'Update Meeting' : 'Add Meeting'}
          className='btn btn-danger btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;