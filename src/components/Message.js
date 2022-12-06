import { Avatar } from '@mui/material';
import React from 'react'

function Message() {
  return (
    <div className='message'>
        <Avatar/>
        <div className='mes_info'>
            <h6>last.elixir.games
                <span className='timestamp'>This is a timestamp</span>
            </h6>
            <p className='p-chat'>message</p>
        </div>
        
    </div>
  )
}

export default Message;