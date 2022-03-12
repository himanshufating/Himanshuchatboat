import { createChatBotMessage} from 'react-chatbot-kit';
import LearningOption from "./LearningOption";
import LinkList from "./LinkList/LinkList";
import AcdList from './LinkList/AcdList';
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
                text: "My Name is Himanshu Fating.",
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
      }    
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