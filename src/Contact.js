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
    //this.setState({value: event.target.value});
    event.target.classList.add('active');

    this.setState({
      [event.target.name]: event.target.value
    });
    
    this.showInputError(event.target.name);
  }

  handleSubmit(event) {
    alert('Form submitted');
    event.preventDefault();
    this.setState({firstName: ''});
  }

  showFormErrors() {
    const inputs = document.querySelectorAll('input');
    let isFormValid = true;
    
    inputs.forEach(input => {
      input.classList.add('active');
      
      const isInputValid = this.showInputError(input.name);
      
      if (!isInputValid) {
        isFormValid = false;
      }
    });
    
    return isFormValid;
  }
  
  showInputError(refName) {
    const validity = this.refs[refName].validity;
    const label = document.getElementById(`${refName}Label`).textContent;
    const error = document.getElementById(`${refName}Error`);
        
    if (!validity.valid) {
      if (validity.valueMissing) {
        error.textContent = `${label} is a required field`; 
      }
      return false;
    }
    
    error.textContent = '';
    return true;
  }
  
  render() {
    return (
      <div>
        <h1>Contact</h1>
        <form novalidate>
        <div className="form-group">
          <label id="firstNameLabel">First Name</label>
          <input className="form-control"
            type="text"
            name="firstName"
            ref="firstName"
            pattern=".{2,}"
            value={ this.state.firstName } 
            onChange={ this.handleChange }
            required />
          <div className="error" id="firstNameError" />
        </div>

        <button className="btn btn-primary"
          onClick={this.handleSubmit}>Submit
        </button>
      </form>
      </div>
    );
  }
}

export default Contact;