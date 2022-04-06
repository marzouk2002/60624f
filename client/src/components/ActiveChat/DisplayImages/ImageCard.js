import React from 'react';
import PropTypes from 'prop-types';
import {
    makeStyles,
    Box,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        flex: '1 0 50%',
        maxWidth: '200px',
        maxHeight: '200px',
    },

    img: {
        width: '100%',
        height: '100%',
    }

}));

const ImageCard = ({url}) => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <img src={url} alt="sent by user" className={classes.img}/>
        </Box>
    )
};

ImageCard.propTypes = {
    url: PropTypes.string.isRequired
};

export default ImageCard;