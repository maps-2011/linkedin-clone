import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
function Widgets() {
    const newsArticle=(heading,subtitle)=>(
        <div className="widgets__article">
            <div className="widget__articleLeft">
            <FiberManualRecordIcon />
            </div>
            <div className="widget__articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>

            </div>
        </div>
    )                        
    return (
        <div className='widgets'>
            <div className="widgets__header">
            <h2>News</h2>
                <InfoIcon />
            </div>
            {newsArticle("One Plus","OnePlus Buds Pro TWS earbuds with adaptive noise cancellation launched")}
            {newsArticle("Telegram","Telegram founder Pavel Durov says he was aware of being Pegasus snooping target since 2018")}
            {newsArticle("Flipkart","Flipkart launches Flipkart camera on its app to let buyers know what product would look like in reality ")}
            {newsArticle("Airtel","Airtel upgrades postpaid offers for corporate and retail users, plans start at Rs 299")}
        </div>
    )
}

export default Widgets
