import React, { useState, useContext, useEffect } from 'react';
import crudContext from '../../context/crud/crudContext';

const MeetingtForm = () => {
  const CrudContext = useContext(crudContext);

  const { addMeeting, updateMeeting, clearCurrent, current } = crudContext;

  useEffect(() => {
    if (current !== null) {
      setMeeting(current);
    } else {
      setMeeting({
        classname: '',
        class: '',
        type: 'personal'
      });
    }
  }, [CrudContext, current]);

  const [meeting, setMeeting] = useState({
    classname: '',
    classid: '',
    type: 'personal'
  });

  const { classname, classid,  type } = meeting;

  const onChange = e =>
    setMeeting({ ...meeting, [e.target.classname]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addMeeting(meeting);
    } else {
      updateMeeting(meeting);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? 'Edit Meeting' : 'Add Meeting'}
      </h2>
      <input
        type='text'
        placeholder='ClassName'
        name='classname'
        value={classname}
        onChange={onChange}
      />
      <input
        type='classId'
        placeholder='ClassId'
        name='ClassId'
        value={classid}
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
          className='btn btn-primary btn-block'
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

export default MeetingtForm;