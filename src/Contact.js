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
      reEnterPassword: ''
    }
  }
  
  render() {
    return (
      <div>
        <h1>Contact</h1>
        <form className="contactForm">
          <label>
            First Name:
          <input type="text" name="firstName" />
          </label>
          <br />

          <label>
            Surname:
          <input type="text" name="surname" />
          </label>
          <br />
          
          <label>
            Email:
          <input type="email" name="email" />
          </label>
          <br />
          
          <label>
            Contact Number:
          <input type="number" name="contactNumber" />
          </label>
          <br />
          
          <label>
            Password:
          <input type="password" name="password" />
          </label>
          <br />
          
          <label>
            Re-enter Password:
          <input type="password" name="reEnterPassword" />
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
            <textarea name="comments" rows="10" cols="30">
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