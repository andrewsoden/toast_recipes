import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Form submitted');
    event.preventDefault();
    this.setState({value: ""});
  }
  
  render() {
    return (
      <div>
        <h1>Contact</h1>
        <div className="panel panel-default">
        </div>
        <form className="contactForm" onSubmit={this.handleSubmit}>
          <label>
            First Name:
          <input
            type="text"
            required
            name="firstName"
            placeholder="First Name"
            value={this.state.value}
            onChange={this.handleChange}
          />
          </label>
          <br />

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Contact;