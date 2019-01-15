import React, { Component } from 'react';

class Contact extends Component {
  
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