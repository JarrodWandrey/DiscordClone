import React from 'react'
import "./ChatHeader.css"
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditLocationRoundedIcon from '@mui/icons-material/EditLocationRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';

function ChatHeader({ channelName }) {
  return (
    <div className='chatHeader'>
        <div className="chatHeader__Left">
            <h3> <span className="chatHeader__hash">#</span>
                {channelName}
            </h3>
        </div>
        <div className="chatHeader__Right">
            <NotificationsIcon />
            <EditLocationRoundedIcon />
            <PeopleAltRoundedIcon />


            <div className="chatHeader__search">
                <input placeholders='Search' />
                <SearchRoundedIcon />
            </div>

            <SendRoundedIcon />
            <HelpRoundedIcon />
        </div>
    </div>
  )
}

export default ChatHeader