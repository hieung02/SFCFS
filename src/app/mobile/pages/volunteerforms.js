import React, {Component} from 'react';

export class VolunteerForms extends Component {
  render() {
    return (
      <section className="form">
        <div className="tab">
          <button className="tablinks" onClick="openForm(e, 'models')">Model Volunteers Form</button>
          <button className="tablinks" onClick="openForm(e, 'admin')">Administration Volunteers Form</button>
          <button className="tablinks" onClick="openForm(e, 'exit')">Exit</button>
        </div>
        <hr/>
        <div>
          <embed className="form" id="models" src="https://docs.google.com/forms/d/e/1FAIpQLSe7hn3gC6VUj4WuoUwHzQYmlviQq5dV-1HR8tkW-CUw01c3MA/formResponse?embedded=true"/>
        </div>
      </section>
    );
  }
}
