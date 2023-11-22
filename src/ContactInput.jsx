import React from "react";


class ContactInput extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi data state
    this.state = {
      name: "",
      profession: "",
    };

    //
    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onProfessionChangeEventHandler =
      this.onProfessionChangeEventHandler.bind(this);
    this.onSumbitChangeEventHandler =
      this.onSumbitChangeEventHandler.bind(this);
  }

  onNameChangeEventHandler(event) {
    this.setState(() => {
      return {
        name: event.target.value,
      };
    });
  }
  onProfessionChangeEventHandler(event) {
    this.setState(() => {
      return {
        profession: event.target.value,
      };
    });
  }
  onSumbitChangeEventHandler(event) {
    event.preventDefault();
    this.props.addContact(this.state);
  }
  render() {
    return (
      <div>
        <h1 className="text-2xl font-bold my-5">Add Kontak</h1>
        <div className="form-contact border border-black border-dashed p-5 rounded-md">
          <form onSubmit={this.onSumbitChangeEventHandler}>
            <div className="mb-3">
              <label
                htmlFor="name"
                className="font-semibold text-lg text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name" value={this.state.name} onChange={this.onNameChangeEventHandler}
                className="w-full h-10 p-3 shadow rounded-md border-2 border-zinc-300"
              />
            </div>
            <div className="mb-3 items-center">
              <label
                htmlFor="profession"
                className="font-semibold text-lg text-gray-600"
              >
                Profesi
              </label>
              <input
                type="text"
                id="profession"
                name="profession" value={this.state.profession} onChange={this.onProfessionChangeEventHandler}
                className="w-full h-10 p-3 shadow rounded-md border-2 border-zinc-300"
              />
            </div>
            <div className="button">
              <button
                type="submit"
                className="w-full bg-orange-600 text-white h-8 rounded-md font-semibold"
              >
                Tambah
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactInput;
