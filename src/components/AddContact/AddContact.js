import "./AddContact.css";
import React, { useState } from "react";

const AddContact = (props) => {
  let [name, setName] = useState("");
  let [lastName, setLastName] = useState("");
  let [photo, setPhoto] = useState("");

  function handleClick() {
    let newContact = {
      name,
      lastName,
      photo,
      id: Date.now(),
    };
    props.handleNewContact(newContact);
    setName("");
    setLastName("");
    setPhoto("");
  }

  return (
    <div className="add">
      <h1 className="nav"> WELCOME TO MY CONTACT BOOK 🧜🏻‍♀️ </h1>;
      <div className="addContact">
        <input
          className="name1"
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
          value={name}
        />
        <input
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="Last Name"
          value={lastName}
        />
        <input
          onChange={(e) => setPhoto(e.target.value)}
          type="url"
          placeholder="URL Photo"
          value={photo}
        />
      </div>
      <button className="btnadd" onClick={handleClick}>
        Add contact
      </button>
    </div>
  );
};

export default AddContact;
