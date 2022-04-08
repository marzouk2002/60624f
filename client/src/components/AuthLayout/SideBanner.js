import React from 'react';
import {
  makeStyles,
  Typography,
  Box,
} from '@material-ui/core';
import bgImage from '../../assets/images/bg-img.png';
import chatSvg from '../../assets/svgs/chat.svg';

const useStyles = makeStyles(theme => ({
  container: {
    boxSizing: 'border-box',
    position: 'relative',
    height: '100%',
    width: '100%',
    minHeight: '30vh',
    display: 'grid',
    placeItems: 'center',
    color: theme.palette.primary.contrastText,
    
    '&::before': {
      content: '""',
      position: 'absolute',
      zIndex: -2,
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'top',
      backgroundRepeat: 'no-repeat',
    },

    '&::after': {
      content: '""',
      position: 'absolute',
      zIndex: -1,
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
      opacity: 0.85,
    }
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    [theme.breakpoints.up('xs')]: {
      marginTop: 0
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: '-100px'
    },
    
  },

  text : {
    fontFamily: theme.typography.fontFamily,
    fontSize: '26px',
    lineHeight: '40px',
    textAlign: 'center',
    marginTop: '4vmin',
  }
}));

const SideBanner = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.content}>
        <img src={chatSvg} width={67} alt='chat'/>
        <Typography className={classes.text}>Converse with anyone<br/> with any language</Typography>
      </Box>
    </Box>
  )
};

export default SideBanner;