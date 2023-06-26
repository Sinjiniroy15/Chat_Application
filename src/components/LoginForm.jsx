// import { useState } from 'react';
// import axios from 'axios';
// // eslint-disable-next-line 
// const projectID = 'fb483212-442c-4ce8-8e78-70d8c00a8b56';

// const LoginForm = () =>{
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const authObject = { 'Project-ID': "fb483212-442c-4ce8-8e78-70d8c00a8b56", 'User-Name': username, 'User-Secret': password };

//         try {
//             await axios.get('https://api.chatengine.io/chats', { headers: authObject });
      
//             localStorage.setItem('username', username);
//             localStorage.setItem('password', password);
      
//             window.location.reload();
//             setError('');
//           } catch (err) {
//             setError('Oops, incorrect credentials.');
//           }

//     }

//     return (
//         <div className="wrapper">
//          <div className="form">
//             <h1 className="title">Chat Application</h1>
//             <form onSubmit={handleSubmit}>
//             <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
//             <div align="center">
//                 <button type="submit" className="button">
//                 <span>Start chatting</span>
//                 </button>
//             </div>
//             </form>
//             <h1>{error}</h1>
//         </div>
//         </div>
    
//       );

// };
// export default LoginForm;

import { useState } from 'react';
import axios from 'axios';
// eslint-disable-next-line
const projectID = 'fb483212-442c-4ce8-8e78-70d8c00a8b56';

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authObject = {
      'Project-ID': "fb483212-442c-4ce8-8e78-70d8c00a8b56",
      'User-Name': username,
      'User-Secret': password,
    };

    try {
      //https://chatengine.io/projects/fb483212-442c-4ce8-8e78-70d8c00a8b56
      //await axios.get('https://chatengine.io/projects/fb483212-442c-4ce8-8e78-70d8c00a8b56', { headers: authObject });
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });
      //await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      handleLogin(); // Call the handleLogin function passed as a prop

      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
      //console.log(err.response)
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>
  );
};

export default LoginForm;




