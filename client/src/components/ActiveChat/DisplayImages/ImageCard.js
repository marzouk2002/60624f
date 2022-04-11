import React from 'react';
import {
    makeStyles,
    Box,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        flex: '1 0 50%',
        maxWidth: '200px',
    },

    img: ({ isSender, roundBottom }) => ({
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: isSender ? '15px 15px 0 15px' : '0px 15px 15px 15px', 
        borderBottomLeftRadius: (roundBottom && isSender) ? '0' : '15px',
    })

}));

const ImageCard = ({url, isSender, roundBottom}) => {
    const classes = useStyles({ roundBottom, isSender });
    return (
        <Box className={classes.root}>
            <img src={url} alt="sent by user" className={classes.img}/>
        </Box>
    )
};

export default ImageCard;