import React from 'react';
import ReactDOM from 'react-dom';

class ContactInfo extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      contactData: [
        {name: "Albert", phone: "111-456-789"},
        {name: "Gina", phone: "222-456-789"},
        {name: "Ryan", phone: "333-456-789"},
        {name: "Michelle", phone: "444-456-789"},
        {name: "Keith", phone: "555-456-789"}
      ]

    };
  }

  render(){
    return(
      <div>
        <h3>Contacts</h3>
      <ul>
        {this.state.contactData.map((data, key)=>{
          return(<ContactInfoData name={data.name} phone={data.phone} key={key}/>);
        })}
      </ul>
      </div>
    )
  }
}

class ContactInfoData extends React.Component{
  render(){
    return(
      <li>
        name: {this.props.name}
        phone: {this.props.phone}
      </li>
    );
  }
}

export default ContactInfo;
