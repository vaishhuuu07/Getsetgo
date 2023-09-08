import React, { useState } from 'react'
import styles from './List.module.css';
import {Card,Typography,Modal,Box,CardMedia,Button,Rating,CardContent,CardActions} from '@mui/material';

const List = ({value}) => {

   

    return (
        <div className={styles.paper} style={{ opacity: value ? '0.02' : '1' }}
        >
                <ul className={styles.list99}>
                    <li>Light and airy clothing. ...</li>
                    <li>Sunscreen. ...</li>
                    <li>Sunglasses. ...</li>
                    <li>Comfortable footwear. ...</li>
                    <li>Water bottle. ...</li>
                    <li>Insect repellent.</li>
                    <li>Hat or cap. ...</li>
                </ul>
        </div>
            
    )
}

export default List