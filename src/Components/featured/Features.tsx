import React from 'react'
import './featured.css'
import ArrowDownIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

export default function Features() {
    
  return (

    <div className="features">
      <div className="featureItem">
        <span className='featureTitle'>Profit</span>
        <div className="featureContainer">
          <span className='featureMoney'>$2,415</span>
          <span className='featureRate'>-11.4 <ArrowDownIcon className='featureIcon negative'/></span>
        </div>
        <span className="featureSub">Compared to last month</span>
      </div>

      <div className="featureItem">
        <span className='featureTitle'>Sales</span>
        <div className="featureContainer">
          <span className='featureMoney'>$4,415</span>
          <span className='featureRate'>-1.4 <ArrowDownIcon className='featureIcon negative'/></span>
        </div>
        <span className="featureSub">Compared to last month</span>
      </div>

      <div className="featureItem">
        <span className='featureTitle'>Cost</span>
        <div className="featureContainer">
          <span className='featureMoney'>$2,225</span>
          <span className='featureRate'>+2.8 <ArrowUpwardIcon className='featureIcon'/></span>
        </div>
        <span className="featureSub">Compared to last month</span>
      </div>
    </div>
    
  )
}
