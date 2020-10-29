import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
    return (
        <div className='navbar bg-danger'>
        <div> 
         <h1>
        <Link to='/'>
          <i className={icon} /> {title}
        </Link>
     
      </h1>
      </div>

      <div> <Link to='/'>Home </Link>
      <Link to='/about'>  About  </Link>
      <Link to='/register'>  Register  </Link>
      <Link to='/login'>  Login  </Link>
      </div>
     
          
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