import React, { useState } from 'react'
import styles from './Itinerary.module.css';
import List from '../List/List';
import Lock from '../Lock/Lock';
import {Card,Typography,Modal,Box,CardMedia,Button,Rating,CardContent,CardActions} from '@mui/material';

const Itinerary = () => {

    const [heading,setHeading] = useState(false)
    const [lock,setLock] = useState(true)

    const itinerarydata = [
        {
            id:1,
            Date: '15th Dec',
            heading: 'Enjoy at the beach',
            heading2: 'Enjoy at the caves',
            content: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.',
            },
            {
                id:2,
                Date: '16th Dec',
                heading: 'Visiting the locals',
                heading2: 'Playing with the locals',
                content: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.',
            },
            {
                id:3,
                Date: '17th Dec',
                heading: 'Fun activities at the Resort',
                heading2: 'Chilling at the Sunset',
                content: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.',
            },
            {
                id:4,
                Date: '18th Dec',
                heading: 'Exploring the palaces',
                heading2: 'Eating in the royal Palace',
                content: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.',
            },
            {
                id:5,
                Date: '19th Dec',
                heading: 'Mountain Trekking',
                heading2: 'Surfing in the Basil Sea',
                content: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.',
            }

            
    ]

    return (
        <div>
        <div className={styles.timeline}>
            {itinerarydata.map((i) => {

const classToApply = i.id % 2 === 0 ? styles.left : styles.right;

                return (

                    <div className={`${styles.container} ${classToApply}`} >
                    <div className={styles.date}>{i.Date}</div>
                    <i className={styles.icon} style={{ background: heading ? '#03f4fc' : '#F6D155' }} >Icon</i>
                    <div className={styles.content} style={{ background: heading ? '#03f4fc' : '#F6D155' }}>
                    <h2 style={{ color: heading ? '#eb3bdf' : '#006E51' }} >{heading === true ?i.heading :i.heading2}</h2>
                    <p>
                        {i.content}
                    </p>
                    </div>
                </div>

                )
            })}

    </div>
    <div style={{display:'flex',gap:10}}>
    <Button size="medium" variant='contained' onClick={() =>setHeading(!heading)}>Generate Another</Button>
    
    </div>
    <div style={{position:'relative'}}>
        <List value={lock} />
       <div style={{position:'absolute',top:'35%',left:'35%',opacity: !lock ? '0.1' : '1' }} onClick={() =>setLock(!lock) }>
        <h4>Unlock bonus Essentials</h4>
       <Lock value={lock}/>
       </div>
    </div>

    
    </div>
            
    )
}

export default Itinerary