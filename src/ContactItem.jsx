import React from "react";
import ContactItemImage from "./ContactItemImage";
import ContactItemBody from "./ContactItemBody";
import DeleteButton from "./DeleteButton";

function ContactItem({ imageUrl, name, profession, id, onDelete }) {
  return (
    <div className="contact-item rounded-md border border-dashed  border-black  flex items-center p-5 mt-5 ">
      <ContactItemImage imageUrl={imageUrl}  />
      <ContactItemBody name={name} profession={profession} />
      <DeleteButton id={id} onDelete={onDelete}/>
    </div>
  );
}

export default ContactItem;
