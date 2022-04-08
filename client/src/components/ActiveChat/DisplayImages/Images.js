import React from 'react';
import {
  makeStyles,
  Box
} from '@material-ui/core';
import ImageCard from './ImageCard';

const useStyles = makeStyles(() => ({
  root: props => ({
    display: 'flex',
    width: '250px',
    gap: '15px',
    justifyContent: props.isSender ? 'end' : 'start',
    order: props.attachments.length > 1 ? 1 : -1,
  })
}));

const Images = ({ attachments, isSender, roundBottom }) => {
  const classes = useStyles({ attachments, isSender });

  return (
    <Box className={classes.root}>
      {
        attachments.map((attachment, index) => (
          <ImageCard 
            url={attachment}
            key={index}
            roundBottom={roundBottom}
            isSender={isSender}
          />
        ))
      }
    </Box>
  )
};



export default Images;