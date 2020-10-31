import React, { useContext, useRef, useEffect } from 'react';
import crudContext from "../../context/crud/crudContext";

const ContactFilter = () => {
  const CrudContext = useContext(crudContext);
  const text = useRef('');

  const { filterContacts, clearFilter, filtered } = CrudContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter Meetings...'
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;