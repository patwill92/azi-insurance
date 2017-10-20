import React, {Component} from 'react';

class Contact extends Component {
  render() {
    return (
        <div id="contact-component" className="container-fluid component">
          <h1 className="py-5">Contact us and get a free quote!</h1>
          <div id="contact-form">
            <form className="mx-auto w-50">
              <div className="form-group row">
                <div className="col">
                  <input className="form-control" type="text" value="Name" id="name-input"/>
                </div>
              </div>
              <div className="form-group row">
                <div className="col">
                  <input className="form-control" type="email" value="Email" id="email-input"/>
                </div>
              </div>
              <div className="form-group row">
                <div className="col">
                  <input className="form-control" type="tel" value="telephone" id="tel-input"/>
                </div>
              </div>
              <div className="form-group row">
                <div className="col">
                  <textarea className="form-control" type="text" value="Message" id="message-input"></textarea>
                </div>
              </div>
              <div className="form-group row justify-content-center">
                <button type="submit" className="btn btn-danger">Submit</button>
              </div>
            </form>
          </div>
        </div>
    );
  }
}

export default Contact;