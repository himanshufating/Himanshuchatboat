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

How()
{
    const namstemsg=this.createChatBotMsg("I am Absoulty Fine ");
    this.updateChatbotState(namstemsg)
}
La()
{
    const namstemsg=this.createChatBotMsg("Sudharla beta Bhai ko paisa magta abhi ");
    this.updateChatbotState(namstemsg)
}
Akshata()
{
    const namstemsg=this.createChatBotMsg("Hello Anjel First Time in My life Someone give me name its you Vasuki its feel me so special the between mw and you one thing most commom both love Nature Also you have a Golden heart OOH YOU'RE THE BEST FRIEND THAT I EVER HAD/I'VE BEEN WITH YOU SUCH A LONG TIME/YOU'RE MY SUNSHINE AND I WANT YOU TO KNOW THAT MY FEELINGS ARE TRUE REALLY LOVE AS MY BEST FRIEND. Not so perfectly, but I promise i stay with you From dimples to wrinkles. ");
    this.updateChatbotState(namstemsg)
}
Anjali()
{
    const namstemsg=this.createChatBotMsg("Hey Anjali I Never ever seen like that you . You are so different from other you lie  in that moment Your beauty cannot be ignored, it is something unbelievable because it not only pleases my eyes but also warms my heart. ");
    this.updateChatbotState(namstemsg)
}
KiranDornachya()
{
    const namstemsg=this.createChatBotMsg("Pranam Dornachya");
    this.updateChatbotState(namstemsg)
}
sorry()
{
    const namstemsg=this.createChatBotMsg("Sorry, I didn't get you! can you please try it in other way.");
    this.updateChatbotState(namstemsg)
}
technical= ()=>
{
    const namstemsg=this.createChatBotMsg( "Ok, So let me tell you about my Technical Stacks:",
    {
      widget: "Technical Stacks",
    }
    );
    this.updateChatbotState(namstemsg)
}
Ma()
{
  const namstemsg=this.createChatBotMsg("Nekal Lavde");
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
  handleProjectInfo = () =>{
    const message = this.createChatBotMsg(
      "I have done various projects on different technical stacks such as HTML,CSS,JavaScript and React:",
      {
        widget: "Project Info",
      }
    );

    this.updateChatbotState(message);
  }
  contacts = () =>{
    const message = this.createChatBotMsg(
      "My Contact Information are given below:",
      {
        widget: "Contact Info",
      }
    );

    this.updateChatbotState(message);
  }
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