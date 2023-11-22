import React from "react";
import { getData } from "./data";
import ContactList from "./ContactList";
import ContactInput from "./ContactInput";

class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: getData(),
       
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddContactHandler = this.onAddContactHandler.bind(this);
  }
  onDeleteHandler(id) {
    const contacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({ contacts });
  }

  onAddContactHandler({ name, profession }) {
    this.setState((prevState) => {
      return {
        contacts: [
          ...prevState.contacts,

          {
            id: +new Date(),
            name,
            profession,
            imageUrl: "/images/default.jpg",
          },
        ],
      };
    });
  }

  render() {
    return (
      <div className="contact-app w-[800px] mx-auto mt-10">
        <ContactInput addContact={this.onAddContactHandler} />
        <h1 className="mt-10 mb-10 font-bold text-2xl">Daftar Kontak</h1>
        <ContactList
          contacts={this.state.contacts}
          onDelete={this.onDeleteHandler}
        />
      </div>
    );
  }
}

export default ContactApp;
