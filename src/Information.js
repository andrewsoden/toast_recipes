import React, { Component } from "react";
import './css/Common.css';

class Information extends Component {
  render() {
    return (
      <div className="page">
        <h2>Rejoice for this is the Information page</h2>
        <a href="#recipeHeading1">Recipe #1</a><br />
        <a href="recipeHeading2">Recipe #2</a><br />
        <a href="recipeHeading3">Recipe #3</a><br />

        <h3 id="recipeHeading2">Recipe #1</h3>
        <table className="basicTable">
          <tr>
            <td>Information</td>
            <td>Picture</td>
          </tr>
        </table>

        <h3 id="recipeHeading2">Recipe #2</h3>
        <table className="basicTable">
          <tr>
            <td>Information</td>
            <td>Picture</td>
          </tr>
        </table>

        <h3 id="recipeHeading3">Recipe #3</h3>
        <table className="basicTable">
          <tr>
            <td>Information</td>
            <td>Picture</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Information;