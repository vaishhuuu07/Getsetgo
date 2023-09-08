import React, { useState } from 'react'
import styles from './Lock.module.css';
import {Card,Typography,Modal,Box,CardMedia,Button,Rating,CardContent,CardActions} from '@mui/material';

const Lock = ({value}) => {

   

    return (
        <div className={styles.container}>
        
    
        <span className={!value?`${styles.lock} ${styles.unlocked}`:styles.lock}></span>
        
        </div>
            
    )
}

export default Lock