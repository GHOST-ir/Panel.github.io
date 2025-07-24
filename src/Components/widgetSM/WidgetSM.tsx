import React from 'react'
import './widgetSM.css'
import Avatar from '@mui/material/Avatar'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { newUsers } from '../../datas';
import { colors } from '../../datas';

export default function WidgetSM() {

  return (

    <>
    <div className="widgetSM">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
            {newUsers.map(user => (
                <li className="widgetSmListItem">
                <Avatar sx={{backgroundColor:`${colors[Math.floor(Math.random() * 6)]}`}}>{user.userName[0]}</Avatar>
                <div className="widgetSmUser">
                    <span className='widgetSmUsername'>{user.userName}</span>
                    <span className='widgetSmUserTitle'>{user.title}</span>
                </div>
                <button className='widgetSmButton'><VisibilityIcon className='widgetSmIcon'/></button>
            </li>
            ))}
        </ul>
    </div>
    </>

  )
}
