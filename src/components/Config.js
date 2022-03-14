import { createChatBotMessage} from 'react-chatbot-kit';
import LearningOption from "./LearningOption";
import LinkList from "./LinkList/LinkList";
import AcdList from './AcdList/AcdList';
import TechnicalList from './TechnicalList/TechnicalList';
import ProjectList from './ProjectList/ProjectList';
import ContactList from './ContactList/ContactList';
import React from 'react';
    const config = {
    
    botName: "HimanshuBot",
    
    initialMessages:
    [createChatBotMessage("Hi, I'm Himanshu. What do you want to know about me?", {widget: "learningOption"})],
    widgets: [
        {
            widgetName: "learningOption",
           widgetFunc: (props) => <LearningOption {...props} />,
        },
        {
            widgetName: "Personal Info",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
              poptions: [
                {
                  text: "My Name is Himanshu Fating. I am From Orange city i.e Nagpur.",
                  id: 1,
                },
                {
                  text: "I like Swimming also interest in Calisthenics. Calisthenics are exercises that don't rely on anything but a person own body weight. ",
                  id: 2,
                },
                {
                  text: "I am Frontend Devloper and learing new stacks.",
                  id: 3,
                },
              ],
            },
        },
        {
          widgetName: "Academic Info",
          widgetFunc: (props) => <AcdList {...props} />,
          props: {
            acdoptions: [
              {
                text: "I am fresh Engineering Graduate specialised in Mechanical Engineering.",
                id: 1,
              },
              {
                text: "I done my graduation from Priyadarshini Bhagwati College of Engineering, Nagpur",
                id: 2,
              },
              {
                text: "Graduation : Mechanical Engg - 2020",
                id: 3,
              },
              {
                text: "HSC : Science - 2016",
                id: 4,
              },
              {
                text: "SSC : General - 2014",
                id: 5,
              },
            ],
          },
      },    
      {
        widgetName: "Technical Stacks",
        widgetFunc: (props) => <TechnicalList {...props} />,
        props: {
          Techoptions: [
            {
              text: "I am fresh Engineering Graduate specialised in Mechanical Engineering.",
              id: 1,
            },
            {
              text: "I done my graduation from Priyadarshini Bhagwati College of Engineering, Nagpur",
              id: 2,
            },
            {
              text: "Graduation : Mechanical Engg - 2020",
              id: 3,
            },
            {
              text: "HSC : Science - 2016",
              id: 4,
            },
            {
              text: "SSC : General - 2014",
              id: 5,
            },
          ],
        },
    },
    {
      widgetName: "Project Info",
      widgetFunc: (props) => <ProjectList {...props} />,
      props: {
        projoptions: [
          {
            title: "TIC TAC TOE:",
            text: "Tic Tac Toe is strategic classic game, where two player plays alternatively as per the input.",
            stack:" HTML, CSS, JavaScript.",
            host:"https://himanshufating.github.io/TIC-TAC-TOE/",
            id: 1,
          },
          {
            title: "CALCULATOR",
            text: "Digital calculator which take the input from the user and gives the output as per the operator used in the input.",
            stack:" React.js",
            host:"https://himanshufating.github.io/myCalculator/",

            id: 2,
          },
          {
            title: "TIP CALCULATOR",
            text: "Tip calculator which takes billing amount, type of service, and a number of persons as input. As per the three inputs it generates a tip for the serving person.",
            stack:" HTML , CSS , JavaScript.",
            Host:"https://himanshufating.github.io/TIP_Calculator/",
            id: 3,
          },
          {
            title: "FACEBOOK LOGIN PAGE",
            text: "Features: Facebook login page with password validated with the help of JavaScript.",
            stack:" HTML , CSS , JavaScript.",
            Host:"https://himanshufating.github.io/FACEBOOK/",
            id: 4,
          },
        ],
      },
  },     
  {
    widgetName: "Contact Info",
    widgetFunc: (props) => <ContactList {...props} />,
    props: {
      contoptions: [
        {
          address: "Plot No.24, Omkar Nagar Square Opposite South Point School ,Gajana Nagar",
          city: "Nagpur",
          state: "Maharashtra",
          phone: "7721954816",
          linked :"https://www.linkedin.com/in/himanshufating/",
          lsymbol:"<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'> <g fill='#069' fill-rule='nonzero'> <path d='M0 7.556h5.333V23.11H0zM2.906 0C1.149 0 0 1.152 0 2.667c0 1.481 1.115 2.666 2.838 2.666h.034c1.791 0 2.906-1.185 2.906-2.666C5.744 1.152 4.663 0 2.906 0zM18.133 7.111c-2.704 0-3.915 1.515-4.592 2.58V7.479H8.444v15.633h5.096v-8.73c0-.467.034-.934.168-1.268.369-.934 1.207-1.9 2.615-1.9 1.844 0 2.581 1.433 2.581 3.535v8.363H24v-8.964c0-4.802-2.514-7.036-5.867-7.036z'/> </g> </svg>",
          github:"https://github.com/himanshufating",
          id: 1,
        },

      ],
    },
},
    ],
    customStyles: {
    botMessageBox: {
    backgroundColor: "rgb(41, 206, 69)",
    },
    chatButton: { backgroundColor: "#376B7E",
    },
    
    },
}
    export default config;