import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./components/contact"
import contacts from "./components/contact";

ReactDOM.render(
  <div>
      <h1 className="heading">My Contacts</h1>

    <App name={contacts[0].name}
      imgURL={contacts[0].imgURL}
      phone={contacts[0].phone}
      email={contacts[0].email} />
      <App name={contacts[1].name}
      imgURL={contacts[1].imgURL}
      phone={contacts[1].phone}
      email={contacts[1].email} />
      <App name={contacts[2].name}
      imgURL={contacts[2].imgURL}
      phone={contacts[2].phone}
      email={contacts[2].email} />

  </div>,
  document.getElementById("root")
);

//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.
