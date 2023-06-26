// import { ChatEngine } from 'react-chat-engine';
// import ChatFeed from './components/ChatFeed';
// import LoginForm from './components/LoginForm';
// import './App.css';

// const App = () => {
    
//   if (!localStorage.getItem('username')) return <LoginForm />;
//     return (
//       <ChatEngine
//         height="100vh"
//         projectID="fb483212-442c-4ce8-8e78-70d8c00a8b56"
//         userName="Sinjini"
//         userSecret="12345"
//         renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
//       />
//     );
//   };
//    export default App;

// import { ChatEngine } from 'react-chat-engine';
// import ChatFeed from './components/ChatFeed';
// import LoginForm from './components/LoginForm';
// import './App.css';
// // eslint-disable-next-line
// const projectID = 'fb483212-442c-4ce8-8e78-70d8c00a8b56';
// const App = () => {
//   if (!localStorage.getItem('username')) return <LoginForm />;
//   const generateRandomUsername = () => {
//     // Generate a random username using a desired logic
//     // For example, you can use a combination of a prefix and a random number
//     const prefix = 'User';
//     const randomNum = Math.floor(Math.random() * 1000);
//     return `${prefix}-${randomNum}`;
//   };
//   // eslint-disable-next-line
//     const randomUsername = generateRandomUsername();
//   // eslint-disable-next-line
//   const url = 'https://chatengine.io/projects/fb483212-442c-4ce8-8e78-70d8c00a8b56';
//   let requestCount = 0; 
//   const requestLimit = 10; 
//   const requestInterval = 60 * 1000; 

//   const makeChatEngineRequest = () => {
//     if (requestCount < requestLimit) {
      
//       requestCount++;
      
//       return (
//         <ChatEngine
//           height="100vh"
//           projectID="fb483212-442c-4ce8-8e78-70d8c00a8b56"
//           userName= "Sinjini"
//           userSecret="12345"
//           // userName={localStorage.getItem('username')}
//           // userSecret={localStorage.getItem('password')}
//           renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
//           onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}

//         />
//       );
//     } else {
      
//       setTimeout(() => {       
//         requestCount = 0;        
//         makeChatEngineRequest();
//       }, requestInterval);
//     }
//   };
//   return makeChatEngineRequest();
// };

// export default App;
import { useState } from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';
// eslint-disable-next-line
const projectID = 'fb483212-442c-4ce8-8e78-70d8c00a8b56';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <LoginForm handleLogin={handleLogin} />;
  }

  const generateRandomUsername = () => {
    const prefix = 'User';
    const randomNum = Math.floor(Math.random() * 1000);
    return `${prefix}-${randomNum}`;
  };
  // eslint-disable-next-line
  const randomUsername = generateRandomUsername();

  return (
    <ChatEngine
      height="100vh"
      projectID="fb483212-442c-4ce8-8e78-70d8c00a8b56"
      userName={localStorage.getItem('username')}
       userSecret={localStorage.getItem('password')}
      // userName={randomUsername}
      // userSecret="12345"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()
      }
    />
  );
};

export default App;
