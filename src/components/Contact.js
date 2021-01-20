import React from 'react';
import './Contact.css';

const name = "Alex Rosier";
const avatar = "https://randomuser.me/api/portraits/men/79.jpg";
const status = true;

function Contact() {
    return (
      <div className="Contact">
        <img className="avatar" src={avatar} />
        <div>
            <h1>{name}</h1>
            <p className="status"><span className="status-online"></span>{status ? "Online" : "Offline"}</p>
        </div>
      </div>
    );
  }

export default Contact;