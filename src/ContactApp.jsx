import React from "react";
import { getData } from "./data";
import ContactList from "./ContactList";


function ContactApp() {
  const contacts = getData();
  return (
    <div className="contact-app  ml-[300px] mr-[300px] pt-5 ">
      <h1 className=" text-black font-normal font-[Inter] text-5xl px-3 py-3" >Daftar Kontak</h1>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default ContactApp;
