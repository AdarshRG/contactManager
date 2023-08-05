import React from 'react';
import user from "../images/user.png"

const ContactCard = (props) => {
  const { id, name, email } = props.contacts??{};

  return (
    <div className='item'>
      <img className='ui avatar image'alt="user" src={user} />
      <div className='content'>
        <div className='header'>{name}</div>
        <div className=''>{email}</div>
      </div>
      <i className='trash alternate outline icon' style={{ color: 'red', marginTop: '7px' }}></i>
    </div>
  );
};

export default ContactCard;