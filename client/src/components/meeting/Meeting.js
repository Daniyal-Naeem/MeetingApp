import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import MeetingItem from './Meetingitem';
//import Spinner from '../layout/Spinner';
import crudContext from "../../context/crud/crudContext";

const Meetings = () => {

  const CrudContext = useContext(crudContext);

  const { meetings, filtered, getMeetings, loading } = CrudContext;

  useEffect(() => {
    getMeetings();
    // eslint-disable-next-line
  }, []);

  if (meetings !== null && meetings.length === 0 && !loading) {
    return (<h4>Please add a Meeting</h4>);
  }

  return (
    <Fragment>
      {meetings !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map(meeting => (
                <CSSTransition
                  key={meeting._id}
                  timeout={500}
                  classNames='item'
                >
                  <MeetingItem meeting={meeting} />
                </CSSTransition>
              ))
            : meetings.map(meeting => (
                <CSSTransition
                  key={meeting._id}
                  timeout={500}
                  classNames='item'
                >
                  <MeetingItem meeting={meeting} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        {/* <Spinner /> */}
      )}
    </Fragment>
  );
};

export default Meetings;