import { Avatar } from '@mui/material';
import React from 'react'

function Message() {
  return (
    <div className='message'>
        <Avatar />
        <div className='mes_info'>
            <h6>last.elixir.games
                <span className='timestamp'>timestamp</span>
            </h6>
            <p className='p-chat'>This feature coming soon...</p>
        </div>
        
    </div>
  );
};

export default Message;



// { timestamp, user, message}
// src={user.photo}
// {user.displayName}
// {new Date(timestamp?.toDate()).toUTCString()}