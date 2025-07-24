import React from 'react'
import './TopBar.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import Avatar from '@mui/material/Avatar';
import BlurOnIcon from '@mui/icons-material/BlurOn';

export default function TopBar() {

  return (

    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft"><span className="logo">PanelTT 💎</span></div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsIcon />
                    <span className='topIconBadge'>2</span>
                </div>
                
                <div className="topbarIconContainer">
                    <LanguageIcon />
                    <span className='topIconBadge'>2</span>
                </div>
                
                <div className="topbarIconContainer">
                    <SettingsIcon />
                </div>
                <Avatar sx={{ backgroundColor : 'orange' }}><BlurOnIcon /></Avatar>
            </div>
        </div>
    </div>

  )
}
