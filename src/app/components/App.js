import React from 'react';
import Header from './Header';
import Content from './Content';
import RandomNumber from './RandomNumber';
import ContactInfo from './contact';

class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      value: Math.round(Math.random()*100)
    };
    this.updateValue = this.updateValue.bind(this);
  }

  render(){
    return(
      <div>
        <Header title = {this.props.headerTitle}/>
        <Content title={this.props.contentTitle}
      body={this.props.contentBody} />
        <RandomNumber number={this.state.value}
        onUpdate={this.updateValue} />
      <ContactInfo />
      </div>
    );
  }


  updateValue(randomValue){
    this.setState({
      value: randomValue
    });
  }

}

App.defaultProps = {
    headerTitle: "Default header",
    contentTitle: "Content",
    contentBody: "Hey!"
  };

export default App;
