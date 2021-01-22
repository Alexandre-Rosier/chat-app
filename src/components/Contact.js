import React from 'react';
import './Contact.css';

const name = "Alex Rosier";
const avatar = "https://randomuser.me/api/portraits/men/79.jpg";
const status = true;

function Contact(props) {
    return (
      <div className="Contact">
        <img className="avatar" src={props.src} alt={props.alt} />
        <div>
            <h1>{props.alt}</h1>
            <p className="status"><span className="status-online"></span>{props.status ? "Online" : "Offline"}</p>
        </div>
      </div>
    );
  }

export default Contact;