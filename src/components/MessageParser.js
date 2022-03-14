import React from 'react';

class MessageParser extends React.Component {
constructor(ActionProvider) {
        super(ActionProvider);
        this.ActionProvider=ActionProvider;
}
    parse(message)
    {
        const lowermsg=message.toLowerCase()
        if(lowermsg.includes("hello"))
        {
            this.ActionProvider.greet();
        }
        else if(lowermsg.includes("namste"))
        {
            this.ActionProvider.namste();
        }
        else if(lowermsg.includes("hola"))
        {
            this.ActionProvider.hola();
        }
        else if(lowermsg.includes("kunal"))
        {
            this.ActionProvider.La();
        }
        else if(lowermsg.includes("mc"))
        {
            this.ActionProvider.Ma();
        }
        else if(lowermsg.includes("hi"))
        {
            this.ActionProvider.Hi();
        }
        else if(lowermsg.includes("how are you"))
        {
            this.ActionProvider.How();
        }
        else if(lowermsg.includes("kiran"))
        {
            this.ActionProvider. KiranDornachya();
        }
        else if(lowermsg.includes("akshata"))
        {
            this.ActionProvider.Akshata();
        }
        else if(lowermsg.includes("anjali"))
        {
            this.ActionProvider.Anjali();
        }
        else if(lowermsg.includes("personal info"))
        {
            this.ActionProvider.handlePersonalInfo();
        } 
        else if(lowermsg.includes("academic info"))
        {
            this.ActionProvider.handleAcademiclInfo();
        }
        else if(lowermsg.includes("projects info"))
        {
            this.ActionProvider.handleProjectInfo();
        }
        else if(lowermsg.includes("technical stack"))
        {
            this.ActionProvider.technical();
        }
        else if(lowermsg.includes("contacts info"))
        {
            this.ActionProvider.contacts();
        }

        else
        {
            this.ActionProvider.sorry();
        }
    }
    render() {
        return <div></div>;
    }
}

export default MessageParser;