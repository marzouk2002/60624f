import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Images from './DisplayImages/Images';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  date: props => ({
    fontSize: 11,
    color: '#BECCE2',
    fontWeight: 'bold',
    marginBottom: 5,
    order: props.attachments.length > 1 ? 2 : -1,
  }),
  text: {
    fontSize: 14,
    color: '#91A3C0',
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: 'bold',
  },
  bubble: {
    background: '#F4F6FA',
    borderRadius: '10px 10px 0 10px',
    display: 'flex',
    flexDirection: 'column',
  },
}));

const SenderBubble = ({ time, text, attachments }) => {
  const classes = useStyles({ attachments });

  return (
    <Box className={classes.root}>
      <Typography className={classes.date}>{time}</Typography>
      <Box className={classes.bubble}>
        <Typography className={classes.text}>{text}</Typography>
      </Box>
      <Images 
        attachments={attachments}
        roundBottom={attachments.length===1 && text.length > 0 }
        isSender={true}
      />
    </Box>
  );
};

export default SenderBubble;
