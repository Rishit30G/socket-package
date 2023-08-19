## Description

socket-package is a lightweight and efficient utility designed for establishing and handling socket connections with ease. Built on top of the popular socket.io-client, this package simplifies the process of initializing socket instances, handling incoming messages, and managing sessions. Whether you're building a chat application, real-time data dashboard, or any other system that relies on websockets, socket-package is here to make your development process smoother.

## Installation 

```bash
npm install socket-package
```

## Usage 
### Initialization
```javascript
import { UCI } from 'socket-package';

const url = 'YOUR_SOCKET_URL';
const socketOptions = {}; // Your socket.io options
const callback = (message) => {
   console.log("Received message: ", message);
};

const socket = new UCI(url, socketOptions, callback);
```

### Sending Messages
```javascript
socket.sendMessage({
   text: 'Your Message Text',
   to: 'Recipient',
   from: 'Sender',
   optional: {
      appId: 'YourAppID',
      channel: 'YourChannel'
   }
});
```

### Handling Disconnects
```javascript
socket.onDisconnect(() => {
   console.log("Socket disconnected");
});
```


## License

This project is licensed under the [MIT License](https://opensource.org/license/mit/). You are free to use, modify, and distribute this package in your projects, as long as the original license and copyright notes are included.

## Issues and Contributions

Your feedback is crucial to the improvement of socket-package. If you encounter any issues or have suggestions for improvements, please feel free to reach out to us, We also welcome contributions to the project [here](https://github.com/Rishit30G/socket-package).

Reporting Issues: Please use the GitHub issues page to report any issues you encounter.
Contributions: We welcome contributions! Please feel free to fork the repository, make your changes, and submit a pull request.
Thank you for your support!

