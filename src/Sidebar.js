import React from "react";
import "./Sidebar.css";
import SidebarChannel from "./SidebarChannel";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import { Avatar } from "@material-ui/core";
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <h3>Testing room here</h3>
        <ExpandMoreIcon />
      </div>

      <div className="sidebar_channels">
        <div className="sidebar_channelsHeader">
          <div className="sidebar_header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>

         <AddIcon className="sidebar_addChannel" />
       </div>

        <div className="sidebar_channelsList">
         <SidebarChannel />
       </div>
      </div>

       <div className="sidebar_voice">
          <SignalCellularAltIcon 
            className="sidebar_voiceIcon"
           fontSize="large"
          />
         <div className="sidebar_voiceInfo">
           <h3>Voice Connected</h3>
           <p>Stream</p>
         </div>

         <div className="sidebar_voiceIcons">
            <InfoOutlinedIcon />
            <CallIcon />
         </div>
       </div>  
       <div className="sidebar_profile">
          <Avatar src="https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png"/>
          <div className="sidebar_profileInfo">
            <h3>@hkanawa</h3>
            <p>This is my ID</p>
          </div>
          <div className="sidebar_profileIcons">
            <MicIcon />
            <HeadsetIcon />
            <SettingsIcon />
          </div>
        </div> 
    </div>
  )
}

export default Sidebar