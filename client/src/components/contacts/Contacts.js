import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from './ContactItem';
//import Spinner from '../layout/Spinner';
import crudContext from "../../context/crud/crudContext";

const Contacts = () => {
  const CrudContext = useContext(crudContext);

  const { contacts, filtered, getContacts, loading } = CrudContext;

//   useEffect(() => {
//     getContacts();  }, []);
    // eslint-disable-next-line
 
  //&& contacts.length === 0
  if (contacts !== null  && !loading) {
    return <h4>Please add a Meeting</h4>;
  }

  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map(contact => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames='item'
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))
            : contacts.map(contact => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames='item'
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        {/* <Spinner /> */}
      )}
    </Fragment>
  );
};

export default Contacts;