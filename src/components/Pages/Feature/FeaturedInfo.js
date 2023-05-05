import React from 'react'
import './featuredInfo.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const FeaturedInfo = (props) => {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <h4 className='featuredTitle'>Revenue</h4>
            <div className='featureContainer'>
                <span className='f-money'>$2,234</span>
                <span className='f-rate'>-10.5 
                <ArrowDownwardIcon />
                </span>            
            </div>
        </div>

        <div className='featuredItem'>
            <h4 className='featuredTitle'>Revenue</h4>
            <div className='featureContainer'>
                <span className='f-money'>$2,234</span>
                <span className='f-rate'>-10.5 
                <ArrowDownwardIcon className='f-rateIcon negative'/>
                </span>            
            </div>
        </div>

        <div className='featuredItem'>
            <h4 className='featuredTitle'>Revenue</h4>
            <div className='featureContainer'>
                <span className='f-money'>$2,234</span>
                <span className='f-rate'>-10.5 
                <ArrowUpwardIcon />
                </span>            
            </div>
        </div>
      
    </div>
  )
}

export default FeaturedInfo
