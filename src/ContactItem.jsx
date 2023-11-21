import React from "react";
import ContactItemImage from "./ContactItemImage";
import ContactItemBody from "./ContactItemBody";

function ContactItem({ imageUrl, name, profession }) {
  return (
    <div className="contact-item rounded-md border border-dashed  border-black  flex items-center p-5 mt-5 ">
      <ContactItemImage imageUrl={imageUrl}  />
      <ContactItemBody name={name} profession={profession} />
    </div>
  );
}

export default ContactItem;
