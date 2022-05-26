import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
 Box,
 Typography,
 Menu,
 MenuItem,
 Fade
} from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import AddUserPopup from './AddUserDialog/AddUserPopup';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 89,
    marginBottom: 34,
    boxShadow: '0 2px 20px 0 rgba(88,133,196,0.10)',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 24,
  },
  username: {
    fontSize: 20,
    letterSpacing: -0.29,
    fontWeight: 'bold',
    marginRight: 14,
  },
  statusText: {
    fontSize: 12,
    color: '#BFC9DB',
    letterSpacing: -0.17,
  },
  statusDot: {
    height: 8,
    width: 8,
    borderRadius: '50%',
    marginRight: 5,
    backgroundColor: '#D0DAE9',
  },
  online: {
    background: '#1CED84',
  },
  ellipsis: {
    color: '#95A7C4',
    marginRight: 24,
    opacity: 0.5,
    cursor: 'pointer'
  },
}));

const Header = ({ username, online, conversationId }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false)
  const menuOpen = Boolean(anchorEl);
  
  const classes = useStyles();

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const menuOptionOpen = () => {
    setPopupOpen(true);
    setAnchorEl(null);
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.content}>
        <Typography className={classes.username}>{username}</Typography>
        <Box className={`${classes.statusDot} ${online && classes.online}`} />
        <Typography className={classes.statusText}>
          {online ? 'Online' : 'Offline'}
        </Typography>
      </Box>
      <MoreHorizIcon 
        onClick={openMenu}
        className={classes.ellipsis}
      />
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={menuOpen}
        onClose={closeMenu}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={menuOptionOpen}>Add User to Conversation</MenuItem>
      </Menu>
      <AddUserPopup
        open={popupOpen}
        setOpen={setPopupOpen}
        conversationId={conversationId}
      />
    </Box>
  );
};

export default Header;
