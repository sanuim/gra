import React from 'react';

import './style.css';

function Header({ login }) {
  return (
    <div className="container-fluid header">
        <span className="login">Login: 
          <span className="loginname">
             {login}
          </span>
        </span>
    </div>
  );
}

export default Header;