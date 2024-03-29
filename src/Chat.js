import React, { useEffect, useState } from 'react';
import './Chat.css';
import ChatHeader from './ChatHeader'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from './features/appSlice';
import { selectUser } from './features/userSlice';
import db from './firebase';
import firebase from "firebase/compat/app";


function Chat() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [data, setData] = React.useState([])

  useEffect (() => {
    if (channelId) {
      db.collection("channels")
      .doc(channelId)
      .collection("messages")
      .orderBy("timestamp", "desc")
      // .onSnapshot((snapshot) =>
      // setMessages(snapshot.docs.map((doc) => ({ id: doc.id, messages: doc.data() }))
      // )
    // );
    }
  }, [channelId]);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("channels").doc(channelId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user,
    });

    setInput("");
  };

  return (
    <div className='chat'>
        <ChatHeader  channelName={channelName}/>

        <div className="chat__messages">
          {messages.map((Message) => (
            <Message />
          ))}
        </div>
        <div className="chat__input">
            <AddCircleIcon fontSize="large" />
            <form>
                <input
                value={input}
                disabled={!channelId}
                onChange={e => setInput(e.target.value)}
                placeholder={`Message #${channelName}`}
                />
                <button className='chat__inputButton' type='submit' onClick={sendMessage}>
                  send message
                </button>
            </form>
            <div className="chat__inputIcons">
              <CardGiftcardIcon fontSize="large" />
              <GifIcon fontSize="large" />
              <EmojiEmotionsIcon fontSize="large" />
            </div>
        </div>
    </div>
  )
}

export default Chat