import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title, icon }) => {
    return (
        <div className='navbar bg-danger'>
        <div><i className={icon}   /> {title} </div>
       
      </div>
    )
   
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Meeting App',
  icon: 'far fa-handshake'
};
export default Navbar;