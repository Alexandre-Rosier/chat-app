import React from 'react';
import './Contact.css';


function Contact(props) {
    return (
      <div className="Contact">
        <img className="avatar" src={props.src} alt={props.alt} />
        <div>
            <h1>{props.alt}</h1>
            <p className="status"><span className={props.status ? "status-online" : "status-offline"}></span>{props.status ? "Online" : "Offline"}</p>
        </div>
      </div>
    );
  }

export default Contact;