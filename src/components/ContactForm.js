import React, { Component } from 'react';


const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: "", email: "", message: "" };
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
      fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() => alert("Thank you for your message! I'll get back to you asap!"))
        .catch(error => alert(error));

      e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
      const { name, email, message } = this.state;
      return (
        <form className="contact-form" onSubmit={this.handleSubmit}>
          <div className="field name">
            <label>
              Your Name: <input placeholder="Jack Rabbit" type="text" name="name" value={name} onChange={this.handleChange} />
            </label>
          </div>
          <div className="field email">
            <label>
              Your Email: <input placeholder="jack@gmail.com" type="email" name="email" value={email} onChange={this.handleChange} />
            </label>
          </div>
          <div className="field message">
            <label htmlFor="message"> Message: </label>
              <textarea placeholder="Dear Lauren, :)" name="message" value={message} rows="7" cols="70" onChange={this.handleChange} id="message" />

          </div>
          <p>
            <button className="submit-button" type="submit">Send</button>

          </p>
        </form>
      );
    }
  }

export default ContactForm;
