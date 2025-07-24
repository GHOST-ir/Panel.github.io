import React from 'react'
import './widgetLg.css'
import Avatar from '@mui/material/Avatar'

export default function WidgetLG() {

    const Button = ({ state }: { state: string }) => (
    <button className={'widgetLgButton ' + state}>{state}</button>
);

  return (

    <>
    <div className="widgetLg">
    <h3 className="widgetLgTitle">Latest Transactions</h3>
    <table className="widgetLgTable">
        
            <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
        </tr>
        <tbody>
        <tr className="widgetLgTr fix">
            <td className="widgetLgUser">
                <Avatar sx={{objectFit:'cover' , margin:10 , backgroundColor:'purple'}}>MH</Avatar>
                <span className='widgetLgName'>Mohammad Hossain</span>
            </td>
            <td className="widgetLgDate">
                17 Nov 2025
            </td>

            <td className="widgetLgAmount">
                $670
            </td>

            <td className="widgetLgStatus">
                <Button state='Approved' />
            </td>
        </tr>

        <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <Avatar sx={{objectFit:'cover' , margin:10 , backgroundColor:'green'}}>R</Avatar>
                <span className='widgetLgName'>Jack Responsive</span>
            </td>
            <td className="widgetLgDate">
                24 Agu 2025
            </td>

            <td className="widgetLgAmount">
                $199.95
            </td>

            <td className="widgetLgStatus">
                <Button state='Decline' />
            </td>
        </tr>

        <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <Avatar sx={{objectFit:'cover' , margin:10 , backgroundColor:'red'}}>ZV</Avatar>
                <span className='widgetLgName'>Zcv Virgil</span>
            </td>
            <td className="widgetLgDate">
                2 May 2025
            </td>

            <td className="widgetLgAmount">
                $90.85
            </td>

            <td className="widgetLgStatus">
                <Button state='Approved' />
            </td>
        </tr>

        <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <Avatar sx={{objectFit:'cover' , margin:10 , backgroundColor:'blue'}}>X</Avatar>
                <span className='widgetLgName'>Teo Xavi</span>
            </td>
            <td className="widgetLgDate">
                18 Jun 2025
            </td>

            <td className="widgetLgAmount">
                $1200.99
            </td>

            <td className="widgetLgStatus">
                <Button state='Pending' />
            </td>
        </tr>
        </tbody>
        
    </table>
    </div>
    </>

  )
}
