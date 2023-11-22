import React from "react";
import ContactItem from "./ContactItem";

function ContactList({ contacts, onDelete }) {
  return (
    <div className="contact-list mt-10">
      {contacts.map((contact) => (
        <ContactItem key={contact.id} onDelete={onDelete} {...contact} />
      ))}
    </div>
  );
}

export default ContactList;
