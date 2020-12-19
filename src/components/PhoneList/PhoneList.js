import React, { Component } from "react";
import PhoneItem from "../PhoneItem/PhoneItem.js";
import "./PhoneList.css";

export class PhoneList extends Component {
  render() {
    return (
      <div className="phone_list">
        <PhoneItem/>
      </div>
    );
  }
}

export default PhoneList;
