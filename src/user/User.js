import React from 'react';

import './style.css';

function User({ login }) {
  return (
    <div className="container-sm user">
        <span className="left login">Login: 
          <span className="left loginname">
             {login}
          </span>
        </span>
    </div>
  );
}

User.defaultProps = {
  score: 0
}

export default User;