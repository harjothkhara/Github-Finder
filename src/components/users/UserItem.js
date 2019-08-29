import React from 'react';
import PropTypes from 'prop-types'; //impt

const UserItem = ({ user: { login, avatar_url, html_url } }) => { //destructuring user prop needed up here and pulling from prop what we need
    return (
      <div className="card text-center">
        <img src={avatar_url} alt='' className='round-img' style={{ width:'60px' }}
        />
        <h3>{login}</h3>

        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>
    );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired, //ptor, pta snippet shortcut
}

export default UserItem
