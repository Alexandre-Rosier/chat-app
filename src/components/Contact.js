import React from 'react';
import './Contact.css';


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    online: props.status,
    };
  }
  render() {
    return (
        <div className="Contact">
          <img className="avatar" src={this.props.src} alt={this.props.alt} />
          <div>
              <h1>{this.props.alt}</h1>
              <p className="status"
              onClick={event => {
                const newOnline = !this.state.online;
                this.setState({online: newOnline});
              }}>
                <span className={this.state.online ? "status-online" : "status-offline"}></span>
                {this.state.online ? "Online" : "Offline"}
              </p>
          </div>
        </div>
      );
  }}

export default Contact;