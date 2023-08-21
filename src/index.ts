// import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

// const useSocket = (url: string, options?: any) => {
//   const [socket, setSocket] = useState<Socket>();

//   useEffect(() => {
//     const socketIo = io(url, options);

//     setSocket(socketIo);
//     return () => {
//       socketIo.disconnect();
//     };
//   }, [url, options]);

//   return socket;
// };


class UCI {
  socket: Socket | undefined; 
  msgReceiveCb: any;
  session: any;
  constructor(URL: string, socketOptions: any, onRecieveCallback: any) {
    this.socket = io(URL, socketOptions);

    this.msgReceiveCb = onRecieveCallback;
    this.socket.connect();

    this.socket.on("botResponse", this.handleMessage);
    this.socket.on("session", this.handleSocketSession);
  }

  handleMessage = (message: any) => {
    //ReceiveCallback to be used here
    console.log(message);
    this.msgReceiveCb(message);
  };

  handleSocketSession = (session:any) => {
    console.log({session});
    
    this.session = session;
    
  };

  onDisconnect = () => {
    this.socket?.disconnect()
  }
  
  
 

  sendMessage = ({ text, to, from, optional }: any) => {
    // const x = {
    //   content: {
    //     text,
    //     to,
    //     appId: optional?.appId,
    //     channel: optional?.channel,
    //     from,
    //     context: null,
    //     accessToken: null,
    //   },
    //   to,
    // };
    console.log("Reundant code", text, to, from, optional);
    const payload: any = {
      content: {
        text: '*',
        appId: "f3acc237-2987-4f36-b52b-cf8cf74902fb",
        channel: "NL App",
        context: null,
        accessToken: null,
        from: this.session.socketID,
        userId: this.session.userID,
      },
      to: "nlpwa:8767447416",
   };
    console.log({payload});
    this.socket?.emit("botRequest", payload);
  };
}

export { UCI };

// const socket = new UCI({ url, socketOptions, callback });
// socket.sendMessage({ text, to, from, callback, optional });


// const socket = new UCI({url, socketOptions, callback});
// socket.sendMessage({text, to, from, callback, optional});
// socket.handleMessage();          


//! Callback will have 'bot request, bot response'
//! options will have connections and messages
//$ Like this: options:{connection:{}, message: {}} 

