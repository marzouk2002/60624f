import React from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Box
} from '@material-ui/core';
import ImageCard from './ImageCard';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    width: '250px',
    gap: '10px',
    justifyContent: 'end',
  }
}));

const Images = ({ attachments }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {
        attachments.map((attachment, index) => (
          <ImageCard url={attachment} key={index}/>
        ))
      }
    </Box>
  )
};

Images.propTypes = {
  attachments: PropTypes.array.isRequired
};


export default Images;