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
        else if(lowermsg.includes("hi"))
        {
            this.ActionProvider.Hi();
        }
        else if(lowermsg.includes("Hi"))
        {
            this.ActionProvider.Hi();
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