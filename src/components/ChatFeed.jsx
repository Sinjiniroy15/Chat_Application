// eslint-disable-next-line
import MyMessage from './MyMessage';
// eslint-disable-next-line
import TheirMessage from './TheirMessage';
// eslint-disable-next-line
import MessageForm from './MessageForm';
// eslint-disable-next-line
import React, { useEffect } from 'react';//extra code added to avoid assynchronous errors


const ChatFeed = (props) => {
    // eslint-disable-next-line 
   const {chats, activeChat, userName, messages}=props;
    // eslint-disable-next-line 
   const chat = chats && chats[activeChat];
   // eslint-disable-next-line 
   const renderReadReceipts = (message, isMyMessage) => chat.people.map((person, index) => person.last_read === message.id && (
    <div
      key={`read_${index}`}
      className="read-receipt"
      style={{
        float: isMyMessage ? 'right' : 'left',
        backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
      }}
    />
  ));
    // eslint-disable-next-line 
   const renderMessages = () => {
    const keys = Object.keys(messages);
    
    return keys.map((key, index) =>{
        const message = messages[key];
        const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: '100%' }}>
             <div className="message-block">
             {isMyMessage
              ? <MyMessage message={message} />
              : <TheirMessage  message={message} lastMessage={messages[lastMessageKey]} />}
             </div>
             <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
             {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      )
    })

   };
   if(!chat) return 'Loading...';
   
   
   return (
    <div className="chat-feed">
    <div className="chat-title-container">
      <div className="chat-title">{chat?.title}</div>
      <div className="chat-subtitle">
        {chat.people.map((person) => ` ${person.person.username}`)}
      </div>

    </div>
    {renderMessages()}
    <div style={{ height: '100px' }} />
    <div className="message-form-container">
      <MessageForm {...props} chatId={activeChat} />
      
    </div>
  </div>
   );
  
    
      
       
  };
    
   

    export default ChatFeed;