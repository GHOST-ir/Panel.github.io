import React from 'react'
import Features from '../Components/featured/Features'
import './Home.css'
import Chart from '../Components/chart/Chart'
import { xAxisData } from '../datas'
import WidgetSM from '../Components/widgetSM/WidgetSM'
import WidgetLG from '../Components/widgetLG/WidgetLG'

export default function Home() {
    
  return (

    <div className="home">
      <Features />
      <Chart grid title='Month Sale' data={xAxisData} dataKey='Sale'/>
      <div className='homeWidget'>
        <WidgetSM />
        <WidgetLG />
      </div>
    </div>
    
  )
}
