import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/components/Avatar';
import './UserItem.css';

const UserItem = (props) => {
  const STYLE = {
    width: '100%',
    height: '100%',
  };
  return (
    <li className='user-item'>
      <div className='user-item__content'>
        <Link>
          <div className='user-item__image'>
            <Avatar src={props.image} alt={props.name} style={STYLE} />
          </div>

          <div className='user-item__info'>
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? 'place' : 'places'}
            </h3>
          </div>
        </Link>
      </div>
    </li>
  );
};

export default UserItem;
