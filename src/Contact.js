import React, { Component } from 'react';

import ScrollArea from 'react-scrollbar';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      surname: '',
      email: '',
      password: '',
      rePassword: '',
      contactNumber: '',
      comment: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeNoValidity = this.handleChangeNoValidity.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.target.classList.add('active');

    this.setState({
      [event.target.name]: event.target.value
    });
    
    this.showInputError(event.target.name);
  }

  handleChangeNoValidity(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    alert('Form submitted');
    event.preventDefault();
    this.setState({
      firstName: '',
      surname: '',
      email: '',
      password: '',
      rePassword: '',
      contactNumber: '',
      comment: ''
    });
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
    const isFirstName = refName.indexOf('firstName') !== -1;
    const isSurname = refName.indexOf('surname') !== -1;
    const isPassword = refName.indexOf('password') !== -1;
    const isRePassword = refName.indexOf('rePassword') !== -1;
        
    if (!validity.valid) {
      if (validity.valueMissing) {
        error.textContent = `${label} is a required field`; 
      } else if ((isFirstName || isSurname) && validity.patternMismatch) {
        error.textContent = `${label} should be longer than 1 character`;
      } else if (validity.typeMismatch) {
        error.textContent = `${label} should be a valid email address`;
      } else if ((isPassword || isRePassword) && validity.patternMismatch) {
        error.textContent = `${label} should be longer than 7 characters`;
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
        <form noValidate>
        <ScrollArea>

          <div className="form-group">
            <label id="firstNameLabel">First Name</label>
            <input className="form-control"
              type="text"
              name="firstName"
              ref="firstName"
              pattern=".{2,}"
              value={this.state.firstName} 
              onChange={this.handleChange}
              required 
              autoFocus
            />
            <div className="error" id="firstNameError" />
          </div>

          <div className="form-group">
            <label id="surnameLabel">Surname</label>
            <input className="form-control"
              type="text"
              name="surname"
              ref="surname"
              pattern=".{2,}"
              value={this.state.surname} 
              onChange={this.handleChange}
              required 
            />
            <div className="error" id="surnameError" />
          </div>

          <div className="form-group">
            <label id="emailLabel">Email</label>
            <input className="form-control"
              type="email"
              name="email"
              ref="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              value={this.state.email} 
              onChange={this.handleChange}
              required 
            />
            <div className="error" id="emailError" />
          </div>

          <div className="form-group">
            <label id="passwordLabel">Password</label>
            <input className="form-control"
              type="password"
              name="password"
              ref="password"
              pattern=".{8,}"
              value={this.state.password} 
              onChange={this.handleChange}
              required 
            />
            <div className="error" id="passwordError" />
          </div>

          <div className="form-group">
            <label id="rePasswordLabel">Retype Password</label>
            <input className="form-control"
              type="password"
              name="rePassword"
              ref="rePassword"
              pattern=".{8,}"
              value={this.state.rePassword} 
              onChange={this.handleChange}
              required 
            />
            <div className="error" id="rePasswordError" />
          </div>

          <div className="form-group">
            <label id="contactMethodLabel">Preferred Contact Method:</label><br />
              <input id="contactEither" type="radio" name="preferredContact" value="either" checked />Either
              <input id="contactEmail" type="radio" name="preferredContact" value="email" />Email
              <input id="contactMobile" type="radio" name="preferredContact" value="mobile" />Phone
          </div>

          <div className="form-group">
            <label id="howHearAboutUsLabel">How Did You Hear About Us?:</label><br />
              <select name="howHeardAboutUs">
                <option id="optionSocialMedia" value="socialMedia">Social Media</option>
                <option id="optionOnline" value="online">Online</option>
                <option id="optionFriendsFamily" value="friendsOrFamily">Friends/family</option>
                <option id="optionOther" value="other">Other</option>
              </select>
          </div>

          <div className="form-group">
            <label id="commentLabel">Comments:</label><br />
              <textarea
                name="comment"
                rows="20"
                cols="60"
                placeholder="Anything you wish to let us know?"
                value={this.state.comment}
                onChange={this.handleChangeNoValidity}
              >
              </textarea>
            </div>

          <button className="btn btn-primary" id="submitButton"
            onClick={this.handleSubmit}>Submit
          </button>
          <br />
          <br />
          </ScrollArea>
        </form>
      </div>
    );
  }
}

export default Contact;