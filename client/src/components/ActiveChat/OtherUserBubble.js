import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Avatar } from '@material-ui/core';
import Images from './DisplayImages/Images';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  avatar: {
    height: 30,
    width: 30,
    marginRight: 11,
    marginTop: 6,
  },
  usernameDate: {
    fontSize: 11,
    color: '#BECCE2',
    fontWeight: 'bold',
    marginBottom: 5,
    order: -1,
  },

  wrapper: {
    display: 'flex',
    flexDirection: 'column',
  },

  bubble: {
    backgroundImage: 'linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)',
    borderRadius: '0 10px 10px 10px',
    width: 'max-content',
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: -0.2,
    padding: 8,
  },

}));

const OtherUserBubble = ({ text, time, otherUser, attachments }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Avatar
        alt={otherUser.username}
        src={otherUser.photoUrl}
        className={classes.avatar}
      />
      <Box className={classes.wrapper}>
        <Typography className={classes.usernameDate}>
          {otherUser.username} {time}
        </Typography>
        {(text.length > 0) && <Box className={classes.bubble}>
          <Typography className={classes.text}>{text}</Typography>
        </Box>}
        {
          attachments && <Images 
            attachments={attachments}
            roundBottom={attachments.length===1 && text.length > 0 }
            isSender={false}
          />
        }
      </Box>
    </Box>
  );
};

export default OtherUserBubble;
