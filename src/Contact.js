import React, { Component } from 'react';

class Contact extends Component {
  constructor (props) {
    super(props);
    this.state = {
      firstName: '',
      surname: '',
      email: '',
      contactNumber: '',
      password: '',
      reEnterPassword: '',
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid,
                    passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }
  
  render() {
    return (
      <div>
        <h1>Contact</h1>
        <div className="panel panel-default">
        </div>
        <form className="contactForm">
          <label>
            First Name:
          <input
            type="text"
            required
            name="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleUserInput}
          />
          </label>
          <br />

          <label>
            Surname:
          <input
            type="text"
            required
            name="surname"
            placeholder="Surname"
            value={this.state.surname}
            onChange={this.handleUserInput}
          />
          </label>
          <br />
          
          <label>
            Email:
          <input 
            type="email"
            required
            name="email" 
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleUserInput}
          />
          </label>
          <br />
          
          <label>
            Contact Number:
          <input 
            type="number" 
            required 
            name="contactNumber"
            placeholder="Contact Number"
            value={this.state.contactNumber}
            onChange={this.handleUserInput}
          />
          </label>
          <br />
          
          <label>
            Password:
          <input 
            type="password" 
            required 
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleUserInput}
          />
          </label>
          <br />
          
          <label>
            Re-enter Password:
          <input 
            type="password" 
            required 
            name="reEnterPassword" 
            placeholder="Re-Enter Password"
            value={this.state.reEnterPassword}
            onChange={this.handleUserInput}
          />
          </label>
          <br />

          <label>
            Preferred Contact Method:<br />
            <input type="radio" name="preferredContact" value="either" checked />Either
            <input type="radio" name="preferredContact" value="email" />Email
            <input type="radio" name="preferredContact" value="mobile" />Phone
          </label>
          <br />

          <label>
            How Did You Hear About Us?:
            <br />
            <select name="howHeardAboutUs">
              <option value="socialMedia">Social Media</option>
              <option value="online">Online</option>
              <option value="friendsOrFamily">Friends/family</option>
              <option value="other">Other</option>
            </select>
          </label>
          <br />

          <label>
            Comments:<br />
            <textarea
              name="comments"
              rows="10"
              cols="30"
              placeholder="Anything you wish to let us know?"
            >
            </textarea>
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