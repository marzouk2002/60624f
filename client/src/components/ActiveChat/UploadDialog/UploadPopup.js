import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    makeStyles,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Box,
    Card,
    CardActionArea,
    CardMedia,
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    content: {
        width: '500px',
        height: '400px',
        overflow: 'auto',
    },

    inputWrapper: {
        width: '100%',
        display: 'grid',
        placeItems: 'center',
        marginBottom: '20px',
    },

    input: {
        width: '7.4rem',
        height: '2.6rem',
        cursor: 'pointer',
        position: 'relative',
        background: theme.palette.primary.main,
        color: 'transparent',
        borderRadius: '10px',
        transition: 'transform 0.3s ease-in-out',

        '&::-webkit-file-upload-button' : {
            visibility: "hidden",
        },

        "&:hover": {
            transform: 'scale(1.2)',
        },

        '&::after' : {
            content: '"Select File"',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            fontSize: '1.3rem',
            color: '#FFF',
            fontWeight: '600',
            display: 'grid',
            placeItems: 'center',
        }
    },

    imgWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        gap: '10px',
        marginTop: '10px',
    },

    img: {
        flex : '1 0 190px',
    }
}));

const UploadPopup = (props) => {
    const { open, setOpen, setImages } = props;
    const classes = useStyles();
    const [ imagesUrl, setImagesUrl ] = useState([]);

    const handleClose = () => {
        setOpen(false);
    };

    const clearImages = () => {
        setImagesUrl([]);
        setImages([]);
    };

    const filterByIndex = (arr, index) => {
        return arr.filter((item, i) => i !== index);
    };

    const deleteFile = (index) => {
        setImagesUrl(prev => filterByIndex(prev, index));
        setImages(prev => filterByIndex(prev, index));
    };

    const handleInputChange = (e) => {
        const files = Object.values(e.target.files);
        const filesUrls = files.map(file => URL.createObjectURL(file));
        setImagesUrl(prev =>[ ...prev, ...filesUrls]);
        setImages(prev =>[ ...prev, ...files]);
    };

    return (
        <Dialog onClose={handleClose} open={open}  className={classes.root}>
            <DialogTitle>
                Upload Pictures
            </DialogTitle>
            <DialogContent dividers className={classes.content}>
                <Box className={classes.inputWrapper}>
                    <input 
                        type='file'
                        multiple
                        accept="image/*"
                        className={classes.input}
                        onChange={handleInputChange}
                    />
                </Box>
                {imagesUrl.length ? <Typography>Double click on any image to remove it.</Typography> : ''}
                <Box className={classes.imgWrapper}>
                    {imagesUrl.map((url, index) => (
                        <Card className={classes.img} key={index}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="selected image"
                                    height="150"
                                    image={url}
                                    title="Double click to remove"
                                    onDoubleClick={() => deleteFile(index)}
                                />
                            </CardActionArea>
                        </Card>
                    ))}
                </Box>
            </DialogContent>
            <DialogActions>
            <Button onClick={clearImages} color="inherit">
                Clear
            </Button>
            <Button onClick={handleClose} color="primary">
                Close
            </Button>
            </DialogActions>
        </Dialog>
    );
}

UploadPopup.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    setImages: PropTypes.func.isRequired,
};

export default UploadPopup;