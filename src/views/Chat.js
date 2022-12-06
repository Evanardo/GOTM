import React from 'react';
import Message from '../components/Message';

function Chat() {
  return (
      <div >
          <section className='chat'>
              <h1>GOTM CHAT</h1>
              <div className='chat'>
                  <div className='goTm-chat-header'>

                      <h2>Eastward Devotional</h2>
                      <form>
                        <input className='chat-search' placeholder='What is it you seek?' />    
                      </form>
                  </div>
                  
                  <div className='goTm-chat-body'>
                    <Message

                    />
                  </div>

                  <div className='goTm-chat-text'>
                      <form>
                          <input placeholder={`Sermon`} />
                          <button className='chatTextButton' type='submit'></button>
                      </form>
                  </div>
              </div>
          </section>
      </div>
  )
}

export default Chat