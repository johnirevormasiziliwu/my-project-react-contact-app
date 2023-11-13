import React from "react";
import ContactItemImage from "./ContactItemImage";
import ContactItemBody from "./ContactItemBody";

function ContactItem({ imageUrl, name, profession }) {
  return (
    <div className="contact-item">
      <ContactItemImage imageUrl={imageUrl} />
      <ContactItemBody name={name} profession={profession} />
    </div>
  );
}

export default ContactItem;
