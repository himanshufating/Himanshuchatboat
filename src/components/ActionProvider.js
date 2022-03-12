import React from 'react';

class ActionProvider extends React.Component {
    constructor(createChatBotMsg,setStateFunc) {
  super(createChatBotMsg,setStateFunc);
    this.createChatBotMsg=createChatBotMsg
    this.setState = setStateFunc;
}
greet()
{
    const greetmsg=this.createChatBotMsg("Hi, How can I help you?");
    this.updateChatbotState(greetmsg)
}
namste()
{
    const namstemsg=this.createChatBotMsg("Namste, How can I help you?");
    this.updateChatbotState(namstemsg)
}
hola()
{
    const namstemsg=this.createChatBotMsg("Hola, How can I help you?");
    this.updateChatbotState(namstemsg)
}
Hi()
{
    const namstemsg=this.createChatBotMsg("Hello, How can I help you?");
    this.updateChatbotState(namstemsg)
}
sorry()
{
    const namstemsg=this.createChatBotMsg("Sorry, I didn't get you! can you please try it in other way.");
    this.updateChatbotState(namstemsg)
}
technical()
{
    const namstemsg=this.createChatBotMsg("I have techical knowledge of HTML, CSS, JavaScript and React");
    this.updateChatbotState(namstemsg)
}

handlePersonalInfo = () => {
    const message = this.createChatBotMsg(
      "Ok, So let me tell you about myself:",
      {
        widget: "Personal Info",
      }
    );

    this.updateChatbotState(message);
  };
  
  handleAcademicInfo = () => {
    const message = this.createChatBotMsg(
      "Ok, So let me tell you about my Academics:",
      {
        widget: "Academic Info",
      }
    );

    this.updateChatbotState(message);
  };

updateChatbotState(message)
{
    this.setState(prevState=>({
        ...prevState, messages:
         [...prevState.messages,message]
    }))
}
    render() {
        return <div></div>;
    }
}


export default ActionProvider;